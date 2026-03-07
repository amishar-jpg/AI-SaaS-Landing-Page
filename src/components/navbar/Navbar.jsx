import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Possibilities", href: "#possibilities" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#070f2b]/90 backdrop-blur-lg border-b border-white/[0.06]"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-[72px]">

            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 select-none"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--gradient-brand)" }}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 5V11L8 15L2 11V5L8 1Z" fill="white" fillOpacity="0.95" />
                </svg>
              </span>
              <span
                className="text-[1.15rem] text-white tracking-tight"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                SaaSify
              </span>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-4 py-2 text-[0.875rem] font-medium text-slate-400 transition-colors duration-150"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#"
                className="px-5 py-2 text-[0.875rem] font-semibold text-slate-400 transition-colors duration-150"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Sign In
              </a>
              <a
                href="#"
                className="px-5 py-[0.55rem] text-[0.875rem] font-semibold text-white rounded-lg border border-violet-500/60 bg-violet-600/20 transition-colors duration-150"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Sign Up
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 transition-colors duration-150"
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
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-68 md:hidden flex flex-col"
              style={{
                background: "#070f2b",
                borderLeft: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.06]">
                <span
                  className="text-white text-sm font-semibold tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "0.08em", fontSize: "0.75rem", color: "#64748b" }}
                >
                  Navigation
                </span>
                <button
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 transition-colors duration-150"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX size={18} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col px-3 pt-4 gap-0.5 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.22 }}
                    className="px-4 py-3 rounded-lg text-slate-300 text-[0.9375rem] font-medium"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Auth Buttons */}
              <div className="flex flex-col gap-3 px-5 pb-8">
                <a
                  href="#"
                  className="text-center py-2.5 rounded-lg border border-white/10 text-slate-400 font-semibold text-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="text-center py-2.5 rounded-lg border border-violet-500/50 bg-violet-600/20 text-white font-semibold text-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Sign Up
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
