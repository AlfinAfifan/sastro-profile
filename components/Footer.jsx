import Link from 'next/link';
import Logo from './Logo';
import { brands } from '@/lib/brands';

const cols = [
  {
    title: 'Perusahaan',
    links: [
      { label: 'Tentang Kami', href: '/#about' },
      { label: 'Visi & Misi', href: '/#vision' },
      { label: 'Karier', href: '/#careers' },
      { label: 'Berita & Media', href: '/news' },
    ],
  },
  {
    title: 'Brand Kami',
    links: brands.map((b) => ({ label: b.name, href: `/brand/${b.slug}` })),
  },
  {
    title: 'Informasi',
    links: [
      { label: 'Kemitraan Distribusi', href: '/#contact' },
      { label: 'Hubungan Investor', href: '/#contact' },
      { label: 'Sertifikasi Produk', href: '#' },
      { label: 'Kebijakan Privasi', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              PT Sastro Grup — perusahaan induk brand-brand kosmetik, minuman kesehatan, dan perawatan diri dan perawatan diri Indonesia. Merawat kecantikan Indonesia sejak 2008.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                {
                  name: 'YouTube',
                  href: 'https://www.youtube.com/@ptsastroutamamediagrup2459',
                  icon: (
                    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
                  ),
                },
                {
                  name: 'Instagram',
                  href: 'https://www.instagram.com/ptsumg.official?igsh=NGVmMTlndDRhZ2Nl',
                  icon: (
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 2c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.7.3-.4.2-.6.3-.9.6-.3.3-.5.5-.6.9-.1.2-.2.6-.3 1.7-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.7.2.4.3.6.6.9.3.3.5.5.9.6.2.1.6.2 1.7.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.7-.3.4-.2.6-.3.9-.6.3-.3.5-.5.6-.9.1-.2.2-.6.3-1.7.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.7-.2-.4-.3-.6-.6-.9-.3-.3-.5-.5-.9-.6-.2-.1-.6-.2-1.7-.3-1.3-.1-1.7-.1-4.8-.1zm0 3.3a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5.7-2.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
                  ),
                },
                {
                  name: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/pt-sastro-utama-media-grup/',
                  icon: (
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                  ),
                },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name} PT Sastro Grup`}
                  title={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">{c.title}</h3>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-slate-400 transition-colors hover:text-primary-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">© 2026 PT Sastro Grup. Seluruh hak cipta dilindungi.</p>
          <p className="text-sm text-slate-500">
            Halal MUI · BPOM · <span className="text-primary-300">GMP Certified</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
