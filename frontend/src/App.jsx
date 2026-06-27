import { useState } from "react";

import PatientForm from "./components/PatientForm";
import RiskCard from "./components/RiskCard";

function App() {

  const [result, setResult] = useState(null);

  return (

    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">

      {/* Background Glow Effects */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/20 blur-[120px]" />

      <div className="absolute top-40 right-40 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 py-10">

        {/* Hero Section */}

        <div className="text-center mb-12">

          <div className="flex justify-center mb-4">

            <span className="text-7xl animate-pulse">
              ❤️
            </span>

          </div>

          <h1 className="text-6xl font-bold mb-4">
            Cardiovascular Risk Predictor
          </h1>

          <p className="text-slate-400 text-xl">
            Deep Learning Powered Heart Disease Predictor
          </p>

        </div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-8">

          <PatientForm setResult={setResult} />

          <RiskCard result={result} />

        </div>

      </div>

    </div>

  );
}

export default App;