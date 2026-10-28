import { LifeBuoy } from "lucide-react";
import { SyncAiCredit } from "@/components/layout/syncai-credit";

export function BrandFooter() {
  return (
    <div className="flex flex-col gap-2 border-t border-sidebar-border px-4 py-3">
      <a
        href="https://github.com/AnilBotta/Cosmic-POS/issues"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 rounded-lg border border-sidebar-border px-3 py-1.5 text-xs font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      >
        <LifeBuoy className="h-3.5 w-3.5" />
        Contact support
      </a>
      <a
        href="https://github.com/AnilBotta/Cosmic-POS"
        target="_blank"
        rel="noopener noreferrer"
        className="text-left text-xs font-medium leading-tight text-sidebar-foreground/70 hover:text-sidebar-foreground hover:underline"
      >
        Cosmic POS
      </a>
      <SyncAiCredit className="text-[11px] text-sidebar-foreground/60" height={16} />
      <a
        href="https://github.com/Raktim94/nodedr-restaurant-pos"
        target="_blank"
        rel="noopener noreferrer"
        className="text-left text-[11px] leading-tight text-sidebar-foreground/50 hover:text-sidebar-foreground hover:underline"
      >
        Based on Nodedr OrderRestro (AGPL-3.0)
      </a>
    </div>
  );
}
