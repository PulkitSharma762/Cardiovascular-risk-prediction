import { FiActivity, FiShield, FiHeart } from "react-icons/fi";

/**
 * Footer — Professional footer with disclaimer, credits, and tech info.
 */
function Footer() {
  return (
    <footer className="mt-20 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Disclaimer */}
        <div className="glass-card p-5 mb-8 rounded-xl!">
          <div className="flex items-start gap-3">
            <FiShield className="text-amber-400 shrink-0 mt-0.5" size={18} />
            <div>
              <h4 className="text-sm font-semibold text-amber-300 mb-1">Medical Disclaimer</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                This tool provides AI-based risk estimations for educational purposes only. It is not a substitute
                for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare
                provider for medical concerns.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500">
            <FiActivity size={16} className="text-sky-500" />
            <span className="text-sm font-medium">
              Cardio<span className="text-sky-500">Guard</span>
            </span>
            <span className="text-xs">
              © {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <FiHeart size={12} className="text-rose-500" />
            <span>Built with care for better heart health</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
