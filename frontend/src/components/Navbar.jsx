import { useState } from "react";
import { FiActivity, FiMenu, FiX } from "react-icons/fi";

/**
 * Navbar — Professional healthcare app header with brand identity.
 * Glassmorphism backdrop, responsive mobile menu, sticky positioning.
 */
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/6"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-sky-500 to-violet-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <FiActivity className="text-white" size={18} />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white">
                Cardio<span className="text-sky-400">Guard</span>
              </span>
            </div>
          </div>

          {/* Desktop Tech Badges */}
          <div className="hidden md:flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/15 text-sky-400 text-xs font-medium">
              AI Model
            </span>
            <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/15 text-violet-400 text-xs font-medium">
              FastAPI
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/15 text-emerald-400 text-xs font-medium">
              React
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/6 animate-slide-down">
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/15 text-sky-400 text-xs font-medium">
                AI Model
              </span>
              <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/15 text-violet-400 text-xs font-medium">
                FastAPI
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/15 text-emerald-400 text-xs font-medium">
                React
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;