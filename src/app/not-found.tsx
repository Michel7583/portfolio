import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container className="text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
          This page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The link may be outdated, or the page has moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </Container>
    </section>
  );
}
