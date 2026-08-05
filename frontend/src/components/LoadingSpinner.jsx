/**
 * LoadingSpinner — Animated heart-pulse spinner for API loading states.
 * Replaces the absent loading indicator during form submission.
 */
function LoadingSpinner({ size = "md", text = "Analyzing..." }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-8 h-8",
  };

  return (
    <div className="flex items-center justify-center gap-2.5">
      <svg
        className={`${sizeClasses[size]} animate-spin`}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-20"
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      {text && <span className="text-sm font-medium">{text}</span>}
    </div>
  );
}

export default LoadingSpinner;
