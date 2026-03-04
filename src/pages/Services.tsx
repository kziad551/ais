import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Lightbulb, Code2, Workflow, Bot, GraduationCap, ShieldCheck, CheckCircle2 } from "lucide-react";
import websiteBackground from "@/assets/website-background.webp";

const services = [
  {
    id: "consultancy",
    icon: Lightbulb,
    title: "AI Consultancy & Strategy",
    what: "We help organizations identify where AI creates real value — through structured discovery workshops, use-case prioritization, feasibility assessments, and AI roadmap development.",
    outcomes: ["Clear AI roadmap", "Prioritized use cases", "ROI projection", "Stakeholder alignment"],
    deliverables: ["Discovery workshop report", "Use-case scoring matrix", "Strategic AI roadmap", "Executive briefing"],
    inputs: ["Business objectives", "Current process documentation", "Stakeholder access"],
  },
  {
    id: "software",
    icon: Code2,
    title: "AI Software Development",
    what: "We build custom AI-powered tools that integrate into your existing workflows — intelligent copilots, enterprise search (RAG), analytics dashboards, and system integrations.",
    outcomes: ["Faster decision-making", "Reduced manual effort", "Better data access", "Seamless integration"],
    deliverables: ["Custom AI application", "Integration documentation", "User training", "Support plan"],
    inputs: ["Technical architecture overview", "Data sources", "User requirements"],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Smart Automation",
    what: "We design and deploy end-to-end workflow automation across your systems — email processing, document handling, ticketing, approvals, and reporting pipelines.",
    outcomes: ["Reduced processing time", "Fewer errors", "Scalable operations", "Audit trails"],
    deliverables: ["Automated workflows", "Process documentation", "Monitoring setup", "Training materials"],
    inputs: ["Current workflow maps", "System access", "Business rules"],
  },
  {
    id: "agentic",
    icon: Bot,
    title: "Agentic AI Systems",
    what: "We build multi-step autonomous AI workflows that operate with human oversight — intelligent agents that execute complex tasks within defined boundaries and escalation policies.",
    outcomes: ["Autonomous task execution", "Human-in-the-loop control", "Quality assurance", "Operational efficiency"],
    deliverables: ["Agentic system architecture", "Governance framework", "Monitoring dashboard", "Escalation protocols"],
    inputs: ["Process requirements", "Decision boundaries", "Oversight preferences"],
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training & Enablement",
    what: "We upskill your teams to work effectively with AI — from executive awareness sessions to hands-on workshops and adoption playbooks.",
    outcomes: ["AI-literate teams", "Faster adoption", "Reduced resistance", "Sustainable AI culture"],
    deliverables: ["Training curriculum", "Workshop materials", "Adoption playbook", "Assessment framework"],
    inputs: ["Team profiles", "Current skill levels", "Learning objectives"],
  },
  {
    id: "governance",
    icon: ShieldCheck,
    title: "Responsible AI & Governance",
    what: "We establish policies, risk frameworks, monitoring systems, and auditability for your AI deployments — ensuring responsible, transparent, and compliant operations.",
    outcomes: ["Regulatory compliance", "Risk mitigation", "Stakeholder trust", "Operational transparency"],
    deliverables: ["Governance policy document", "Risk assessment", "Monitoring framework", "Audit procedures"],
    inputs: ["Regulatory requirements", "Organizational policies", "Risk tolerance"],
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [location]);

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
            <p className="text-sm font-semibold uppercase tracking-widest text-violet/80 mb-3">Our Services</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Enterprise AI Services
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto">
              From strategy to deployment, we deliver structured, governed AI solutions that create measurable business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              id={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${i > 0 ? "pt-16 border-t border-border" : ""}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-violet/10 flex items-center justify-center">
                    <s.icon size={22} className="text-violet" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.what}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-violet mb-3">Outcomes</h4>
                  <div className="flex flex-wrap gap-2">
                    {s.outcomes.map((o) => (
                      <span key={o} className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-muted text-foreground font-medium">
                        <CheckCircle2 size={14} className="text-violet" /> {o}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-violet mb-3">Deliverables</h4>
                  <ul className="space-y-1.5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet/40" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-violet mb-3">Client Inputs</h4>
                  <ul className="space-y-1.5">
                    {s.inputs.map((inp) => (
                      <li key={inp} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-navy/30" /> {inp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
