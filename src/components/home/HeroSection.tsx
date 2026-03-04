import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "@/assets/website-background.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero-bg overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-navy/20 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Floating squares */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-primary-foreground/10 rounded-lg animate-float"
            style={{
              width: `${30 + i * 15}px`,
              height: `${30 + i * 15}px`,
              top: `${15 + i * 12}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/80 text-sm mb-8">
              <Sparkles size={14} />
              Human-Centered AI. Real Outcomes.
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
              Practical Agentic AI for{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(280 70% 70%), hsl(230 70% 70%))" }}>
                Real Business
              </span>{" "}
              Environments
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/60 leading-relaxed mb-10 max-w-2xl">
              AIS builds practical AI solutions for real business environments — from smart software and intelligent automation to advanced AI agents — backed by consulting and training.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button variant="hero" size="lg" className="group">
                  Explore Our Services
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg">
                  Talk to AIS
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
