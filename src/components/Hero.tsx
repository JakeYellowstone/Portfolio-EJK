import { useEffect, useRef } from 'react';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useIsMobile } from '../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isMobile) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
      });
    }

    let animationFrameId: number;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(0, 230, 255, 0.1)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.fillStyle = 'rgba(0, 230, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  useEffect(() => {
    if (prefersReducedMotion || !heroRef.current || !contentRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
      },
    });

    tl.to(contentRef.current, {
      y: 100,
      opacity: 0.3,
      scale: 0.95,
      ease: 'power2.out',
    });

    if (canvasRef.current && !isMobile) {
      tl.to(
        canvasRef.current,
        {
          opacity: 0.1,
          scale: 1.1,
          ease: 'power2.out',
        },
        0
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [prefersReducedMotion, isMobile]);

  useEffect(() => {
    if (prefersReducedMotion || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current.children,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.2,
      }
    );
  }, [prefersReducedMotion]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {!isMobile && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-40"
          style={{ willChange: 'transform, opacity' }}
        />
      )}

      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-magenta-500/10 animate-pulse" />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F1C]/50 to-[#0A0F1C]" />

      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="inline-block px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5 mb-6">
          <span className="text-cyan-400 text-sm font-medium">
            Cybersécurité • GRC • Intelligence Artificielle
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="block text-white">Je suis</span>
          <span className="block glow-cyan glitch mt-2">KOUAMÉ ESDRAS JONATHAN</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
          Je m'investis dans la cybersécurité, la GRC, l’IA et la création de solutions qui allient intelligence, stratégie et sécurité. J’aime transformer le complexe en clair, et bâtir des systèmes robustes que l’on peut vraiment comprendre, piloter et améliorer.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Voir mes projets
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 cyber-border bg-transparent text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Me contacter
          </button>

          <a
            href="/cv.pdf"
            download
            className="px-8 py-4 border border-purple-500/50 bg-purple-500/10 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Télécharger CV
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 animate-bounce hover:scale-110 transition-transform"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
