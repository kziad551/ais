import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lightbulb, Code2, Workflow, Bot, GraduationCap, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "consultancy",
    icon: Lightbulb,
    number: "01",
    title: "AI Consultancy & Strategy",
    tagline: "Clarity before code",
    what: "We help organizations identify where AI creates real value — through structured discovery workshops, use-case prioritization, feasibility assessments, and AI roadmap development.",
    outcomes: ["Clear AI roadmap", "Prioritized use cases", "ROI projection", "Stakeholder alignment"],
    deliverables: ["Discovery workshop report", "Use-case scoring matrix", "Strategic AI roadmap", "Executive briefing"],
    inputs: ["Business objectives", "Current process documentation", "Stakeholder access"],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accent: "violet",
  },
  {
    id: "software",
    icon: Code2,
    number: "02",
    title: "AI Software Development",
    tagline: "Purpose-built, not off-the-shelf",
    what: "We build custom AI-powered tools that integrate into your existing workflows — intelligent copilots, enterprise search (RAG), analytics dashboards, and system integrations.",
    outcomes: ["Faster decision-making", "Reduced manual effort", "Better data access", "Seamless integration"],
    deliverables: ["Custom AI application", "Integration documentation", "User training", "Support plan"],
    inputs: ["Technical architecture overview", "Data sources", "User requirements"],
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    accent: "blue",
  },
  {
    id: "automation",
    icon: Workflow,
    number: "03",
    title: "Smart Automation",
    tagline: "Eliminate the repetitive, amplify the human",
    what: "We design and deploy end-to-end workflow automation across your systems — email processing, document handling, ticketing, approvals, and reporting pipelines.",
    outcomes: ["Reduced processing time", "Fewer errors", "Scalable operations", "Audit trails"],
    deliverables: ["Automated workflows", "Process documentation", "Monitoring setup", "Training materials"],
    inputs: ["Current workflow maps", "System access", "Business rules"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accent: "emerald",
  },
  {
    id: "agentic",
    icon: Bot,
    number: "04",
    title: "Agentic AI Systems",
    tagline: "Autonomous execution, human governance",
    what: "We build multi-step autonomous AI workflows that operate with human oversight — intelligent agents that execute complex tasks within defined boundaries and escalation policies.",
    outcomes: ["Autonomous task execution", "Human-in-the-loop control", "Quality assurance", "Operational efficiency"],
    deliverables: ["Agentic system architecture", "Governance framework", "Monitoring dashboard", "Escalation protocols"],
    inputs: ["Process requirements", "Decision boundaries", "Oversight preferences"],
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    accent: "orange",
  },
  {
    id: "training",
    icon: GraduationCap,
    number: "05",
    title: "Training & Enablement",
    tagline: "AI fluency across every level",
    what: "We upskill your teams to work effectively with AI — from executive awareness sessions to hands-on workshops and adoption playbooks.",
    outcomes: ["AI-literate teams", "Faster adoption", "Reduced resistance", "Sustainable AI culture"],
    deliverables: ["Training curriculum", "Workshop materials", "Adoption playbook", "Assessment framework"],
    inputs: ["Team profiles", "Current skill levels", "Learning objectives"],
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    accent: "pink",
  },
  {
    id: "governance",
    icon: ShieldCheck,
    number: "06",
    title: "Responsible AI & Governance",
    tagline: "Trust built into every deployment",
    what: "We establish policies, risk frameworks, monitoring systems, and auditability for your AI deployments — ensuring responsible, transparent, and compliant operations.",
    outcomes: ["Regulatory compliance", "Risk mitigation", "Stakeholder trust", "Operational transparency"],
    deliverables: ["Governance policy document", "Risk assessment", "Monitoring framework", "Audit procedures"],
    inputs: ["Regulatory requirements", "Organizational policies", "Risk tolerance"],
    gradient: "from-indigo-500/20 via-slate-500/10 to-transparent",
    accent: "indigo",
  },
];

const accentColors: Record<string, { icon: string; badge: string; dot: string; border: string }> = {
  violet:  { icon: "bg-violet-500/15 text-violet-400",  badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",  dot: "bg-violet-400",  border: "border-violet-500/30" },
  blue:    { icon: "bg-blue-500/15 text-blue-400",      badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",        dot: "bg-blue-400",    border: "border-blue-500/30" },
  emerald: { icon: "bg-emerald-500/15 text-emerald-400",badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",dot: "bg-emerald-400", border: "border-emerald-500/30" },
  orange:  { icon: "bg-orange-500/15 text-orange-400",  badge: "bg-orange-500/10 text-orange-300 border-orange-500/20",  dot: "bg-orange-400",  border: "border-orange-500/30" },
  pink:    { icon: "bg-pink-500/15 text-pink-400",      badge: "bg-pink-500/10 text-pink-300 border-pink-500/20",        dot: "bg-pink-400",    border: "border-pink-500/30" },
  indigo:  { icon: "bg-indigo-500/15 text-indigo-400",  badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",  dot: "bg-indigo-400",  border: "border-indigo-500/30" },
};

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
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden gradient-hero-bg">
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-violet/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

        <div className="relative container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet/30 bg-violet/10 text-violet text-xs font-semibold uppercase tracking-widest mb-6">
              What We Offer
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Enterprise AI{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(280 70% 70%), hsl(230 70% 70%))" }}>
                Services
              </span>
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed">
              From strategy to deployment, we deliver structured, governed AI solutions that create measurable business value — built for how real organizations operate.
            </p>
          </motion.div>

          {/* Quick-jump pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mt-10"
          >
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-1.5 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground/60 text-xs font-medium hover:bg-primary-foreground/10 hover:text-primary-foreground/90 transition-all"
              >
                {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Service Cards ─────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((s, i) => {
            const colors = accentColors[s.accent];
            return (
              <motion.div
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="scroll-mt-28 group relative rounded-2xl border border-border bg-card overflow-hidden"
              >
                {/* Gradient wash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-0">
                  {/* ── Left panel ── */}
                  <div className="p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
                    <div>
                      {/* Number + icon row */}
                      <div className="flex items-start justify-between mb-6">
                        <span className="font-display text-6xl font-bold text-muted/40 leading-none select-none">
                          {s.number}
                        </span>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.icon}`}>
                          <s.icon size={22} />
                        </div>
                      </div>

                      <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${colors.dot.replace("bg-", "text-")}`}>
                        {s.tagline}
                      </p>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-snug">
                        {s.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                        {s.what}
                      </p>
                    </div>

                    <div className="mt-8">
                      <Link to="/contact">
                        <Button
                          variant="outline"
                          size="sm"
                          className="group/btn rounded-full text-xs font-medium"
                        >
                          Discuss this service
                          <ArrowRight size={14} className="ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* ── Right panel ── */}
                  <div className="p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {/* Outcomes */}
                    <div>
                      <h4 className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${colors.dot.replace("bg-", "text-")}`}>
                        Outcomes
                      </h4>
                      <div className="flex flex-col gap-2">
                        {s.outcomes.map((o) => (
                          <span
                            key={o}
                            className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg border ${colors.badge} font-medium`}
                          >
                            <CheckCircle2 size={12} className="shrink-0" />
                            {o}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-muted-foreground">
                        Deliverables
                      </h4>
                      <ul className="space-y-2.5">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-1.5 shrink-0`} />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Inputs */}
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-muted-foreground">
                        Client Inputs
                      </h4>
                      <ul className="space-y-2.5">
                        {s.inputs.map((inp) => (
                          <li key={inp} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 shrink-0" />
                            {inp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="gradient-hero-bg py-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Not sure where to start?
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto">
              Book a free discovery call and we'll help you identify the right services for your goals.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="lg" className="rounded-full">
                Book a Meeting <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
