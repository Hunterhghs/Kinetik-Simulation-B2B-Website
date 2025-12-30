import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What counts as a “signal” in Kinetik?",
    a: "A signal is any observable event that can change how you prioritize or route revenue work — from CRM activity and web engagement to product usage and enrichment updates. Kinetik normalizes and timestamps signals so they can be measured and audited.",
  },
  {
    q: "How do you reduce false positives?",
    a: "Kinetik applies operator-controlled thresholds, verification rules, and time decay. Every score can include reason codes so teams can explain why an account was prioritized (or not).",
  },
  {
    q: "Does this replace our CRM or MAP?",
    a: "No. Kinetik is designed to sit alongside your existing stack: ingest signals, unify them, and push actions back into the systems your teams already operate in.",
  },
  {
    q: "What does a typical rollout look like?",
    a: "Start with one measurable workflow (e.g., signal-based routing or SLA enforcement). Define governance rules, integrate key systems, and validate that the workflow changes outcomes you can quantify.",
  },
];

export function AccordionFAQ() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Built for operators who need clarity"
          description="Enterprise teams care about provenance, governance, and measurement. These are the questions we design around."
        />
        <div className="mt-10">
          <Accordion>
            {faqs.map((f, idx) => (
              <AccordionItem
                key={f.q}
                title={f.q}
                defaultOpen={idx === 0}
              >
                {f.a}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
