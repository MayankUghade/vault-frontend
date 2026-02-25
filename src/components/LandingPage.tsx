import { useState } from 'react';
import { 
  Link as LinkIcon, 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  ArrowRight, 
  Github, 
  Twitter, 
  Instagram,
  PlusCircle,
  Share2,
  Tags,
  Save
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SignUpModal } from './SignUpModal';
import { Navbar } from './Navbar';

export const LandingPage = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  return (
  <div className="min-h-screen font-sans selection:bg-emerald-500/30">
      <Navbar setIsSignUpOpen={setIsSignUpOpen} />

      {/* Hero Section */}
      <main className="pt-32 px-6 max-w-7xl mx-auto">
        <section className="flex flex-col items-center text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-emerald-400 mb-8">
            <Zap className="w-4 h-4" />
            <span>The ultimate link repository</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
            Your digital world,<br />
            <span className="text-emerald-500 italic font-serif">secured</span> in one place.
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
            Vault helps you store, organize, and access links from any platform. 
            From research papers to recipe blogs, keep everything that matters in your private sanctuary.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => setIsSignUpOpen(true)}
              className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-2xl flex items-center gap-2 hover:bg-emerald-400 transition-all hover:scale-105 glow-emerald h-auto border-none"
            >
              Start Your Vault <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe className="w-8 h-8 text-emerald-500" />,
              title: "Cross-Platform",
              desc: "Save links from Twitter, YouTube, Medium, or any website with a single click."
            },
            {
              icon: <Lock className="w-8 h-8 text-emerald-500" />,
              title: "Private & Secure",
              desc: "Your data is encrypted and only accessible by you. No trackers, no ads."
            },
            {
              icon: <Zap className="w-8 h-8 text-emerald-500" />,
              title: "Instant Access",
              desc: "Powerful search and categorization to find what you need in milliseconds."
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl glass hover:border-emerald-500/50 transition-colors group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 w-fit group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* How to Add Content Section */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Adding content is <span className="text-emerald-500 italic font-serif">simple</span></h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Three steps to secure your digital footprint forever.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: <PlusCircle className="w-6 h-6" />,
                title: "Add Content",
                desc: "Click the 'Add Content' button in your dashboard."
              },
              {
                step: "02",
                icon: <LinkIcon className="w-6 h-6" />,
                title: "Paste Link",
                desc: "Paste the URL of the content you want to save."
              },
              {
                step: "03",
                icon: <Tags className="w-6 h-6" />,
                title: "Add Tags",
                desc: "Organize your content with custom tags for easy discovery."
              },
              {
                step: "04",
                icon: <Save className="w-6 h-6" />,
                title: "Save & Boom",
                desc: "Click save and you're done. Your link is safely stored."
              }
            ].map((item, i) => (
              <div key={i} className="relative p-8 glass rounded-3xl">
                <span className="absolute top-4 right-6 text-4xl font-black text-white/5 font-mono">{item.step}</span>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Share Section */}
        <section className="py-24 bg-emerald-500/5 rounded-[40px] px-8 md:px-20 border border-emerald-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 glow-emerald">
                <Share2 className="text-black w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Share your links with the <span className="text-emerald-500 italic font-serif">world</span>.</h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Your Vault isn't just a private sanctuary. You can curate collections and share them with friends, colleagues, or the entire world. Let others see the knowledge you've gathered.
              </p>
              <Button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-emerald-400 transition-all h-auto border-none">
                Explore Public Vaults
              </Button>
            </div>
            <div className="relative w-full max-w-md aspect-square glass rounded-[40px] flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-50" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-xs font-bold overflow-hidden">
                      <img src={`https://picsum.photos/seed/${n}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-1/4 left-1/4 w-12 h-12 border border-white/10 rounded-full animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-white/10 rounded-full animate-pulse delay-75" />
            </div>
          </div>
        </section>

        {/* Visual Teaser */}
        <section className="py-24">
          <div className="relative rounded-[40px] overflow-hidden border border-white/10 aspect-video md:aspect-[21/9] glass">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block p-6 rounded-full bg-emerald-500/20 mb-6 backdrop-blur-md">
                  <LinkIcon className="w-12 h-12 text-emerald-500" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The last link manager<br />you'll ever need.</h2>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-emerald-500/50" />
            <div className="absolute bottom-10 right-10 w-2 h-2 rounded-full bg-emerald-500/50" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Shield className="text-emerald-500 w-6 h-6" />
            <span className="text-xl font-bold tracking-tighter">VAULT</span>
          </div>
          <div className="flex gap-8 text-zinc-500 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="p-2 rounded-full glass hover:text-emerald-500 transition-colors border-none h-10 w-10">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="p-2 rounded-full glass hover:text-emerald-500 transition-colors border-none h-10 w-10">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="p-2 rounded-full glass hover:text-emerald-500 transition-colors border-none h-10 w-10">
              <Instagram className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <p className="text-center text-zinc-600 text-xs mt-12">
          © {new Date().getFullYear()} Vault Inc. All rights reserved.
        </p>
      </footer>

      {/* Sign Up Modal */}
      <SignUpModal 
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
    </div>
  )
}