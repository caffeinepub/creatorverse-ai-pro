import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Bot, User } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const getReply = (text: string): string => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes('title')) {
      return 'Use emotional words + numbers + curiosity gap. Try hooks like "Secret of", "Shocking Truth", or "Ultimate Guide" to grab attention!';
    }

    if (lowerText.includes('viral')) {
      return 'Strong hook in first 3 seconds + fast editing + emotion. Keep viewers engaged from the start and maintain high energy throughout!';
    }

    if (lowerText.includes('script')) {
      return 'Start with problem → build tension → give solution → CTA. Structure is key to keeping viewers watching until the end!';
    }

    if (lowerText.includes('seo')) {
      return 'Keyword in title + description first 2 lines + tags. Optimize for search while keeping it natural and engaging!';
    }

    if (lowerText.includes('hello') || lowerText.includes('hi')) {
      return 'Hello Creator 😎 How can I help you grow on YouTube? Ask me about titles, scripts, SEO, or viral tips!';
    }

    return 'I am CreatorVerse AI. Ask about title, script, SEO, viral tips, or any YouTube growth strategies!';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    const aiReply: Message = { role: 'ai', content: getReply(input) };

    setMessages((prev) => [...prev, userMessage, aiReply]);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className="bg-slate-900/50 border-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-400">
          <Bot className="w-5 h-5" />
          AI Chat Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="h-[220px] rounded-lg bg-slate-950 p-4" ref={scrollRef}>
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-slate-500 text-sm">
              Ask me anything about YouTube content creation...
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'ai' && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-emerald-400" />
                    </div>
                  )}
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === 'user'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-800 text-slate-100'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  {message.role === 'user' && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                      <User className="w-4 h-4 text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything about YouTube..."
            className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
          />
          <Button
            onClick={handleSend}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
