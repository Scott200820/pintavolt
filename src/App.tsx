import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [view, setView] = useState<'home' | 'gallery'>('home');
  const [galleryCategory, setGalleryCategory] = useState('Todos');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-primary font-sans selection:bg-secondary/20 selection:text-secondary">
      <Navbar view={view} setView={setView} setGalleryCategory={setGalleryCategory} />
      <main>
        {view === 'home' ? (
          <>
            <Hero setView={setView} />
            <About />
            <Contact />
          </>
        ) : (
          <div className="pt-20">
            <Gallery activeCategory={galleryCategory} setActiveCategory={setGalleryCategory} setView={setView} />
          </div>
        )}
      </main>
      <Footer setView={setView} />
    </div>
  );
}

export default App;
