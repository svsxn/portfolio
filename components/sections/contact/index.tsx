import Label from "../label";

export default function Contact() {
  return (
    <section id="contact" className="">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16 lg:py-20">
        <Label primaryText="Contact" />
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-xs sm:max-w-md lg:max-w-lg tracking-[-0.045em]">
          Let&apos;s build something clean.
        </h2>
        <div className="mt-6 text-muted-foreground max-w-116 space-y-5">
          <p>
            I&apos;m available for selected projects involving dashboards, SaaS
            products, admin tools, and full-stack web applications.
          </p>
          <p>
            If the project needs clean UI, reliable data flows, and scalable
            backend logic, send me a message
          </p>
        </div>
        <div className="mt-8 flex items-center gap-2 rounded-full border bg-background/85 px-4 py-2.5 text-xs font-medium text-muted-foreground shadow-xl backdrop-blur-md w-fit">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_--alpha(var(--primary)/80%)]" />
          <span className="whitespace-nowrap">
            Available for selected projects
          </span>
        </div>
      </div>
    </section>
  );
}
