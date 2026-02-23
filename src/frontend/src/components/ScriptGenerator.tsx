import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

interface ScriptGeneratorProps {
  topic: string;
}

export default function ScriptGenerator({ topic }: ScriptGeneratorProps) {
  const [generatedScript, setGeneratedScript] = useState('');

  const generateScript = () => {
    if (!topic.trim()) {
      setGeneratedScript('Please enter a topic in the Title Generator first!');
      return;
    }

    const script = `🎬 Hook: Stop scrolling! Today we reveal ${topic}

📌 Intro: This will completely change your thinking.

🔥 Main Point 1: Important insight.
🔥 Main Point 2: Powerful tip.
🔥 Main Point 3: Hidden secret.

🚀 Ending: Like, Share & Subscribe for more!`;

    setGeneratedScript(script);
  };

  return (
    <Card className="bg-slate-900/50 border-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-400">
          <FileText className="w-5 h-5" />
          Script Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          onClick={generateScript}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          Generate Script
        </Button>
        <Textarea
          value={generatedScript}
          readOnly
          placeholder="Your generated script will appear here..."
          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-[200px] resize-none font-mono text-sm"
        />
      </CardContent>
    </Card>
  );
}
