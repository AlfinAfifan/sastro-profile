import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="pb-4">
      <div className="container-x">
        <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-primary-100 bg-primary-50 px-8 py-16 text-center transition-shadow duration-300 hover:shadow-soft sm:px-16">
          <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-primary-200/50 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-52 w-52 rounded-full bg-accent/20 blur-2xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Mari bertumbuh bersama kami.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Terbuka untuk kemitraan distribusi, kolaborasi brand, maupun peluang karier —
              tim kami siap menyambut Anda menjadi bagian dari keluarga besar Sastro Grup.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn-primary">
                Ajukan Kemitraan
              </a>
              <a href="#work" className="btn-ghost">
                Jelajahi Brand Kami
              </a>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
