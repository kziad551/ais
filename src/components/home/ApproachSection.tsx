import { motion } from "framer-motion";

const ApproachSection = () => {
  return (
    <section className="section-padding gradient-hero-bg relative overflow-hidden">
      {/* Modular blocks grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-3 p-8 opacity-[0.06]">
          {[...Array(48)].map((_, i) => (
            <motion.div
              key={i}
              className="rounded-lg border border-primary-foreground/30"
              whileHover={{ scale: 1.1, opacity: 1 }}
              initial={{ opacity: Math.random() * 0.5 + 0.2 }}
              animate={{
                opacity: [Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.3, Math.random() * 0.3 + 0.1],
              }}
              transition={{ duration: 4 + Math.random() * 3, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      <div className="relative container-narrow mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-violet/80 mb-3">Our Approach</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8">
            Human-Centered, Governed AI —<br /> Built for the Real World
          </h2>
          <div className="gradient-line max-w-24 mx-auto mb-10" />
          <blockquote className="max-w-2xl mx-auto text-lg sm:text-xl text-primary-foreground/70 italic leading-relaxed">
            "We believe the future of AI is not about replacing people, but about enabling them to lead with better intelligence."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
