
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ArrowLeft, Play } from 'lucide-react';

interface GalleryProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  setView: (view: 'home' | 'gallery') => void;
}

const Gallery = ({ activeCategory, setActiveCategory, setView }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['Todos', 'Pintura', 'Electricidad', 'Limpieza de Alfombra', 'Agua Purificada'];

  const works = [
    // Pintura
    { id: 1, title: 'Renovación y Pintura Interior', category: 'Pintura', image: '/gallery/Pintura/1FFE3BCC-BFFE-430F-AF75-9487F26D0E44.jpg' },
    { id: 2, title: 'Terminaciones Finas en Muros', category: 'Pintura', image: '/gallery/Pintura/44478A35-44F4-404D-8F86-58A09EC9CE9D.jpg' },
    { id: 3, title: 'Pintura de Interiores Profesional', category: 'Pintura', image: '/gallery/Pintura/47F6BA89-AC91-4C4B-B08D-1FBBE5F07F2D.jpg' },
    { id: 4, title: 'Preparación de Superficies', category: 'Pintura', image: '/gallery/Pintura/913007B5-573E-4DF0-87B4-5C6D048D053A.jpg' },
    { id: 5, title: 'Proyecto de Pintura Completo', category: 'Pintura', image: '/gallery/Pintura/CollageMaker_20200313_204919517.jpg' },
    { id: 6, title: 'Detalles y Acabados de Calidad', category: 'Pintura', image: '/gallery/Pintura/CollageMaker_20200318_225637245.jpg' },
    { id: 7, title: 'Renovación de Muros y Cielos', category: 'Pintura', image: '/gallery/Pintura/D6F60A31-A771-4328-9DB6-CE22B7DA1090.jpg' },
    { id: 8, title: 'Pintura y Detalles Finos', category: 'Pintura', image: '/gallery/Pintura/Captura%20de%20pantalla%202026-06-23%20140626.png' },
    { id: 9, title: 'Acabado en Muros Interiores', category: 'Pintura', image: '/gallery/Pintura/Captura%20de%20pantalla%202026-06-23%20140700.png' },
    { id: 10, title: 'Renovación de Habitaciones', category: 'Pintura', image: '/gallery/Pintura/Captura%20de%20pantalla%202026-06-23%20140718.png' },
    { id: 11, title: 'Preparación y Empastado', category: 'Pintura', image: '/gallery/Pintura/Captura%20de%20pantalla%202026-06-23%20140748.png' },
    { id: 12, title: 'Pintado de Puertas y Marcos', category: 'Pintura', image: '/gallery/Pintura/Captura%20de%20pantalla%202026-06-23%20140803.png' },
    { id: 13, title: 'Pintura Satinada de Interiores', category: 'Pintura', image: '/gallery/Pintura/Captura%20de%20pantalla%202026-06-23%20140819.png' },
    { id: 14, title: 'Terminación de Alta Calidad', category: 'Pintura', image: '/gallery/Pintura/Captura%20de%20pantalla%202026-06-23%20140835.png' },
    { id: 15, title: 'Proyecto Residencial Pintura', category: 'Pintura', image: '/gallery/Pintura/Captura%20de%20pantalla%202026-06-23%20140849.png' },

    // Electricidad (Using previous assets since the folder is empty)
    { id: 16, title: 'Cableado y Tablero Nuevo', category: 'Electricidad', image: '/gallery/electrical_work.png' },
    { id: 17, title: 'Iluminación LED Decorativa', category: 'Electricidad', image: '/gallery/led_lighting.png' },
    { id: 18, title: 'Instalaciones y Conexiones', category: 'Electricidad', image: '/gallery/fixing_switch.png' },

    // Limpieza de Alfombra
    { id: 19, title: 'Limpieza de Alfombra en Domicilio', category: 'Limpieza de Alfombra', image: '/gallery/Limpieza%20de%20alfombra/20200503_153453.jpg' },
    { id: 20, title: 'Lavado y Extracción Profunda', category: 'Limpieza de Alfombra', image: '/gallery/Limpieza%20de%20alfombra/20200609-221919.jpg' },
    { id: 21, title: 'Eliminación de Manchas Difíciles', category: 'Limpieza de Alfombra', image: '/gallery/Limpieza%20de%20alfombra/20200623-140935.jpg' },
    { id: 22, title: 'Secado y Sanitizado de Fibras', category: 'Limpieza de Alfombra', image: '/gallery/Limpieza%20de%20alfombra/20200623-141125.jpg' },
    { id: 23, title: 'Limpieza Profesional de Tapices', category: 'Limpieza de Alfombra', image: '/gallery/Limpieza%20de%20alfombra/20200623-141529.jpg' },
    { id: 24, title: 'Limpieza en Áreas Residenciales', category: 'Limpieza de Alfombra', image: '/gallery/Limpieza%20de%20alfombra/20200623-141838.jpg' },
    { id: 25, title: 'Antes y Después de Limpieza', category: 'Limpieza de Alfombra', image: '/gallery/Limpieza%20de%20alfombra/CollageMaker_20200313_211914911.jpg' },
    { id: 26, title: 'Proceso de Extracción e Inyección', category: 'Limpieza de Alfombra', image: '/gallery/Limpieza%20de%20alfombra/IMG-20200423-WA0050.jpg' },
    { id: 27, title: 'Limpieza Industrial de Alfombras', category: 'Limpieza de Alfombra', image: '/gallery/Limpieza%20de%20alfombra/IMG-20200430-WA0019.jpg' },
    { id: 28, title: 'Resultados Impecables y Sanitizados', category: 'Limpieza de Alfombra', image: '/gallery/Limpieza%20de%20alfombra/IMG_20200605_211207_875.jpg' },
    { id: 29, title: 'Sanitizado Completo de Superficies', category: 'Limpieza de Alfombra', image: '/gallery/Limpieza%20de%20alfombra/IMG_20200609_221747_557.jpg' },

    // Agua Purificada
    { id: 30, title: 'Sistema de Purificación Moderno', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200414-WA0055.jpg' },
    { id: 31, title: 'Instalación de Sistema de Filtrado', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200504-WA0022.jpg' },
    { id: 32, title: 'Purificación Residencial de Alta Calidad', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200504-WA0023.jpg' },
    { id: 33, title: 'Agua Purificada Pintavolt', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200505-WA0009.jpg' },
    { id: 34, title: 'Sistema de Osmosis Inversa', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200520-WA0011.jpg' },
    { id: 35, title: 'Control y Monitoreo de Calidad', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200520-WA0018.jpg' },
    { id: 36, title: 'Instalación de Dispensador de Agua', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200520-WA0019.jpg' },
    { id: 37, title: 'Agua Pura y Libre de Sodio', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200520-WA0020.jpg' },
    { id: 38, title: 'Sistema de Purificación Bajo Mesada', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200520-WA0021.jpg' },
    { id: 39, title: 'Conexión de Purificador de Agua', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200520-WA0025.jpg' },
    { id: 40, title: 'Agua Saludable Libre de Metales', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200520-WA0026.jpg' },
    { id: 41, title: 'Mantenimiento de Filtro de Agua', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200520-WA0028.jpg' },
    { id: 42, title: 'Equipamiento de Purificación Avanzada', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200520-WA0032.jpg' },
    { id: 43, title: 'Instalación y Conexión Hidráulica', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200520-WA0033.jpg' },
    { id: 44, title: 'Agua Purificada Premium Residencial', category: 'Agua Purificada', image: '/gallery/Agua%20purificada/IMG-20200520-WA0039.jpg' }
  ];

  const filteredWorks = activeCategory === 'Todos' 
    ? works 
    : works.filter((work) => work.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-primary overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => setView('home')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-secondary border border-white/5 hover:border-secondary/20 transition-all duration-300 shadow-md group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold">Volver al Inicio</span>
          </button>
        </motion.div>
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">Galería de Trabajos</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Nuestros Proyectos Recientes
          </h3>
          <p className="text-lg text-slate-300">
            Explora algunos de nuestros trabajos terminados en pintura e instalaciones eléctricas, preparados especialmente para nuestros clientes y corredoras inmobiliarias.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category 
                  ? 'bg-secondary text-primary shadow-md font-bold' 
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(work.image)}
              >
                {work.image.endsWith('.mp4') ? (
                  <div className="relative w-full h-full bg-slate-900/90 flex flex-col items-center justify-center p-6 rounded-2xl overflow-hidden group-hover:bg-slate-900/70 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-30"></div>
                    
                    <div className="bg-secondary/20 border border-secondary/40 text-secondary p-5 rounded-full shadow-lg group-hover:scale-110 group-hover:bg-secondary/30 transition-all duration-300 z-10 mb-4">
                      <Play className="w-8 h-8 fill-current" />
                    </div>
                    
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider z-10">
                      Reproducir Video
                    </span>
                  </div>
                ) : (
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-accent text-xs font-bold tracking-wider uppercase mb-1 block">
                      {work.category}
                    </span>
                    <h4 className="text-white text-xl font-bold flex items-center justify-between">
                      {work.title}
                      <Maximize2 className="w-5 h-5 text-white/50" />
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram Videos Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 text-center max-w-4xl mx-auto backdrop-blur-md glow-border"
        >
          <h4 className="text-xl md:text-2xl font-bold text-white mb-3">¿Quieres ver nuestros procesos en video?</h4>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Subimos videos de nuestros trabajos, antes y después de limpieza de alfombras, y procesos de pintura directamente a nuestro Instagram.
          </p>
          <a
            href="https://www.instagram.com/pinta__volt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-accent text-primary px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-secondary/20 hover:scale-105 cursor-pointer"
          >
            Ver videos en Instagram
          </a>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
             <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-slate-800 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
               <X className="w-8 h-8" />
             </button>
             {selectedImage.endsWith('.mp4') ? (
               <motion.video 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage} 
                controls
                autoPlay
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl outline-none" 
                onClick={(e) => e.stopPropagation()}
               />
             ) : (
               <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage} 
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" 
                alt="Vista ampliada"
                onClick={(e) => e.stopPropagation()}
               />
             )}
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;
