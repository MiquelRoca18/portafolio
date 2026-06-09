import Image from "next/image";

type Props = {
  /** When set, renders the real optimised image. Otherwise a labelled placeholder. */
  src?: string;
  alt?: string;
  /** Mono caption shown in the placeholder, e.g. "Foto de perfil". */
  label: string;
};

export function ImageSlot({ src, alt = "", label }: Props) {
  if (src) {
    return (
      <div className="image-slot">
        <Image src={src} alt={alt} fill sizes="(max-width: 920px) 100vw, 640px" />
      </div>
    );
  }
  return (
    <div className="image-slot is-placeholder" role="img" aria-label={label}>
      <span className="image-slot-label">{label}</span>
    </div>
  );
}
