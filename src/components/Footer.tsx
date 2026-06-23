
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  setView: (view: 'home' | 'gallery') => void;
}

const Footer = ({ setView }: FooterProps) => {
  const handleNavClick = (to: string) => {
    if (to === 'gallery') {
      setView('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setView('home');
    setTimeout(() => {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-primary/95 text-slate-300 py-12 border-t border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/pintavolt.png" alt="Pintavolt Logo" className="h-25 w-auto object-contain" />
            </div>
            <p className="text-sm">
              Especialistas en pintura de interiores y conexiones eléctricas. Trabajamos junto a corredoras de propiedades para entregar departamentos y casas impecables.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Quiénes somos', 'Trabajos', 'Contacto'].map((name, idx) => {
                const to = ['hero', 'about', 'gallery', 'contact'][idx];
                return (
                  <li key={to}>
                    <span
                      onClick={() => handleNavClick(to)}
                      className="text-sm hover:text-white cursor-pointer transition-colors"
                    >
                      {name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/pinta__volt/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Pintavolt. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Diseñado con excelencia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
