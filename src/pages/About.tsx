import { motion } from "framer-motion";
import websiteBackground from "@/assets/website-background.webp";

const About = () => {
  return (
    <>
      {/* Hero with banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero-bg" />
        <div className="absolute inset-0 opacity-10">
          <img src={websiteBackground} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet/80 mb-3">About Us</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Who We Are
            </h1>
            <div className="gradient-line max-w-24 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">About AIS</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>AIS — Agentic Artificial Intelligence Developing Services — is an enterprise AI company that designs, builds, and deploys practical AI solutions for real business environments.</p>
                <p>We specialize in agentic AI systems, intelligent automation, custom AI software, and strategic consulting — helping organizations move from exploration to measurable AI outcomes.</p>
                <p>Our approach is grounded in human oversight, responsible governance, and structured delivery. We believe AI should augment people, not replace them — enabling teams to lead with better intelligence, clearer decisions, and more efficient operations.</p>
                <p>AIS works across industries including finance, healthcare, government, logistics, education, and professional services. Every engagement starts with understanding your organization's real challenges and ends with deployed, governed, and measurable solutions.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">Our Identity & Logo Meaning</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>The AIS identity is built on modular squares — each block represents a system, a decision unit, a workflow, or a sector. These blocks connect to form structured agentic ecosystems.</p>
                <p>Humans supervise and guide. AI executes within boundaries. AIS connects these blocks into cohesive, governed systems that deliver real outcomes.</p>
                <p>Our visual language reflects this philosophy: clean geometry, structured layouts, and purposeful connections — never chaotic, always intentional.</p>
              </div>
              <div className="mt-8 grid grid-cols-4 gap-2">
                {[...Array(12)].map((_, i) => (
                  <motion.div key={i} className="aspect-square rounded-lg border-2 border-violet/20 bg-violet/5" whileHover={{ scale: 1.1, borderColor: "hsl(280 42% 40% / 0.5)" }} transition={{ duration: 0.2 }} />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Leadership</h2>
            <p className="text-muted-foreground">Team profiles — to be provided.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
