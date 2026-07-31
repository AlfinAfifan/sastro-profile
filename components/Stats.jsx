import { brands } from "@/lib/brands";

const stats = [
  { value: `${brands.length}`, label: "Brand aktif" },
  { value: "25+", label: "Varian produk" },
  { value: "60rb+", label: "Terjual per-bulan" },
  { value: "10jt+", label: "Konsumen setia" },
];

import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="py-20">
      <div className="container-x">
        <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary-600 to-primary-800 px-8 py-14 shadow-soft sm:px-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-2xl" />
          <div className="relative grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <div className="group cursor-default transition-transform duration-300 hover:scale-110">
                  <p className="font-heading text-4xl font-extrabold text-white transition-colors duration-300 group-hover:text-accent sm:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-primary-100">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
