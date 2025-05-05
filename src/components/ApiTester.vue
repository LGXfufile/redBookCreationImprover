<template>
  <div class="api-tester">
    <el-card shadow="hover">
      <template #header>
        <div class="card-header">
          <h3>API 连接测试</h3>
          <el-tag :type="connectionStatus.type">{{ connectionStatus.text }}</el-tag>
        </div>
      </template>
      
      <div class="api-config">
        <el-form label-position="top">
          <el-form-item label="API Key">
            <el-input 
              v-model="apiKey" 
              placeholder="输入 DeepSeek API Key，如 sk-xxxx" 
              :type="showApiKey ? 'text' : 'password'"
              clearable
            >
              <template #append>
                <el-button @click="showApiKey = !showApiKey">
                  <el-icon><View v-if="!showApiKey" /><Hide v-else /></el-icon>
                </el-button>
              </template>
            </el-input>
          </el-form-item>
          
          <el-form-item>
            <el-button type="primary" @click="testConnection" :loading="testing" :disabled="!apiKey">
              测试连接
            </el-button>
            <el-button type="success" @click="saveApiKey" :disabled="!apiKey || !isApiKeyValid">
              保存并使用
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      
      <div v-if="testResult.message" class="test-result">
        <el-alert
          :title="testResult.message"
          :type="testResult.success ? 'success' : 'error'"
          :description="testResult.details"
          show-icon
        />
        
        <div class="response-details" v-if="testResult.success">
          <el-descriptions border direction="vertical" :column="1" size="small">
            <el-descriptions-item label="响应时间">
              {{ testResult.responseTime }}秒
            </el-descriptions-item>
            <el-descriptions-item label="API 版本">
              {{ testResult.apiVersion || "未知" }}
            </el-descriptions-item>
            <el-descriptions-item label="模型">
              {{ testResult.model || "deepseek-chat" }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
      
      <div class="api-info">
        <el-collapse>
          <el-collapse-item title="API 使用信息" name="1">
            <p>当前 API 状态: <el-tag size="small" :type="apiKeyValid ? 'success' : 'danger'">{{ apiKeyValid ? '有效' : '无效或未验证' }}</el-tag></p>
            <p>上次错误: <span class="error-message">{{ lastErrorMessage || '无' }}</span></p>
            <p>API 调用次数: {{ apiCallCount }}</p>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { View, Hide } from '@element-plus/icons-vue';
import { testApiConnection, getDebugInfo } from '../api/deepseek';
import { ElMessage } from 'element-plus';

// State variables
const apiKey = ref('');
const showApiKey = ref(false);
const testing = ref(false);
const testResult = ref({
  success: false,
  message: '',
  details: '',
  responseTime: '',
  apiVersion: '',
  model: ''
});
const apiKeyValid = ref(false);
const lastErrorMessage = ref('');
const apiCallCount = ref(0);

// Computed properties
const connectionStatus = computed(() => {
  if (testing.value) {
    return { type: 'info', text: '测试中...' };
  }
  
  if (!testResult.value.message) {
    return { type: 'info', text: '未测试' };
  }
  
  return testResult.value.success 
    ? { type: 'success', text: '连接正常' } 
    : { type: 'danger', text: '连接失败' };
});

// Load existing API key from localStorage if available
onMounted(() => {
  const savedApiKey = localStorage.getItem('deepseek_api_key');
  if (savedApiKey) {
    apiKey.value = savedApiKey;
    // Update debug info
    updateDebugInfo();
  }
});

// Methods
async function testConnection() {
  if (!apiKey.value) {
    ElMessage.warning('请输入 API Key');
    return;
  }
  
  testing.value = true;
  testResult.value = { success: false, message: '', details: '' };
  
  try {
    const result = await testApiConnection(apiKey.value);
    testResult.value = {
      success: result.success,
      message: result.success ? 'API 连接成功' : 'API 连接失败',
      details: result.message,
      responseTime: result.responseTime,
      apiVersion: result.apiVersion,
      model: result.model
    };
    
    apiKeyValid.value = result.success;
    
    // Update debug info after test
    updateDebugInfo();
  } catch (error) {
    testResult.value = {
      success: false,
      message: 'API 测试出错',
      details: error.message || '未知错误'
    };
  } finally {
    testing.value = false;
  }
}

function saveApiKey() {
  if (!apiKey.value) {
    ElMessage.warning('请输入 API Key');
    return;
  }
  
  if (!apiKeyValid.value) {
    ElMessage.warning('请先测试 API Key 有效性');
    return;
  }
  
  // Save to localStorage
  localStorage.setItem('deepseek_api_key', apiKey.value);
  
  // Set as current API key in module
  window.DEEPSEEK_API_KEY = apiKey.value;
  
  ElMessage.success('API Key 已保存并设置为当前使用的密钥');
}

function updateDebugInfo() {
  const debugInfo = getDebugInfo();
  apiKeyValid.value = debugInfo.apiKeyValid;
  lastErrorMessage.value = debugInfo.lastErrorMessage;
  apiCallCount.value = debugInfo.apiCallCount;
}
</script>

<style scoped>
.api-tester {
  margin: 20px 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.api-config {
  margin-bottom: 20px;
}

.test-result {
  margin: 20px 0;
}

.response-details {
  margin-top: 15px;
}

.error-message {
  color: #f56c6c;
  font-size: 0.9em;
}

.api-info {
  margin-top: 20px;
  font-size: 0.9em;
}
</style> 