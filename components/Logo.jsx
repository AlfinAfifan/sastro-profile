export default function Logo({ className = "", light = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-primary shadow-soft">
        {/* Kelopak bunga — identitas industri kecantikan */}
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
          <path
            d="M12 3c2.5 2.5 2.5 5.5 0 8-2.5-2.5-2.5-5.5 0-8zM12 11c2.5-2.5 5.5-2.5 8 0-2.5 2.5-5.5 2.5-8 0zM12 11c-2.5-2.5-5.5-2.5-8 0 2.5 2.5 5.5 2.5 8 0zM12 11c2.5 2.5 2.5 5.5 0 8-2.5-2.5-2.5-5.5 0-8z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          Sastro<span className="text-primary">Utama</span>
        </span>
        <span
          className={`mt-0.5 font-heading text-[10px] font-semibold uppercase tracking-[0.22em] ${
            light ? "text-slate-400" : "text-slate-400"
          }`}
        >
          Media Grup
        </span>
      </span>
    </span>
  );
}
