"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "../links";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex size-9 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        aria-label="Toggle menu"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>

      <div
        className={cn(
          "absolute left-0 top-full w-full border-b bg-background shadow-2xl transition-all duration-200",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        )}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/70 py-4 text-sm font-medium text-muted-foreground transition-colors last:border-b-0 hover:text-foreground focus:outline-none focus-visible:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
