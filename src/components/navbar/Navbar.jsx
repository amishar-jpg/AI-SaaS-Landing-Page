import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Analytics", href: "#analytics" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.7)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "none",
        }}
      >
        <div
          className="container mx-auto"
          style={{
            paddingLeft: "2rem",
            paddingRight: "2rem",
            maxWidth: "1440px",
          }}
        >
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 select-none"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {/* <span
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 1L14 5V11L8 15L2 11V5L8 1Z"
                    fill="white"
                    fillOpacity="0.95"
                  />
                </svg>
              </span> */}
              <span
                className="text-[1.15rem] text-white tracking-tight"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                Stellar<span style={{ color: "#3b82f6" }}>.</span>
              </span>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-12 lg:gap-14">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-[0.825rem] font-light transition-all duration-200 hover:text-white relative group"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#f5f5f5",
                  }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Desktop Auth Button */}
            <div className="hidden md:flex items-center">
              <button
                className="bg-white text-gray-900 font-semibold rounded-full transition-all duration-200 hover:bg-gray-100 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  fontFamily: "var(--font-heading)",
                  padding: "10px 32px",
                  fontSize: "12px",
                }}
              >
                Login
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-150"
              style={{ color: "#f5f5f5" }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={21} /> : <HiMenuAlt3 size={21} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 md:hidden flex flex-col"
              style={{
                background: "rgba(0, 0, 0, 0.95)",
                borderLeft: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
                <span
                  className="text-white text-sm font-bold tracking-wider uppercase"
                  style={{
                    fontFamily: "var(--font-heading)",
                    letterSpacing: "0.1em",
                    fontSize: "0.8rem",
                  }}
                >
                  Menu
                </span>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-all duration-200"
                  style={{ color: "#ffffff" }}
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col px-4 pt-6 gap-1 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.22 }}
                    className="px-5 py-4 rounded-xl text-base font-medium hover:bg-white/10 transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "#ffffff",
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Auth Button */}
              <div className="px-6 pb-10">
                <button
                  className="w-full bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-xl"
                  style={{
                    fontFamily: "var(--font-heading)",
                    padding: "16px 0",
                    fontSize: "16px",
                  }}
                >
                  Login
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
