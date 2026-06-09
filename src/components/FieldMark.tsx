/**
 * Abstract chalk pitch-markings used as an ambient watermark behind the hero
 * and contact sections. Purely decorative; RevealController draws the strokes
 * in when they scroll into view.
 */
export function FieldMark({ variant }: { variant: "hero" | "contact" }) {
  if (variant === "contact") {
    return (
      <div className="field-mark" aria-hidden="true">
        <svg
          width="520"
          height="520"
          viewBox="0 0 520 520"
          style={{ bottom: "-200px", left: "-140px" }}
          fill="none"
        >
          <circle data-draw="" cx="260" cy="260" r="240" />
          <circle data-draw="" cx="260" cy="260" r="56" />
        </svg>
      </div>
    );
  }

  return (
    <div className="field-mark" aria-hidden="true">
      <svg
        width="640"
        height="640"
        viewBox="0 0 640 640"
        style={{ bottom: "-180px", right: "-160px" }}
        fill="none"
      >
        <circle data-draw="" cx="320" cy="320" r="300" />
        <circle data-draw="" cx="320" cy="320" r="70" />
        <path data-draw="" d="M320 20 V620" />
      </svg>
      <svg
        width="1200"
        height="120"
        viewBox="0 0 1200 120"
        style={{ top: "42%", left: "-40px" }}
        fill="none"
      >
        <path data-draw="" d="M0 60 H1100" />
      </svg>
    </div>
  );
}
