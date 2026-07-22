const team = [
  { name: "Hendra Sastro Utomo", role: "Founder & CEO", color: "#4267b2", photo: "/team/hendra.jpg" },
  { name: "Ratna Prameswari", role: "Direktur R&D", color: "#547bcb", photo: "/team/ratna.jpg" },
  { name: "Yusuf Alamsyah", role: "Direktur Operasional", color: "#35528e", photo: "/team/yusuf.jpg" },
  { name: "Amanda Kirana", role: "Direktur Pemasaran", color: "#f5b301", photo: "/team/amanda.jpg" },
];

export default function Team() {
  return (
    <section id="team" className="bg-slate-50/70 py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Manajemen</span>
          <h2 className="section-title mt-5">Kepemimpinan Sastro Utama Media Grup</h2>
          <p className="mt-4 text-lg text-slate-600">
            Dipimpin oleh para profesional berpengalaman di industri kecantikan dan
            barang konsumen.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article
              key={m.name}
              className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-card transition-all hover:-translate-y-1.5"
            >
              <div
                className="mx-auto h-28 w-28 overflow-hidden rounded-full p-1 shadow-soft"
                style={{ background: `linear-gradient(135deg, ${m.color}, #aabde5)` }}
              >
                <img
                  src={m.photo}
                  alt={`Foto ${m.name}`}
                  className="h-full w-full rounded-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-slate-900">{m.name}</h3>
              <p className="mt-1 text-sm text-primary">{m.role}</p>
              <div className="mt-4 flex justify-center gap-2">
                {["in", "x", "ig"].map((s) => (
                  <span
                    key={s}
                    className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-xs font-bold uppercase text-slate-500 transition-colors group-hover:bg-primary-50 group-hover:text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
