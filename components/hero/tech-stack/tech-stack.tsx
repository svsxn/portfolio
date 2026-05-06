import Image from "next/image";

type TechItem = {
  name: string;
  icon: string;
};

const TECH_STACK: TechItem[] = [
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Supabase", icon: "/icons/supabase.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
];

export function TechStack() {
  return (
    <div className="text-xs tracking-widest">
      <p className="mb-2">TECH STACK</p>
      <ul className="flex items-center gap-10">
        {TECH_STACK.map((tech) => (
          <li
            key={tech.name}
            className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition cursor-default hover:-translate-y-0.5"
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={16}
              height={16}
              className="opacity-80 group-hover:opacity-100 transition"
            />
            <span className="text-nowrap">{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
