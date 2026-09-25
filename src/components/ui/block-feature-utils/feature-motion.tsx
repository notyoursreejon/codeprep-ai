export default function FeatureMotion({ className }: { className?: string }) {
  return (
    <div className={`p-6 flex flex-col items-center justify-center min-h-[220px] ${className || ""}`}>
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
        <span className="material-symbols-outlined text-3xl text-amber-400">animation</span>
      </div>
      <p className="font-semibold text-center text-foreground text-sm">GPU-Accelerated Spring Physics</p>
      <p className="text-xs text-muted-foreground text-center mt-1">Fluid Framer Motion micro-interactions with 60fps layout animations.</p>
    </div>
  );
}
