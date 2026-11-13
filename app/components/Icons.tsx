type IconProps = { className?: string };

function Icon({ d, className }: { d: string } & IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <path d={d} />
    </svg>
  );
}

export const ArrowUpRight = (p: IconProps) => <Icon d="M4 12L12 4M6 4h6v6" {...p} />;
export const ArrowRight = (p: IconProps) => <Icon d="M3 8h10M9 4l4 4-4 4" {...p} />;
export const ArrowLeft = (p: IconProps) => <Icon d="M13 8H3M7 4L3 8l4 4" {...p} />;
export const ArrowDown = (p: IconProps) => <Icon d="M8 3v10M4 9l4 4 4-4" {...p} />;
export const ArrowUp = (p: IconProps) => <Icon d="M8 13V3M4 7l4-4 4 4" {...p} />;
export const Download = (p: IconProps) => <Icon d="M8 2v9M4 7l4 4 4-4M3 14h10" {...p} />;
