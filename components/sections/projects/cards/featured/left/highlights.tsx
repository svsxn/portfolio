import { CheckIcon } from "lucide-react";

type Props = {
  highlights: string[];
  classname?: string;
};

export default function Highlights({ highlights, classname }: Props) {
  return (
    <div className={classname}>
      <h4 className="text-sm font-semibold text-primary">Highlights</h4>
      <ul className="mt-2 space-y-1">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2 text-sm leading-6 text-muted-foreground"
          >
            <CheckIcon className="mt-1.25" color="var(--primary)" size={18} />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
