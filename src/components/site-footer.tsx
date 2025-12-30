import Link from "next/link";
import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-soft">
                K
              </div>
              <div>
                <div className="text-sm font-semibold">Kinetik</div>
                <div className="text-xs text-muted-foreground">
                  Signal intelligence for RevOps workflows
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Kinetik unifies enterprise signals and turns them into explainable
              intelligence and measurable actions — without forcing teams to
              change how they work.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Signals</Badge>
              <Badge>Governance</Badge>
              <Badge>Measurement</Badge>
              <Badge>Workflows</Badge>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-sm font-semibold">Product</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link className="block hover:text-foreground" href="/product">
                  Platform overview
                </Link>
                <Link className="block hover:text-foreground" href="/integrations">
                  Integrations
                </Link>
                <Link className="block hover:text-foreground" href="/demo">
                  Book a demo
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold">Solutions</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link className="block hover:text-foreground" href="/solutions/revops">
                  RevOps
                </Link>
                <Link className="block hover:text-foreground" href="/solutions/sales">
                  Sales
                </Link>
                <Link className="block hover:text-foreground" href="/solutions/marketing">
                  Marketing
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold">Trust</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link className="block hover:text-foreground" href="/trust/security">
                  Security
                </Link>
                <Link className="block hover:text-foreground" href="/trust/privacy">
                  Privacy
                </Link>
                <Link className="block hover:text-foreground" href="/trust/compliance">
                  Compliance
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Kinetik. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4">
            <Link className="hover:text-foreground" href="/status">
              Status
            </Link>
            <Link className="hover:text-foreground" href="/resources">
              Resources
            </Link>
            <a className="hover:text-foreground" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
