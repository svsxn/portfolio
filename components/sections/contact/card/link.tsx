import { Separator } from "@/components/ui/separator";
import { ExternalLinkIcon, LucideIcon } from "lucide-react";
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
      className="group space-y-5"
    >
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 text-primary rounded-md p-2">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <span className="text-muted-foreground">{label}</span>
            <span>{value}</span>
          </div>
        </div>
        <ExternalLinkIcon
          color="color-mix(in oklab, var(--muted-foreground) 40%, transparent)"
          size={20}
          className="hidden group-hover:block"
        />
      </div>
      <Separator />
    </Link>
  );
}
