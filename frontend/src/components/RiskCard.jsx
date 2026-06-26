import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function RiskCard({ result }) {

  // Empty State
  if (!result) {
    return (
      <div
        className="
        backdrop-blur-xl
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-8
        shadow-2xl
        "
      >
        <div className="flex flex-col items-center justify-center h-full">

          <div className="w-52 h-52 rounded-full border-8 border-slate-700 flex items-center justify-center">

            <span className="text-5xl font-bold text-cyan-400">
              0%
            </span>

          </div>

          <h2 className="text-3xl font-bold mt-8">
            Prediction Result
          </h2>

          <p className="text-slate-400 mt-2 text-center">
            Submit patient data to view prediction
          </p>

        </div>
      </div>
    );
  }

  const risk = result.risk_percentage;

  const riskColor =
    risk < 35
      ? "#22c55e"
      : risk < 70
      ? "#eab308"
      : "#ef4444";

  return (
    <div
      className="
      backdrop-blur-xl
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-8
      shadow-2xl
      "
    >

      <h2 className="text-3xl font-bold text-center mb-8">
        Prediction Result
      </h2>

      <div className="w-52 mx-auto">

        <CircularProgressbar
          value={risk}
          text={`${risk}%`}
          styles={buildStyles({
            pathColor: riskColor,
            textColor: "#ffffff",
            trailColor: "#334155",
          })}
        />

      </div>

      <div className="text-center mt-6">

        <span
          className="
          px-4
          py-2
          rounded-full
          bg-cyan-500/10
          border
          border-cyan-500/20
          text-cyan-300
          "
        >
          {result.risk_level} Risk
        </span>

      </div>

      <div className="mt-8 bg-slate-800/50 rounded-2xl p-5">

        <h3 className="text-slate-400">
          Body Mass Index
        </h3>

        <p className="text-4xl font-bold mt-2 text-cyan-400">
          {result.bmi}
        </p>

      </div>

      <div className="mt-8">

        <h3 className="font-bold text-xl mb-4">
          AI Recommendations
        </h3>

        <div className="space-y-3">

          <div className="bg-green-500/10 border border-green-500/20 p-3 rounded-xl">
            🚶 Walk at least 30 minutes daily
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-xl">
            🥗 Reduce saturated fat intake
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-xl">
            ❤️ Monitor blood pressure weekly
          </div>

          <div className="bg-purple-500/10 border border-purple-500/20 p-3 rounded-xl">
            😴 Maintain proper sleep schedule
          </div>

        </div>

      </div>

    </div>
  );
}

export default RiskCard;