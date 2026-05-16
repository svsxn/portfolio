export default function Background() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_10%,rgba(22,163,74,0.08),transparent_32%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.055),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] bg-size-[80px_80px]" />
    </>
  );
}
