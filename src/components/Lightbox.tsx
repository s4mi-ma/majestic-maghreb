import { useEffect, useCallback } from 'react';

interface LightboxProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (src) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [src, handleKeyDown]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/[0.93] flex items-center justify-center cursor-zoom-out box-border w-full h-full"
      onClick={onClose}
    >
      <button
        className="absolute top-4 sm:top-[18px] right-4 sm:right-6 bg-transparent border-none text-white/65 text-2xl sm:text-[2.2rem] cursor-pointer leading-none transition-colors hover:text-white"
        onClick={onClose}
        aria-label="Fermer"
      >
        &times;
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-[95vw] sm:max-w-[92vw] max-h-[85vh] sm:max-h-[90vh] rounded-lg object-contain shadow-[0_8px_48px_rgba(0,0,0,0.5)] box-border"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
