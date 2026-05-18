import { CheckIcon } from "lucide-react";

interface Props {
  highlights: string[];
}

export default function Highlights({ highlights }: Props) {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold text-primary">Highlights</h4>
      <ul className="mt-2 space-y-1">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2 items-center text-sm leading-6 text-muted-foreground"
          >
            <CheckIcon color="var(--primary)" size={18} />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
