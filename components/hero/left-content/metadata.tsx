import { Separator } from "@/components/ui/separator";

export function Metadata() {
  return (
    <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase">
      <div className="flex items-center gap-3 text-accent">
        <div className="size-1.5 rounded-full bg-current ml-1" />
        <span>Full-stack developer</span>
      </div>
      <Separator orientation="vertical" />
      <span className="text-muted-foreground">Next.js & Supabase</span>
    </div>
  );
}
