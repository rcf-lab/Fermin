export default function Display({ expression, value, error }) {
  return (
    <div className="bg-slate-950 rounded-xl p-4 mb-4 text-right min-h-[96px] flex flex-col justify-end overflow-hidden">
      <div className="text-slate-400 text-sm h-5 truncate">{expression}</div>
      <div
        className={`text-4xl font-bold break-all ${error ? "text-red-400" : "text-white"}`}
      >
        {error || value}
      </div>
    </div>
  );
}