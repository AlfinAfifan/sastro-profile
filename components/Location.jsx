const locations = [
  {
    name: 'Kantor Pusat — Mataram',
    desc: 'Jl. Ade Irma Suryani, Monjok, Kec. Selaparang, Kota Mataram, NTB 83239',
    icon: <path d="M3 21h18M5 21V5a1 1 0 011-1h8a1 1 0 011 1v16M9 8h2m-2 4h2m-2 4h2M15 10h4a1 1 0 011 1v10" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    name: 'Gudang — Malang, Bandung, & Mataram',
    desc: 'Tiga gudang regional yang memastikan produk tersalurkan cepat ke seluruh nusantara',
    icon: <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7zM7 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" strokeLinecap="round" strokeLinejoin="round" />,
  },
];

import Reveal from './Reveal';

export default function Location() {
  return (
    <section id="location" className="bg-slate-50/70 py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Keterangan lokasi */}
        <Reveal>
          <span className="eyebrow">Lokasi Kami</span>
          <h2 className="section-title mt-5">Hadir dan tumbuh di jantung Indonesia</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Kantor pusat kami berdiri di Monjok, Kec. Selaparang, NTB — rumah bagi lebih dari 200 karyawan kantor pusat yang menggerakkan strategi, kreativitas, dan inovasi seluruh brand. Didukung tiga gudang regional di Malang, Bandung,
            dan Mataram, kami memastikan produk sampai ke tangan konsumen dalam kondisi terbaik.
          </p>

          <div className="mt-9 space-y-6">
            {locations.map((l) => (
              <div key={l.name} className="group flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-primary shadow-card ring-1 ring-slate-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {l.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-slate-900">{l.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
            <div>
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400">Jam Operasional</p>
              <p className="mt-1 font-heading text-sm font-bold text-slate-900">Senin – Jumat, 08.30 – 17.00 WITA</p>
            </div>
            <div>
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p>
              <p className="mt-1 font-heading text-sm font-bold text-slate-900">sastroutama@gmail.com</p>
            </div>
          </div>
        </Reveal>

        {/* Foto kantor */}
        <Reveal delay={120} className="relative">
          <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full bg-primary-100 blur-3xl opacity-70" />
          <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
            <img
              src="/office/office-1.jpg"
              alt="Suasana townhall karyawan Sastro Grup"
              className="col-span-2 aspect-[16/9] w-full rounded-[2rem] rounded-tr-[4.5rem] object-cover shadow-card transition-all duration-500 hover:scale-[1.02] hover:shadow-soft"
            />
            <img
              src="/office/office-2.jpg"
              alt="Area kerja kantor pusat Sastro Grup"
              className="aspect-[4/3] w-full rounded-[2rem] rounded-bl-[4.5rem] object-cover shadow-card transition-all duration-500 hover:scale-[1.03] hover:shadow-soft"
            />
            <img src="/office/office-3.jpg" alt="Ruang rapat kantor Sastro Grup" className="aspect-[4/3] w-full rounded-[2rem] rounded-br-[4.5rem] object-cover shadow-card transition-all duration-500 hover:scale-[1.03] hover:shadow-soft" />
          </div>

          {/* Badge alamat mengambang */}
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-card ring-1 ring-slate-100 transition-transform duration-300 hover:-translate-y-1">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-slate-900">Kantor Sastro Grup</p>
              <p className="text-xs text-slate-500">Kota Mataram, NTB</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
