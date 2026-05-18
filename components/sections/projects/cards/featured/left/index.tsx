import { Separator } from "@/components/ui/separator";
import { CalendarIcon, UserIcon } from "lucide-react";
import Label from "./label";
import Highlights from "./highlights";
import Stack from "./stack";
import Actions from "./actions";

export default function LeftSection({ project }: { project: Project }) {
  return (
    <div>
      <Label />
      <h3 className="mt-5 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
        {project.title}
      </h3>
      <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
        {project.description}
      </p>
      <dl className="mt-6 flex gap-6">
        <div className="flex items-center gap-3">
          <UserIcon className="size-5 text-muted-foreground" aria-hidden />
          <div>
            <dt className="text-xs font-medium text-primary">Role</dt>
            <dd className=" text-sm">{project.role}</dd>
          </div>
        </div>
        <Separator orientation="vertical" className="h-10" />
        <div className="flex gap-3 items-center">
          <CalendarIcon className="size-5 text-muted-foreground" aria-hidden />
          <div>
            <dt className="text-xs font-medium text-primary">Year</dt>
            <dd className=" text-sm">{project.year}</dd>
          </div>
        </div>
      </dl>
      <Highlights highlights={project.highlights} classname="mt-6" />
      <Stack stack={project.stack} classname="mt-4" />
      <Actions
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
        classname="mt-6"
      />
    </div>
  );
}
