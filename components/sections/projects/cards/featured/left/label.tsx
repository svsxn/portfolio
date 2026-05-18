import { StarIcon } from "lucide-react";

export default function Label() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
      <StarIcon fill="var(--primary)" color="var(--primary)" size={12} />
      Featured project
    </div>
  );
}
