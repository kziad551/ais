import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import aisLogo from "@/assets/ais-logo.webp";

const services = [
  { label: "AI Consultancy & Strategy", anchor: "consultancy" },
  { label: "AI Software Development", anchor: "software" },
  { label: "Smart Automation", anchor: "automation" },
  { label: "Agentic AI Systems", anchor: "agentic" },
  { label: "Training & Enablement", anchor: "training" },
  { label: "Responsible AI & Governance", anchor: "governance" },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services", submenu: services },
  { label: "Our Approach", path: "/our-approach" },
  { label: "Join Us", path: "/join-us" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container-wide mx-auto flex items-center justify-between h-20 md:h-24 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={aisLogo} alt="AIS Logo" className="h-16 md:h-20 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.submenu && setServicesOpen(true)}
                onMouseLeave={() => item.submenu && setServicesOpen(false)}
              >
                {item.submenu ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-violet bg-background shadow-sm"
                        : "text-foreground/70 hover:text-foreground hover:bg-background/50"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link to={item.path}>
                    <button
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        location.pathname === item.path
                          ? "text-violet bg-background shadow-sm"
                          : "text-foreground/70 hover:text-foreground hover:bg-background/50"
                      }`}
                    >
                      {item.label}
                    </button>
                  </Link>
                )}

                {/* Services Dropdown */}
                {item.submenu && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute left-0 top-full mt-2 bg-card rounded-xl border shadow-lg p-2 min-w-[260px] z-50"
                      >
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.anchor}
                            to={`/services#${sub.anchor}`}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-2.5 text-sm rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <Link to="/contact">
            <Button variant="gradient" size="default" className="rounded-full">
              Book a Meeting
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          location.pathname === item.path ? "bg-muted text-violet" : "text-foreground/70 hover:bg-muted"
                        }`}
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.anchor}
                                to={`/services#${sub.anchor}`}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-2.5 text-sm text-foreground/60 hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={item.path} onClick={() => setMobileOpen(false)}>
                      <div className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === item.path ? "bg-muted text-violet" : "text-foreground/70 hover:bg-muted"
                      }`}>
                        {item.label}
                      </div>
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="gradient" className="w-full rounded-full">Book a Meeting</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
