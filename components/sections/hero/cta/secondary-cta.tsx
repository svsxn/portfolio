import Link from "next/link";

export default function SecondaryCta() {
  return (
    <Link
      href="#contact"
      className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/3 px-7 text-sm font-bold transition hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030504]"
    >
      Get In Touch
    </Link>
  );
}
