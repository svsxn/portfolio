import { TECH_STACK } from "./tech-items";

export function TechStack() {
  return (
    <div className="text-xs tracking-widest">
      <p className="mb-2">TECH STACK</p>
      <ul className="flex items-center gap-8">
        {TECH_STACK.map((tech) => (
          <li
            key={tech.name}
            className="flex items-center gap-2 text-sm text-muted-foreground opacity-70 hover:opacity-100 hover:-translate-y-0.5 hover:text-white transition cursor-default"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              // className="shrink-0"
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
