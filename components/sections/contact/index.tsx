import Label from "../label";

export default function Contact() {
  return (
    <section id="contact" className="">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16 lg:py-20">
        <Label primaryText="Contact" />
        <h2 className="max-w-xs text-4xl font-bold tracking-[-0.045em] sm:max-w-md sm:text-5xl lg:max-w-lg lg:text-6xl">
          Let&apos;s build something clean.
        </h2>
        <div className="text-muted-foreground mt-6 max-w-116 space-y-5">
          <p>
            I&apos;m available for selected projects involving dashboards, SaaS
            products, admin tools, and full-stack web applications.
          </p>
          <p>
            If the project needs clean UI, reliable data flows, and scalable
            backend logic, send me a message
          </p>
        </div>
        <div className="bg-background/85 text-muted-foreground mt-8 flex w-fit items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium shadow-xl backdrop-blur-md">
          <span className="bg-primary size-2 rounded-full shadow-[0_0_12px_--alpha(var(--primary)/80%)]" />
          <span className="whitespace-nowrap">
            Available for selected projects
          </span>
        </div>
      </div>
    </section>
  );
}
