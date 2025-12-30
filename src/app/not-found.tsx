import Link from "next/link";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-16 md:py-20">
      <Container className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Go to homepage
          </ButtonLink>
          <Link
            href="/resources"
            className="text-sm font-medium text-primary underline underline-offset-4 sm:self-center"
          >
            Browse resources
          </Link>
        </div>
      </Container>
    </section>
  );
}
