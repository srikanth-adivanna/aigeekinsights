interface AdSlotProps {
  size: "banner" | "rectangle" | "leaderboard";
  className?: string;
}

const AD_DIMENSIONS: Record<AdSlotProps["size"], { w: string; h: string; label: string }> = {
  banner:      { w: "w-full",    h: "h-16",  label: "Banner Ad (728×90)" },
  rectangle:   { w: "w-[300px]", h: "h-[250px]", label: "Rectangle Ad (300×250)" },
  leaderboard: { w: "w-full",    h: "h-24",  label: "Leaderboard Ad (970×90)" },
};

export default function AdSlot({ size, className = "" }: AdSlotProps) {
  const dim = AD_DIMENSIONS[size];
  return (
    <div
      className={`${dim.w} ${dim.h} flex items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 ${className}`}
    >
      <span className="text-xs text-muted-foreground">{dim.label}</span>
    </div>
  );
}
