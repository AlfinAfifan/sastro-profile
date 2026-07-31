import Reveal from "./Reveal";

const missions = [
  {
    title: "Produk aman & berkualitas",
    desc: "Menghadirkan produk kosmetik, minuman kesehatan, dan perawatan diri yang aman, halal, dan berkualitas tinggi untuk seluruh masyarakat Indonesia.",
    icon: <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Inovasi berbasis riset",
    desc: "Mengembangkan formula inovatif melalui riset berkelanjutan yang memadukan kekayaan bahan alam Indonesia dengan teknologi modern.",
    icon: (
      <path d="M9 3h6M10 3v5l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Pemasaran digital & media sosial",
    desc: "Memanfaatkan kekuatan media sosial dan kanal digital untuk membangun brand yang dekat dan relevan dengan konsumen.",
    icon: (
      <path d="M12 20a8 8 0 100-16 8 8 0 000 16zM2 12h20M12 4c2.5 2.4 3.5 5 3.5 8s-1 5.6-3.5 8c-2.5-2.4-3.5-5-3.5-8s1-5.6 3.5-8z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Tumbuh bersama mitra & masyarakat",
    desc: "Membangun kemitraan distribusi yang saling menguntungkan serta memberdayakan petani bahan baku dan komunitas lokal.",
    icon: (
      <path d="M8 11a3 3 0 100-6 3 3 0 000 6zM16 11a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 2.7-5 6-5s6 2 6 5M14 15.5c.6-.3 1.3-.5 2-.5 3.3 0 6 2 6 5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function VisionMission() {
  return (
    <section id="vision" className="bg-slate-50/70 py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Visi & Misi</span>
          <h2 className="section-title mt-5">Arah dan komitmen kami</h2>
          <p className="mt-4 text-lg text-slate-600">
            Landasan yang menggerakkan setiap langkah Sastro Grup dalam
            merawat kecantikan dan kesehatan Indonesia.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Visi */}
          <Reveal className="lg:col-span-2">
            <div className="group relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary-600 to-primary-800 p-9 text-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
              <div className="pointer-events-none absolute -bottom-14 -left-10 h-48 w-48 rounded-full bg-accent/20 blur-2xl" />
              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-6 font-heading text-2xl font-extrabold">Visi</h3>
                <p className="mt-4 text-lg leading-relaxed text-primary-100">
                  Menjadi grup perusahaan kecantikan dan perawatan diri terdepan di
                  Indonesia yang dicintai konsumen, dibanggakan mitra, dan membawa
                  nama baik bangsa ke panggung dunia.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Misi */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
            {missions.map((m, i) => (
              <Reveal key={m.title} delay={100 + i * 90}>
                <article className="group h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-50 text-primary transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-primary group-hover:text-white">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {m.icon}
                    </svg>
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
