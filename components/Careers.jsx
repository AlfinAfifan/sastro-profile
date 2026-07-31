import Reveal from './Reveal';

const APPLY_EMAIL = 'karier@sastroutama.co.id';

const jobs = [];

export default function Careers() {
  return (
    <section id="careers" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Lowongan</span>
          <h2 className="section-title mt-5">Berkarier bersama Sastro Grup</h2>
          <p className="mt-4 text-lg text-slate-600">Bergabunglah dengan tim kami. Kirim CV dan portofolio Anda melalui email pada posisi yang sesuai.</p>
        </Reveal>

        {jobs.length === 0 && (
          <Reveal delay={100} className="mx-auto mt-14 max-w-xl">
            <div className="rounded-[2rem] border border-dashed border-slate-200 bg-white p-10 text-center shadow-card">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary-50 text-primary">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M4 7h16a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1zM3 12h18M12 11v3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-6 font-heading text-xl font-bold text-slate-900">
                Belum ada lowongan tersedia
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Saat ini belum ada posisi yang dibuka. Pantau halaman ini secara berkala,
                atau kirim lamaran umum agar CV Anda masuk ke basis data talenta kami dan
                dapat kami hubungi ketika posisi yang sesuai tersedia.
              </p>
              <a
                href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent('Lamaran Umum — Sastro Grup')}`}
                className="btn-primary mt-7"
              >
                Kirim Lamaran Umum
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zM3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </Reveal>
        )}

        {jobs.length > 0 && (
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((j, i) => (
            <Reveal key={j.title} delay={i * 90}>
              <article className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-soft">
                <span className="inline-flex w-fit rounded-full bg-primary-50 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-primary">{j.department}</span>
                <h3 className="mt-4 font-heading text-lg font-bold text-slate-900 transition-colors group-hover:text-primary">{j.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{j.desc}</p>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {j.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <path d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {j.type}
                  </span>
                </div>

                <a
                  href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(`Lamaran ${j.title} — Sastro Grup`)}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-primary-200 px-5 py-2.5 font-heading text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-soft"
                >
                  Lamar via Email
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zM3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        )}

        {jobs.length > 0 && (
        <Reveal delay={200} className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Tidak menemukan posisi yang cocok? Kirim lamaran umum ke{' '}
            <a href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent('Lamaran Umum — Sastro Grup')}`} className="font-semibold text-primary transition-colors hover:text-primary-600">
              {APPLY_EMAIL}
            </a>
          </p>
        </Reveal>
        )}
      </div>
    </section>
  );
}
