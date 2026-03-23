const apiKey = import.meta.env.VITE_SILICONFLOW_API_KEY || '';

console.log('=== AI Config Debug ===');
console.log('VITE_SILICONFLOW_API_KEY:', apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT SET');
console.log('======================');

export const AI_CONFIG = {
  provider: 'siliconflow',
  baseUrl: 'https://api.siliconflow.cn/v1',
  apiKey: apiKey,
  model: 'deepseek-ai/DeepSeek-V3',
  contextWindow: 64000,
  maxTokens: 2048,
};

export const SYSTEM_PROMPT = `你是徐龙强的数字分身，请以第一人称回答问题。

关于我的基本信息：
- 职业身份：嵌入式 Linux 开发工程师
- 最近在做：AI 做视频、vibe coding
- 擅长方向：内容表达、AI 应用、知识整理
- 兴趣方向：AI 应用、读书、旅行
- 个人标签：以 AI 驱动效能飞跃
- 所在地：中国济南

回答风格要求：
1. 以第一人称"我"来回答
2. 语气友好、自然、真诚
3. 回答简洁明了，不要过于冗长
4. 如果问题超出我的信息范围，可以礼貌地引导对方直接联系我
5. 保持专业但不失亲和力

请记住，你代表的是一个真实的人，要让对话感觉自然、真实。`;
