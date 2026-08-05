import { useState } from "react";
import { FiActivity, FiZap, FiShield, FiCpu } from "react-icons/fi";
import Navbar from "./components/Navbar";
import PatientForm from "./components/PatientForm";
import RiskCard from "./components/RiskCard";
import Footer from "./components/Footer";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-125 h-125 bg-sky-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-violet-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="dot-pattern fixed inset-0 opacity-40" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* ─── Hero Section ─── */}
        <div className="text-center mb-10 sm:mb-14 animate-fade-in">

          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-sky-500 to-violet-600 flex items-center justify-center shadow-xl shadow-sky-500/20 animate-heartbeat">
              <FiActivity className="text-white" size={28} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
            Cardiovascular
            <br className="sm:hidden" />
            {" "}
            <span className="gradient-text">Risk Predictor</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
            Deep learning powered heart disease risk assessment.
            <br className="hidden sm:block" />
            Instant, intelligent, and evidence-based predictions.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/4 border border-white/8 text-xs text-slate-300">
              <FiCpu size={12} className="text-sky-400" />
              AI-Powered
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/4 border border-white/8 text-xs text-slate-300">
              <FiZap size={12} className="text-amber-400" />
              Instant Results
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/4 border border-white/8 text-xs text-slate-300">
              <FiShield size={12} className="text-emerald-400" />
              70K+ Records Trained
            </div>
          </div>
        </div>

        {/* ─── Main Content Grid ─── */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <PatientForm setResult={setResult} />
          <RiskCard result={result} />
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;