"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { ButtonLink, Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type NavItem = { label: string; href: string; description?: string };

const solutions: NavItem[] = [
  {
    label: "RevOps",
    href: "/solutions/revops",
    description: "Govern signal-based workflows, SLAs, and measurement.",
  },
  {
    label: "Sales",
    href: "/solutions/sales",
    description: "Prioritize timing, accounts, and territories with confidence.",
  },
  {
    label: "Marketing",
    href: "/solutions/marketing",
    description: "Activate buying-group signals and measure pipeline impact.",
  },
];

const resources: NavItem[] = [
  { label: "Blog", href: "/blog", description: "Operator-first thinking on signals + RevOps." },
  { label: "Guides", href: "/guides", description: "Step-by-step playbooks you can implement." },
  { label: "Benchmarks", href: "/benchmarks", description: "Templates and measurement frameworks." },
];

const company: NavItem[] = [
  { label: "About", href: "/company/about", description: "Why we’re building Kinetik." },
  { label: "Contact", href: "/company/contact", description: "Talk to the team." },
  { label: "Trust", href: "/trust/security", description: "Security, privacy, and compliance posture." },
];

function DesktopDropdown({
  label,
  items,
}: {
  label: string;
  items: NavItem[];
}) {
  return (
    <details className="group relative">
      <summary className="flex list-none cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-sm font-medium text-foreground hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        {label}
        <span className="text-muted-foreground transition-transform group-open:rotate-180">▾</span>
      </summary>
      <div className="absolute left-0 top-full z-50 mt-2 w-[320px] overflow-hidden rounded-xl border border-border bg-card shadow-soft">
        <div className="grid gap-1 p-2">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-lg px-3 py-2 hover:bg-muted/60"
            >
              <div className="text-sm font-medium">{it.label}</div>
              {it.description ? (
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {it.description}
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-soft">
              K
            </div>
            <span className="text-sm font-semibold tracking-tight">Kinetik</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          <Link
            href="/product"
            className={cn(
              "rounded-md px-2 py-1 text-sm font-medium hover:bg-muted/60",
              pathname === "/product" && "bg-muted/60"
            )}
          >
            Product
          </Link>

          <DesktopDropdown label="Solutions" items={solutions} />

          <Link
            href="/integrations"
            className={cn(
              "rounded-md px-2 py-1 text-sm font-medium hover:bg-muted/60",
              pathname.startsWith("/integrations") && "bg-muted/60"
            )}
          >
            Integrations
          </Link>

          <Link
            href="/customers"
            className={cn(
              "rounded-md px-2 py-1 text-sm font-medium hover:bg-muted/60",
              pathname.startsWith("/customers") && "bg-muted/60"
            )}
          >
            Customers
          </Link>

          <DesktopDropdown label="Resources" items={resources} />
          <DesktopDropdown label="Company" items={company} />
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <ButtonLink href="/demo" size="md">
            Book a demo
          </ButtonLink>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            className="h-10 w-10 p-0"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden">
          <Separator />
          <div className="container py-4">
            <div className="grid gap-2">
              <Link className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/60" href="/product">
                Product
              </Link>

              <div className="rounded-lg border border-border bg-card p-2">
                <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Solutions
                </div>
                {solutions.map((it) => (
                  <Link key={it.href} href={it.href} className="block rounded-md px-3 py-2 text-sm hover:bg-muted/60">
                    <div className="font-medium">{it.label}</div>
                    <div className="text-xs text-muted-foreground">{it.description}</div>
                  </Link>
                ))}
              </div>

              <Link className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/60" href="/integrations">
                Integrations
              </Link>
              <Link className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/60" href="/customers">
                Customers
              </Link>

              <div className="rounded-lg border border-border bg-card p-2">
                <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Resources
                </div>
                {resources.map((it) => (
                  <Link key={it.href} href={it.href} className="block rounded-md px-3 py-2 text-sm hover:bg-muted/60">
                    <div className="font-medium">{it.label}</div>
                    <div className="text-xs text-muted-foreground">{it.description}</div>
                  </Link>
                ))}
              </div>

              <div className="rounded-lg border border-border bg-card p-2">
                <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Company
                </div>
                {company.map((it) => (
                  <Link key={it.href} href={it.href} className="block rounded-md px-3 py-2 text-sm hover:bg-muted/60">
                    <div className="font-medium">{it.label}</div>
                    <div className="text-xs text-muted-foreground">{it.description}</div>
                  </Link>
                ))}
              </div>

              <ButtonLink href="/demo" size="lg" className="mt-2 w-full justify-center">
                Book a demo
              </ButtonLink>
              <ButtonLink href="/demo#tour" variant="secondary" size="lg" className="w-full justify-center">
                Watch 90-sec tour
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
