import { motion } from "framer-motion";
import { MessageSquare, Search, LayoutDashboard, Workflow, ShieldCheck } from "lucide-react";

const cases = [
  { icon: MessageSquare, title: "Copilots & Internal Assistants" },
  { icon: Search, title: "Enterprise Search (RAG)" },
  { icon: LayoutDashboard, title: "Decision Support Dashboards" },
  { icon: Workflow, title: "Workflow Automation" },
  { icon: ShieldCheck, title: "Governance Frameworks" },
];

const UseCases = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">Use Cases</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Built for Real Organizations
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-5 text-center flex flex-col items-center gap-3"
            >
              <c.icon size={28} className="text-violet" />
              <p className="text-sm font-medium text-foreground leading-snug">{c.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
