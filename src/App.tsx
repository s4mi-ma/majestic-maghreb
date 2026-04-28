import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CeremoniesSection from './components/CeremoniesSection';
import FestivalsSection from './components/FestivalsSection';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

export default function App() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <main className="w-full box-border">
        <CeremoniesSection onImageClick={openLightbox} />
        <FestivalsSection onImageClick={openLightbox} />
      </main>
      <Footer />
      <Lightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ''}
        onClose={closeLightbox}
      />
    </>
  );
}
