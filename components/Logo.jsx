export default function Logo({ className = "", light = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo/sastro-192.png"
        alt="Logo PT Sastro Grup"
        className="h-11 w-11 shrink-0 object-contain"
      />
      <span
        className={`font-heading text-lg font-extrabold tracking-tight ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        Sastro<span className="text-primary">Grup</span>
      </span>
    </span>
  );
}
