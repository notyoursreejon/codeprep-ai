export default function FeatureBuild({ className }: { className?: string }) {
  return (
    <div className={`p-6 flex flex-col items-center justify-center min-h-[220px] ${className || ""}`}>
      <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
        <span className="material-symbols-outlined text-3xl text-indigo-400">build</span>
      </div>
      <p className="font-semibold text-center text-foreground text-sm">Automated Pipeline Verification</p>
      <p className="text-xs text-muted-foreground text-center mt-1">Zero config TypeScript compilation with instant AST linting.</p>
    </div>
  );
}
