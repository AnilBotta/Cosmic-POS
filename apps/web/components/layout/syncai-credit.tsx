import Image from "next/image";
import { cn } from "@/lib/utils";

// Source images are 480x143; keep that ratio at any height.
const RATIO = 480 / 143;

/** "Crafted by" credit with the SyncAI logo. Dark mode swaps in a copy with light lettering. */
export function SyncAiCredit({ className, height = 18 }: { className?: string; height?: number }) {
  const width = Math.round(height * RATIO);
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span>Crafted by</span>
      <Image src="/syncai-logo.png" alt="SyncAi Technologies" width={width} height={height} className="dark:hidden" />
      <Image
        src="/syncai-logo-dark.png"
        alt="SyncAi Technologies"
        width={width}
        height={height}
        className="hidden dark:block"
      />
    </span>
  );
}
