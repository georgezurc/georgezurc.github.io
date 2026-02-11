import { useEffect, useRef } from 'react';
import { Music, Play, ExternalLink, Instagram } from 'lucide-react';

function App() {
  const starsRef = useRef<HTMLDivElement>(null);
  const spaceSceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate random stars
    if (starsRef.current) {
      for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.className = 'absolute rounded-full bg-white';
        const size = Math.random() * 2.5 + 0.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${Math.random() * 4 + 5}s infinite`;
        star.style.animationDelay = `${Math.random() * 8}s`;
        starsRef.current.appendChild(star);
      }
    }

    // Generate floating dust particles
    if (spaceSceneRef.current) {
      for (let i = 0; i < 30; i++) {
        const dust = document.createElement('div');
        dust.className = 'absolute w-0.5 h-0.5 rounded-full';
        dust.style.background = Math.random() > 0.5 ? 'rgba(0, 229, 255, 0.5)' : 'rgba(255, 77, 166, 0.4)';
        dust.style.left = `${Math.random() * 100}%`;
        dust.style.top = `${Math.random() * 100}%`;
        dust.style.animation = `float ${Math.random() * 10 + 20}s infinite linear`;
        dust.style.animationDelay = `${Math.random() * 20}s`;
        spaceSceneRef.current.appendChild(dust);
      }
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050508] text-white overflow-x-hidden">
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Space Background */}
      <div ref={spaceSceneRef} className="fixed inset-0 z-0 overflow-hidden">
        {/* Brighter Cyan/Pink Nebula */}
        <div 
          className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 blur-[80px]"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(0, 229, 255, 0.35) 0%, transparent 45%),
              radial-gradient(circle at 80% 20%, rgba(255, 77, 166, 0.3) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 55%),
              radial-gradient(circle at 70% 70%, rgba(0, 229, 255, 0.2) 0%, transparent 50%)
            `,
            animation: 'nebulaMove 60s ease-in-out infinite'
          }}
        />
        
        {/* Planet with brighter glow */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full -bottom-[400px] -right-[200px] z-[-1]"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #1a1a3e 0%, #0a0a18 60%, #000000 100%)',
            boxShadow: `
              inset -80px -80px 150px rgba(0,0,0,0.95),
              0 0 200px rgba(0, 229, 255, 0.3),
              0 0 400px rgba(255, 77, 166, 0.15)
            `,
            animation: 'planetFloat 20s ease-in-out infinite'
          }}
        >
          <div 
            className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] rounded-full"
            style={{
              background: 'linear-gradient(45deg, transparent 40%, rgba(0, 229, 255, 0.15) 50%, transparent 60%)',
              animation: 'planetGlow 8s ease-in-out infinite'
            }}
          />
        </div>

        {/* Meteors with brighter cyan/pink */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #fff 0%, transparent 70%)',
              boxShadow: i % 2 === 0 
                ? '0 0 20px 3px rgba(0, 229, 255, 0.8)' 
                : '0 0 20px 3px rgba(255, 77, 166, 0.7)',
              animation: `shoot ${10 + i * 2}s linear infinite`,
              animationDelay: `${i * 3}s`,
              opacity: 0,
              top: `${5 + i * 5}%`,
              right: `${5 + i * 10}%`
            }}
          >
            <div 
              className="absolute top-1/2 -translate-y-1/2 right-0 w-[150px] h-[1px]"
              style={{
                background: i % 2 === 0 
                  ? 'linear-gradient(90deg, rgba(0, 229, 255, 0.8) 0%, transparent 100%)'
                  : 'linear-gradient(90deg, rgba(255, 77, 166, 0.7) 0%, transparent 100%)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Stars Layer */}
      <div ref={starsRef} className="fixed inset-0 z-[-1] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center glass border-b border-cyan-400/20">
        <div className="text-2xl font-bold tracking-widest uppercase gradient-text">
          George Cruz
        </div>
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <button 
              onClick={() => scrollToSection('music')}
              className="text-sm tracking-wider opacity-70 hover:opacity-100 transition-all hover:text-cyan-400"
            >
              Music
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('albums')}
              className="text-sm tracking-wider opacity-70 hover:opacity-100 transition-all hover:text-cyan-400"
            >
              Albums
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm tracking-wider opacity-70 hover:opacity-100 transition-all hover:text-cyan-400"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="max-w-3xl text-center animate-[fadeInUp_1s_ease-out] relative z-10">
          {/* Album Badge */}
          <div 
            className="inline-block px-6 py-2 rounded-full text-xs tracking-[3px] uppercase mb-8 border backdrop-blur-md"
            style={{
              background: 'rgba(0, 229, 255, 0.08)',
              borderColor: 'rgba(0, 229, 255, 0.4)',
              animation: 'pulse-glow 4s infinite'
            }}
          >
            New Release
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-4 gradient-text-cyan">
            NEW ALBUM
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-12 font-light tracking-wide" style={{ color: '#00e5ff' }}>
            The Latest Album
          </p>

          {/* Album Art with brighter cyan/pink glow */}
          <div 
            className="w-[280px] h-[280px] md:w-[300px] md:h-[300px] mx-auto mb-12 rounded-xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, #1a1a3e 0%, #000000 70%),
                linear-gradient(135deg, rgba(0, 229, 255, 0.3) 0%, transparent 50%)
              `,
              boxShadow: `
                0 20px 60px rgba(0,0,0,0.8),
                0 0 120px rgba(0, 229, 255, 0.35),
                0 0 200px rgba(255, 77, 166, 0.15),
                inset 0 0 60px rgba(0,0,0,0.5)
              `,
              border: '1px solid rgba(0, 229, 255, 0.3)'
            }}
          >
            <div 
              className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(0, 229, 255, 0.15) 50%, transparent 70%)',
                animation: 'shimmer 6s infinite'
              }}
            />
            <span className="text-xs tracking-wider opacity-50 z-10" style={{ color: '#00e5ff' }}>[Your Album Art Here]</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="#" 
              className="px-8 py-4 rounded-full font-semibold text-sm tracking-wider transition-all hover:-translate-y-0.5 flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #00e5ff 0%, #00b8d4 100%)',
                color: '#000',
                boxShadow: '0 0 40px rgba(0, 229, 255, 0.5)'
              }}
            >
              <Play size={18} fill="currentColor" />
              Listen Now
            </a>
            <a 
              href="#" 
              className="px-8 py-4 rounded-full text-sm tracking-wider transition-all hover:-translate-y-0.5 border backdrop-blur-md flex items-center gap-2"
              style={{
                background: 'rgba(255, 77, 166, 0.08)',
                borderColor: 'rgba(255, 77, 166, 0.4)',
                color: '#fff',
                boxShadow: '0 0 30px rgba(255, 77, 166, 0.15)'
              }}
            >
              <ExternalLink size={18} />
              Watch Trailer
            </a>
          </div>
        </div>
      </section>

      {/* Streaming Section */}
      <section id="music" className="py-24 px-4 text-center glass border-y border-cyan-400/20">
        <div className="text-sm tracking-[3px] uppercase opacity-60 mb-8" style={{ color: '#00e5ff' }}>
          Available On
        </div>
        <div className="flex gap-6 justify-center flex-wrap">
          <a 
            href="https://open.spotify.com/artist/6cUJnJ8LMxAobgNFsQuEeu?si=0EdW28T3QyauzEyJNpOeBA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border transition-all hover:-translate-y-1 flex items-center gap-3 backdrop-blur-md group"
            style={{
              background: 'rgba(0, 229, 255, 0.08)',
              borderColor: 'rgba(0, 229, 255, 0.3)'
            }}
          >
            <Music size={20} className="text-cyan-400 group-hover:text-pink-400 transition-colors" />
            <span>Spotify</span>
          </a>
          <a 
            href="https://music.apple.com/gb/artist/george-cruz/981288016"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border transition-all hover:-translate-y-1 flex items-center gap-3 backdrop-blur-md group"
            style={{
              background: 'rgba(0, 229, 255, 0.08)',
              borderColor: 'rgba(0, 229, 255, 0.3)'
            }}
          >
            <Music size={20} className="text-cyan-400 group-hover:text-pink-400 transition-colors" />
            <span>Apple Music</span>
          </a>
          <a 
            href="https://soundcloud.com/g-cruz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border transition-all hover:-translate-y-1 flex items-center gap-3 backdrop-blur-md group"
            style={{
              background: 'rgba(0, 229, 255, 0.08)',
              borderColor: 'rgba(0, 229, 255, 0.3)'
            }}
          >
            <Music size={20} className="text-cyan-400 group-hover:text-pink-400 transition-colors" />
            <span>SoundCloud</span>
          </a>
        </div>
      </section>

      {/* Discography Section */}
      <section id="albums" className="py-24 px-4 max-w-5xl mx-auto relative">
        <h2 className="text-center text-3xl md:text-4xl mb-12 font-light tracking-wider opacity-90" style={{ color: '#00e5ff' }}>
          Discography
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Feverfields - Blue to Orange */}
          <a 
            href="https://open.spotify.com/album/6JER4RzlCbHEwYT4cuPtdH"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div 
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 border backdrop-blur-md album-card-feverfields"
            >
              <div className="text-sm opacity-60 mb-2 tracking-wider" style={{ color: '#fb923c' }}>2023</div>
              <div className="text-2xl mb-4 font-semibold tracking-wide">Feverfields</div>
              <p className="text-sm opacity-70 leading-relaxed">
                Atmospheric textures and ambient soundscapes exploring emotional landscapes.
              </p>
            </div>
          </a>

          {/* Meteors - Green and Black */}
          <a 
            href="https://open.spotify.com/album/1g2f2g3LXUapIMAt3VX5xt"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div 
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 border backdrop-blur-md album-card-meteors"
            >
              <div className="text-sm opacity-60 mb-2 tracking-wider" style={{ color: '#22c55e' }}>2022</div>
              <div className="text-2xl mb-4 font-semibold tracking-wide" style={{ color: '#22c55e', textShadow: '0 0 15px rgba(34, 197, 94, 0.4)' }}>
                Meteors
              </div>
              <p className="text-sm opacity-70 leading-relaxed">
                Debut instrumental album featuring cosmic themes and ethereal melodies.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-4 text-center glass border-t border-cyan-400/20">
        <div className="flex gap-8 justify-center mb-8">
          <a 
            href="https://www.instagram.com/cruzzlightyear/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-all flex items-center gap-2"
            style={{ color: '#ff4da6' }}
          >
            <Instagram size={20} />
            <span className="text-sm tracking-wider">Instagram</span>
          </a>
        </div>
        <div className="text-xs opacity-40">
          © 2024 George Cruz. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
