'use client';

const details = [
  {
    label: 'Email',
    value: 'sastroutama@gmail.com',
    icon: <path d="M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zM3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    label: 'Kantor Pusat',
    value: 'Jl. Ade Irma Suryani, Monjok, Kec. Selaparang, Kota Mataram',
    icon: <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z" strokeLinecap="round" strokeLinejoin="round" />,
  },
];

import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2rem] shadow-card ring-1 ring-slate-100 lg:grid-cols-5">
            {/* Info panel */}
            <div className="relative bg-gradient-to-br from-primary via-primary-600 to-primary-800 p-10 text-white lg:col-span-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-wider">Hubungi Kami</span>
              <h2 className="mt-6 font-heading text-3xl font-extrabold">Terhubung dengan Sastro Grup</h2>
              <p className="mt-4 text-primary-100">Untuk kemitraan distribusi, kerja sama media, hubungan investor, maupun pertanyaan produk — tim kami siap membalas dalam 1×24 jam kerja.</p>

              <div className="mt-10 space-y-6">
                {details.map((d) => (
                  <div key={d.label} className="group flex items-center gap-4 transition-transform duration-300 hover:translate-x-1.5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
                        {d.icon}
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-primary-200">{d.label}</p>
                      <p className="font-heading font-semibold">{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="bg-white p-10 lg:col-span-3" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-heading text-sm font-semibold text-slate-700">Nama lengkap</label>
                  <input type="text" placeholder="Nama Anda" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary-100" />
                </div>
                <div>
                  <label className="mb-1.5 block font-heading text-sm font-semibold text-slate-700">Email</label>
                  <input type="email" placeholder="email@perusahaan.com" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary-100" />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block font-heading text-sm font-semibold text-slate-700">Subjek</label>
                <input
                  type="text"
                  placeholder="Contoh: Kemitraan distribusi wilayah Sumatera"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary-100"
                />
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block font-heading text-sm font-semibold text-slate-700">Pesan</label>
                <textarea
                  rows={4}
                  placeholder="Ceritakan kebutuhan atau rencana kerja sama Anda..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary-100"
                />
              </div>
              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                Kirim Pesan
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
