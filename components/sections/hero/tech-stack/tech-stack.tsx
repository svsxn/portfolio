import { TECH_STACK } from "./tech-items";

export function TechStack() {
  return (
    <div className="md:min-w-3xl tracking-widest">
      <p className="mb-2 text-xs">TECH STACK</p>
      <ul className="flex items-center gap-6 md:gap-8 flex-wrap gap-y-4">
        {TECH_STACK.map((tech) => (
          <li
            key={tech.name}
            className="flex items-center gap-2 text-[12px] md:text-sm text-muted-foreground/90 opacity-70 hover:opacity-100 hover:text-foreground transition cursor-default"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              {tech.iconPaths}
            </svg>
            <span className="text-nowrap">{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
