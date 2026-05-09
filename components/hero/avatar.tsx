import Image from "next/image";

export function Avatar() {
  return (
    <div className="order-1 md:order-2 flex md:justify-end">
      <Image
        width={420}
        height={420}
        alt="Avatar"
        src="/avatar.png"
        loading="eager"
        className="rounded-full mx-auto md:mx-0 size-80 md:size-105 border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] animate-in fade-in zoom-in-95 duration-700 delay-150"
      />
    </div>
  );
}
