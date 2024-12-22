import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Our free plan is available indefinitely. You can upgrade to a paid plan anytime to access more features and increased limits."
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of the next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and offer enterprise billing options for annual contracts."
  },
  {
    question: "Is there a long-term contract?",
    answer: "No, our paid plans are billed monthly with no long-term commitment. Enterprise plans can opt for annual billing."
  }
];

export function PricingFAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}