import { Eye, Shield, BarChart3, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Eye, label: "Human oversight by design" },
  { icon: Shield, label: "Governed & secure" },
  { icon: BarChart3, label: "Measurable outcomes" },
  { icon: Building2, label: "Enterprise-ready delivery" },
];

const TrustStrip = () => {
  return (
    <section className="section-padding py-16 bg-muted/50">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <item.icon size={22} className="text-primary-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
