import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Users, Sparkles } from "lucide-react";
import { toast } from "sonner";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_JOIN_US_ID || "";
const MAX_CV_SIZE_MB = 5;
const ACCEPTED_CV_TYPES = ".pdf,.doc,.docx";

const JoinUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      toast.error("Form is not configured for email delivery. Please set VITE_FORMSPREE_JOIN_US_ID.");
      return;
    }
    if (!cvFile) {
      toast.error("Please upload your CV.");
      return;
    }
    if (cvFile.size > MAX_CV_SIZE_MB * 1024 * 1024) {
      toast.error(`CV must be under ${MAX_CV_SIZE_MB} MB.`);
      return;
    }
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("Full Name", fullName);
      formData.append("Email", email);
      formData.append("Role / Area of Interest", role);
      formData.append("Message", message);
      formData.append("CV", cvFile);
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Send failed");
      toast.success("Interest submitted. We'll be in touch by email.");
      setFullName("");
      setEmail("");
      setRole("");
      setMessage("");
      setCvFile(null);
    } catch {
      toast.error("Something went wrong. Please try again or email us at info@uaeais.com.");
    } finally {
      setSubmitting(false);
    }
  };

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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  placeholder="Full Name"
                  className="bg-card"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-card"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  placeholder="Role / Area of Interest"
                  className="bg-card"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
                <Textarea
                  placeholder="Tell us about yourself and what drives you..."
                  rows={4}
                  className="bg-card"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="space-y-2">
                  <Label className="text-foreground">Upload your CV</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      key={cvFile ? cvFile.name : "no-file"}
                      type="file"
                      accept={ACCEPTED_CV_TYPES}
                      className="bg-card cursor-pointer file:cursor-pointer"
                      onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
                    />
                    {cvFile && (
                      <span className="text-sm text-muted-foreground truncate max-w-[140px]" title={cvFile.name}>
                        {cvFile.name}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">PDF or Word, max {MAX_CV_SIZE_MB} MB</p>
                </div>
                <Button variant="gradient" size="lg" className="w-full rounded-full" type="submit" disabled={submitting}>
                  {submitting ? "Sending…" : "Submit Interest"}
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
