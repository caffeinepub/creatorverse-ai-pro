import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

interface TitleGeneratorProps {
  topic: string;
  setTopic: (topic: string) => void;
}

export default function TitleGenerator({ topic, setTopic }: TitleGeneratorProps) {
  const [generatedTitle, setGeneratedTitle] = useState('');

  const hooks = [
    '🔥 Secret of ',
    '😱 Shocking Truth About ',
    'Top 5 ',
    'Ultimate Guide to ',
    'You Must Know ',
  ];

  const generateTitle = () => {
    if (!topic.trim()) {
      setGeneratedTitle('Please enter a topic first!');
      return;
    }

    const randomHook = hooks[Math.floor(Math.random() * hooks.length)];
    setGeneratedTitle(randomHook + topic);
  };

  return (
    <Card className="bg-slate-900/50 border-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-400">
          <Sparkles className="w-5 h-5" />
          Title Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter your video topic..."
          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
        />
        <Button
          onClick={generateTitle}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          Generate Title
        </Button>
        <Textarea
          value={generatedTitle}
          readOnly
          placeholder="Your generated title will appear here..."
          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-[80px] resize-none"
        />
      </CardContent>
    </Card>
  );
}
