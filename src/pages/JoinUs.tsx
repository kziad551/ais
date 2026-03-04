import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, Sparkles } from "lucide-react";

const JoinUs = () => {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero-bg pt-32 pb-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/80 text-sm mb-6">
              <Users size={14} /> We're Building the Future
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Join AIS
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto">
              We're looking for talented people who believe in practical, human-centered AI. If you're passionate about building intelligent systems that make a difference, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Open Roles */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Open Roles</h2>
              <div className="glass-card p-8 text-center">
                <Sparkles size={32} className="text-violet mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">Open positions coming soon.</p>
                <p className="text-sm text-muted-foreground/70">Submit your interest below and we'll reach out when roles open.</p>
              </div>
            </motion.div>

            {/* Interest Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Submit Your Interest</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Full Name" className="bg-card" />
                <Input type="email" placeholder="Email Address" className="bg-card" />
                <Input placeholder="Role / Area of Interest" className="bg-card" />
                <Textarea placeholder="Tell us about yourself and what drives you..." rows={4} className="bg-card" />
                <Button variant="gradient" size="lg" className="w-full rounded-full">
                  Submit Interest
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinUs;
