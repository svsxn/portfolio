import { StaggerItem } from "@/components/motion/stagger-item";
import Tech from "./tech";

interface Props {
  title: string;
}

export default function Card({ title }: Props) {
  return (
    <StaggerItem className="flex flex-col gap-4 w-46 bg-card border rounded-md px-4 py-5 hover:border-white/15 transition-colors duration-200">
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="size-1 sm:size-1.5 rounded-full bg-primary ml-1" />
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
