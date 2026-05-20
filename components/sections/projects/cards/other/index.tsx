import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import Background from "./background";
import Image from "next/image";
import { FadeInItem } from "@/components/motion/fade-in";

type Props = {
  project: Project;
};

export default function Project({ project }: Props) {
  return (
    <FadeInItem
      as="article"
      className="group bg-card/45 hover:border-primary/35 hover:bg-card/65 relative overflow-hidden rounded-2xl border p-5 shadow-xl transition-colors sm:p-6"
    >
      <Background />
      <div className="bg-background/60 relative aspect-16/10 overflow-hidden rounded-xl">
        <Image
          src={"/preview.png"}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1024px) 360px, 100vw"
          unoptimized
          className="object-cover brightness-80 transition duration-500 group-hover:scale-[1.025] group-hover:brightness-100"
        />
      </div>
      <h3 className="mt-6 text-lg font-bold tracking-[-0.035em]">
        {project.title}
      </h3>
      <p className="text-muted-foreground mt-4 min-h-18 text-sm leading-6">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="bg-background/50 text-muted-foreground rounded-full border px-3 py-1 text-xs"
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
              "bg-background/40 size-10 rounded-xl",
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
    </FadeInItem>
  );
}
