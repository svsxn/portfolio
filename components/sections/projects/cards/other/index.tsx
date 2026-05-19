import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import Background from "./background";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function Project({ project }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border bg-card/45 p-5 shadow-xl transition-colors hover:border-primary/35 hover:bg-card/65 sm:p-6">
      <Background />
      <div className="relative aspect-16/10 overflow-hidden bg-background/60 rounded-xl">
        <Image
          src={"/preview.png"}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1024px) 360px, 100vw"
          unoptimized
          className="object-cover brightness-80 transition duration-500 group-hover:scale-[1.025] group-hover:brightness-100 "
        />
      </div>
      <h3 className="mt-6 text-lg font-bold tracking-[-0.035em]">
        {project.title}
      </h3>
      <p className="mt-4 min-h-18 text-sm leading-6 text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border bg-background/50 px-3 py-1 text-xs text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3">
        {project.liveUrl ? (
          <Button asChild size="sm" className="h-10 rounded-md px-4">
            <Link href={project.liveUrl} target="_blank" rel="noreferrer">
              Live Demo
              <ExternalLinkIcon className="size-3.5" aria-hidden="true" />
            </Link>
          </Button>
        ) : null}

        {project.githubUrl ? (
          <Button
            asChild
            size="icon"
            variant="outline"
            className={cn(
              "size-10 rounded-xl bg-background/40",
              !project.liveUrl && "w-auto px-4",
            )}
          >
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              {!project.liveUrl ? <span>GitHub</span> : null}G
            </Link>
          </Button>
        ) : null}
      </div>
    </article>
  );
}
