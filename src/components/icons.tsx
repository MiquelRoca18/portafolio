import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Stroke({ size, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...(size ? { width: size, height: size } : {})}
      {...props}
    >
      {children}
    </svg>
  );
}

export const DownloadIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
  </Stroke>
);

export const PinIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Stroke>
);

export const ClockIcon = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Stroke>
);

export const MonitorIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M8 21h8M12 18v3" />
  </Stroke>
);

export const MoonIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </Stroke>
);

export const SunIcon = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
  </Stroke>
);

export const MenuIcon = (p: IconProps) => (
  <Stroke strokeWidth={1.9} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Stroke>
);

export const ArrowUpRight = (p: IconProps) => (
  <Stroke strokeWidth={1.9} {...p}>
    <path d="M7 17 17 7M7 7h10v10" />
  </Stroke>
);

export const PitchIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="4" width="18" height="16" rx="1.5" />
    <path d="M3 12h18M12 9.5v5" />
    <circle cx="12" cy="12" r="2" />
  </Stroke>
);

export const ListIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" />
  </Stroke>
);

export const CinemaIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 9h18M8 5v14" />
  </Stroke>
);

export const SportIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M13 4a1.6 1.6 0 1 0 0-.01M7 21l3-5 3 1 2-4M5 12l3-1 2 2" />
  </Stroke>
);

export const GithubIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...(p.size ? { width: p.size, height: p.size } : {})} {...p}>
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
  </svg>
);
