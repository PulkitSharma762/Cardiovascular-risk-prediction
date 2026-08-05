/**
 * FormInput — Accessible, labeled input with icon prefix.
 * Eliminates class duplication across all form number inputs.
 */
function FormInput({ label, icon: Icon, name, type = "number", placeholder, value, onChange, required = false, error }) {
  const inputId = `field-${name}`;

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-slate-300 ml-1"
      >
        {label}
      </label>

      <div className="relative group">
        {Icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-sky-400 transition-colors duration-200 pointer-events-none">
            <Icon size={16} />
          </div>
        )}

        <input
          id={inputId}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`
            w-full
            ${Icon ? 'pl-10' : 'pl-4'}
            pr-4 py-3
            rounded-xl
            bg-slate-800/70
            border
            ${error ? 'border-red-500/50' : 'border-slate-700/60'}
            text-slate-100
            placeholder:text-slate-500
            focus:border-sky-500/60
            focus:bg-slate-800/90
            focus:ring-2
            focus:ring-sky-500/20
            outline-none
            transition-all
            duration-200
            text-sm
            [appearance:textfield]
            [&::-webkit-outer-spin-button]:appearance-none
            [&::-webkit-inner-spin-button]:appearance-none
          `}
        />
      </div>

      {error && (
        <p id={`${inputId}-error`} className="text-xs text-red-400 ml-1 animate-slide-down" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormInput;
