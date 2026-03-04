import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import aisLogo from "@/assets/ais-logo.webp";

const Footer = () => {
  return (
    <footer className="gradient-hero-bg text-primary-foreground">
      <div className="container-wide mx-auto section-padding pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={aisLogo} alt="AIS Logo" className="h-10 mb-4 brightness-200" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              AIS works with organizations seeking structured, secure, and governed AI implementation.
              Share your objectives or current challenges, and our team will assess feasibility, impact, and alignment before proposing a clear roadmap.
            </p>
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
                { label: "Contact Us", path: "/contact" },
              ].map((item) => (
                <Link key={item.path} to={item.path} className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
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
        <div className="text-center text-sm text-primary-foreground/40">
          ©️ 2025 AIS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
