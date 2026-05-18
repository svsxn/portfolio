import { cn } from "@/lib/utils";

type Props = {
  stack: string[];
  classname?: string;
};

export default function Stack({ stack, classname }: Props) {
  return (
    <ul className={cn("flex flex-wrap gap-2", classname)}>
      {stack.map((item) => (
        <li
          key={item}
          className="rounded-full border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
