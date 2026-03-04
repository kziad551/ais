import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CalendarDays } from "lucide-react";
import websiteBackground from "@/assets/website-background.webp";

const Contact = () => {
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
            <p className="text-sm font-semibold uppercase tracking-widest text-violet/80 mb-3">Get In Touch</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto">
              Share your objectives or current challenges. Our team will assess feasibility, impact, and alignment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" className="bg-card" />
                  <Input type="email" placeholder="Email Address" className="bg-card" />
                </div>
                <Input placeholder="Company / Organization" className="bg-card" />
                <Input placeholder="Goal (e.g., Explore AI automation, Build copilot)" className="bg-card" />
                <Textarea placeholder="Tell us about your project or challenge..." rows={5} className="bg-card" />
                <Button variant="gradient" size="lg" className="rounded-full">Send Message</Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Mail size={18} className="text-violet" /> Email</h3>
                <p className="text-sm text-muted-foreground mb-1">For strategic inquiries, partnerships, or project discussions:</p>
                <a href="mailto:info@uaeais.com" className="text-sm text-primary hover:underline">info@uaeais.com</a>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Phone size={18} className="text-violet" /> Phone</h3>
                <p className="text-sm text-muted-foreground mb-1">To schedule an initial assessment call:</p>
                <div className="space-y-1">
                  <a href="tel:+96170842637" className="block text-sm text-primary hover:underline">+961 70 842 637</a>
                  <a href="tel:+96181400324" className="block text-sm text-primary hover:underline">+961 81 400 324</a>
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2"><MapPin size={18} className="text-violet" /> Our Presence</h3>
                <p className="text-sm text-muted-foreground">Lebanon – United Arab Emirates</p>
              </div>
              <div className="glass-card p-6 text-center">
                <CalendarDays size={32} className="text-violet mx-auto mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-2">Book a Meeting</h3>
                <p className="text-sm text-muted-foreground mb-4">Schedule a call directly with our team.</p>
                <Button variant="outline-gradient" size="default" className="rounded-full">Open Calendar</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
