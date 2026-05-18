export default function Preview() {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-background/70 shadow-2xl">
      <div className="flex h-9 items-center gap-2 border-b px-4">
        <span className="size-2.5 rounded-full bg-red-500/80" />
        <span className="size-2.5 rounded-full bg-yellow-500/80" />
        <span className="size-2.5 rounded-full bg-green-500/80" />
      </div>
      {/* <div className="relative aspect-16/10">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div> */}
      {/* <div className="aspect-16/10 p-4">
        <div className="h-full rounded-xl border border-border/60 bg-[radial-gradient(circle_at_40%_20%,--alpha(var(--primary)/16%),transparent_35%),linear-gradient(to_bottom,--alpha(var(--card)/90%),--alpha(var(--background)/80%))]" />
      </div> */}
      <div className="aspect-16/10 p-4">
        <div className="grid h-full grid-cols-[5rem_1fr] overflow-hidden rounded-xl border border-border/60 bg-[radial-gradient(circle_at_45%_20%,--alpha(var(--primary)/16%),transparent_36%),linear-gradient(to_bottom,--alpha(var(--card)/92%),--alpha(var(--background)/86%))]">
          <aside className="border-r border-border/50 p-3">
            <div className="mb-5 h-3 w-10 rounded-full bg-foreground/15" />
            <div className="space-y-2">
              <div className="h-6 rounded-md bg-primary/15" />
              <div className="h-6 rounded-md bg-foreground/8" />
              <div className="h-6 rounded-md bg-foreground/8" />
              <div className="h-6 rounded-md bg-foreground/8" />
            </div>
          </aside>
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="h-3 w-24 rounded-full bg-foreground/20" />
                <div className="mt-2 h-2 w-36 rounded-full bg-foreground/10" />
              </div>
              <div className="h-7 w-20 rounded-md border border-border/60 bg-background/50" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-border/50 bg-background/45 p-3">
                <div className="h-2 w-12 rounded-full bg-foreground/12" />
                <div className="mt-3 h-4 w-16 rounded-full bg-foreground/25" />
              </div>
              <div className="rounded-lg border border-border/50 bg-background/45 p-3">
                <div className="h-2 w-12 rounded-full bg-foreground/12" />
                <div className="mt-3 h-4 w-14 rounded-full bg-foreground/25" />
              </div>
              <div className="rounded-lg border border-border/50 bg-background/45 p-3">
                <div className="h-2 w-12 rounded-full bg-foreground/12" />
                <div className="mt-3 h-4 w-12 rounded-full bg-primary/35" />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-[1.4fr_0.9fr] gap-3">
              <div className="rounded-lg border border-border/50 bg-background/45 p-4">
                <div className="mb-4 h-2 w-24 rounded-full bg-foreground/14" />
                <div className="relative h-24 overflow-hidden rounded-md bg-background/40">
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-primary/20 to-transparent" />
                  <svg
                    viewBox="0 0 240 80"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 62 C24 46 38 54 58 39 C78 24 94 42 116 31 C140 19 154 47 176 34 C198 22 210 29 240 13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary/70"
                    />
                  </svg>
                </div>
              </div>
              <div className="rounded-lg border border-border/50 bg-background/45 p-4">
                <div className="mb-4 h-2 w-20 rounded-full bg-foreground/14" />
                <div className="space-y-3">
                  <div className="flex justify-between gap-3">
                    <div className="h-2 w-20 rounded-full bg-foreground/12" />
                    <div className="h-2 w-10 rounded-full bg-primary/35" />
                  </div>
                  <div className="flex justify-between gap-3">
                    <div className="h-2 w-16 rounded-full bg-foreground/12" />
                    <div className="h-2 w-8 rounded-full bg-primary/25" />
                  </div>
                  <div className="flex justify-between gap-3">
                    <div className="h-2 w-24 rounded-full bg-foreground/12" />
                    <div className="h-2 w-12 rounded-full bg-primary/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
