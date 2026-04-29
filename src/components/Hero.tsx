export default function Hero() {
  return (
    <header
      className="hero-pattern w-full box-border min-h-[calc(100svh-58px)] sm:min-h-[88vh] flex flex-col items-center justify-start pt-[18vh] sm:pt-[22vh] relative overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-image.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for text legibility over photo */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65) 100%)' }} />

      <div className="relative z-[2] w-full max-w-[820px] px-6 sm:px-8 animate-fade-up flex flex-col items-center text-center">
        <div className="text-[0.7rem] sm:text-[0.75rem] font-semibold tracking-[0.22em] uppercase text-secondary opacity-80 mb-5 sm:mb-[22px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
          Maroc · Patrimoine Culturel Vivant
        </div>
        <h1
          className="font-[var(--font-head)] font-bold leading-[1.15] tracking-tight mb-5 sm:mb-7"
          style={{ color: '#ffffff', fontSize: 'clamp(2rem, 6vw, 4rem)', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
        >
          Cérémonies &amp; Festivals du Maroc
        </h1>
        <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-[26px]">
          <div className="w-10 sm:w-14 h-px bg-secondary opacity-55" />
          <div className="w-[7px] h-[7px] bg-secondary rotate-45 opacity-75" />
          <div className="w-10 sm:w-14 h-px bg-secondary opacity-55" />
        </div>
        <p
          className="font-light italic leading-[1.7] max-w-[560px] mb-10 sm:mb-14"
          style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
        >
          Un hommage à l'héritage, à l'élégance et à la richesse culturelle du Royaume
        </p>
      </div>
      {/* Attribution */}
      <div
        className="relative z-[2] w-full max-w-[820px] px-6 sm:px-8 mt-auto pb-16 sm:pb-20 flex flex-col items-center text-center"
        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9)' }}
      >
        <div className="w-16 h-px bg-secondary/50 mb-5" />
        <p className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.15em] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Encadrement académique
        </p>
        <p className="text-[0.8rem] sm:text-[0.85rem] font-medium mb-5" style={{ color: '#ffffff' }}>
          Pr. Layachi El BASRI
        </p>
        <p className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.15em] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Réalisation
        </p>
        <div className="flex flex-col gap-1">
          <p className="text-[0.8rem] sm:text-[0.85rem] font-medium" style={{ color: '#ffffff' }}>RAMATY Rawane</p>
          <p className="text-[0.8rem] sm:text-[0.85rem] font-medium" style={{ color: '#ffffff' }}>FATACHI Ilyas</p>
          <p className="text-[0.8rem] sm:text-[0.85rem] font-medium" style={{ color: '#ffffff' }}>LOTFI Latifa</p>
        </div>
      </div>

      <div
        className="flex flex-col items-center gap-[5px] opacity-45 animate-bob z-[2]"
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
      >
        <span className="text-[0.68rem] tracking-[0.18em] uppercase" style={{ color: '#D4A373' }}>
          Défiler
        </span>
        <svg className="w-[18px] h-[18px] fill-none" stroke="#D4A373" strokeWidth={2} strokeLinecap="round" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </header>
  );
}
