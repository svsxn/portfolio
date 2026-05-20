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
          className="bg-background/70 text-muted-foreground rounded-full border px-3 py-1 text-xs font-medium"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
