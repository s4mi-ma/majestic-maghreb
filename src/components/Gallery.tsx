interface GalleryProps {
  images: string[];
  altPrefix: string;
  onImageClick: (src: string, alt: string) => void;
}

export default function Gallery({ images, altPrefix, onImageClick }: GalleryProps) {
  return (
    <div className="w-full max-w-full overflow-hidden box-border">
      <div className="gallery-scroll scrollbar-hide">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            loading="lazy"
            onClick={() => onImageClick(src, `${altPrefix} ${i + 1}`)}
            className="flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
