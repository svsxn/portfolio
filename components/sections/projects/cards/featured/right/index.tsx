export default function RightSection() {
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
      <div className="aspect-16/10 p-4">
        <div className="h-full rounded-xl border border-border/60 bg-[radial-gradient(circle_at_40%_20%,--alpha(var(--primary)/16%),transparent_35%),linear-gradient(to_bottom,--alpha(var(--card)/90%),--alpha(var(--background)/80%))]" />
      </div>
    </div>
  );
}
