import { motion } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover & Prioritize",
    desc: "We assess your organization's readiness, identify high-impact use cases, and build a prioritized roadmap aligned with your objectives.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & Build",
    desc: "Our team architects and develops tailored AI solutions — integrating with your existing systems and workflows with clear governance built in.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy, Enable & Govern",
    desc: "We deploy, train your teams, and establish monitoring and governance frameworks for sustained, responsible AI operations.",
  },
];

const DeliveryProcess = () => {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">How We Deliver</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Delivery Process
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[16.6%] right-[16.6%] h-0.5">
            <div className="gradient-line w-full" />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 shadow-lg">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-violet mb-2 block">Step {s.step}</span>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryProcess;
