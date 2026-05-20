import { StarIcon } from "lucide-react";

export default function Label() {
  return (
    <div className="border-primary/20 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold tracking-[0.18em] uppercase">
      <StarIcon fill="var(--primary)" color="var(--primary)" size={12} />
      Featured project
    </div>
  );
}
