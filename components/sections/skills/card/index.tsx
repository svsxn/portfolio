import { StaggerItem } from "@/components/motion/stagger-item";
import Tech from "./tech";

interface Props {
  title: string;
}

export default function Card({ title }: Props) {
  return (
    <StaggerItem className="bg-card flex flex-col gap-4 rounded-md border px-4 py-5 transition-colors duration-200 hover:border-white/15 sm:min-w-46">
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="bg-primary ml-1 size-1 rounded-full sm:size-1.5" />
        <span className="text-sm font-medium">{title}</span>
      </div>
      <div className="flex flex-col gap-2">
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
      </div>
    </StaggerItem>
  );
}
