import Link from "next/link";
import { brands } from "@/lib/brands";

export default function Portfolio() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-xl">
          <span className="eyebrow">Brand Kami</span>
          <h2 className="section-title mt-5">Satu grup, beragam kecantikan</h2>
          <p className="mt-4 text-lg text-slate-600">
            Setiap brand kami lahir untuk menjawab kebutuhan kecantikan yang berbeda.
            Geser untuk menjelajah, klik untuk mengenal lebih dekat.
          </p>
        </div>
      </div>

      {/* Carousel horizontal — dibatasi selebar container konten */}
      <div className="container-x">
        <div className="no-scrollbar mt-12 snap-x snap-mandatory overflow-x-auto">
          <div className="flex w-max gap-6 pb-2">
          {brands.map((b) => (
            <Link
              key={b.slug}
              href={`/brand/${b.slug}`}
              className="group w-72 shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft sm:w-80"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={b.image}
                  alt={`Produk brand ${b.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-60"
                  style={{ background: `linear-gradient(180deg, transparent 35%, ${b.to})` }}
                />
                <p className="absolute bottom-4 left-5 font-display text-3xl italic text-white drop-shadow">
                  {b.name}
                </p>
                <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur">
                  {b.category}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 p-5">
                <p className="text-sm leading-snug text-slate-600">{b.tagline}</p>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-50 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </div>

      <div className="container-x mt-6 flex items-center gap-2 text-sm text-slate-400">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 7l-4 5 4 5M16 7l4 5-4 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Geser ke samping untuk melihat brand lainnya
      </div>
    </section>
  );
}
