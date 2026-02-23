import { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import TitleGenerator from './components/TitleGenerator';
import ScriptGenerator from './components/ScriptGenerator';
import SEOChecker from './components/SEOChecker';
import TagsGenerator from './components/TagsGenerator';
import HashtagGenerator from './components/HashtagGenerator';
import VoiceGenerator from './components/VoiceGenerator';
import ThumbnailGenerator from './components/ThumbnailGenerator';
import { Sparkles } from 'lucide-react';

function App() {
  const [topic, setTopic] = useState('');

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                CreatorVerse AI PRO
              </h1>
              <p className="text-sm text-slate-400">Your YouTube Content Creation Assistant</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-8">
          {/* AI Chat Section */}
          <section>
            <ChatInterface />
          </section>

          {/* Content Generation Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <TitleGenerator topic={topic} setTopic={setTopic} />
              <ScriptGenerator topic={topic} />
              <SEOChecker topic={topic} />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <TagsGenerator topic={topic} />
              <HashtagGenerator topic={topic} />
              <VoiceGenerator />
            </div>
          </div>

          {/* Thumbnail Generator - Full Width */}
          <section>
            <ThumbnailGenerator />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-900/50 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} CreatorVerse AI PRO. All rights reserved.</p>
            <p>
              Built with <span className="text-red-500">♥</span> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'creatorverse-ai'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
