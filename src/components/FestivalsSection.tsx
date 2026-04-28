import { festivals } from '../data';
import SectionHeader from './SectionHeader';
import Card from './Card';

interface FestivalsSectionProps {
  onImageClick: (src: string, alt: string) => void;
}

export default function FestivalsSection({ onImageClick }: FestivalsSectionProps) {
  return (
    <section className="w-full box-border py-14 sm:py-20 px-4 sm:px-6 scroll-mt-[58px] bg-white" id="festivals">
      <div className="max-w-[1080px] mx-auto">
        <SectionHeader number="02" label="Musique, patrimoine et célébration" title="Festivals" teal />

        <div className="grid gap-5 sm:gap-7">
          {festivals.map((f) => (
            <Card key={f.title} data={f} variant="teal" onImageClick={onImageClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
