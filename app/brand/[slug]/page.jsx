import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brands, getBrand } from "@/lib/brands";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return {
    title: `${brand.name} — ${brand.category} | PT Sastro Utama Media Grup`,
    description: brand.description,
  };
}

export default async function BrandDetail({ params }) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const others = brands.filter((b) => b.slug !== brand.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-32">
        {/* Breadcrumb */}
        <div className="container-x">
          <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-primary">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/#work" className="transition-colors hover:text-primary">
              Brand Kami
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-900">{brand.name}</span>
          </nav>
        </div>

        {/* Hero brand */}
        <section className="container-x mt-8 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {brand.category}
            </span>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {brand.name}
            </h1>
            <p className="mt-3 font-display text-xl italic text-primary">{brand.tagline}</p>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{brand.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/#contact" className="btn-primary">
                Tanya Tentang Brand Ini
              </Link>
              <Link href="/#work" className="btn-ghost">
                Kembali ke Brand Kami
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 rounded-full blur-3xl opacity-30"
              style={{ background: brand.from }}
            />
            <div className="relative overflow-hidden rounded-[2rem] rounded-tr-[4.5rem] shadow-card ring-1 ring-slate-100">
              <img
                src={brand.image}
                alt={`Produk brand ${brand.name}`}
                className="aspect-[4/3] w-full object-cover"
              />
              <div
                className="absolute inset-0 opacity-40"
                style={{ background: `linear-gradient(180deg, transparent 50%, ${brand.to})` }}
              />
              <p className="absolute bottom-5 left-7 font-display text-4xl italic text-white drop-shadow">
                {brand.name}
              </p>
            </div>
          </div>
        </section>

        {/* Statistik brand */}
        <section className="container-x mt-16">
          <div
            className="grid grid-cols-1 gap-8 rounded-[2rem] px-8 py-10 text-center shadow-soft sm:grid-cols-3"
            style={{ background: `linear-gradient(135deg, ${brand.from}, ${brand.to})` }}
          >
            {brand.stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-4xl font-extrabold text-white">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Keunggulan */}
        <section className="container-x mt-16">
          <h2 className="section-title">Keunggulan {brand.name}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {brand.highlights.map((h) => (
              <div
                key={h}
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="font-heading text-sm font-semibold text-slate-800">{h}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Brand lainnya */}
        <section className="container-x mt-20 mb-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="section-title">Brand lainnya</h2>
            <Link
              href="/#work"
              className="hidden font-heading text-sm font-semibold text-primary hover:underline sm:block"
            >
              Lihat semua →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((b) => (
              <Link
                key={b.slug}
                href={`/brand/${b.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={b.image}
                    alt={`Produk brand ${b.name}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{ background: `linear-gradient(180deg, transparent 40%, ${b.to})` }}
                  />
                  <p className="absolute bottom-3 left-4 font-display text-2xl italic text-white drop-shadow">
                    {b.name}
                  </p>
                </div>
                <div className="p-4">
                  <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                    {b.category}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{b.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
