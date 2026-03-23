import { AI_CONFIG, SYSTEM_PROMPT } from '@/config/aiConfig';

export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export const callAI = async (messages: Message[]): Promise<string> => {
  const apiKey = AI_CONFIG.apiKey;
  
  if (!apiKey) {
    throw new Error('API Key 未配置，请在 .env 文件中设置 VITE_SILICONFLOW_API_KEY');
  }
  
  console.log('开始调用 AI API...');
  console.log('API URL:', `${AI_CONFIG.baseUrl}/chat/completions`);
  console.log('Model:', AI_CONFIG.model);
  
  const requestBody = {
    model: AI_CONFIG.model,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages,
    ],
    max_tokens: AI_CONFIG.maxTokens,
    temperature: 0.7,
  };
  
  console.log('Request body:', JSON.stringify(requestBody, null, 2));
  
  const response = await fetch(`${AI_CONFIG.baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestBody),
  });

  console.log('Response status:', response.status);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('AI API Error:', errorData);
    
    if (response.status === 401) {
      throw new Error('API Key 无效或已过期，请检查配置');
    }
    if (response.status === 402) {
      throw new Error('API 配额不足，请检查账户余额');
    }
    if (response.status === 429) {
      throw new Error('请求过于频繁，请稍后再试');
    }
    
    throw new Error(`API 请求失败: ${response.status} - ${errorData.error?.message || '未知错误'}`);
  }

  const data = await response.json();
  console.log('Response data:', data);
  
  if (!data.choices || !data.choices[0] || !data.choices[0].message) {
    throw new Error('API 返回数据格式错误');
  }

  return data.choices[0].message.content;
};
