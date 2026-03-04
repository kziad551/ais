import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does AIS ensure data security during AI implementation?",
    a: "Security is foundational to every AIS engagement. We apply enterprise-grade data governance, encryption, access controls, and compliance checks throughout design, development, and deployment — tailored to your organization's requirements.",
  },
  {
    q: "What governance frameworks does AIS implement?",
    a: "We establish responsible AI governance including risk thresholds, audit trails, monitoring dashboards, human-in-the-loop checkpoints, and clear escalation policies — ensuring AI systems operate within defined boundaries.",
  },
  {
    q: "How long does a typical AI engagement take?",
    a: "Timelines vary by scope. Discovery and roadmap phases typically take 2–4 weeks. Development sprints run 6–12 weeks. We provide clear milestones and iterative delivery so you see progress early and often.",
  },
  {
    q: "What data does AIS need to get started?",
    a: "Initial discovery requires access to relevant business processes, sample data (where applicable), and stakeholder input. We work within your data policies and can begin with anonymized or synthetic data where needed.",
  },
  {
    q: "Does AIS replace existing teams or processes?",
    a: "No. AIS builds AI solutions that augment and empower your existing teams — not replace them. Our philosophy centers on human oversight and enablement. AI systems we build are designed to make your people more effective.",
  },
  {
    q: "Can AIS integrate with our existing enterprise systems?",
    a: "Yes. We design solutions to integrate with your current tech stack — CRMs, ERPs, document systems, email platforms, ticketing tools, and more. Interoperability is a core design principle.",
  },
  {
    q: "What industries does AIS serve?",
    a: "AIS works across sectors including finance, healthcare, government, logistics, education, and professional services. Our approach is industry-agnostic but outcome-specific — we focus on real business impact regardless of vertical.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">FAQ</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem value={`faq-${i}`} className="glass-card px-6 border rounded-xl">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
