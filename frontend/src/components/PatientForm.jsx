import { useState } from "react";
import API from "../services/api";

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

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
        await API.post(
          "/predict",
          formData
        );

      setResult(response.data);

    } catch (error) {

      console.error(error);

      alert("Prediction Failed");

    }

  };

  return (

    <form
      onSubmit={handleSubmit}
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

      <h2 className="text-2xl font-bold mb-6">
        Patient Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          className="p-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />

        <select
          className="p-3 rounded-xl bg-slate-800 border border-slate-700"
          name="gender"
          onChange={handleChange}
        >
          <option value="1">Female</option>
          <option value="2">Male</option>
        </select>

        <input
          className="p-3 rounded-xl bg-slate-800 border border-slate-700"
          type="number"
          name="height"
          placeholder="Height (cm)"
          onChange={handleChange}
          required
        />

        <input
          className="p-3 rounded-xl bg-slate-800 border border-slate-700"
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          onChange={handleChange}
          required
        />

        <input
          className="p-3 rounded-xl bg-slate-800 border border-slate-700"
          type="number"
          name="ap_hi"
          placeholder="Systolic BP"
          onChange={handleChange}
          required
        />

        <input
          className="p-3 rounded-xl bg-slate-800 border border-slate-700"
          type="number"
          name="ap_lo"
          placeholder="Diastolic BP"
          onChange={handleChange}
          required
        />

        <select
          className="p-3 rounded-xl bg-slate-800 border border-slate-700"
          name="cholesterol"
          onChange={handleChange}
        >
          <option value="1">Normal Cholesterol</option>
          <option value="2">Above Normal</option>
          <option value="3">Well Above Normal</option>
        </select>

        <select
          className="p-3 rounded-xl bg-slate-800 border border-slate-700"
          name="gluc"
          onChange={handleChange}
        >
          <option value="1">Normal Glucose</option>
          <option value="2">Above Normal</option>
          <option value="3">Well Above Normal</option>
        </select>

        <select
          className="p-3 rounded-xl bg-slate-800 border border-slate-700"
          name="smoke"
          onChange={handleChange}
        >
          <option value="0">Non Smoker</option>
          <option value="1">Smoker</option>
        </select>

        <select
          className="p-3 rounded-xl bg-slate-800 border border-slate-700"
          name="alco"
          onChange={handleChange}
        >
          <option value="0">No Alcohol</option>
          <option value="1">Consumes Alcohol</option>
        </select>

        <select
          className="p-3 rounded-xl bg-slate-800 border border-slate-700"
          name="active"
          onChange={handleChange}
        >
          <option value="1">Physically Active</option>
          <option value="0">Not Active</option>
        </select>

      </div>

      <button
        type="submit"
        className="
        w-full
        mt-8
        py-4
        rounded-2xl
        font-semibold
        text-lg
        bg-linear-to-r
        from-purple-600
        to-cyan-500
        hover:scale-105
        transition-all
        duration-300
        shadow-lg
        "
      >
        Predict Risk
      </button>

    </form>

  );
}

export default PatientForm;