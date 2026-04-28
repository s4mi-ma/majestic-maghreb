import type { CardData } from '../data';
import Gallery from './Gallery';

interface CardProps {
  data: CardData;
  variant?: 'default' | 'teal';
  onImageClick: (src: string, alt: string) => void;
}

export default function Card({ data, variant = 'default', onImageClick }: CardProps) {
  const isTeal = variant === 'teal';

  return (
    <article
      className={`w-full box-border rounded-[18px] border shadow-[0_2px_20px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04)] ${
        isTeal
          ? 'bg-surface border-[rgba(212,163,115,0.22)]'
          : 'bg-surface-alt border-[rgba(212,163,115,0.22)]'
      }`}
    >
      <div className="pt-5 px-4 sm:pt-[26px] sm:px-[30px] md:pt-[26px] md:px-[30px]">
        <h3
          className={`font-[var(--font-head)] text-lg sm:text-xl md:text-[1.38rem] font-bold text-primary leading-[1.3] mb-3 card-title-line ${
            isTeal ? 'card-title-line-teal' : 'card-title-line-primary'
          }`}
        >
          {data.title}
          {data.subtitle && (
            <span className="font-[var(--font-head)] text-[0.88em] font-normal italic text-muted ml-1.5">
              {data.subtitle}
            </span>
          )}
        </h3>
      </div>
      <Gallery images={data.images} altPrefix={data.title} onImageClick={onImageClick} />
      <div className="pt-3.5 px-4 pb-5 sm:pt-4 sm:px-6 sm:pb-6 md:pt-[18px] md:px-[30px] md:pb-7">
        <p className="text-sm sm:text-base md:text-[0.96rem] text-[#3C2518] leading-[1.85] font-normal">
          {data.text}
        </p>
      </div>
    </article>
  );
}
