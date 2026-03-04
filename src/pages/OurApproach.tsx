import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cpu, Building2, Users, FlaskConical, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import websiteBackground from "@/assets/website-background.webp";

const whoCards = [
  { icon: Cpu, title: "AI Engineers & System Architects" },
  { icon: Building2, title: "Enterprise Technology Leaders" },
  { icon: Users, title: "Operational Teams Deploying AI at Scale" },
  { icon: FlaskConical, title: "Researchers in Applied AI" },
  { icon: ShieldCheck, title: "AI Governance & Compliance Experts" },
];

const faqs = [
  {
    q: "How does AIS approach AI system design?",
    a: "AIS follows a governance-first architecture, ensuring every AI system is transparent, auditable, and aligned with operational requirements before deployment.",
  },
  {
    q: "What makes AIS different from experimental AI startups?",
    a: "AIS focuses on structured, governed AI deployment for real enterprise environments — not experimentation. Every solution is built with human oversight, compliance, and measurable outcomes in mind.",
  },
  {
    q: "Does AIS build custom AI solutions?",
    a: "Yes. AIS designs and builds custom AI-powered tools, intelligent agents, and automation workflows tailored to your organization's specific operational needs.",
  },
  {
    q: "How does AIS ensure AI governance and compliance?",
    a: "We establish governance policies, risk frameworks, monitoring systems, and auditability protocols for every AI deployment — ensuring responsible, transparent, and compliant operations.",
  },
  {
    q: "Who can collaborate with AIS?",
    a: "AIS collaborates with enterprises, government organizations, technology leaders, AI engineers, and any team seeking structured, governed AI implementation.",
  },
];

const OurApproach = () => {
  return (
    <>
      {/* Hero with banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero-bg" />
        <div className="absolute inset-0 opacity-10">
          <img src={websiteBackground} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-violet/80 mb-3">Understanding Structured AI Deployment</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              How AIS Designs and Deploys Structured AI
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-8">
              Explore how AIS designs, governs, and deploys AI systems in real operational environments.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="lg" className="rounded-full">
                Book a Meeting
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding" style={{ background: "var(--gradient-section)" }}>
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Build the Future of Structured AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AIS collaborates with engineers, researchers, and professionals who believe AI should be governed, human-centered, and operationally deployable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Who We Work With</h2>
            <div className="gradient-line max-w-16 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whoCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-violet/10 flex items-center justify-center mx-auto mb-5">
                  <card.icon size={26} className="text-violet" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-base">{card.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: "var(--gradient-section)" }}>
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Questions</h2>
            <div className="gradient-line max-w-16 mx-auto" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`q-${i}`} className="glass-card px-6 border-none">
                  <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-hero-bg section-padding">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Let's Talk About Your Organization
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8">
              AIS is structured to operate within real institutional, regulatory, and operational constraints.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="gradient" size="lg" className="rounded-full">Contact AIS</Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg">Book a Meeting</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurApproach;
