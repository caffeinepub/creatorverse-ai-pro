import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

interface SEOCheckerProps {
  topic: string;
}

export default function SEOChecker({ topic }: SEOCheckerProps) {
  const [seoResult, setSeoResult] = useState('');

  const checkSEO = () => {
    if (!topic.trim()) {
      setSeoResult('Please enter a topic in the Title Generator first!');
      return;
    }

    let score = topic.length * 5;
    if (score > 100) score = 100;

    const result = `SEO Score: ${score}/100

Tip: Use long-tail keyword + emotional word.

${score >= 80 ? '✅ Great! Your topic has strong SEO potential.' : score >= 50 ? '⚠️ Good, but could be improved with more specific keywords.' : '❌ Consider adding more descriptive keywords.'}`;

    setSeoResult(result);
  };

  return (
    <Card className="bg-slate-900/50 border-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-400">
          <TrendingUp className="w-5 h-5" />
          SEO Score Checker
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          onClick={checkSEO}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          Check SEO Score
        </Button>
        <Textarea
          value={seoResult}
          readOnly
          placeholder="Your SEO score will appear here..."
          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-[120px] resize-none"
        />
      </CardContent>
    </Card>
  );
}
