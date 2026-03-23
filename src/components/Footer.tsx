import React from 'react';
import { Mail, Github, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 bg-slate-50">
      <div className="max-w-2xl mx-auto px-6">
        
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a 
              href="mailto:contact@xulongqiang.com" 
              className="text-slate-400 hover:text-slate-600 transition-colors"
              title="邮件联系"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button 
              className="text-slate-400 hover:text-slate-600 transition-colors"
              title="微信联系"
              onClick={() => alert('请搜索微信号：徐龙强')}
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-slate-600 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-xs text-slate-400">
            济南，中国
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
