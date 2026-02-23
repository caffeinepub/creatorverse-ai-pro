import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tag } from 'lucide-react';

interface TagsGeneratorProps {
  topic: string;
}

export default function TagsGenerator({ topic }: TagsGeneratorProps) {
  const [generatedTags, setGeneratedTags] = useState('');

  const generateTags = () => {
    if (!topic.trim()) {
      setGeneratedTags('Please enter a topic in the Title Generator first!');
      return;
    }

    const tags = `${topic}, viral, youtube growth, trending video, how to`;
    setGeneratedTags(tags);
  };

  return (
    <Card className="bg-slate-900/50 border-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-400">
          <Tag className="w-5 h-5" />
          Tags Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          onClick={generateTags}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          Generate Tags
        </Button>
        <Textarea
          value={generatedTags}
          readOnly
          placeholder="Your generated tags will appear here..."
          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-[100px] resize-none"
        />
      </CardContent>
    </Card>
  );
}
