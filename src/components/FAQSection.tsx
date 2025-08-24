import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQ = {
  q: string;
  a: string;
};

const faqs: FAQ[] = [
  {
    q: "What makes Pania products different?",
    a: "We source directly from trusted farms and artisan producers, focusing on traditional methods, clean ingredients, and small-batch quality for freshness and authenticity.",
  },
  {
    q: "Do you ship across India?",
    a: "Yes. We ship pan-India with reliable courier partners. Shipping timelines typically range from 3–7 business days depending on your location.",
  },
  {
    q: "What is your return or replacement policy?",
    a: "If your order is damaged, incorrect, or compromised in quality, contact us within 48 hours of delivery. We’ll arrange a prompt replacement or resolution.",
  },
  {
    q: "How should I store ghee, oils, and spices?",
    a: "Store in a cool, dry place away from direct sunlight. Use clean, dry spoons and keep containers tightly sealed to preserve freshness and aroma.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl text-rich-brown">Frequently Asked Questions</h2>
          <p className="mt-3 text-rich-brown/70">Answers to common questions about our products, shipping, and care.</p>
        </div>

        <div className="mx-auto max-w-3xl px-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left text-lg md:text-xl text-rich-brown justify-start tracking-tight">
                  <span className="font-bold mr-3 tracking-tight">Q{idx + 1}.</span>
                  <span className="tracking-tight">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-rich-brown/80 leading-relaxed text-left tracking-tight">
                  <div className="ml-12 mt-2">
                    {item.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
