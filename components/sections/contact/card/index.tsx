import ContactLink from "./link";
import { Links } from "@/data/contact";
import Actions from "./actions";

export default function Card() {
  return (
    <div className="bg-card/70 border-border/50 rounded-2xl border p-5 shadow-xl backdrop-blur-md sm:p-6 md:w-100">
      <div className="mb-2 flex flex-col gap-4">
        {Links.map((link) => (
          <div key={link.href}>
            <ContactLink {...link} />
          </div>
        ))}
      </div>
      <span className="text-muted-foreground/70 text-sm">
        I usually reply within 8-24 hours.
      </span>
      <Actions />
    </div>
  );
}
