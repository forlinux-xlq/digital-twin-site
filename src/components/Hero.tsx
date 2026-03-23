import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center px-6">
        
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl scale-125"></div>
          <Avatar className="relative w-24 h-24 md:w-32 md:h-32 border-2 border-white/10 shadow-2xl ring-4 ring-cyan-500/20">
            <AvatarImage 
              src="/images/xlq.jpg" 
              alt="徐龙强" 
            />
            <AvatarFallback className="bg-slate-700 text-2xl font-medium">徐</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            徐龙强
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10">
            专注于AI产品开发
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-5 mt-2">
          <a 
            href="#chat" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-medium rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            <MessageCircle className="w-5 h-5" />
            <span>与数字分身对话</span>
          </a>
          
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
              Open to Work
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              济南，中国
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-slate-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default Hero;
