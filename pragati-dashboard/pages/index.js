import Hero from "../components/Hero";
import ExperimentCard from "../components/ExperimentCard";

export default function Home() {
  const experiments = [
    {
      title: "Pendulum Motion",
      description: "Swing into the laws of motion ⚖️",
      link: "/simulations/pendulum",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Ohm’s Law",
      description: "Explore V = IR 🔌",
      link: "/simulations/ohmslaw",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Lens Formation",
      description: "Focus with lenses 🔍",
      link: "/simulations/lens",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Projectile Motion",
      description: "Arc through physics 🎯",
      link: "/simulations/projectile",
      color: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <main className="bg-gradient-to-b from-slate-900 via-slate-800 to-black min-h-screen text-white">
      <Hero />
      <section id="experiments" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
        {experiments.map((exp, idx) => (
          <ExperimentCard key={idx} {...exp} />
        ))}
      </section>
      <footer className="text-center text-gray-400 py-6 border-t border-gray-700">
        🌟 PRAGATI – Making Science Simple, Interactive & Fun
      </footer>
    </main>
  );
}
