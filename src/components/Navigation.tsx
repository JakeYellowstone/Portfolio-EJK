import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'projects', label: 'Projets' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Parcours' },
  //{ id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

// 🔥 Nouveaux liens externes
const externalLinks = [
  { label: 'Blog Technique', url: 'https://sciahub.eilor.ci/' },
  { label: 'Blog Personnel', url: 'https://sciablog.eilor.ci/' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D1220]/95 backdrop-blur-lg cyber-border border-t-0 border-l-0 border-r-0'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 🔥 LOGO PERSONNEL */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <img
              src="https://ik.imagekit.io/johnsetsama/AssetsPerso/logo.png?updatedAt=1748115918422"
              alt="Logo de Kouamé Esdras Jonathan"
              className="w-9 h-9 object-contain group-hover:opacity-80 transition-all"
            />
            <span className="text-xl font-bold glow-cyan">KEJ</span>
          </button>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                  activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
                )}
              </button>
            ))}

            {/* 🔥 Liens externes */}
            {externalLinks.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-sm font-medium text-gray-300 hover:text-purple-400 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#0D1220]/98 backdrop-blur-lg cyber-border border-l-0 border-r-0 border-b-0">
          <div className="px-4 py-6 space-y-4">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* 🔥 Liens externes mobile */}
            {externalLinks.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-4 py-2 rounded text-gray-300 hover:text-purple-400 hover:bg-purple-400/5 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
