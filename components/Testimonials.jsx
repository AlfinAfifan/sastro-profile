const testimonials = [
  {
    quote:
      "Sarasvati sudah jadi bagian dari rutinitas skincare saya selama tiga tahun. Kualitasnya sebanding dengan brand luar, tapi harganya jauh lebih bersahabat.",
    name: "Nadia Safitri",
    role: "Konsumen setia Sarasvati",
    color: "#4267b2",
  },
  {
    quote:
      "Sebagai mitra distribusi, kami merasakan langsung profesionalisme Sastro Utama — pasokan selalu tepat waktu dan dukungan pemasarannya luar biasa.",
    name: "Budi Santoso",
    role: "Direktur, Mitra Distribusi Jawa Timur",
    color: "#547bcb",
  },
  {
    quote:
      "Produk Lumea selalu jadi andalan di studio kami. Pigmentasinya bagus, tahan lama, dan yang terpenting aman untuk semua jenis kulit klien.",
    name: "Sari Wulandari",
    role: "Makeup Artist Profesional",
    color: "#35528e",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimoni</span>
          <h2 className="section-title mt-5">Kata mereka tentang kami</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-card"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-5 flex-1">
                <p className="font-display text-lg italic leading-relaxed text-slate-700">
                  “{t.quote}”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="grid h-11 w-11 place-items-center rounded-full font-heading text-sm font-bold text-white"
                  style={{ background: t.color }}
                >
                  {t.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
