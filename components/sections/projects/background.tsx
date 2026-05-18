export default function Background() {
  return (
    <>
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 size-168 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.12),transparent)]" />
    </>
  );
}
