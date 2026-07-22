"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/#about", label: "Tentang Kami" },
  { href: "/#services", label: "Lini Bisnis" },
  { href: "/#work", label: "Brand Kami" },
  { href: "/#team", label: "Manajemen" },
  { href: "/#contact", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/60 bg-white/80 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between py-4">
        <Link href="/" aria-label="Sastro Utama Media Grup beranda">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-heading text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/#contact" className="btn-primary">
            Ajukan Kerja Sama
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Buka menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white lg:hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-heading text-sm font-medium text-slate-700 hover:bg-primary-50 hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link href="/#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
              Ajukan Kerja Sama
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
