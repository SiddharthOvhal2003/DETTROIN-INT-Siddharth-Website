import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const quickLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Academics", path: "/academics" },
  { title: "Admissions", path: "/admissions" },
  { title: "Facilities", path: "/facilities" },
  { title: "Gallery", path: "/gallery" },
  { title: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: FaYoutube,
    href: "#",
    label: "YouTube",
  },
];

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-blue-500" />

              <span className="text-2xl font-bold text-white">
                KIS Aligarh
              </span>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              Providing quality education through academic excellence,
              innovation, and holistic development to prepare students for a
              bright future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-blue-500" />
                <p>Aligarh, Uttar Pradesh, India</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <p>info@kisaligarh.com</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition-all duration-300 hover:bg-blue-600 hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} KIS Aligarh. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;