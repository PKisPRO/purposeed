export default function GradientBlobs({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute -left-24 top-10 h-72 w-72 animate-blob rounded-full bg-violet/30 blur-3xl" />
      <div className="absolute -right-16 top-1/3 h-80 w-80 animate-blob rounded-full bg-coral/20 blur-3xl [animation-delay:2s]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 animate-blob rounded-full bg-gold/20 blur-3xl [animation-delay:4s]" />
    </div>
  );
}
