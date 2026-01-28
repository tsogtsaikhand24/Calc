export function Input({ label, placeholder, value, onChange, onBlur, error }) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-sm font-medium text-[#121416] mb-1">
          {label}
        </label>
      )}
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`w-full min-h-[44px] px-3 py-2 rounded-md border text-sm outline-none
          ${error ? "border-red-500" : "border-gray-300"}
          focus:ring-2 focus:ring-[#0ca5e9] focus:border-transparent`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
