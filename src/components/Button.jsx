const variants = {
  number: "bg-slate-600 hover:bg-slate-500 text-white",
  operator: "bg-amber-500 hover:bg-amber-400 text-white",
  clear: "bg-red-500 hover:bg-red-400 text-white",
  equals: "bg-emerald-500 hover:bg-emerald-400 text-white",
};

export default function Button({ label, onClick, variant = "number", className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} ${className} rounded-xl py-4 text-xl font-semibold shadow-md transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50`}
    >
      {label}
    </button>
  );
}