<template>
  <section id="generator-section" class="section generator-section">
    <div class="container">
      <div class="generator-container">
        <div class="input-section card">
          <h3 class="input-section-title">
            <span class="input-icon">📝</span>
            {{ $t('generator.inputSection') }}
            <el-switch
              v-model="showDebug"
              class="debug-switch"
              active-text="调试模式"
              title="显示API调用情况"
              @change="toggleDebug"
              size="small"
            />
          </h3>
          
          <div class="form-group">
            <label for="topic">{{ $t('generator.topic') }}</label>
            <el-input 
              v-model="formData.topic" 
              :placeholder="$t('generator.placeholders.topic')"
              id="topic"
            />
          </div>
          
          <div class="form-group">
            <label for="keywords">{{ $t('generator.keywords') }}</label>
            <el-input 
              v-model="formData.keywords" 
              :placeholder="$t('generator.placeholders.keywords')"
              id="keywords"
            />
          </div>
          
          <div class="form-group">
            <label for="targetAudience">{{ $t('generator.targetAudience') }}</label>
            <el-select v-model="formData.targetAudience" class="select-full-width" id="targetAudience">
              <el-option value="女性用户" label="女性用户" />
              <el-option value="男性用户" label="男性用户" />
              <el-option value="年轻人" label="年轻人" />
              <el-option value="中年人" label="中年人" />
              <el-option value="学生党" label="学生党" />
              <el-option value="上班族" label="上班族" />
              <el-option value="亲子家庭" label="亲子家庭" />
              <el-option value="95后" label="95后" />
              <el-option value="00后" label="00后" />
              <el-option value="新手妈妈" label="新手妈妈" />
              <el-option value="职场新人" label="职场新人" />
              <el-option value="资深职场人" label="资深职场人" />
              <el-option value="都市白领" label="都市白领" />
              <el-option value="小镇青年" label="小镇青年" />
              <el-option value="大学生" label="大学生" />
              <el-option value="时尚达人" label="时尚达人" />
              <el-option value="精致生活追求者" label="精致生活追求者" />
              <el-option value="养生爱好者" label="养生爱好者" />
              <el-option value="美妆爱好者" label="美妆爱好者" />
              <el-option value="数码发烧友" label="数码发烧友" />
            </el-select>
          </div>
          
          <div class="form-group">
            <label for="creator">{{ $t('generator.creator') }}</label>
            <el-select v-model="formData.creator" class="select-full-width" id="creator">
              <el-option value="大学老师省特等奖获得者" label="大学老师省特等奖获得者" />
              <el-option value="辣妈生活家" label="辣妈生活家" />
              <el-option value="职场达人" label="职场达人" />
              <el-option value="美妆博主" label="美妆博主" />
              <el-option value="数码测评师" label="数码测评师" />
              <el-option value="美食探店家" label="美食探店家" />
              <el-option value="旅行体验官" label="旅行体验官" />
              <el-option value="健身教练" label="健身教练" />
              <el-option value="时尚穿搭达人" label="时尚穿搭达人" />
              <el-option value="育儿专家" label="育儿专家" />
              <el-option value="设计师" label="设计师" />
              <el-option value="程序员" label="程序员" />
              <el-option value="金融分析师" label="金融分析师" />
              <el-option value="生活方式博主" label="生活方式博主" />
              <el-option value="心理咨询师" label="心理咨询师" />
              <el-option value="学习型KOL" label="学习型KOL" />
              <el-option value="宠物博主" label="宠物博主" />
              <el-option value="居家改造达人" label="居家改造达人" />
              <el-option value="手工艺术家" label="手工艺术家" />
              <el-option value="阅读分享者" label="阅读分享者" />
              <el-option value="投资理财达人" label="投资理财达人" />
              <el-option value="小红书新人" label="小红书新人" />
              <el-option value="影视剧评论家" label="影视剧评论家" />
              <el-option value="潮玩收藏家" label="潮玩收藏家" />
            </el-select>
          </div>
          
          <div class="form-group">
            <label for="style">{{ $t('generator.style') }}</label>
            <el-select v-model="formData.style" class="select-full-width" id="style">
              <el-option value="情感共鸣" label="情感共鸣" />
              <el-option value="专业测评" label="专业测评" />
              <el-option value="日常分享" label="日常分享" />
              <el-option value="深度种草" label="深度种草" />
              <el-option value="轻松幽默" label="轻松幽默" />
              <el-option value="干货攻略" label="干货攻略" />
              <el-option value="小确幸" label="小确幸" />
              <el-option value="真实记录" label="真实记录" />
              <el-option value="故事叙述" label="故事叙述" />
              <el-option value="问题解答" label="问题解答" />
              <el-option value="对比评测" label="对比评测" />
              <el-option value="温馨治愈" label="温馨治愈" />
              <el-option value="励志正能量" label="励志正能量" />
              <el-option value="热门话题" label="热门话题" />
              <el-option value="新奇体验" label="新奇体验" />
              <el-option value="吐槽反馈" label="吐槽反馈" />
              <el-option value="经验之谈" label="经验之谈" />
            </el-select>
          </div>
          
          <div class="form-group">
            <label for="length">{{ $t('generator.length') }}</label>
            <el-select v-model="formData.length" class="select-full-width" id="length">
              <el-option value="短" label="短" />
              <el-option value="中等" label="中等" />
              <el-option value="长" label="长" />
            </el-select>
          </div>
          
          <div class="form-buttons">
            <el-button type="primary" class="generate-btn" :loading="loading" @click="handleGenerateContent">
              <span class="star">⭐</span>
              {{ $t('generator.generate') }}
              <span class="star">⭐</span>
            </el-button>
            
            <el-button class="reset-btn" @click="resetForm" :disabled="loading">
              重置
            </el-button>
          </div>
        </div>
        
        <div class="result-section card">
          <h3 class="result-section-title">
            <span class="result-icon">🎉</span>
            {{ $t('generator.resultSection') }}
          </h3>
          
          <div class="result-content" v-if="result">
            <div class="result-text" v-html="formattedResult"></div>
            <div class="debug-info" v-if="debugInfo.responseTime > 0 && showDebug">
              <small>
                API调用信息: 
                {{ debugInfo.isUsingFallback ? '使用本地备用' : 'API调用成功' }} | 
                响应时间: {{ debugInfo.responseTime }}秒 | 
                调用次数: {{ debugInfo.callCount }}
                <div v-if="debugInfo.lastErrorMessage" class="debug-error">
                  最后错误: {{ debugInfo.lastErrorMessage }}
                </div>
              </small>
            </div>
            <div class="btn-group">
              <el-button type="success" class="copy-btn" @click="copyContent">
                {{ copied ? '已复制' : '复制文案' }}
              </el-button>
              <el-button type="primary" class="regen-btn" @click="handleGenerateContent">
                重新生成
              </el-button>
            </div>
          </div>
          
          <div v-else class="empty-result">
            <p v-if="loading">
              <el-icon class="thinking-icon"><Loading /></el-icon>
              正在调用 DeepSeek API 生成内容，请稍候...
            </p>
            <div v-else-if="errorMessage" class="error-message-container">
              <p class="error-message">
                <el-icon><WarningFilled /></el-icon>
                {{ errorMessage }}
              </p>
              
              <div class="error-actions" v-if="isNetworkError">
                <p class="error-tip">网络错误可能是由于:</p>
                <ul class="error-tips-list">
                  <li>网络连接不稳定或DNS解析问题</li>
                  <li>API密钥无效或已过期</li>
                  <li>DeepSeek API 服务器暂时不可用</li>
                  <li>您的网络可能无法访问 DeepSeek API (需要使用代理)</li>
                </ul>
                
                <div class="error-buttons">
                  <el-button type="primary" @click="handleGenerateContent" class="retry-btn">
                    重试 API 调用
                  </el-button>
                  
                  <el-button @click="clearError" class="clear-error-btn">
                    清除错误
                  </el-button>
                </div>
              </div>
            </div>
            <p v-else>在左侧填写信息，点击生成按钮获取小红书文案</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { generateContent, getDebugInfo } from '../api/deepseek';
import { Loading, WarningFilled } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

export default defineComponent({
  name: 'GeneratorSection',
  components: {
    Loading,
    WarningFilled
  },
  setup() {
    const formData = ref({
      topic: '',
      keywords: '',
      targetAudience: '学生党',
      creator: '大学老师省特等奖获得者',
      style: '情感共鸣',
      length: '中等'
    });
    
    const result = ref('');
    const loading = ref(false);
    const copied = ref(false);
    const errorMessage = ref('');
    const debugInfo = ref({
      isUsingFallback: false,
      responseTime: 0,
      callCount: 0,
      lastErrorMessage: ''
    });
    
    const formattedResult = computed(() => {
      if (!result.value) return '';
      return result.value.replace(/\n/g, '<br>');
    });
    
    const showDebug = ref(false);
    const isNetworkError = ref(false);
    
    const toggleDebug = (value) => {
      showDebug.value = value;
      if (value) {
        ElMessage.info('已开启调试模式，将显示API调用信息');
      }
    };
    
    const clearError = () => {
      errorMessage.value = '';
      isNetworkError.value = false;
    };
    
    const handleGenerateContent = async () => {
      // 清除之前的错误
      clearError();
      
      // 每次点击生成按钮时先清空结果区域
      result.value = '';
      
      // 基本表单验证
      if (!formData.value.topic || formData.value.topic.trim() === '') {
        ElMessage.warning('请输入主题/产品名称');
        return;
      }
      
      // 记录开始时间
      const startTime = new Date();
      
      try {
        loading.value = true;
        ElMessage.info('正在调用 DeepSeek API 生成内容，请稍候...');
        
        // 调用API生成内容
        const content = await generateContent(formData.value);
        result.value = content;
        
        // 获取并更新调试信息
        const apiDebugInfo = getDebugInfo();
        debugInfo.value = {
          isUsingFallback: apiDebugInfo.isUsingFallback,
          responseTime: ((new Date() - startTime) / 1000).toFixed(2),
          callCount: apiDebugInfo.apiCallCount,
          lastErrorMessage: apiDebugInfo.lastErrorMessage
        };
        
        // 显示API调用状态
        if (apiDebugInfo.isUsingFallback) {
          ElMessage.warning('使用了本地备用内容（API调用失败）');
        } else {
          ElMessage.success(`API调用成功，耗时: ${debugInfo.value.responseTime}秒`);
        }
      } catch (error) {
        console.error('Error generating content:', error);
        errorMessage.value = error.message || '生成文案失败，请稍后重试';
        
        // 检查是否是网络错误
        isNetworkError.value = 
          error.message.includes('网络连接失败') || 
          error.message.includes('连接超时') || 
          error.message.includes('连接被拒绝') ||
          error.message.includes('ERR_NAME_NOT_RESOLVED');
          
        ElMessage.error(errorMessage.value);
        result.value = ''; // 清空结果
        
        // 获取并更新调试信息
        const apiDebugInfo = getDebugInfo();
        debugInfo.value = {
          isUsingFallback: true,
          responseTime: ((new Date() - startTime) / 1000).toFixed(2),
          callCount: apiDebugInfo.apiCallCount,
          lastErrorMessage: apiDebugInfo.lastErrorMessage || error.message
        };
      } finally {
        loading.value = false;
      }
    };
    
    const retryWithFallback = () => {
      // 这个函数不再需要，因为我们完全禁用了备用内容功能
      ElMessage.warning('无法使用备用模式，将重试API调用');
      handleGenerateContent();
    };
    
    const copyContent = () => {
      if (!result.value) return;
      
      navigator.clipboard.writeText(result.value)
        .then(() => {
          copied.value = true;
          ElMessage.success('已复制到剪贴板');
          setTimeout(() => {
            copied.value = false;
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy content: ', err);
          ElMessage.error('复制失败，请手动复制');
        });
    };
    
    const resetForm = () => {
      formData.value = {
        topic: '',
        keywords: '',
        targetAudience: '女性用户',
        creator: '辣妈生活家',
        style: '情感共鸣',
        length: '中等'
      };
      result.value = '';
      copied.value = false;
      errorMessage.value = '';
      isNetworkError.value = false;
    };
    
    return {
      formData,
      result,
      loading,
      copied,
      errorMessage,
      debugInfo,
      formattedResult,
      handleGenerateContent,
      copyContent,
      resetForm,
      showDebug,
      toggleDebug,
      isNetworkError,
      retryWithFallback,
      clearError
    };
  }
});
</script>

<style scoped>
.generator-section {
  padding-top: var(--spacing-xxl);
  padding-bottom: var(--spacing-xxl);
}

.generator-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.input-section, .result-section {
  padding: var(--spacing-lg);
}

.input-section-title, .result-section-title {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: var(--spacing-lg);
  color: var(--secondary-color);
}

.input-icon, .result-icon {
  margin-right: var(--spacing-sm);
  font-size: 1.6rem;
}

.form-group {
  margin-bottom: var(--spacing-md);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
  color: var(--secondary-color);
}

.select-full-width {
  width: 100%;
}

.form-buttons {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.generate-btn {
  flex: 1;
  padding: var(--spacing-md);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
}

.reset-btn {
  width: 80px;
}

.star {
  margin: 0 var(--spacing-xs);
}

.result-content {
  background-color: var(--background-light);
  border-radius: var(--radius);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.result-text {
  white-space: pre-wrap;
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
}

.copy-btn, .regen-btn {
  width: 48%;
}

.btn-group {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-sm);
}

.thinking-icon {
  animation: rotate 2s linear infinite;
  margin-right: 8px;
  font-size: 20px;
}

.error-message-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.error-message {
  color: var(--primary-color);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.error-tip {
  font-size: 14px;
  margin-bottom: 8px;
  color: #666;
}

.error-tips-list {
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
  text-align: left;
  padding-left: 20px;
}

.error-actions {
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-buttons {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: 16px;
  width: 100%;
}

.retry-btn, .clear-error-btn {
  min-width: 120px;
}

.empty-result {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  color: var(--text-light);
  text-align: center;
  padding: var(--spacing-lg);
  background-color: var(--background-light);
  border-radius: var(--radius);
}

.empty-result p {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.debug-info {
  margin: 8px 0;
  color: #999;
  font-size: 12px;
  text-align: right;
}

.debug-switch {
  margin-left: auto;
  font-size: 12px;
}

.debug-error {
  color: #f56c6c;
  margin-top: 4px;
}

@media (max-width: 992px) {
  .generator-container {
    grid-template-columns: 1fr;
  }
}
</style>