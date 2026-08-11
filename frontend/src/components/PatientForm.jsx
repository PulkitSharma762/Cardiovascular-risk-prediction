import { useState } from "react";
import API from "../services/api";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import LoadingSpinner from "./LoadingSpinner";
import StatusMessage from "./StatusMessage";
import {
  FiUser,
  FiUsers,
  FiArrowUp,
  FiActivity,
  FiHeart,
  FiDroplet,
  FiWind,
  FiCoffee,
  FiZap,
} from "react-icons/fi";

/**
 * PatientForm — Prediction form with grouped fields, loading states,
 * inline validation, and accessibility improvements.
 *
 * Functional logic (state, handleChange, handleSubmit, API call) is
 * preserved exactly as the original.
 */
function PatientForm({ setResult }) {
  const [formData, setFormData] = useState({
    age: "",
    gender: 1,
    height: "",
    weight: "",
    ap_hi: "",
    ap_lo: "",
    cholesterol: 1,
    gluc: 1,
    smoke: 0,
    alco: 0,
    active: 1,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
   const {name, value, type}= e.target;
   setFormData((prev) => ({
    ...prev,
    [name]: type === "number" ?
    value : Number(value),
   }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    try {
      const response = await API.post("/predict", formData);
      setResult(response.data);
      setStatusMessage({
        type: "success",
        message: "Analysis complete! Your cardiovascular risk assessment is ready.",
      });
    } catch (error) {
      console.error(error);
      setStatusMessage({
        type: "error",
        message: "Prediction failed. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card p-6 sm:p-8 animate-slide-up"
      noValidate
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sky-500/15 flex items-center justify-center">
            <FiUser className="text-sky-400" size={16} />
          </div>
          Patient Information
        </h2>
        <p className="text-sm text-slate-400 mt-1.5 ml-10.5">
          Enter clinical data for cardiovascular risk assessment
        </p>
      </div>

      {/* Status Message (replaces alert()) */}
      {statusMessage && (
        <div className="mb-5">
          <StatusMessage
            type={statusMessage.type}
            message={statusMessage.message}
            onDismiss={() => setStatusMessage(null)}
          />
        </div>
      )}

      {/* ─── Section: Demographics ─── */}
      <fieldset className="mb-6">
        <legend className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-5 h-px bg-slate-700" />
          Demographics
          <span className="flex-1 h-px bg-slate-700/50" />
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Age"
            icon={FiUser}
            name="age"
            placeholder="e.g. 45"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <FormSelect
            label="Gender"
            icon={FiUsers}
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={[
              { value: 1, label: "Female" },
              { value: 2, label: "Male" },
            ]}
          />
        </div>
      </fieldset>

      {/* ─── Section: Body Measurements ─── */}
      <fieldset className="mb-6">
        <legend className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-5 h-px bg-slate-700" />
          Body Measurements
          <span className="flex-1 h-px bg-slate-700/50" />
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Height"
            icon={FiArrowUp}
            name="height"
            placeholder="cm (e.g. 170)"
            value={formData.height}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Weight"
            icon={FiActivity}
            name="weight"
            placeholder="kg (e.g. 72)"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
      </fieldset>

      {/* ─── Section: Blood Pressure ─── */}
      <fieldset className="mb-6">
        <legend className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-5 h-px bg-slate-700" />
          Blood Pressure
          <span className="flex-1 h-px bg-slate-700/50" />
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Systolic (upper)"
            icon={FiHeart}
            name="ap_hi"
            placeholder="mmHg (e.g. 120)"
            value={formData.ap_hi}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Diastolic (lower)"
            icon={FiHeart}
            name="ap_lo"
            placeholder="mmHg (e.g. 80)"
            value={formData.ap_lo}
            onChange={handleChange}
            required
          />
        </div>
      </fieldset>

      {/* ─── Section: Lab Results ─── */}
      <fieldset className="mb-6">
        <legend className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-5 h-px bg-slate-700" />
          Lab Results
          <span className="flex-1 h-px bg-slate-700/50" />
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormSelect
            label="Cholesterol Level"
            icon={FiDroplet}
            name="cholesterol"
            value={formData.cholesterol}
            onChange={handleChange}
            options={[
              { value: 1, label: "Normal" },
              { value: 2, label: "Above Normal" },
              { value: 3, label: "Well Above Normal" },
            ]}
          />
          <FormSelect
            label="Glucose Level"
            icon={FiDroplet}
            name="gluc"
            value={formData.gluc}
            onChange={handleChange}
            options={[
              { value: 1, label: "Normal" },
              { value: 2, label: "Above Normal" },
              { value: 3, label: "Well Above Normal" },
            ]}
          />
        </div>
      </fieldset>

      {/* ─── Section: Lifestyle ─── */}
      <fieldset className="mb-8">
        <legend className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-5 h-px bg-slate-700" />
          Lifestyle Factors
          <span className="flex-1 h-px bg-slate-700/50" />
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FormSelect
            label="Smoking"
            icon={FiWind}
            name="smoke"
            value={formData.smoke}
            onChange={handleChange}
            options={[
              { value: 0, label: "Non-Smoker" },
              { value: 1, label: "Smoker" },
            ]}
          />
          <FormSelect
            label="Alcohol"
            icon={FiCoffee}
            name="alco"
            value={formData.alco}
            onChange={handleChange}
            options={[
              { value: 0, label: "No Alcohol" },
              { value: 1, label: "Consumes Alcohol" },
            ]}
          />
          <FormSelect
            label="Physical Activity"
            icon={FiZap}
            name="active"
            value={formData.active}
            onChange={handleChange}
            options={[
              { value: 1, label: "Active" },
              { value: 0, label: "Inactive" },
            ]}
          />
        </div>
      </fieldset>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className={`
          w-full
          py-3.5
          rounded-xl
          font-semibold
          text-sm
          sm:text-base
          bg-linear-to-r
          from-sky-600
          to-violet-600
          hover:from-sky-500
          hover:to-violet-500
          active:scale-[0.98]
          transition-all
          duration-200
          shadow-lg
          shadow-sky-500/15
          hover:shadow-sky-500/25
          disabled:opacity-60
          disabled:cursor-not-allowed
          disabled:hover:shadow-sky-500/15
          flex
          items-center
          justify-center
          gap-2
        `}
      >
        {isLoading ? (
          <LoadingSpinner size="sm" text="Analyzing Patient Data..." />
        ) : (
          <>
            <FiActivity size={18} />
            Predict Cardiovascular Risk
          </>
        )}
      </button>
    </form>
  );
}

export default PatientForm;