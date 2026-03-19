import { AI_CONFIG, SYSTEM_PROMPT } from '@/config/aiConfig';

export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export const callAI = async (messages: Message[]): Promise<string> => {
  try {
    const response = await fetch(`${AI_CONFIG.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_CONFIG.apiKey}`,
        'HTTP-Referer': window.location.origin,
        'X-Title': '徐龙强个人主页',
      },
      body: JSON.stringify({
        model: AI_CONFIG.model,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('AI API Error:', errorData);
      throw new Error(`API 请求失败: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('API 返回数据格式错误');
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error('调用 AI 服务失败:', error);
    throw error;
  }
};
