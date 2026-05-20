import { ExternalLinkIcon, LucideIcon, MailIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export default function ContactLink({ label, value, href, icon: Icon }: Props) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 text-primary rounded-md p-2">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <span className="text-muted-foreground">{label}</span>
          <span>{value}</span>
        </div>
      </div>
      <ExternalLinkIcon color="var(--primary)" size={20} />
    </Link>
  );
}
