import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { callAI, type Message } from '@/services/aiService';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '你好！我是徐龙强的数字分身。你可以问我关于我的职业方向、正在做的项目或者联系方式等问题。' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // 自动滚动到底部
  useEffect(() => {
    const scrollContainer = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput) {
      toast.error('请输入您的问题');
      return;
    }

    // 添加用户消息
    const userMsg: ChatMessage = { role: 'user', content: trimmedInput };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      // 准备发送给 AI 的消息历史
      const aiMessages: Message[] = messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      }));
      aiMessages.push({ role: 'user', content: trimmedInput });

      // 调用 AI 服务
      const botReply = await callAI(aiMessages);
      const botMsg: ChatMessage = { role: 'assistant', content: botReply };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error('AI 调用失败:', error);
      toast.error('抱歉，我暂时无法回答。请稍后再试或直接联系我。');
      
      // 添加错误提示消息
      const errorMsg: ChatMessage = { 
        role: 'assistant', 
        content: '抱歉，我现在遇到了一些技术问题。你可以通过页面底部的联系方式直接找到我！' 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isTyping) {
      handleSend();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 min-h-[600px] flex items-center">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="text-center md:text-left flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-primary flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              问问我 / 与数字分身对话
            </h2>
            <p className="text-slate-500">
              你可以询问我关于职业方向、目前项目和如何联系我的详细信息。
            </p>
          </div>

          <Card className="border-none shadow-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-primary text-white p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-white/20">
                  <Bot className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-base font-bold">徐龙强 (数字分身)</CardTitle>
                  <p className="text-xs text-white/60">当前在线</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[400px] p-6" ref={scrollAreaRef}>
                <div className="flex flex-col gap-6">
                  {messages.map((msg, index) => (
                    <div 
                      key={index} 
                      className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                    >
                      <Avatar className="w-8 h-8 shrink-0">
                        {msg.role === 'user' ? (
                          <>
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-slate-200 text-slate-500">
                              <User className="w-4 h-4" />
                            </AvatarFallback>
                          </>
                        ) : (
                          <>
                            <AvatarImage src="https://miaoda-site-img.cdn.bcebos.com/images/MiaoTu_71d5465f-c6e0-4bb0-9ecc-8653adfb47de.jpg" />
                            <AvatarFallback className="bg-primary text-white">徐</AvatarFallback>
                          </>
                        )}
                      </Avatar>
                      <div 
                        className={`rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm ${
                          msg.role === 'user' 
                          ? 'bg-primary text-white rounded-tr-none' 
                          : 'bg-slate-100 text-slate-800 rounded-tl-none'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-3 mr-auto items-center">
                      <Avatar className="w-8 h-8 shrink-0">
                        <AvatarImage src="https://miaoda-site-img.cdn.bcebos.com/images/MiaoTu_71d5465f-c6e0-4bb0-9ecc-8653adfb47de.jpg" />
                        <AvatarFallback className="bg-primary text-white">徐</AvatarFallback>
                      </Avatar>
                      <div className="bg-slate-100 text-slate-400 rounded-2xl rounded-tl-none px-4 py-2 text-sm italic flex items-center gap-2">
                        正在思考
                        <Loader2 className="w-3 h-3 animate-spin" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              
              <div className="p-4 border-t bg-slate-50/50 flex gap-3">
                <Input 
                  placeholder="请输入您的问题..." 
                  className="flex-1 border-slate-200 bg-white"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isTyping}
                />
                <Button 
                  className="bg-primary hover:bg-primary-glow text-white" 
                  size="icon"
                  onClick={handleSend}
                  disabled={isTyping}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
