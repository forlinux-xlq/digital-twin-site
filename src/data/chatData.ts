export interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
}

export const PRESET_QA = [
  {
    questions: ['你现在在做什么？', '在做什么', '近况', '工作内容'],
    answer: '我最近在做 AI 视频创作和 vibe coding，探索用 AI 辅助产品开发。',
  },
  {
    questions: ['你有哪些作品？', '作品', '项目', '案例'],
    answer: '目前作品持续更新中，欢迎关注我或直接联系我了解最新进展。',
  },
  {
    questions: ['怎么联系你？', '联系方式', '微信', '电话', '邮箱', '联系我'],
    answer: '可以通过页面底部的联系方式找到我。',
  },
];

export const FALLBACK_REPLY = '这个问题很有意思，欢迎直接联系我深聊！';

export const getBotReply = (userInput: string): string => {
  const input = userInput.trim().toLowerCase();
  
  // 1. 精确匹配
  for (const item of PRESET_QA) {
    if (item.questions.some(q => q === input)) {
      return item.answer;
    }
  }

  // 2. 关键词模糊匹配
  for (const item of PRESET_QA) {
    if (item.questions.some(q => input.includes(q.toLowerCase()))) {
      return item.answer;
    }
  }

  return FALLBACK_REPLY;
};
