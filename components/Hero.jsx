export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background decor */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-100 blur-3xl opacity-70" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] [background-size:32px_32px] opacity-40" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-2 w-2 rounded-full bg-accent" />
            PT Sastro Utama Media Grup
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Merawat{" "}
            <span className="relative whitespace-nowrap text-primary">
              kecantikan
              <svg
                className="absolute -bottom-2 left-0 w-full text-primary-300"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M2 9C60 3 220 2 298 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Indonesia.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Kami adalah perusahaan induk yang menaungi brand-brand kosmetik dan perawatan
            diri kebanggaan Indonesia — dari riset formula, produksi bersertifikat, hingga
            distribusi ke seluruh nusantara.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#work" className="btn-primary">
              Jelajahi Brand Kami
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#about" className="btn-ghost">
              Tentang Perusahaan
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {["#4267b2", "#547bcb", "#7f9cd8", "#f5b301"].map((c, i) => (
                <span
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-white shadow"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-sm text-slate-500">
              <span className="font-heading font-bold text-slate-900">10 juta+ konsumen</span>
              <br />
              menggunakan produk kami setiap tahun
            </p>
          </div>
        </div>

        {/* Hero visual — grid foto */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="space-y-4 sm:space-y-5">
              <img
                src="/hero/hero-1.jpg"
                alt="Rangkaian produk makeup"
                className="aspect-square w-full rounded-[2rem] rounded-tl-[4.5rem] object-cover shadow-card"
              />
              <img
                src="/hero/hero-3.jpg"
                alt="Pengaplikasian makeup profesional"
                className="aspect-[4/3] w-full rounded-[2rem] rounded-bl-[4.5rem] object-cover shadow-card"
              />
            </div>
            <div className="space-y-4 pt-10 sm:space-y-5">
              <img
                src="/hero/hero-2.jpg"
                alt="Perawatan wajah di klinik kecantikan"
                className="aspect-[4/3] w-full rounded-[2rem] rounded-tr-[4.5rem] object-cover shadow-card"
              />
              <img
                src="/hero/hero-4.jpg"
                alt="Serum perawatan kulit berbahan alami"
                className="aspect-square w-full rounded-[2rem] rounded-br-[4.5rem] object-cover shadow-card"
              />
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -left-6 top-10 hidden animate-float rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100 sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-green-100 text-green-600">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="font-heading text-sm font-bold text-slate-900">Tersertifikasi</p>
                <p className="text-xs text-slate-500">Halal MUI · BPOM · GMP</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-8 hidden animate-float [animation-delay:1.5s] rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100 sm:block">
            <p className="font-heading text-2xl font-extrabold text-primary">6 Brand</p>
            <p className="text-xs text-slate-500">dalam satu grup</p>
          </div>
        </div>
      </div>
    </section>
  );
}
