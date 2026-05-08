import Image from "next/image";

export function Avatar() {
  return (
    <div className="flex justify-end min-w-105">
      <Image
        width={420}
        height={420}
        alt="Avatar"
        src="/avatar.png"
        loading="eager"
        className="rounded-full size-105 border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] animate-in fade-in zoom-in-95 duration-700 delay-150"
      />
    </div>
  );
}
