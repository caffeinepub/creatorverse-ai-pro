import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Volume2 } from 'lucide-react';

export default function VoiceGenerator() {
  const [voiceText, setVoiceText] = useState('');
  const [voiceStyle, setVoiceStyle] = useState('normal');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = () => {
    if (!voiceText.trim()) return;

    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(voiceText);

    // Apply voice style settings
    switch (voiceStyle) {
      case 'deep':
        speech.rate = 0.9;
        speech.pitch = 0.7;
        break;
      case 'soft':
        speech.rate = 1;
        speech.pitch = 1.4;
        break;
      case 'robot':
        speech.rate = 1.1;
        speech.pitch = 0.5;
        break;
      case 'fast':
        speech.rate = 1.6;
        speech.pitch = 1;
        break;
      default:
        speech.rate = 1;
        speech.pitch = 1;
    }

    speech.onstart = () => setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);
    speech.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(speech);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <Card className="bg-slate-900/50 border-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-400">
          <Volume2 className="w-5 h-5" />
          AI Voice Generator (5 Styles)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Select value={voiceStyle} onValueChange={setVoiceStyle}>
          <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
            <SelectValue placeholder="Select voice style" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-700 text-white">
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="deep">Deep</SelectItem>
            <SelectItem value="soft">Soft</SelectItem>
            <SelectItem value="robot">Robot</SelectItem>
            <SelectItem value="fast">Fast Viral</SelectItem>
          </SelectContent>
        </Select>

        <Textarea
          value={voiceText}
          onChange={(e) => setVoiceText(e.target.value)}
          placeholder="Enter text for voice generation..."
          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-[100px] resize-none"
        />

        <div className="flex gap-2">
          <Button
            onClick={speak}
            disabled={isSpeaking || !voiceText.trim()}
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-50"
          >
            {isSpeaking ? 'Speaking...' : 'Speak'}
          </Button>
          {isSpeaking && (
            <Button
              onClick={stopSpeaking}
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-800"
            >
              Stop
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
