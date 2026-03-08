import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className="container mx-auto"
        style={{ paddingLeft: "2rem", paddingRight: "2rem", maxWidth: "1440px" }}
      >
        {/* Centered Content */}
        <div className="text-center max-w-4xl mx-auto space-y-8 py-32 md:py-40">
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          >
            <span className="text-yellow-400 text-sm">⚡</span>
            <span
              className="text-sm text-white/90 font-medium"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Manage Social Media Better
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-white block">Next-Gen Finance for</span>
            <span className="text-white italic font-light block mt-2">
              a Digital World
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Experience next-generation finance with powerful insights,
            automation, and real-time control.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              className="px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Start Free Trial
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="translate-x-0 group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="px-8 py-3.5 bg-transparent text-white font-semibold rounded-lg border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-200 flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Learn More
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="translate-x-0 group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Hero Image - Mobile Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-6xl mx-auto mt-16"
        >
          {/* Mobile App Mockup Container */}
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Central Phone Mockup */}
            <div className="relative mx-auto w-80 md:w-96">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl border border-white/10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                
                {/* Screen */}
                <div className="relative bg-gradient-to-br from-gray-950 to-gray-900 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-8 pt-3 pb-2">
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
                        <rect width="4" height="12" rx="1" opacity="0.4"/>
                        <rect x="6" width="4" height="12" rx="1" opacity="0.7"/>
                        <rect x="12" width="4" height="12" rx="1"/>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-4 space-y-4">
                    {/* Greeting */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
                        <div>
                          <p className="text-xs text-gray-400">Good morning!</p>
                          <p className="text-sm text-white font-semibold">Saibur Rahman</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5"/>
                          </svg>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 4v8M4 8h8" stroke="white" strokeWidth="1.5"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Balance Card */}
                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                      <p className="text-xs text-gray-400 mb-1">Total Balance</p>
                      <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold text-white">$56,893.30</h2>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                            <circle cx="8" cy="8" r="6"/>
                          </svg>
                        </div>
                      </div>
                      <p className="text-xs text-green-400 mt-1">+$1,456.00 4.86%</p>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-4">
                        <button className="flex-1 bg-white/90 text-gray-900 text-sm font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2">
                          <span>+</span> Deposit
                        </button>
                        <button className="flex-1 bg-white/10 text-white text-sm font-medium py-2.5 rounded-xl flex items-center justify-center gap-2">
                          Transfer
                        </button>
                        <button className="w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                            <rect x="2" y="2" width="4" height="4" rx="1"/>
                            <rect x="10" y="2" width="4" height="4" rx="1"/>
                            <rect x="2" y="10" width="4" height="4" rx="1"/>
                            <rect x="10" y="10" width="4" height="4" rx="1"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Upcoming Payment */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-gray-400 mb-2">Upcoming Payment</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <span className="text-green-400 text-xs">S</span>
                          </div>
                          <div>
                            <p className="text-sm text-white font-medium">Spotify</p>
                            <p className="text-xs text-gray-400">Dec 12</p>
                          </div>
                        </div>
                        <p className="text-sm text-white font-semibold">-$15.99</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Cards - Transaction History (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="hidden lg:block absolute left-0 top-1/4 w-64 bg-gray-900/80 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-sm">Transaction History</h3>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                  <circle cx="8" cy="8" r="6"/>
                </svg>
              </div>
              <div className="space-y-3">
                <div className="text-xs text-gray-400">Today</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500/20"></div>
                    <span className="text-white text-sm">Spotify</span>
                  </div>
                  <span className="text-white text-sm">-$15.99</span>
                </div>
              </div>
            </motion.div>

            {/* Side Cards - Savings Plan (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="hidden lg:block absolute right-0 top-1/3 w-64 bg-gray-900/80 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-sm">My Savings Plan</h3>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                  <circle cx="3" cy="8" r="1.5"/>
                  <circle cx="8" cy="8" r="1.5"/>
                  <circle cx="13" cy="8" r="1.5"/>
                </svg>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 6l2 2 4-4" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm">Investment Goal</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">$15,600/$25,000</span>
                  <span className="text-white font-semibold">62%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
