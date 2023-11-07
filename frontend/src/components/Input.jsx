// type = string
// error = boolean
// label = string
const Input = ({ type, error = false, label, onChange }) => {
  return (
    <div className="relative w-full">
      <input
        placeholder=" "
        type={type}
        onChange={(e) => onChange(e)}
        className={`peer w-full rounded-md border-2 bg-[#121324] p-4 pt-6 font-light outline-none transition ${
          error ? "border-red-700" : "border-zinc-800"
        } ${error ? "focus:border-red-700" : "focus:border-zinc-400"}
    `}
      />
      <label
        className={`
        absolute
        left-4
        top-5
        z-10
        origin-[0]
        -translate-y-4
        scale-75
        transform
        text-base
        duration-200
        peer-placeholder-shown:translate-y-0
        peer-placeholder-shown:scale-100
        peer-focus:-translate-y-4
        peer-focus:scale-75
        ${error ? "text-red-700" : "text-zinc-400"}
    `}
      >
        {label}
      </label>
    </div>
  );
};
export default Input;
