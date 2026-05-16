import { techStack } from "./tech-items";

export default function TechStack() {
  return (
    <div className="md:min-w-3xl tracking-widest">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-foreground/80">
        Tech stack
      </p>
      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-muted-foreground sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
        {techStack.map((item) => (
          <li
            key={item.name}
            className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-foreground transition-[opacity,colors] cursor-default"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              {item.iconPaths}
            </svg>
            <span className="text-nowrap">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
