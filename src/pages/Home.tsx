import React from 'react';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import ChatSection from '@/components/ChatSection';
import { Mail, Github, MessageSquare, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <InfoSection />
        <ChatSection />
      </main>
      
      <footer className="bg-primary text-white py-12 border-t border-white/5">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-2xl font-bold gradient-text from-white to-white/70">徐龙强</h2>
            <p className="text-white/60 text-sm">
              嵌入式 Linux 工程师 · AI 产品探索者
            </p>
          </div>
          
          <div className="flex flex-col gap-4 items-center md:items-end">
            <div className="flex gap-6">
              <a href="mailto:contact@xulongqiang.com" className="p-2 rounded-full bg-white/5 hover:bg-accent/20 transition-colors text-white/80 hover:text-white border border-white/10 group" title="邮件联系">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <button 
                className="p-2 rounded-full bg-white/5 hover:bg-accent/20 transition-colors text-white/80 hover:text-white border border-white/10 group" 
                title="微信联系"
                onClick={() => alert('请搜索微信号：徐龙强 (或在此替换为您的微信号)')}
              >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-accent/20 transition-colors text-white/80 hover:text-white border border-white/10 group" title="GitHub">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <MapPin className="w-3 h-3" />
              <span>中国 · 济南</span>
            </div>
          </div>
        </div>
        
        <div className="container px-4 mx-auto mt-12 pt-8 border-t border-white/5 text-center text-white/20 text-[10px] tracking-widest uppercase">
          &copy; 2026 徐龙强 · ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
};

export default Home;
