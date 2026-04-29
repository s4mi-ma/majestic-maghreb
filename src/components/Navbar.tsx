export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[200] w-full box-border backdrop-blur-[14px] shadow-[0_2px_24px_rgba(0,0,0,0.22)]" style={{ backgroundColor: '#41211b' }}>
      <div className="max-w-full mx-auto px-6 h-[58px] flex items-center justify-between">
        <a
          href="#"
          className="font-[var(--font-head)] text-sm sm:text-base md:text-[1.05rem] font-bold tracking-[0.04em] no-underline whitespace-nowrap"
          style={{ color: '#ffffff' }}
        >
          Majestic Maghreb
        </a>
        <ul className="flex items-center gap-0 list-none m-0 p-0 pr-2">
          <li>
            <a
              href="#ceremonies"
              className="block py-[6px] px-4 sm:px-5 text-white no-underline text-[0.75rem] sm:text-sm font-medium tracking-[0.04em] rounded-full transition-all hover:bg-[rgba(212,163,115,0.22)] hover:text-secondary whitespace-nowrap"
              style={{ color: '#ffffff' }}
            >
              Cérémonies
            </a>
          </li>
          <li className="text-white/50 select-none px-1">&amp;</li>
          <li>
            <a
              href="#festivals"
              className="block py-[6px] px-4 sm:px-5 text-white no-underline text-[0.75rem] sm:text-sm font-medium tracking-[0.04em] rounded-full transition-all hover:bg-[rgba(212,163,115,0.22)] hover:text-secondary whitespace-nowrap"
              style={{ color: '#ffffff' }}
            >
              Festivals
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
