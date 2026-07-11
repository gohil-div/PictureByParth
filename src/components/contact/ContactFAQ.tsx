import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How far in advance should we enquire?",
    answer:
      "Most couples reach out 9–14 months before their date, as we accept a limited number of weddings each year. Later enquiries are always welcome — we'll simply confirm availability first.",
  },
  {
    question: "Do you travel outside Italy?",
    answer:
      "Yes. While we're based in Florence, we regularly travel across Europe and beyond for weddings and elopements.",
  },
  {
    question: "How long until we receive our story?",
    answer:
      "A full gallery and edited story typically arrive within 8–10 weeks of your wedding day.",
  },
  {
    question: "Can we meet before booking?",
    answer:
      "Always. Every booking begins with a quiet conversation — by video call or in person — so we can make sure we're the right fit for your day.",
  },
];

export function ContactFAQ() {
  return (
    <section className="border-t border-charcoal/10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="editorial-eyebrow text-center">What to Expect</p>
        <h2 className="serif-display-roman mt-6 text-center text-4xl md:text-6xl">
          A few common questions.
        </h2>

        <Accordion type="single" collapsible className="mt-16">
          {faqs.map((f) => (
            <AccordionItem
              key={f.question}
              value={f.question}
              className="border-charcoal/15"
            >
              <AccordionTrigger className="serif-display-roman text-xl hover:no-underline md:text-2xl">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-charcoal-soft">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
