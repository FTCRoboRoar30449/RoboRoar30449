import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logo from "@/assets/logo-light.png";

const Footer = () => {
  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Competitions", path: "/competitions" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Join", path: "/join" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="RoboRoar 30449" className="h-20 w-auto" />
            <p className="text-white/70 text-sm leading-relaxed">
              RoboRoar 30449 is a middle school all-girls FIRST Tech Challenge 
              robotics team empowering young women through innovation, teamwork, 
              and confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-2xl text-gold mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/70 hover:text-gold transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-2xl text-gold mb-6">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="mailto:roboroar30449@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-white/50 text-sm">
              roboroar30449@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} RoboRoar 30449. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Inspiring girls to be tomorrow's STEM leaders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
