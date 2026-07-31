const values = [
  {
    title: "Aman & tersertifikasi",
    desc: "Seluruh produk kami terdaftar BPOM, bersertifikat Halal MUI, dan diproduksi di fasilitas berstandar GMP.",
    icon: <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Riset & inovasi lokal",
    desc: "Formula dikembangkan tim R&D kami sendiri, memadukan bahan alam Indonesia dengan teknologi kosmetik modern.",
    icon: (
      <path d="M9 3h6M10 3v5l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Tumbuh berkelanjutan",
    desc: "Kami berkomitmen pada kemasan ramah lingkungan, pemberdayaan petani bahan baku, dan produksi yang bertanggung jawab.",
    icon: (
      <path d="M12 21c-5 0-8-3-8-8 0-5 4-9 9-10-1 5 8 4 7 10-.7 4.2-3.5 8-8 8zM7 17c2-4 5-7 9-9" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-slate-50/70 py-24 sm:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl bg-primary p-6 text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="font-heading text-4xl font-extrabold">8+</p>
                <p className="mt-1 text-sm text-primary-100">Tahun berkarya</p>
              </div>
              <div className="rounded-2xl bg-primary-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <p className="font-heading text-4xl font-extrabold text-primary">200</p>
                <p className="mt-1 text-sm text-slate-500">Tim berkarya</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-soft">
                <p className="font-heading text-4xl font-extrabold text-slate-900">3</p>
                <p className="mt-1 text-sm text-slate-500">Fasilitas produksi modern</p>
              </div>
              <div className="rounded-2xl bg-accent/15 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <p className="font-heading text-4xl font-extrabold text-slate-900">100%</p>
                <p className="mt-1 text-sm text-slate-500">Halal & terdaftar BPOM</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow">Tentang Kami</span>
          <h2 className="section-title mt-5">
            Rumah bagi brand kecantikan kebanggaan Indonesia
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Berdiri sejak 2018, PT Sastro Grup menaungi tujuh brand kosmetik,
            minuman kesehatan, dan perawatan diri yang melayani jutaan konsumen Indonesia. Kami mengelola
            seluruh rantai nilai — dari riset formula, produksi, pemasaran, hingga
            distribusi ke seluruh nusantara.
          </p>

          <div className="mt-8 space-y-5">
            {values.map((v) => (
              <div key={v.title} className="group flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
                    {v.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-slate-900">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
