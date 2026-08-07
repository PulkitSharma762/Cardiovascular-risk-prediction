import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiAlertTriangle,
  FiAlertCircle,
} from "react-icons/fi";

/**
 * RiskCard — Prediction results display with animated progress,
 * color-coded risk badge, BMI with category, styled recommendations,
 * and a polished empty state.
 *
 * All result data consumption (result.risk_percentage, result.risk_level,
 * result.bmi) is preserved exactly as original.
 */

/* ─── BMI category helper ─── */
function getBmiCategory(bmi) {
  const bmiVal = parseFloat(bmi);
  if (bmiVal < 18.5) return { label: "Underweight", color: "text-sky-400" };
  if (bmiVal < 25) return { label: "Normal", color: "text-emerald-400" };
  if (bmiVal < 30) return { label: "Overweight", color: "text-amber-400" };
  return { label: "Obese", color: "text-red-400" };
}

/* ─── Risk level config ─── */
function getRiskConfig(risk) {
  if (risk < 35) {
    return {
      color: "#22c55e",
      bgClass: "bg-emerald-500/10",
      borderClass: "border-emerald-500/20",
      textClass: "text-emerald-300",
      icon: FiCheckCircle,
      label: "Low Risk",
      description: "Your cardiovascular risk appears to be low. Maintain your healthy lifestyle habits.",
    };
  }
  if (risk < 70) {
    return {
      color: "#f59e0b",
      bgClass: "bg-amber-500/10",
      borderClass: "border-amber-500/20",
      textClass: "text-amber-300",
      icon: FiAlertTriangle,
      label: "Moderate Risk",
      description: "There are some risk factors to address. Consider consulting a healthcare provider.",
    };
  }
  return {
    color: "#ef4444",
    bgClass: "bg-red-500/10",
    borderClass: "border-red-500/20",
    textClass: "text-red-300",
    icon: FiAlertCircle,
    label: "High Risk",
    description: "Significant risk factors detected. Please consult a healthcare professional promptly.",
  };
}

/* ─── Recommendation data ─── */
const recommendations = [
  {
    icon: "🚶",
    text: "Walk at least 30 minutes daily",
    bg: "bg-emerald-500/8",
    border: "border-emerald-500/15",
  },
  {
    icon: "🥗",
    text: "Reduce saturated fat intake",
    bg: "bg-amber-500/8",
    border: "border-amber-500/15",
  },
  {
    icon: "❤️",
    text: "Monitor blood pressure weekly",
    bg: "bg-sky-500/8",
    border: "border-sky-500/15",
  },
  {
    icon: "😴",
    text: "Maintain proper sleep schedule",
    bg: "bg-violet-500/8",
    border: "border-violet-500/15",
  },
];

function RiskCard({ result }) {

  /* ═══════════════ EMPTY STATE ═══════════════ */
  if (!result) {
    return (
      <div className="glass-card p-6 sm:p-8 animate-slide-up delay-100">
        <div className="flex flex-col items-center justify-center h-full min-h-100 py-6">

          {/* Animated pulse ring */}
          <div className="relative mb-8">
            <div className="w-40 h-40 rounded-full border-2 border-dashed border-slate-700/80 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-slate-800/50 flex items-center justify-center animate-pulse-glow">
                <FiActivity className="text-sky-500/60" size={36} />
              </div>
            </div>
            {/* Decorative ring animation */}
            <div className="absolute inset-0 rounded-full border border-sky-500/10 animate-ping" style={{ animationDuration: "3s" }} />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Prediction Result
          </h2>

          <p className="text-sm text-slate-400 text-center max-w-65 mb-6">
            Submit patient data to receive your AI-powered cardiovascular risk assessment
          </p>

          <div className="flex items-center gap-2 text-sky-400/80 text-xs font-medium">
            <FiArrowRight size={14} className="animate-float" />
            <span>Fill out the form to get started</span>
          </div>

        </div>
      </div>
    );
  }

  /* ═══════════════ RESULT STATE ═══════════════ */
  const risk = result.risk_percentage;
  const config = getRiskConfig(risk);
  const RiskIcon = config.icon;
  const bmiCategory = getBmiCategory(result.bmi);

  return (
    <div className="glass-card p-6 sm:p-8 animate-slide-up delay-100">

      {/* Header */}
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-sky-500/15 flex items-center justify-center">
          <FiActivity className="text-sky-400" size={16} />
        </div>
        Prediction Result
      </h2>

      {/* Circular Progress */}
      <div className="w-44 sm:w-52 mx-auto mb-6">
        <CircularProgressbar
          value={risk}
          text={`${risk}%`}
          styles={buildStyles({
            pathColor: config.color,
            textColor: "#ffffff",
            textSize: "19px",
            trailColor: "rgba(51, 65, 85, 0.5)",
            pathTransitionDuration: 1.2,
          })}
        />
      </div>

      {/* Risk Level Badge */}
      <div className="text-center mb-6">
        <span
          className={`
            inline-flex items-center gap-1.5
            px-4 py-2
            rounded-full
            ${config.bgClass}
            border
            ${config.borderClass}
            ${config.textClass}
            text-sm
            font-medium
          `}
        >
          <RiskIcon size={15} />
          {result.risk_level} Risk
        </span>
        <p className="text-xs text-slate-400 mt-3 max-w-75 mx-auto leading-relaxed">
          {config.description}
        </p>
      </div>

      {/* BMI Card */}
      <div className="bg-slate-800/40 rounded-xl p-4 mb-6 border border-slate-700/30">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Body Mass Index
            </h3>
            <p className="text-3xl font-bold mt-1 text-sky-400">
              {result.bmi}
            </p>
          </div>
          <span className={`text-sm font-semibold ${bmiCategory.color} px-3 py-1 rounded-lg bg-slate-800/60`}>
            {bmiCategory.label}
          </span>
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h3 className="font-semibold text-base mb-3 text-white">
          Recommendations
        </h3>

        <div className="space-y-2.5">
          {recommendations.map((rec, i) => (
            <div
              key={i}
              className={`
                ${rec.bg} border ${rec.border}
                p-3 rounded-xl
                flex items-center gap-3
                text-sm text-slate-200
                transition-all duration-200
                hover:translate-x-1
              `}
            >
              <span className="text-base shrink-0">{rec.icon}</span>
              {rec.text}
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-[11px] text-slate-600 text-center mt-6 leading-relaxed">
        This is an AI-based estimation for educational purposes only.
        <br />
        Consult a healthcare professional for medical advice.
      </p>

    </div>
  );
}

export default RiskCard;