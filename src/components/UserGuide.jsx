export default function UserGuide() {
  return (
    <section
      aria-label="User guide"
      className="bg-slate-700 rounded-2xl p-6 shadow-2xl w-full max-w-sm md:max-w-md"
    >
      <h2 className="text-2xl font-bold mb-4">User Guide</h2>

      <h3 className="text-lg font-semibold text-amber-400 mb-2">How to use</h3>
      <ol className="list-decimal list-inside space-y-1 text-slate-200 mb-5">
        <li>Click the number buttons (or type) to enter a number.</li>
        <li>Choose an operator (+, −, ×, ÷).</li>
        <li>Enter the second number.</li>
        <li>Press = to see the result.</li>
        <li>Press C to clear everything and start over.</li>
      </ol>

      <h3 className="text-lg font-semibold text-amber-400 mb-2">Supported operations</h3>
      <ul className="list-disc list-inside space-y-1 text-slate-200 mb-5">
        <li>Addition (+)</li>
        <li>Subtraction (−)</li>
        <li>Multiplication (×)</li>
        <li>Division (÷), with divide-by-zero protection</li>
        <li>Decimal numbers and backspace (⌫)</li>
      </ul>

      <h3 className="text-lg font-semibold text-amber-400 mb-2">Keyboard shortcuts</h3>
      <ul className="space-y-1 text-slate-200 text-sm">
        <li><kbd className="bg-slate-900 px-2 py-0.5 rounded">0–9</kbd> Enter digits</li>
        <li><kbd className="bg-slate-900 px-2 py-0.5 rounded">+ - * /</kbd> Operators</li>
        <li><kbd className="bg-slate-900 px-2 py-0.5 rounded">Enter</kbd> Equals</li>
        <li><kbd className="bg-slate-900 px-2 py-0.5 rounded">Backspace</kbd> Delete last digit</li>
        <li><kbd className="bg-slate-900 px-2 py-0.5 rounded">Esc</kbd> Clear</li>
      </ul>
    </section>
  );
}