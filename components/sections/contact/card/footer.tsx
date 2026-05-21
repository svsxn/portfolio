import { LockIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="text-muted-foreground mt-4 flex items-center gap-2">
      <LockIcon size={12} />
      <span className="text-[11px]">
        Your information is never shared with third parties.
      </span>
    </div>
  );
}
