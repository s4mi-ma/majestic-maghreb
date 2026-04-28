interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  teal?: boolean;
}

export default function SectionHeader({ number, label, title, teal }: SectionHeaderProps) {
  return (
    <div className="mb-9 sm:mb-[52px]">
      {/* Mobile: stacked centered */}
      <div className="flex flex-col items-center text-center sm:hidden mb-2">
        <div className="font-[var(--font-head)] text-3xl font-bold text-secondary opacity-35 leading-none select-none mb-2">
          {number}
        </div>
        <div className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-primary opacity-65 mb-1">
          {label}
        </div>
        <h2 className="font-[var(--font-head)] text-2xl font-bold text-primary leading-[1.2]">
          {title}
        </h2>
      </div>
      {/* Desktop: horizontal row */}
      <div className="hidden sm:flex items-center gap-5">
        <div className="font-[var(--font-head)] text-3xl md:text-[3.2rem] font-bold text-secondary opacity-35 leading-none select-none shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <div className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-primary opacity-65 mb-1">
            {label}
          </div>
          <h2 className="font-[var(--font-head)] text-2xl md:text-[2.4rem] font-bold text-primary leading-[1.2]">
            {title}
          </h2>
        </div>
        <div
          className={`flex-[1_1_80px] max-w-[260px] h-0.5 opacity-45 ${
            teal
              ? 'bg-gradient-to-r from-tertiary to-transparent'
              : 'bg-gradient-to-r from-secondary to-transparent'
          }`}
        />
      </div>
    </div>
  );
}
