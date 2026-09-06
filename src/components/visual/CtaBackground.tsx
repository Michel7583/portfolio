export function CtaBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/16 blur-3xl animate-gradient-drift" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#c4a574]/12 blur-3xl animate-gradient-drift" />
      <div className="absolute left-1/2 top-1/2 h-40 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-card blur-3xl" />
    </div>
  );
}
