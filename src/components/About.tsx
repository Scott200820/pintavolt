
import { ShieldCheck, PaintRoller, Zap, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const partners = [
    {
      name: 'Arriendos Ya',
      logo: '/arriendos_ya.png',
      link: 'https://www.instagram.com/arriendosya_cl/',
      logoSize: 'h-16 md:h-20'
    },
    {
      name: 'Inetmatica',
      logo: '/inetmatica.png',
      link: 'https://www.instagram.com/inetmatica/',
      logoSize: 'h-24 md:h-28'
    }
  ];

  const features = [
    {
      icon: <PaintRoller className="w-8 h-8 text-secondary" />,
      title: 'Pintura de Interiores',
      description: 'Especialistas en pintura para departamentos y casas. Cuidamos cada detalle arquitectónico y entregamos terminaciones perfectas de piso a techo.',
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: 'Conexiones Eléctricas',
      description: 'Solucionamos, revisamos e instalamos todo tipo de cableado y sistemas eléctricos con máxima seguridad y cumplimiento normativo.',
    },
    {
      icon: <Building2 className="w-8 h-8 text-secondary" />,
      title: 'Aliados de Corredoras',
      description: 'Entendemos los tiempos y exigencias del mercado inmobiliario. Preparamos y renovamos propiedades para alquiler o venta rápidamente.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: 'Limpieza y Garantía',
      description: 'Garantizamos que el inmueble se entregará limpio y listo para ser habitado una vez que se completen los trabajos.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 bg-primary overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">Quiénes Somos</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            El socio ideal para el sector inmobiliario
          </h3>
          <p className="text-lg text-slate-300">
            En Pintavolt nos enfocamos en darle nueva vida a los espacios. Ya sea renovando la pintura de un departamento completo o asegurando el funcionamiento eléctrico de una casa, nuestro equipo trabaja de forma eficiente y profesional.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
             <motion.div 
              key={index}
              variants={itemVariants}
              className="group glass-card glow-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-300 hover:-translate-y-2 cursor-default"
            >
              <div className="bg-white/5 border border-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted By / Partners Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-16 border-t border-white/5 text-center"
        >
          <h4 className="text-2xl md:text-3xl font-extrabold text-white mb-10 tracking-tight">
            Empresas que han confiado en nosotros
          </h4>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] py-4">
            <div className="flex gap-8 w-max animate-marquee">
              {Array.from({ length: 16 }).map((_, idx) => {
                const partner = partners[idx % partners.length];
                const cardContent = (
                  <img 
                    src={partner.logo} 
                    alt={`Logo ${partner.name}`} 
                    className={`${partner.logoSize} w-auto object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 filter brightness-110`} 
                  />
                );
                const className = "group relative bg-white/5 hover:bg-white/10 border border-white/5 hover:border-secondary/20 px-12 py-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-md flex items-center justify-center shrink-0 w-64 md:w-80 cursor-pointer";

                if (partner.link) {
                  return (
                    <a 
                      key={idx}
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {cardContent}
                    </a>
                  );
                }

                return (
                  <div key={idx} className={className}>
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
