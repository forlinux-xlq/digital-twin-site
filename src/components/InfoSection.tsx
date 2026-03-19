import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Brain, Sparkles, MessageSquareHeart } from 'lucide-react';

const infoData = [
  {
    title: '当前在做',
    icon: <Cpu className="w-5 h-5 text-accent" />,
    items: ['AI 做视频', 'vibe coding'],
    color: 'bg-blue-50'
  },
  {
    title: '兴趣方向',
    icon: <Sparkles className="w-5 h-5 text-accent" />,
    items: ['AI 应用', '读书', '旅行'],
    color: 'bg-sky-50'
  },
  {
    title: '擅长与关注',
    icon: <Brain className="w-5 h-5 text-accent" />,
    items: ['内容表达', 'AI 应用', '知识整理'],
    color: 'bg-indigo-50'
  },
  {
    title: '个人标签',
    icon: <MessageSquareHeart className="w-5 h-5 text-accent" />,
    items: ['喜欢把复杂问题讲成人话'],
    color: 'bg-cyan-50'
  }
];

const InfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center md:text-left mb-10 text-primary flex items-center gap-2">
          <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
          个人信息
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoData.map((data, index) => (
            <Card key={index} className="border-none shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden group">
              <div className={`h-1 w-full ${data.color.replace('50', '500')}`}></div>
              <CardHeader className="pb-3 pt-6">
                <div className="flex items-center gap-3 mb-1">
                  {data.icon}
                  <CardTitle className="text-lg font-bold text-slate-800">{data.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pb-8">
                <div className="flex flex-wrap gap-2">
                  {data.items.map((item, idx) => (
                    <Badge key={idx} variant="outline" className="px-3 py-1 bg-white text-slate-600 border-slate-200">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
