import Link from "next/link";
import Logo from "./Logo";
import { brands } from "@/lib/brands";

const cols = [
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "/#about" },
      { label: "Manajemen", href: "/#team" },
      { label: "Karier", href: "#" },
      { label: "Berita & Media", href: "#" },
    ],
  },
  {
    title: "Brand Kami",
    links: brands.map((b) => ({ label: b.name, href: `/brand/${b.slug}` })),
  },
  {
    title: "Informasi",
    links: [
      { label: "Kemitraan Distribusi", href: "/#contact" },
      { label: "Hubungan Investor", href: "/#contact" },
      { label: "Sertifikasi Produk", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
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
              PT Sastro Utama Media Grup — perusahaan induk brand-brand kosmetik dan
              perawatan diri Indonesia. Merawat kecantikan Indonesia sejak 2008.
            </p>
            <div className="mt-6 flex gap-3">
              {["in", "x", "ig", "yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xs font-bold uppercase text-slate-300 transition-colors hover:bg-primary hover:text-white"
                >
                  {s}
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
                    <Link
                      href={l.href}
                      className="text-sm text-slate-400 transition-colors hover:text-primary-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 PT Sastro Utama Media Grup. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-sm text-slate-500">
            Halal MUI · BPOM · <span className="text-primary-300">GMP Certified</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
