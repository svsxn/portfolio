import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, SquareArrowOutUpRight } from "lucide-react";
import Label from "../label";

export default function ProjectCard() {
  return (
    <div className="bg-card border rounded-xl px-8 py-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label primaryText="SAAS Dashboard" />
          <h3 className="text-2xl font-semibold tracking-tight">
            Realtime analytics platform
          </h3>
          <p className="max-w-76 text-sm text-muted-foreground leading-relaxed">
            Built with Next.js, Supabase, and PostgreSQL, featuring realtime
            updates, authentication, and scalable API architecture.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="text-xs bg-muted px-2 py-1 rounded-sm">Next.js</div>
          <div className="text-xs bg-muted px-2 py-1 rounded-sm">Supabase</div>
          <div className="text-xs bg-muted px-2 py-1 rounded-sm">
            TypeScript
          </div>
          <div className="text-xs bg-muted px-2 py-1 rounded-sm">Tailwind</div>
        </div>
        <div className="flex gap-6">
          <Button
            variant="secondary"
            className="text-[13px] px-6 py-5 rounded-sm bg-accent hover:bg-accent hover:brightness-110 hover:-translate-y-0.5"
          >
            Live Demo
            <ArrowUpRightIcon className="ml-3" />
          </Button>
          <Button
            variant="outline"
            className="text-[13px] px-6 py-5 rounded-sm"
          >
            GitHub
            <SquareArrowOutUpRight className="ml-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
