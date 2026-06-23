import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) return;
    
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/pintavolt@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "Nuevo mensaje de contacto de Pintavolt"
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };
  return (
    <section id="contact" className="py-24 bg-primary overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">Contacto</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            ¿Listo para empezar tu proyecto?
          </h3>
          <p className="text-lg text-slate-300">
            Contáctanos hoy mismo para obtener un presupuesto sin cargo. Estamos a tu disposición para asesorarte y brindarte la mejor solución.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 glass-card rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5 overflow-hidden">
          
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-2xl font-bold text-white mb-6">Información de Contacto</h4>
            
            <div className="group flex items-start gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl shadow-md text-secondary group-hover:scale-110 group-hover:bg-secondary/10 transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-white text-lg">Correo Electrónico</p>
                <p className="text-slate-300 mt-1">pintavolt@gmail.com</p>
                <a href="mailto:pintavolt@gmail.com" className="text-secondary font-medium mt-2 inline-block hover:underline">
                  Escribir correo
                </a>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl glow-border min-h-[450px] flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success-message"
                  className="flex flex-col items-center justify-center text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-green-500/10 border border-green-500/25 p-4 rounded-full text-green-400 mb-6 shadow-lg shadow-green-500/5 animate-pulse">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">¡Mensaje Enviado!</h4>
                  <p className="text-slate-300 max-w-sm leading-relaxed">
                    Gracias por escribirnos. Recibirás una respuesta en tu correo electrónico a la brevedad.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-6 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 hover:text-white rounded-lg text-sm transition-all duration-200"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-2xl font-bold text-white mb-6">Envíanos tu consulta</h4>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nombre completo</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:bg-white/10 outline-none transition-all"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Correo electrónico</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:bg-white/10 outline-none transition-all"
                        placeholder="juan@ejemplo.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Número de teléfono</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:bg-white/10 outline-none transition-all"
                        placeholder="11 1234-5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensaje o detalle del trabajo</label>
                      <textarea 
                        id="message" 
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:bg-white/10 outline-none transition-all resize-none"
                        placeholder="Hola, me gustaría pedir un presupuesto para..."
                      ></textarea>
                    </div>
                    
                    {status === 'error' && (
                      <motion.div 
                        className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/25 p-3 rounded-lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>Ocurrió un error. Inténtalo de nuevo o contáctanos por WhatsApp.</span>
                      </motion.div>
                    )}

                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-secondary hover:bg-accent disabled:bg-slate-800 disabled:text-slate-500 text-primary font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-102 hover:shadow-secondary/20 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar Mensaje
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
