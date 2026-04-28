import { marriages, religiousFestivals } from '../data';
import SectionHeader from './SectionHeader';
import Card from './Card';
import OrnamentalDivider from './OrnamentalDivider';

interface CeremoniesSectionProps {
  onImageClick: (src: string, alt: string) => void;
}

export default function CeremoniesSection({ onImageClick }: CeremoniesSectionProps) {
  return (
    <section className="w-full box-border py-14 sm:py-20 px-4 sm:px-6 scroll-mt-[58px] bg-surface" id="ceremonies">
      <div className="max-w-[1080px] mx-auto">
        <SectionHeader number="01" label="Pratiques sociales et identitaires" title="Cérémonies" />

        {/* Mariages sub-header */}
        <div className="flex items-center gap-2 sm:gap-3.5 mb-7 sm:mb-9">
          <div className="flex-1 h-px bg-secondary/[0.28]" />
          <div className="font-[var(--font-head)] text-sm sm:text-[0.95rem] font-semibold text-primary tracking-[0.07em] py-1.5 px-4 sm:px-[22px] border-[1.5px] border-primary/[0.18] rounded-full bg-surface whitespace-nowrap">
            Mariages
          </div>
          <div className="flex-1 h-px bg-secondary/[0.28]" />
        </div>

        <div className="grid gap-5 sm:gap-7">
          {marriages.map((m) => (
            <Card key={m.title} data={m} onImageClick={onImageClick} />
          ))}
        </div>

        <OrnamentalDivider text="Fêtes Religieuses" />

        <div className="grid gap-5 sm:gap-7">
          {religiousFestivals.map((f) => (
            <Card key={f.title} data={f} onImageClick={onImageClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
