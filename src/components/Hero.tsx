
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowRight, Paintbrush } from 'lucide-react';

interface HeroProps {
  setView: (view: 'home' | 'gallery') => void;
}

const Hero = ({ setView }: HeroProps) => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-40 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-200 mb-8 backdrop-blur-md">
            <Paintbrush className="w-4 h-4 text-accent" />
            <span>Pintura interior y conexiones eléctricas</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Renovamos espacios con <span className="text-secondary italic">calidad</span> <br className="hidden md:block" />
          perfectos para habitar
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trabajamos de la mano con corredoras de propiedades para transformar casas y departamentos. Expertos en pintura de interiores y servicios eléctricos integrales.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="group flex items-center justify-center gap-2 bg-secondary hover:bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
          >
            Solicitar Presupuesto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            onClick={() => setView('gallery')}
            className="flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 w-full sm:w-auto"
          >
            Ver Trabajos
          </button>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
