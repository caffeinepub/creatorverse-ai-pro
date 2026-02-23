import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hash } from 'lucide-react';

interface HashtagGeneratorProps {
  topic: string;
}

export default function HashtagGenerator({ topic }: HashtagGeneratorProps) {
  const [generatedHashtags, setGeneratedHashtags] = useState('');

  const generateHashtags = () => {
    if (!topic.trim()) {
      setGeneratedHashtags('Please enter a topic in the Title Generator first!');
      return;
    }

    const hashtag = '#' + topic.replace(/\s/g, '') + ' #viral #youtube #creator';
    setGeneratedHashtags(hashtag);
  };

  return (
    <Card className="bg-slate-900/50 border-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-400">
          <Hash className="w-5 h-5" />
          Hashtag Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          onClick={generateHashtags}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          Generate Hashtags
        </Button>
        <Textarea
          value={generatedHashtags}
          readOnly
          placeholder="Your generated hashtags will appear here..."
          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-[100px] resize-none"
        />
      </CardContent>
    </Card>
  );
}
