import axios from 'axios';

// 获取API密钥，优先使用环境变量，支持Vercel部署
const API_KEY = 'sk-0f69d5e4890f450d9b958d6ad9e19c7e';
// 修改为正确的 API URL
const API_URL = 'https://api.deepseek.com/v1/chat/completions';

// 强制使用 API，完全禁止使用备用内容
const FORCE_API = true;
const DISABLE_FALLBACK = true;

// 添加全局变量跟踪 API 调用
let isUsingFallback = false;
let lastApiCallTime = null;
let apiCallCount = 0;
let lastErrorMessage = '';

// 打印API配置信息（不包括密钥）
console.log('API配置信息:', {
  apiUrl: API_URL,
  useEnvironmentKey: !!import.meta.env.VITE_DEEPSEEK_API_KEY,
  forceApi: FORCE_API,
  apiKeyConfigured: !!API_KEY && API_KEY.length > 10
});

// 添加一个简单的网络连接测试
const testNetworkConnection = async (timeout = 5000) => {
  try {
    console.log('测试网络连接...');
    // 发送 HEAD 请求到 DeepSeek API 域名，仅检查连接性
    await axios.head('https://api.deepseek.com', { 
      timeout,
      validateStatus: () => true // 接受任何状态码
    });
    console.log('网络连接测试成功');
    return true;
  } catch (error) {
    console.error('网络连接测试失败:', error.message);
    return false;
  }
};

export const generateContent = async (params) => {
  try {
    isUsingFallback = false;
    lastApiCallTime = new Date();
    apiCallCount++;
    lastErrorMessage = '';

    // 记录开始时间
    const startTime = new Date();
    console.log(`[${startTime.toISOString()}] API call #${apiCallCount} - Starting API request`, params);
    
    const { topic, keywords, targetAudience, creator, style, length } = params;

    // 检查必要字段
    if (!topic || topic.trim() === '') {
      throw new Error('主题不能为空');
    }

    // // 在发送主请求前先测试网络连接
    // const hasConnection = await testNetworkConnection();
    // if (!hasConnection) {
    //   throw new Error('网络连接失败: 无法连接到 DeepSeek API 服务器，请检查您的网络连接');
    // }

    const prompt = `
      请根据以下信息，为小红书平台创作一篇原创内容。请确保严格使用提供的关键词和主题，不要添加未提及的概念：
      
      产品/主题：${topic}
      关键词：${keywords}
      目标受众：${targetAudience}
      创作人设：${creator}
      文案风格：${style}
      
      重要要求：
      1. 必须完全以主题"${topic}"为核心，不要偏离主题
      2. 必须全部使用提供的关键词："${keywords}"，不要使用未提供的关键词
      3. 符合小红书平台真实用户的写作风格，不要有明显的AI味道
      4. 适当使用表情符号，但不要过度使用
      5. 避免过于完美的结构和过于专业的用词
      6. 添加一些个人口语化表达，增加真实感
      7. 内容篇幅：${length === '短' ? '短小精悍，约100字' : length === '中等' ? '适中篇幅，约300字' : '详细描述，约500字'}
      8. 分2-3段，语言自然流畅
      
      直接返回文案内容，无需添加任何前言或解释。确保包含所有关键词，避免过于营销化的语言。
    `;

    console.log(`[${new Date().toISOString()}] Sending request to DeepSeek API...`);
    
    // 验证 API_KEY 是否有效
    if (!API_KEY || API_KEY.length < 10) {
      throw new Error('无效的 API 密钥');
    }

    try {
      // 根据 DeepSeek 官方 API 文档调整请求格式
      const response = await axios.post(API_URL, {
        model: 'deepseek-chat',  // 使用 deepseek-chat 模型
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 1000,
        temperature: 0.9,
        top_p: 0.95,
        frequency_penalty: 0.5,
        presence_penalty: 0.5,
        stream: false,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        timeout: 60000, // 增加超时时间到60秒
      });

      // 计算 API 调用耗时
      const endTime = new Date();
      const duration = (endTime - startTime) / 1000;
      console.log(`[${endTime.toISOString()}] API response received after ${duration}s - Status: ${response.status}`);
      
      if (response.data && response.data.choices && response.data.choices.length > 0) {
        const content = response.data.choices[0].message.content.trim();
        console.log(`API returned content of length ${content.length} characters`);
        return content;
      } else {
        console.error('Unexpected API response format:', response.data);
        throw new Error('API返回格式异常');
      }
    } catch (apiError) {
      console.error('API调用错误详情:', apiError);
      if (apiError.response) {
        console.error('API响应内容:', apiError.response.data);
      }
      if (apiError.toJSON) {
        console.error('API错误toJSON:', apiError.toJSON());
      }
      if (apiError.config) {
        console.error('API请求配置:', apiError.config);
      }
      
      // 处理 API 调用特定错误
      if (apiError.code === 'ENOTFOUND' || apiError.code === 'EAI_AGAIN' || 
          (apiError.message && (apiError.message.includes('getaddrinfo') || apiError.message.includes('ERR_NAME_NOT_RESOLVED')))) {
        lastErrorMessage = '网络连接失败: 无法连接到 DeepSeek API 服务器，请检查您的网络连接或 API 域名是否正确';
        throw new Error(lastErrorMessage);
      }
      
      if (apiError.code === 'ECONNREFUSED') {
        lastErrorMessage = '连接被拒绝: 服务器拒绝了连接请求，请稍后再试';
        throw new Error(lastErrorMessage);
      }
      
      if (apiError.code === 'ETIMEDOUT' || apiError.code === 'ESOCKETTIMEDOUT') {
        lastErrorMessage = '连接超时: 请求超时，请检查您的网络连接并稍后重试';
        throw new Error(lastErrorMessage);
      }
      
      if (apiError.response) {
        const statusCode = apiError.response.status;
        const apiErrorMessage = apiError.response.data?.error?.message || '未知错误';
        lastErrorMessage = `API错误 (${statusCode}): ${apiErrorMessage}`;
        throw new Error(lastErrorMessage);
      }
      
      // 重新抛出一个更具体的错误消息
      lastErrorMessage = `API调用失败: ${apiError.message || '未知错误'}`;
      throw new Error(lastErrorMessage);
    }
  } catch (error) {
    const endTime = new Date();
    isUsingFallback = true;
    console.error(`[${endTime.toISOString()}] Error generating content:`, error.response || error.message || error);
    
    // 无论什么情况，直接抛出错误，不使用 fallback 内容
    let errorMessage = '生成失败';
    
    if (error.response) {
      const statusCode = error.response.status;
      const apiErrorMessage = error.response.data?.error?.message || '未知错误';
      errorMessage = `API错误 (${statusCode}): ${apiErrorMessage}`;
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    lastErrorMessage = errorMessage;
    console.error(`禁止使用备用内容，直接抛出错误: ${errorMessage}`);
    throw new Error(errorMessage);
  }
};

// 导出用于调试的变量
export const getDebugInfo = () => {
  return {
    isUsingFallback,
    lastApiCallTime,
    apiCallCount,
    lastErrorMessage
  };
}; 