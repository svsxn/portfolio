import { techStack } from "../../hero/tech-stack/tech-items";

export default function Tech() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 border rounded-md p-0.5 size-7"
      >
        {techStack[0].iconPaths}
      </svg>
      <span className="text-xs">Next.js</span>
    </div>
  );
}
