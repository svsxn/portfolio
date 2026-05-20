import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ClockIcon, ExternalLinkIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import ContactLink from "./link";

const contactLinks = [
  {
    label: "Email",
    value: "sebmagn102@gmail.com",
    href: "mailto:sebmagn102@gmail.com",
    icon: MailIcon,
  },
  {
    label: "GitHub",
    value: "github.com/svsxn",
    href: "https://github.com/svsxn",
    icon: MailIcon,
  },
  {
    label: "Instagram",
    value: "@magnucki.dev",
    href: "https://instagram.com/magnucki.dev",
    icon: MailIcon,
  },
] as const;

export default function Card() {
  return (
    <div className="bg-card border-border/50 space-y-6 rounded-2xl border p-6 shadow-xl md:w-100">
      <div className="flex flex-col gap-4">
        {contactLinks.map((link, index) => (
          <div key={link.href}>
            <ContactLink {...link} />
            {index < contactLinks.length - 1 ? (
              <Separator className="my-4" />
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <ClockIcon color="var(--primary)" size={20} />
        <span className="text-muted-foreground/70 text-sm">
          Typically replies within 8-24 hours
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button
          asChild
          size="sm"
          className="h-11 rounded-md border-none px-5 font-bold transition-all duration-300 hover:-translate-y-0.5 sm:h-10"
        >
          <Link href={"/"}>
            Get in touch
            <ExternalLinkIcon className="ml-2 size-4" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-card/60 hover:border-primary/40 hover:bg-primary/10 h-11 rounded-md px-5 font-bold hover:-translate-y-0.5 sm:h-10"
        >
          <Link href={"/"}>View GitHub</Link>
        </Button>
      </div>
    </div>
  );
}
