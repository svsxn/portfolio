import Image from "next/image";

export default function Preview() {
  return (
    <div className="bg-background/70 relative overflow-hidden rounded-2xl border shadow-2xl">
      <div className="flex h-9 items-center gap-2 border-b px-4">
        <span className="size-2.5 rounded-full bg-red-500/80" />
        <span className="size-2.5 rounded-full bg-yellow-500/80" />
        <span className="size-2.5 rounded-full bg-green-500/80" />
      </div>
      <div className="relative aspect-16/10">
        <Image
          src={"/preview.png"}
          alt={`Preview`}
          fill
          sizes="(min-width: 1024px) 520px, 100vw"
          unoptimized
          className="object-cover"
        />
      </div>
    </div>
  );
}
