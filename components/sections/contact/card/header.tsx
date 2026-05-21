import { MailIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-primary/10 text-primary rounded-md p-2.5">
        <MailIcon className="size-5" aria-hidden="true" />
      </div>
      <div className="flex flex-col">
        <span className="text-[15px] font-semibold">Send a message</span>
        <span className="text-muted-foreground text-xs">
          I usually reply within 8-24 hours.
        </span>
      </div>
    </div>
  );
}
