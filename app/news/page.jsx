import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { news } from "@/lib/news";

export const metadata = {
  title: "News & Events — PT Sastro Grup",
  description:
    "Galeri dokumentasi kegiatan PT Sastro Grup — peluncuran produk, event, pameran, dan program sosial perusahaan.",
};

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Background decor */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-100 blur-3xl opacity-70" />
          <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">News & Events</span>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Galeri kegiatan Sastro Grup
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Dokumentasi lengkap keseharian dan event dari seluruh keluarga besar Sastro Grup.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {news.map((n, i) => (
              <Reveal key={n.caption} delay={(i % 3) * 80}>
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

          <Reveal delay={150} className="mt-14 text-center">
            <Link href="/#news" className="btn-ghost">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Kembali ke Beranda
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
