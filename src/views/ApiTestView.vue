<template>
  <div class="api-test-view">
    <div class="container">
      <h1 class="page-title">DeepSeek API 测试页面</h1>
      
      <el-alert 
        title="API 配置信息" 
        type="info" 
        :closable="false" 
        description="此页面用于测试和配置 DeepSeek API 连接，包括 API 密钥验证、连接测试和简单内容生成测试。"
        show-icon
        class="page-info"
      />
      
      <div class="cards-container">
        <!-- API 连接测试卡片 -->
        <ApiTester class="card-item" />
        
        <!-- API 系统信息卡片 -->
        <el-card class="card-item system-info-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <h3>API 系统信息</h3>
              <el-button @click="refreshSystemInfo" size="small" type="primary" plain>
                刷新数据
              </el-button>
            </div>
          </template>
          
          <div class="system-info">
            <el-descriptions title="基本配置" :column="1" border>
              <el-descriptions-item label="Base URL">{{ BASE_URL }}</el-descriptions-item>
              <el-descriptions-item label="API版本">
                <el-tag size="small">{{ apiVersion || 'V3 (默认)' }}</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="使用的模型">
                <el-tag type="success" size="small">{{ model || 'deepseek-chat' }}</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="API密钥状态">
                <el-tag :type="apiKeyStatus.type" size="small">{{ apiKeyStatus.text }}</el-tag>
              </el-descriptions-item>
            </el-descriptions>
            
            <el-descriptions title="使用统计" :column="1" border style="margin-top: 15px;">
              <el-descriptions-item label="API 调用计数">{{ callCount || 0 }}</el-descriptions-item>
              <el-descriptions-item label="最后响应时间">{{ responseTime ? `${responseTime}秒` : '未调用' }}</el-descriptions-item>
              <el-descriptions-item label="使用备用内容">
                <el-tag :type="isUsingFallback ? 'warning' : 'success'" size="small">
                  {{ isUsingFallback ? '是' : '否' }}
                </el-tag>
              </el-descriptions-item>
            </el-descriptions>
            
            <el-collapse style="margin-top: 15px;">
              <el-collapse-item title="最后错误信息" name="1">
                <div class="error-message" v-if="lastErrorMessage">
                  {{ lastErrorMessage }}
                </div>
                <div v-else>
                  无错误信息
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-card>
        
        <!-- 快速内容生成测试 -->
        <el-card class="card-item test-generation-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <h3>快速内容生成测试</h3>
            </div>
          </template>
          
          <div class="test-generation">
            <el-form label-position="top">
              <el-form-item label="测试主题">
                <el-input v-model="testTopic" placeholder="输入一个测试主题，如：旅行" clearable />
              </el-form-item>
              
              <el-form-item label="测试关键词">
                <el-input v-model="testKeywords" placeholder="输入测试关键词，用逗号分隔" clearable />
              </el-form-item>
              
              <el-form-item>
                <el-button type="primary" @click="runTest" :loading="testing" :disabled="!testTopic">
                  测试内容生成
                </el-button>
                <el-button @click="clearTestResult">清空结果</el-button>
              </el-form-item>
            </el-form>
            
            <div v-if="testResult" class="test-result">
              <h4>生成结果：</h4>
              <el-alert
                :title="testSuccess ? '内容生成成功' : '内容生成失败'"
                :type="testSuccess ? 'success' : 'error'"
                :closable="false"
                show-icon
              >
                <template v-if="testSuccess" #default>
                  <p>响应时间: {{ testResponseTime }}秒</p>
                  <p>使用备用内容: {{ testUsingFallback ? '是' : '否' }}</p>
                </template>
                <template v-else #default>
                  <p>{{ testErrorMessage }}</p>
                </template>
              </el-alert>
              
              <div v-if="testSuccess" class="content-result">
                <p class="content-preview">{{ previewContent }}</p>
                <el-button type="primary" @click="copyTestContent" size="small">
                  {{ testCopied ? '已复制' : '复制内容' }}
                </el-button>
                <el-button @click="showFullContent = !showFullContent" size="small">
                  {{ showFullContent ? '收起全文' : '查看全文' }}
                </el-button>
                
                <el-dialog
                  v-model="showFullContent"
                  title="生成的内容"
                  width="70%"
                  destroy-on-close
                >
                  <div class="full-content">{{ testResultContent }}</div>
                  <template #footer>
                    <span class="dialog-footer">
                      <el-button type="primary" @click="copyTestContent">
                        复制内容
                      </el-button>
                      <el-button @click="showFullContent = false">关闭</el-button>
                    </span>
                  </template>
                </el-dialog>
              </div>
            </div>
          </div>
        </el-card>
      </div>
      
      <div class="api-documentation">
        <el-divider content-position="left">DeepSeek API 文档参考</el-divider>
        
        <el-descriptions title="API 基本信息" :column="2" border>
          <el-descriptions-item label="Base URL">https://api.deepseek.com</el-descriptions-item>
          <el-descriptions-item label="API 文档">
            <a href="https://api-docs.deepseek.com/zh-cn/" target="_blank">DeepSeek API 文档</a>
          </el-descriptions-item>
          <el-descriptions-item label="主要模型">deepseek-chat (DeepSeek-V3)</el-descriptions-item>
          <el-descriptions-item label="推理模型">deepseek-reasoner (DeepSeek-R1)</el-descriptions-item>
        </el-descriptions>
        
        <div class="api-example">
          <el-collapse>
            <el-collapse-item title="API 调用示例" name="1">
              <pre><code>const response = await fetch("https://api.deepseek.com/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
  },
  body: JSON.stringify({
    model: "deepseek-chat",
    messages: [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello!"}
    ],
    temperature: 0.7,
    max_tokens: 2048
  })
});</code></pre>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import ApiTester from '../components/ApiTester.vue';
import { generateContent, getDebugInfo } from '../api/deepseek';

// 系统信息
const BASE_URL = 'https://api.deepseek.com';
const apiVersion = ref('');
const model = ref('');
const isUsingFallback = ref(false);
const responseTime = ref('');
const callCount = ref(0);
const lastErrorMessage = ref('');

const apiKeyStatus = computed(() => {
  const debugInfo = getDebugInfo();
  if (debugInfo.apiKeyValid === null) {
    return { type: 'info', text: '未验证' };
  }
  return debugInfo.apiKeyValid 
    ? { type: 'success', text: '有效' } 
    : { type: 'danger', text: '无效' };
});

// 刷新系统信息
const refreshSystemInfo = () => {
  const debugInfo = getDebugInfo();
  isUsingFallback.value = debugInfo.isUsingFallback;
  responseTime.value = debugInfo.responseTime;
  callCount.value = debugInfo.callCount;
  lastErrorMessage.value = debugInfo.lastErrorMessage;
  
  ElMessage.success('系统信息已刷新');
};

// 测试内容生成
const testTopic = ref('');
const testKeywords = ref('');
const testing = ref(false);
const testResult = ref(false);
const testSuccess = ref(false);
const testResponseTime = ref('');
const testUsingFallback = ref(false);
const testErrorMessage = ref('');
const testResultContent = ref('');
const testCopied = ref(false);
const showFullContent = ref(false);

const previewContent = computed(() => {
  if (!testResultContent.value) return '';
  return testResultContent.value.length > 100
    ? testResultContent.value.substring(0, 100) + '...'
    : testResultContent.value;
});

const runTest = async () => {
  if (!testTopic.value) {
    ElMessage.warning('请输入测试主题');
    return;
  }
  
  testing.value = true;
  testResult.value = false;
  testSuccess.value = false;
  testErrorMessage.value = '';
  testResultContent.value = '';
  
  try {
    const content = await generateContent({
      topic: testTopic.value,
      keywords: testKeywords.value,
      length: 'short'
    });
    
    const debugInfo = getDebugInfo();
    
    testSuccess.value = true;
    testResultContent.value = content;
    testResponseTime.value = debugInfo.responseTime;
    testUsingFallback.value = debugInfo.isUsingFallback;
    
    // 更新系统信息
    refreshSystemInfo();
  } catch (error) {
    testSuccess.value = false;
    testErrorMessage.value = error.message;
    
    const debugInfo = getDebugInfo();
    refreshSystemInfo();
  } finally {
    testing.value = false;
    testResult.value = true;
  }
};

const clearTestResult = () => {
  testResult.value = false;
  testSuccess.value = false;
  testErrorMessage.value = '';
  testResultContent.value = '';
  testTopic.value = '';
  testKeywords.value = '';
};

const copyTestContent = () => {
  navigator.clipboard.writeText(testResultContent.value)
    .then(() => {
      testCopied.value = true;
      ElMessage.success('内容已复制到剪贴板');
      setTimeout(() => {
        testCopied.value = false;
      }, 2000);
    })
    .catch(() => {
      ElMessage.error('复制失败，请手动复制');
    });
};

// 初始化
onMounted(() => {
  refreshSystemInfo();
});
</script>

<style scoped>
.api-test-view {
  padding: 40px 0;
}

.page-title {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 20px;
  text-align: center;
}

.page-info {
  margin-bottom: 30px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.card-item {
  min-height: 300px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.system-info {
  font-size: 0.9em;
}

.error-message {
  color: #f56c6c;
  font-size: 0.9em;
  word-break: break-word;
}

.test-generation {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.test-result {
  margin-top: 20px;
  border-top: 1px solid #ebeef5;
  padding-top: 20px;
}

.content-result {
  margin-top: 15px;
  padding: 15px;
  background-color: #f5f7fa;
  border-radius: 4px;
}

.content-preview {
  white-space: pre-wrap;
  margin-bottom: 15px;
  line-height: 1.5;
  color: #606266;
}

.full-content {
  white-space: pre-wrap;
  line-height: 1.6;
  max-height: 60vh;
  overflow-y: auto;
  padding: 10px;
  background-color: #f5f7fa;
  border-radius: 4px;
}

.api-documentation {
  margin-top: 30px;
}

.api-example {
  margin-top: 20px;
}

pre {
  background-color: #f5f7fa;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
  
  .api-test-view {
    padding: 20px 0;
  }
}
</style> 