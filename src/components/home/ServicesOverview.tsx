import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, Code2, Workflow, Bot, GraduationCap, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "AI Consultancy & Strategy",
    desc: "Use-case discovery, prioritization, ROI assessment, and AI roadmap development for your organization.",
    outcomes: ["Clarity", "Prioritization", "ROI"],
  },
  {
    icon: Code2,
    title: "AI Software Development",
    desc: "Custom AI tools integrated into your workflows — copilots, RAG/enterprise search, dashboards, and integrations.",
    outcomes: ["Efficiency", "Integration", "Speed"],
  },
  {
    icon: Workflow,
    title: "Smart Automation",
    desc: "End-to-end workflow automation across systems — email, docs, ticketing, approvals, and reporting.",
    outcomes: ["Productivity", "Accuracy", "Scale"],
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    desc: "Multi-step autonomous workflows with human oversight — autonomy within boundaries.",
    outcomes: ["Autonomy", "Oversight", "Quality"],
  },
  {
    icon: GraduationCap,
    title: "Training & Enablement",
    desc: "Executive training, team upskilling, applied workshops, and adoption playbooks.",
    outcomes: ["Adoption", "Capability", "Culture"],
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI & Governance",
    desc: "Policies, risk thresholds, monitoring, and auditability for enterprise AI deployments.",
    outcomes: ["Compliance", "Trust", "Reduced Risk"],
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">What We Do</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Enterprise AI Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-6 md:p-8 flex flex-col"
            >
              <div className="w-11 h-11 rounded-lg bg-violet/10 flex items-center justify-center mb-5">
                <s.icon size={22} className="text-violet" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.outcomes.map((o) => (
                  <span key={o} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                    {o}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline-gradient" size="lg" className="group">
              View All Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
