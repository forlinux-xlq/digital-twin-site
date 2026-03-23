import React from 'react';
import { Cpu, Sparkles, Brain, MessageSquareHeart, Laptop } from 'lucide-react';

const infoData = [
  {
    title: '当前在做',
    icon: <Cpu className="w-5 h-5" />,
    items: ['AI 视频', 'vibe coding'],
  },
  {
    title: '兴趣方向',
    icon: <Sparkles className="w-5 h-5" />,
    items: ['AI 应用', '读书', '旅行'],
  },
  {
    title: '擅长领域',
    icon: <Brain className="w-5 h-5" />,
    items: ['内容表达', 'AI 应用', '知识整理'],
  },
  {
    title: '个人标签',
    icon: <MessageSquareHeart className="w-5 h-5" />,
    items: ['以 AI 驱动效能飞跃'],
  },
];

const InfoSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50 scroll-mt-16">
      <div className="container px-6 mx-auto max-w-5xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-0.5 bg-cyan-500 rounded-full"></div>
            <h2 className="text-xl font-semibold text-slate-800">关于我</h2>
          </div>
          <p className="text-slate-500 text-sm ml-11">了解更多关于我的信息</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {infoData.map((data, index) => (
            <div 
              key={index} 
              className="group p-5 bg-white rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
                  {data.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-slate-400 mb-2">{data.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.items.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 text-sm text-slate-700 bg-slate-50 rounded-md border border-slate-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-5 bg-white rounded-xl border border-slate-100">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
              <Laptop className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-slate-400 mb-2">技术能力</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                熟练掌握 QNX、Linux、OpenHarmony 等系统，熟悉各种主流 AI 工具。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
