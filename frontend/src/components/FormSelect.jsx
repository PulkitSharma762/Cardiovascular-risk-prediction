import { FiChevronDown } from "react-icons/fi";

/**
 * FormSelect — Accessible, labeled select with icon prefix and custom chevron.
 * Eliminates class duplication across all form select fields.
 */
function FormSelect({ label, icon: Icon, name, value, onChange, options = [], required = false }) {
  const selectId = `field-${name}`;

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={selectId}
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

        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`
            w-full
            ${Icon ? 'pl-10' : 'pl-4'}
            pr-10 py-3
            rounded-xl
            bg-slate-800/70
            border
            border-slate-700/60
            text-slate-100
            focus:border-sky-500/60
            focus:bg-slate-800/90
            focus:ring-2
            focus:ring-sky-500/20
            outline-none
            appearance-none
            transition-all
            duration-200
            text-sm
            cursor-pointer
          `}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
          <FiChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}

export default FormSelect;
