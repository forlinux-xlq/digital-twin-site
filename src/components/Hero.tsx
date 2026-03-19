import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 gradient-bg text-white overflow-hidden">
      <div className="container px-4 mx-auto flex flex-col items-center md:items-start text-center md:text-left gap-6 md:flex-row md:gap-10">
        <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white/20 shadow-2xl">
          <AvatarImage 
            src="https://miaoda-site-img.cdn.bcebos.com/images/MiaoTu_71d5465f-c6e0-4bb0-9ecc-8653adfb47de.jpg" 
            alt="徐龙强" 
          />
          <AvatarFallback className="bg-primary-glow text-2xl font-bold">徐</AvatarFallback>
        </Avatar>
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">徐龙强</h1>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              工程师
            </Badge>
          </div>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            一个正在学习用 AI 做产品的嵌入式 Linux 工程师
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Open to Work
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Digital Twin Online
            </div>
          </div>
        </div>
      </div>
      
      {/* 装饰性背景元素 */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
