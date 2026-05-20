import { techStack } from "./tech-items";

export default function TechStack() {
  return (
    <div className="tracking-widest md:min-w-3xl">
      <p className="text-foreground/80 text-xs font-bold tracking-[0.24em] uppercase">
        Tech stack
      </p>
      <ul className="text-muted-foreground mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
        {techStack.map((item) => (
          <li
            key={item.name}
            className="hover:text-foreground flex cursor-default items-center gap-2 opacity-70 transition-[opacity,colors] hover:opacity-100"
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
