import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, User, Loader2 } from 'lucide-react';
import { callAI, type Message } from '@/services/aiService';
import { getBotReply } from '@/data/chatData';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '你好！我是徐龙强的数字分身，有什么想了解的可以问我。' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput) return;

    const userMsg: ChatMessage = { role: 'user', content: trimmedInput };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    let botReply: string;
    
    try {
      const aiMessages: Message[] = messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      }));
      aiMessages.push({ role: 'user', content: trimmedInput });
      botReply = await callAI(aiMessages);
    } catch (error) {
      console.error('AI 调用失败，使用本地匹配:', error);
      botReply = getBotReply(trimmedInput);
    }

    const botMsg: ChatMessage = { role: 'assistant', content: botReply };
    setMessages(prev => [...prev, botMsg]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isTyping) {
      handleSend();
    }
  };

  return (
    <section id="chat" className="py-16 md:py-20 bg-white scroll-mt-16">
      <div className="container px-6 mx-auto max-w-3xl">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-0.5 bg-cyan-500 rounded-full"></div>
            <h2 className="text-xl font-semibold text-slate-800">数字分身</h2>
          </div>
          <p className="text-slate-500 text-sm ml-11">与我的 AI 分身对话，了解更多关于我的信息</p>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 bg-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-9 h-9">
                  <AvatarImage src="/images/xlq.jpg" />
                  <AvatarFallback className="bg-slate-200 text-slate-600 text-sm">徐</AvatarFallback>
                </Avatar>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">徐龙强 (AI)</p>
                <p className="text-xs text-slate-400">在线</p>
              </div>
            </div>
          </div>

          <ScrollArea className="h-[360px] p-5" ref={scrollAreaRef}>
            <div className="flex flex-col gap-4">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                >
                  {msg.role === 'assistant' && (
                    <Avatar className="w-7 h-7 shrink-0">
                      <AvatarImage src="/images/xlq.jpg" />
                      <AvatarFallback className="bg-slate-200 text-slate-500 text-xs">徐</AvatarFallback>
                    </Avatar>
                  )}
                  <div 
                    className={`rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-slate-800 text-white rounded-tr-md' 
                        : 'bg-white text-slate-700 rounded-tl-md border border-slate-100'
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-7 h-7 shrink-0 rounded-full bg-slate-200 flex items-center justify-center">
                      <User className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 mr-auto items-center">
                  <Avatar className="w-7 h-7 shrink-0">
                    <AvatarImage src="https://miaoda-site-img.cdn.bcebos.com/images/MiaoTu_71d5465f-c6e0-4bb0-9ecc-8653adfb47de.jpg" />
                    <AvatarFallback className="bg-slate-200 text-slate-500 text-xs">徐</AvatarFallback>
                  </Avatar>
                  <div className="bg-white text-slate-400 rounded-xl rounded-tl-md px-4 py-2.5 text-sm border border-slate-100 flex items-center gap-2">
                    正在思考
                    <Loader2 className="w-3 h-3 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t border-slate-100 bg-white flex gap-3">
            <Input 
              placeholder="输入你的问题..." 
              className="flex-1 border-slate-200 bg-slate-50 focus:bg-white text-sm"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isTyping}
            />
            <Button 
              className="bg-slate-800 hover:bg-slate-700 text-white px-4" 
              onClick={handleSend}
              disabled={isTyping || !inputValue.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
