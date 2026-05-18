export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,--alpha(var(--primary)/10%),transparent_34%),radial-gradient(circle_at_80%_40%,--alpha(var(--foreground)/6%),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(--alpha(var(--foreground)/45%)_1px,transparent_1px),linear-gradient(90deg,--alpha(var(--foreground)/45%)_1px,transparent_1px)] bg-size-[80px_80px] opacity-[0.04]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-background" />
    </div>
  );
}
