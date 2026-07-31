const services = [
  {
    title: "Riset & Pengembangan",
    desc: "Laboratorium R&D kami meracik formula inovatif berbahan alam Indonesia yang aman dan efektif untuk kulit tropis.",
    icon: (
      <path d="M9 3h6M10 3v5l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3M8.5 14h7" strokeLinecap="round" strokeLinejoin="round" />
    ),
    featured: true,
  },
  {
    title: "Manufaktur Kosmetik",
    desc: "Tiga fasilitas produksi berstandar GMP & CPKB dengan kapasitas ratusan juta unit produk per tahun.",
    icon: (
      <path d="M3 21V9l6 4V9l6 4V5l6-2v18H3zM7 17h2m4 0h2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Manajemen Brand",
    desc: "Membangun dan membesarkan brand kecantikan — dari positioning, kampanye kreatif, hingga kolaborasi dengan beauty influencer.",
    icon: <path d="M12 19l7-7-4-4-7 7v4h4zM14 6l4 4M4 20h6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Distribusi Nasional",
    desc: "Jaringan distribusi ke 60.000+ titik penjualan: modern trade, toko kosmetik, apotek, hingga warung di pelosok.",
    icon: (
      <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7zM7 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "E-Commerce & Retail",
    desc: "Kehadiran kuat di seluruh marketplace, official store, dan gerai flagship di kota-kota besar Indonesia.",
    icon: <path d="M6 6h15l-1.5 9h-12L5 3H2M9 20a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Keberlanjutan & CSR",
    desc: "Program pemberdayaan petani bahan baku, beasiswa, dan transisi menuju kemasan yang dapat didaur ulang.",
    icon: (
      <path d="M12 21c-5 0-8-3-8-8 0-5 4-9 9-10-1 5 8 4 7 10-.7 4.2-3.5 8-8 8zM7 17c2-4 5-7 9-9" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Lini Bisnis</span>
          <h2 className="section-title mt-5">Terintegrasi dari laboratorium hingga etalase</h2>
          <p className="mt-4 text-lg text-slate-600">
            Kami mengelola seluruh rantai nilai industri kecantikan dalam satu grup —
            memastikan kualitas terjaga di setiap tahapnya.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
            <article
              className={`group h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                s.featured
                  ? "border-primary bg-primary text-white shadow-soft hover:shadow-lg"
                  : "border-slate-100 bg-white shadow-card hover:border-primary-200 hover:shadow-soft"
              }`}
            >
              <span
                className={`grid place-items-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 ${
                  s.featured
                    ? "bg-white/15 text-white"
                    : "bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white"
                }`}
                style={{ height: "3.25rem", width: "3.25rem" }}
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {s.icon}
                </svg>
              </span>
              <h3 className={`mt-5 font-heading text-xl font-bold ${s.featured ? "text-white" : "text-slate-900"}`}>
                {s.title}
              </h3>
              <p className={`mt-3 text-sm leading-relaxed ${s.featured ? "text-primary-100" : "text-slate-600"}`}>
                {s.desc}
              </p>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
