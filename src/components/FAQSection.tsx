import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

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
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-terracotta rounded-xl mb-6 shadow-md">
            <HelpCircle className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-rich-brown mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-terracotta mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-rich-brown/70 max-w-2xl mx-auto leading-relaxed">
            Answers to common questions about our products, shipping, and care.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${idx}`}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-base md:text-lg font-medium text-white leading-tight" style={{ fontFamily: 'Soria, serif' }}>
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-rich-brown/80 leading-relaxed text-sm md:text-base" style={{ fontFamily: 'Soria, serif' }}>
                        {item.a}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
