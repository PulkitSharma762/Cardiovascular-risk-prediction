import { useEffect, useState } from "react";
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from "react-icons/fi";

/**
 * StatusMessage — Inline status banner replacing alert().
 * Supports error, success, info variants with auto-dismiss.
 */
function StatusMessage({ type = "error", message, onDismiss, autoDismissMs = 6000 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoDismissMs > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onDismiss?.(), 300);
      }, autoDismissMs);
      return () => clearTimeout(timer);
    }
  }, [autoDismissMs, onDismiss]);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => onDismiss?.(), 300);
  };

  const variants = {
    error: {
      icon: FiAlertCircle,
      bg: "bg-red-500/10",
      border: "border-red-500/20",
      text: "text-red-300",
      iconColor: "text-red-400",
    },
    success: {
      icon: FiCheckCircle,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-300",
      iconColor: "text-emerald-400",
    },
    info: {
      icon: FiInfo,
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
      text: "text-sky-300",
      iconColor: "text-sky-400",
    },
  };

  const v = variants[type] || variants.error;
  const IconComponent = v.icon;

  return (
    <div
      role="alert"
      className={`
        ${v.bg} ${v.border} ${v.text}
        border rounded-xl px-4 py-3
        flex items-center gap-3
        transition-all duration-300
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
      `}
    >
      <IconComponent className={`${v.iconColor} shrink-0`} size={18} />

      <p className="text-sm flex-1">{message}</p>

      <button
        onClick={handleDismiss}
        className="text-slate-500 hover:text-slate-300 transition-colors p-0.5 rounded-md hover:bg-white/5"
        aria-label="Dismiss message"
      >
        <FiX size={16} />
      </button>
    </div>
  );
}

export default StatusMessage;
