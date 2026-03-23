export interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
}

export const PRESET_QA = [
  {
    keywords: ['做什么', '在做什么', '近况', '工作', '最近'],
    answer: '我最近在做 AI 视频创作和 vibe coding，探索用 AI 辅助产品开发。',
  },
  {
    keywords: ['作品', '项目', '案例', '做过'],
    answer: '目前作品持续更新中，欢迎关注我或直接联系我了解最新进展。',
  },
  {
    keywords: ['联系', '微信', '电话', '邮箱', '怎么找', '联系方式'],
    answer: '可以通过页面底部的联系方式找到我，或者发邮件到 contact@xulongqiang.com。',
  },
  {
    keywords: ['你是谁', '介绍', '自我介绍', '名字'],
    answer: '我是徐龙强，一名嵌入式 Linux 开发工程师，目前正在探索 AI 产品开发。',
  },
  {
    keywords: ['擅长', '技能', '会什么', '技术'],
    answer: '我擅长嵌入式 Linux 开发，同时也在学习 AI 应用、内容表达和知识整理。',
  },
];

export const FALLBACK_REPLY = '这个问题很有意思，欢迎直接联系我深聊！';

export const getBotReply = (userInput: string): string => {
  const input = userInput.trim();
  
  for (const item of PRESET_QA) {
    if (item.keywords.some(keyword => input.includes(keyword))) {
      return item.answer;
    }
  }

  return FALLBACK_REPLY;
};
