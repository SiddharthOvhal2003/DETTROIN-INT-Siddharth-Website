import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import { Button } from "@/components/ui/button";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-3">
          <Button
            className="hidden rounded-xl bg-blue-600 px-6 py-6 text-white transition-all hover:scale-105 hover:bg-blue-700 lg:flex"
          >
            Apply Now
          </Button>

          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;