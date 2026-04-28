export default function Hero() {
  return (
    <header className="hero-pattern w-full box-border min-h-[calc(100svh-58px)] sm:min-h-[88vh] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#4E1508] via-[#7A2E15] via-[#8E3A1F] to-[#B86038]">
      <div className="relative z-[2] w-full max-w-[820px] px-6 sm:px-8 animate-fade-up flex flex-col items-center text-center">
        <div className="text-[0.7rem] sm:text-[0.75rem] font-semibold tracking-[0.22em] uppercase text-secondary opacity-80 mb-5 sm:mb-[22px]">
          Maroc · Patrimoine Culturel Vivant
        </div>
        <h1
          className="font-[var(--font-head)] font-bold leading-[1.15] tracking-tight mb-5 sm:mb-7 [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]"
          style={{ color: '#ffffff', fontSize: 'clamp(2rem, 6vw, 4rem)' }}
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
          style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}
        >
          Un voyage à travers les rituels, la musique et l'identité culturelle marocaine.
        </p>
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
