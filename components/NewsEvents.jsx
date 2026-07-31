import Link from "next/link";
import { news } from "@/lib/news";
import Reveal from "./Reveal";

export default function NewsEvents() {
  return (
    <section id="news" className="bg-slate-50/70 py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">News & Events</span>
          <h2 className="section-title mt-5">Dokumentasi kegiatan kami</h2>
          <p className="mt-4 text-lg text-slate-600">
            Momen-momen terbaru seputar peluncuran produk, event, dan kegiatan
            perusahaan dalam satu galeri.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {news.slice(0, 6).map((n, i) => (
            <Reveal key={n.caption} delay={i * 80}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <img
                  src={n.image}
                  alt={n.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur">
                  {n.category}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent p-4 pt-10">
                  <p className="font-heading text-sm font-bold leading-snug text-white sm:text-base">
                    {n.caption}
                  </p>
                  {n.date && <p className="mt-1 text-xs text-slate-300">{n.date}</p>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <Link href="/news" className="btn-primary">
            Lihat Selengkapnya
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
