import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function ThumbnailGenerator() {
  const [thumbnailText, setThumbnailText] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateThumbnail = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill background with yellow
    ctx.fillStyle = '#facc15';
    ctx.fillRect(0, 0, 400, 250);

    // Draw text
    ctx.fillStyle = 'black';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Word wrap for long text
    const words = thumbnailText.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    words.forEach((word) => {
      const testLine = currentLine + (currentLine ? ' ' : '') + word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > 360 && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });
    if (currentLine) lines.push(currentLine);

    // Draw lines centered
    const lineHeight = 35;
    const startY = 125 - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((line, index) => {
      ctx.fillText(line, 200, startY + index * lineHeight);
    });
  };

  useEffect(() => {
    // Initialize canvas with default background
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#facc15';
    ctx.fillRect(0, 0, 400, 250);
  }, []);

  return (
    <Card className="bg-slate-900/50 border-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-400">
          <Image className="w-5 h-5" />
          Thumbnail Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={thumbnailText}
            onChange={(e) => setThumbnailText(e.target.value)}
            placeholder="Enter thumbnail text..."
            className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
          />
          <Button
            onClick={generateThumbnail}
            className="bg-emerald-600 hover:bg-emerald-700 text-white whitespace-nowrap"
          >
            Generate
          </Button>
        </div>

        <div className="flex justify-center">
          <canvas
            ref={canvasRef}
            width={400}
            height={250}
            className="rounded-lg shadow-lg border border-slate-700"
          />
        </div>
      </CardContent>
    </Card>
  );
}
