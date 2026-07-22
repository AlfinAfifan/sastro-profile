import Link from "next/link";
import { brands } from "@/lib/brands";

/* Logo mark sederhana untuk tiap brand, mengikuti kategorinya */
const marks = {
  sarasvati: (
    // Tetes serum
    <path d="M12 3c3.5 4.2 6 7.2 6 10.2a6 6 0 11-12 0C6 10.2 8.5 7.2 12 3z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  lumea: (
    // Lipstik
    <path d="M9.5 11V5.5l5 2V11M7.5 11h9v3.5h-9zM9 14.5V20h6v-5.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "kirana-glow": (
    // Matahari berpendar
    <path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  bellova: (
    // Botol kuteks
    <path d="M10 3h4v4.5h-4zM8.5 7.5h7l1 3.5v9.5h-9V11l1-3.5z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "zahra-beauty": (
    // Bulan sabit & bintang
    <path d="M19.5 13.5A7.5 7.5 0 1110.5 4a6 6 0 009 9.5zM17 4.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  adeva: (
    // Bunga lotus
    <path d="M12 4c1.8 2 1.8 4.5 0 6.5C10.2 8.5 10.2 6 12 4zM12 20c-4.4 0-8-2-8-5 3 0 5.4.9 8 3.1 2.6-2.2 5-3.1 8-3.1 0 3-3.6 5-8 5zM12 10.5c2.2-1.6 4.6-1.9 7-.9-1 2.3-3.2 3.6-5.8 3.4M12 10.5c-2.2-1.6-4.6-1.9-7-.9 1 2.3 3.2 3.6 5.8 3.4" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export default function Logos() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/60 py-10">
      <div className="container-x">
        <p className="text-center font-heading text-xs font-semibold uppercase tracking-widest text-slate-400">
          Brand-brand di bawah naungan Sastro Utama Media Grup
        </p>
        <div className="mt-7 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((b) => (
            <Link
              key={b.slug}
              href={`/brand/${b.slug}`}
              className="group flex items-center justify-center gap-2.5 text-slate-400 transition-colors hover:text-primary"
              title={`${b.name} — ${b.category}`}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white shadow-card ring-1 ring-slate-100 transition-all group-hover:-translate-y-0.5 group-hover:ring-primary-200">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.7">
                  {marks[b.slug]}
                </svg>
              </span>
              <span className="font-heading text-lg font-bold tracking-tight">{b.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
