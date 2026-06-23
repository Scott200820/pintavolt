import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  view: 'home' | 'gallery';
  setView: (view: 'home' | 'gallery') => void;
  setGalleryCategory: (category: string) => void;
}

const Navbar = ({ view, setView, setGalleryCategory }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', to: 'hero' },
    { name: 'Quiénes somos', to: 'about' },
    { name: 'Galería', to: 'gallery' },
    { name: 'Contacto', to: 'contact' },
  ];

  const categories = [
    { name: 'Pintura', value: 'Pintura' },
    { name: 'Electricidad', value: 'Electricidad' },
    { name: 'Limpieza de Alfombra', value: 'Limpieza de Alfombra' },
    { name: 'Agua Purificada', value: 'Agua Purificada' },
  ];

  const handleNavClick = (to: string) => {
    if (to === 'gallery') {
      setGalleryCategory('Todos');
      setView('gallery');
      setIsOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (view === 'gallery') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleCategoryClick = (category: string) => {
    setGalleryCategory(category);
    setView('gallery');
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-primary/80 backdrop-blur-md border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            onClick={() => {
              setView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <img src="/pintavolt.png" alt="Pintavolt Logo" className="h-25 w-auto object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.to === 'gallery') {
                return (
                  <div key={link.to} className="relative group py-2">
                    <span
                      onClick={() => handleNavClick('gallery')}
                      className="flex items-center gap-1 text-slate-300 hover:text-secondary font-medium cursor-pointer transition-colors"
                    >
                      Galería
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    </span>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="glass-card rounded-xl p-2 shadow-2xl border border-white/5 bg-primary/95 backdrop-blur-md">
                        {categories.map((cat) => (
                          <span
                            key={cat.value}
                            onClick={() => handleCategoryClick(cat.value)}
                            className="block px-4 py-2.5 text-sm text-slate-300 hover:text-secondary hover:bg-white/5 rounded-lg cursor-pointer transition-all duration-200"
                          >
                            {cat.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <span
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="text-slate-300 hover:text-secondary font-medium cursor-pointer transition-colors"
                >
                  {link.name}
                </span>
              );
            })}
            <span
              onClick={() => handleNavClick('contact')}
              className="bg-secondary hover:bg-accent text-primary px-5 py-2 rounded-md font-bold transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:scale-105"
            >
              Presupuesto
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-secondary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-lg border-t border-white/5 shadow-2xl absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              if (link.to === 'gallery') {
                return (
                  <div key={link.to} className="space-y-1">
                    <span
                      onClick={() => handleNavClick('gallery')}
                      className="block px-3 py-2 text-base font-semibold text-slate-200 hover:text-secondary hover:bg-white/5 rounded-md cursor-pointer transition-all duration-200"
                    >
                      Galería
                    </span>
                    {/* Subcategories */}
                    <div className="pl-4 border-l border-white/10 space-y-1">
                      {categories.map((cat) => (
                        <span
                          key={cat.value}
                          onClick={() => handleCategoryClick(cat.value)}
                          className="block px-3 py-2 text-sm text-slate-300 hover:text-secondary hover:bg-white/5 rounded-md cursor-pointer transition-all duration-200"
                        >
                          {cat.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <span
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-secondary hover:bg-white/5 rounded-md cursor-pointer transition-all duration-200"
                >
                  {link.name}
                </span>
              );
            })}
            <div className="pt-2">
              <span
                onClick={() => handleNavClick('contact')}
                className="block w-full text-center bg-secondary hover:bg-accent text-primary px-3 py-3 rounded-md font-bold cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Presupuesto
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
