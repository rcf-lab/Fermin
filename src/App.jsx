import Calculator from "./components/Calculator";
import UserGuide from "./components/UserGuide";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Calculator</h1>
      </header>

      <main className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-center md:items-start justify-center">
        <Calculator />
        <UserGuide />
      </main>
    </div>
  );
}