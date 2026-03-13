import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";
import footerLogo from "@/assets/black-white.webp";

const Footer = () => {
  const location = useLocation();

  const handleNavClick = (path: string) => (e: React.MouseEvent) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="gradient-hero-bg text-primary-foreground">
      <div className="container-wide mx-auto section-padding pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={footerLogo} alt="AIS Logo" className="h-16 mb-4 w-auto" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5">
              AIS works with organizations seeking structured, secure, and governed AI implementation.
              Share your objectives or current challenges, and our team will assess feasibility, impact, and alignment before proposing a clear roadmap.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/60 hover:bg-primary-foreground/10 transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/60 hover:bg-primary-foreground/10 transition-all"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">Navigation</h4>
            <div className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Our Approach", path: "/our-approach" },
                { label: "Join Us", path: "/join-us" },
                { label: "Contact Us", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick(item.path)}
                  className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">Email</h4>
            <p className="text-sm text-primary-foreground/70 mb-1">For strategic inquiries, partnerships, or project discussions:</p>
            <a href="mailto:info@uaeais.com" className="text-sm text-primary-foreground hover:underline flex items-center gap-2">
              <Mail size={14} /> info@uaeais.com
            </a>

            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mt-6 mb-4 text-primary-foreground/50">Phone No</h4>
            <p className="text-sm text-primary-foreground/70 mb-1">To schedule an initial assessment call:</p>
            <div className="space-y-1">
              <a href="tel:+96170842637" className="text-sm text-primary-foreground hover:underline flex items-center gap-2">
                <Phone size={14} /> +961 70 842 637
              </a>
              <a href="tel:+96181400324" className="text-sm text-primary-foreground hover:underline flex items-center gap-2">
                <Phone size={14} /> +961 81 400 324
              </a>
              <a href="tel:+971000000000" className="text-sm text-primary-foreground hover:underline flex items-center gap-2">
                <Phone size={14} /> UAE: +971 XX XXX XXXX
              </a>
            </div>
          </div>

          {/* Presence */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">Our Presence</h4>
            <p className="text-sm text-primary-foreground/70 mb-2">AIS operates across:</p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground">
              <MapPin size={14} /> Lebanon – United Arab Emirates
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="gradient-line opacity-30 mb-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-primary-foreground/40 space-y-1">
          <p>Copyright © 2025–2026 AIS. All Rights Reserved.</p>
          <p className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            <span className="hover:text-primary-foreground/70 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-primary-foreground/20">|</span>
            <span className="hover:text-primary-foreground/70 cursor-pointer transition-colors">Terms of Use</span>
            <span className="text-primary-foreground/20">|</span>
            <span className="hover:text-primary-foreground/70 cursor-pointer transition-colors">Responsible AI</span>
            <span className="text-primary-foreground/20">|</span>
            <span className="hover:text-primary-foreground/70 cursor-pointer transition-colors">AI Ethics</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
