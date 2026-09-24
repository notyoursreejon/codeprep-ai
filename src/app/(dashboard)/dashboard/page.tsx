"use client";
export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-col w-full">
<div className="p-gutter-lg space-y-gutter-lg max-w-[1600px] mx-auto w-full">
{/* Top Welcome Banner with Subtle Indigo Radial Radiance */}
<section className="relative overflow-hidden rounded-xl bg-surface-container-low p-margin-lg shadow-xl">
{/* Ambient Glow Behind Header */}
<div className="absolute -top-24 -right-16 w-[500px] h-[300px] bg-primary-container/10 blur-[90px] rounded-full pointer-events-none"></div>
<div className="absolute -bottom-20 left-1/4 w-[360px] h-[220px] bg-secondary-container/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-space-xl">
<div className="space-y-space-xs">
<div className="flex items-center gap-space-sm">
<span className="px-space-sm py-0.5 rounded bg-surface-container font-label-caps text-label-caps text-tertiary uppercase tracking-wider flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
              Interview Sprint · Day 14
            </span>
<span className="font-code-sm text-code-sm text-on-surface-variant font-mono">Meta E6 / Google L6 Target</span>
</div>
<h1 className="font-headline-lg text-headline-lg font-semibold text-on-surface tracking-tight">
            Good evening, Alex. Ready to break into Staff level?
          </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Your performance benchmark puts you in the top <span className="text-tertiary font-medium">3.8%</span> of algorithmic candidates this month. 2 high-leverage architectural drills are pending review.
          </p>
</div>
{/* Quick Action CTAs */}
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<a className="px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-md text-body-md font-medium transition-all shadow-sm flex items-center gap-space-xs group" href="#">
<span className="material-symbols-outlined text-[18px] text-tertiary group-hover:rotate-12 transition-transform">bolt</span>
<span>Resume Daily Challenge</span>
</a>
<a className="px-space-md py-space-sm rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-body-md text-body-md font-medium transition-all shadow-md flex items-center gap-space-xs group" href="#">
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">smart_toy</span>
<span>Start AI Mock Interview</span>
</a>
</div>
</div>
</section>
{/* Metric KPI Cards Grid (4 Columns) */}
<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter">
{/* KPI 1: Problems Solved with Circular Ring Indicator */}
<div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md transition-all hover:bg-surface-container">
<div className="flex items-center justify-between">
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">Problems Solved</span>
<span className="material-symbols-outlined text-[20px] text-primary">code_blocks</span>
</div>
<div className="my-space-md flex items-baseline justify-between">
<div>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg font-bold text-on-surface">342</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">/ 450</span>
</div>
<span className="font-code-sm text-code-sm text-tertiary font-mono">76.0% target attained</span>
</div>
{/* Circular SVG Gauge */}
<div className="relative w-12 h-12 flex items-center justify-center shrink-0">
<svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"/>
<path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="76, 100" strokeLinecap="round" strokeWidth="3.5"/>
</svg>
<span className="absolute font-code-sm text-[10px] text-on-surface font-semibold">76%</span>
</div>
</div>
{/* Breakdown Bar */}
<div className="space-y-1.5 pt-space-xs">
<div className="flex h-1.5 w-full rounded-full overflow-hidden bg-surface-container-highest">
<div className="bg-tertiary w-[35%]" title="Easy: 120"></div>
<div className="bg-primary w-[53%]" title="Medium: 182"></div>
<div className="bg-secondary-container w-[12%]" title="Hard: 40"></div>
</div>
<div className="flex items-center justify-between font-code-sm text-[11px] text-on-surface-variant">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>120 Easy</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>182 Med</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>40 Hard</span>
</div>
</div>
</div>
{/* KPI 2: Acceptance Rate */}
<div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md transition-all hover:bg-surface-container">
<div className="flex items-center justify-between">
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">Acceptance Rate</span>
<span className="material-symbols-outlined text-[20px] text-tertiary">task_alt</span>
</div>
<div className="my-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg font-bold text-on-surface">78.4%</span>
<span className="font-code-sm text-code-sm text-tertiary flex items-center font-medium">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +4.2%
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Top 5% candidate percentile</p>
</div>
{/* Mini Sparkline inline SVG */}
<div className="pt-space-xs flex items-center justify-between">
<svg className="w-32 h-6 text-tertiary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 24">
<polyline points="0,18 20,16 40,19 60,11 80,12 100,4" vectorEffect="non-scaling-stroke"/>
</svg>
<span className="font-code-sm text-[11px] px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant">Last 30 runs</span>
</div>
</div>
{/* KPI 3: Current Streak */}
<div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md transition-all hover:bg-surface-container">
<div className="flex items-center justify-between">
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">Consistency Streak</span>
<span className="text-[20px]">🔥</span>
</div>
<div className="my-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg font-bold text-on-surface">14 Days</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Personal Best: <span className="text-on-surface font-semibold">28 Days</span></p>
</div>
<div className="pt-space-xs flex items-center gap-1.5">
<div className="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div className="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div className="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div className="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div className="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div className="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div className="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div className="h-2 flex-1 rounded bg-surface-container-highest" title="Day 15 Target"></div>
<div className="h-2 flex-1 rounded bg-surface-container-highest" title="Day 16 Target"></div>
</div>
</div>
{/* KPI 4: Predicted FAANG Level */}
<div className="rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md transition-all hover:bg-surface-container relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">Predicted Readiness</span>
<span className="px-space-xs py-0.5 rounded bg-secondary-container/60 font-code-sm text-[10px] text-on-secondary-container uppercase">AI Calibrated</span>
</div>
<div className="my-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg font-bold text-primary">L6 / Staff</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Confidence: <span className="text-tertiary font-semibold">91%</span> (18 evaluations)</p>
</div>
<div className="pt-space-xs flex items-center justify-between font-code-sm text-[11px] text-on-surface-variant">
<span>Meta E6 · Google L6</span>
<span className="text-primary font-medium hover:underline cursor-pointer">View breakdown →</span>
</div>
</div>
</section>
{/* GitHub-Style Interactive Contribution & Activity Heatmap */}
<section className="rounded-xl bg-surface-container-low p-space-lg shadow-md space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-primary">insights</span>
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">52-Week Practice Heatmap</h2>
<span className="font-code-sm text-code-sm text-on-surface-variant">412 Submissions in past 365 days</span>
</div>
{/* Intensity Legend */}
<div className="flex items-center gap-space-xs font-code-sm text-code-sm text-on-surface-variant">
<span>Less</span>
<span className="w-3 h-3 rounded-xs bg-surface-container-highest"></span>
<span className="w-3 h-3 rounded-xs bg-tertiary/30"></span>
<span className="w-3 h-3 rounded-xs bg-tertiary/60"></span>
<span className="w-3 h-3 rounded-xs bg-tertiary"></span>
<span className="w-3 h-3 rounded-xs bg-primary shadow-[0_0_8px_rgba(128,131,255,0.6)]"></span>
<span>More (Mock Session)</span>
</div>
</div>
{/* Heatmap Table Simulation */}
<div className="relative overflow-x-auto pb-space-xs">
<div className="min-w-[900px]">
{/* Month Headers */}
<div className="flex justify-between pl-8 pr-2 font-code-sm text-[11px] text-on-surface-variant pb-1.5 select-none">
<span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span>
</div>
{/* Heatmap Matrix Grid (7 rows x 52 columns) */}
<div className="flex gap-1.5 items-start">
{/* Day of Week labels */}
<div className="flex flex-col gap-1 font-code-sm text-[10px] text-on-surface-variant pt-0.5 select-none w-6">
<span className="h-3 leading-3">M</span>
<span className="h-3 leading-3 opacity-0">T</span>
<span className="h-3 leading-3">W</span>
<span className="h-3 leading-3 opacity-0">T</span>
<span className="h-3 leading-3">F</span>
<span className="h-3 leading-3 opacity-0">S</span>
<span className="h-3 leading-3 opacity-0">S</span>
</div>
{/* Heatmap Week Columns (Generated dynamically structured pattern) */}
<div className="flex-1 grid grid-flow-col grid-rows-7 gap-1" id="heatmap-grid">
{/* Sample 52 weeks filled with weighted variance */}
{/* Block 1: Casual Warmup */}
<div className="w-3 h-3 rounded-xs bg-surface-container-highest hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 3: 0 problems"></div>
<div className="w-3 h-3 rounded-xs bg-tertiary/30 hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 4: 1 problem"></div>
<div className="w-3 h-3 rounded-xs bg-surface-container-highest hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 5: 0 problems"></div>
<div className="w-3 h-3 rounded-xs bg-tertiary/60 hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 6: 3 problems"></div>
<div className="w-3 h-3 rounded-xs bg-surface-container-highest hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 7: 0 problems"></div>
<div className="w-3 h-3 rounded-xs bg-tertiary/30 hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 8: 1 problem"></div>
<div className="w-3 h-3 rounded-xs bg-surface-container-highest hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 9: 0 problems"></div>
{/* Pattern loops for visual aesthetic density */}
<div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div>
<div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div>
<div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div>
<div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div>
<div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div>
<div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div>
<div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-primary"></div>
<div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div>
<div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div>
<div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div>
<div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div>
<div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary/30"></div><div className="w-3 h-3 rounded-xs bg-tertiary/60"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div>
{/* Recent Sprint Weeks (Bright Active Streak) */}
<div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div>
<div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div>
<div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-tertiary"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div className="w-3 h-3 rounded-xs bg-surface-container-highest"></div>
</div>
</div>
</div>
</div>
{/* Hover tooltip notification indicator */}
<div className="flex items-center justify-between pt-space-xs font-code-sm text-code-sm text-on-surface-variant" id="heatmap-status">
<span className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Latest peak: <strong className="text-on-surface font-semibold">Nov 14: 6 problems solved, 1 System Design session</strong></span>
</span>
<button className="text-primary hover:underline font-code-sm">Download Submission CSV</button>
</div>
</section>
{/* Main Workspace Split: 'Resume Left Off' & 'Mock Readiness + Upcoming' */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
{/* Left Column: Resume Where You Left Off (7 cols) */}
<section className="lg:col-span-7 space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-tertiary">history</span>
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Resume Where You Left Off</h2>
</div>
<a className="font-code-sm text-code-sm text-primary hover:underline" href="#">View All Active (5)</a>
</div>
<div className="space-y-space-sm">
{/* Problem 1: System Design (High Progress) */}
<div className="rounded-xl bg-surface-container-low p-space-md hover:bg-surface-container transition-all group flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
<div className="space-y-space-xs flex-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-caps text-label-caps text-tertiary">SYSTEM DESIGN</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest font-code-sm text-code-sm text-on-surface-variant">Distributed Systems</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">· 42 min elapsed</span>
</div>
<h3 className="font-headline-sm text-[16px] font-semibold text-on-surface group-hover:text-primary transition-colors">
                Design in-memory key-value store with TTL &amp; LRU eviction
              </h3>
{/* Mini Progress Bar */}
<div className="w-full max-w-md pt-1">
<div className="flex items-center justify-between font-code-sm text-[11px] text-on-surface-variant mb-1">
<span>Architecture &amp; Sharding stage</span>
<span className="text-tertiary font-medium">85% Complete</span>
</div>
<div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-tertiary w-[85%] rounded-full"></div>
</div>
</div>
</div>
<div className="shrink-0 flex items-center gap-space-sm">
<a className="px-space-md py-space-sm rounded-lg bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary text-on-surface font-body-sm text-body-sm font-medium transition-all flex items-center gap-1 shadow-sm" href="#">
<span>Continue</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
{/* Problem 2: Hard Algorithm (Trapping Rain Water II) */}
<div className="rounded-xl bg-surface-container-low p-space-md hover:bg-surface-container transition-all group flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
<div className="space-y-space-xs flex-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-error-container/50 font-label-caps text-label-caps text-error">HARD ALGORITHM</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest font-code-sm text-code-sm text-on-surface-variant">PriorityQueue</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest font-code-sm text-code-sm text-on-surface-variant">BFS 3D</span>
<span className="font-code-sm text-code-sm text-secondary font-mono">2 hints unlocked</span>
</div>
<h3 className="font-headline-sm text-[16px] font-semibold text-on-surface group-hover:text-primary transition-colors">
                Trapping Rain Water II (3D Elevation Matrix)
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                Given an m x n integer matrix representing height of each unit cell, return total volume of water it can trap.
              </p>
</div>
<div className="shrink-0 flex items-center gap-space-sm">
<a className="px-space-md py-space-sm rounded-lg bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary text-on-surface font-body-sm text-body-sm font-medium transition-all flex items-center gap-1 shadow-sm" href="#">
<span>Resume Code</span>
<span className="material-symbols-outlined text-[16px]">terminal</span>
</a>
</div>
</div>
{/* STAR Behavioral Scenario */}
<div className="rounded-xl bg-surface-container-low p-space-md hover:bg-surface-container transition-all group flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
<div className="space-y-space-xs flex-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-secondary-container font-label-caps text-label-caps text-on-secondary-container">BEHAVIORAL STAR</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest font-code-sm text-code-sm text-on-surface-variant">Staff Leadership</span>
<span className="font-code-sm text-code-sm text-tertiary">Action Step Feedback Ready</span>
</div>
<h3 className="font-headline-sm text-[16px] font-semibold text-on-surface group-hover:text-primary transition-colors">
                Handling Cross-Functional Pushback on Tech Debt Refactoring
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                AI Coach suggests quantifying engineering hours reclaimed to convince Product VP.
              </p>
</div>
<div className="shrink-0 flex items-center gap-space-sm">
<a className="px-space-md py-space-sm rounded-lg bg-surface-container-high group-hover:bg-secondary-container group-hover:text-on-secondary-container text-on-surface font-body-sm text-body-sm font-medium transition-all flex items-center gap-1 shadow-sm" href="#">
<span>Refine STAR</span>
<span className="material-symbols-outlined text-[16px]">psychology</span>
</a>
</div>
</div>
</div>
</section>
{/* Right Column: Topic Mastery Radar & Upcoming Mock (5 cols) */}
<section className="lg:col-span-5 space-y-gutter">
{/* Live Mock Interview Readiness & Mastery Breakdown */}
<div className="rounded-xl bg-surface-container-low p-space-lg shadow-md space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-primary">analytics</span>
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Skill Radar &amp; Domain Mastery</h2>
</div>
<span className="font-label-caps text-label-caps text-tertiary font-mono">STAFF TARGET</span>
</div>
<div className="space-y-space-sm pt-space-xs">
{/* Data Structures & Algorithms */}
<div>
<div className="flex justify-between font-code-sm text-code-sm mb-1">
<span className="text-on-surface flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-tertiary">check_circle</span>
                  Data Structures &amp; Algorithms
                </span>
<span className="text-on-surface font-mono font-medium">94%</span>
</div>
<div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-tertiary rounded-full transition-all" style={{ width: "94%" }}></div>
</div>
</div>
{/* Distributed Systems & System Design */}
<div>
<div className="flex justify-between font-code-sm text-code-sm mb-1">
<span className="text-on-surface flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-primary">hub</span>
                  Distributed Systems Architecture
                </span>
<span className="text-on-surface font-mono font-medium">82%</span>
</div>
<div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full transition-all" style={{ width: "82%" }}></div>
</div>
</div>
{/* Concurrency & Multithreading */}
<div>
<div className="flex justify-between font-code-sm text-code-sm mb-1">
<span className="text-on-surface flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-secondary">memory</span>
                  Concurrency &amp; Low-Latency
                </span>
<span className="text-on-surface font-mono font-medium">76%</span>
</div>
<div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-secondary-container rounded-full transition-all" style={{ width: "76%" }}></div>
</div>
</div>
{/* Behavioral Leadership (STAR) */}
<div>
<div className="flex justify-between font-code-sm text-code-sm mb-1">
<span className="text-on-surface flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-tertiary">groups</span>
                  Behavioral &amp; Staff Leadership
                </span>
<span className="text-on-surface font-mono font-medium">88%</span>
</div>
<div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-tertiary rounded-full transition-all" style={{ width: "88%" }}></div>
</div>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between text-on-surface-variant font-code-sm text-[11px]">
<span>Next recommended focus:</span>
<span className="text-primary font-medium cursor-pointer hover:underline">Raft Consensus &amp; Lock-free Queues →</span>
</div>
</div>
{/* Upcoming AI Mock Interviews & Benchmark */}
<div className="rounded-xl bg-surface-container-low p-space-lg shadow-md space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-primary">event_available</span>
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Scheduled AI Mock</h2>
</div>
<span className="font-code-sm text-code-sm text-primary">Tomorrow</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div>
<span className="font-label-caps text-[10px] text-tertiary uppercase">L6 System Design</span>
<h4 className="font-headline-sm text-[15px] font-semibold text-on-surface">Google Staff Level Architecture Simulation</h4>
<p className="font-code-sm text-code-sm text-on-surface-variant mt-0.5">Focus: Global Video Transcoding at Scale</p>
</div>
<span className="px-space-xs py-1 rounded bg-surface-container-highest font-code-sm text-code-sm text-on-surface">10:00 AM PST</span>
</div>
<div className="pt-space-xs flex items-center justify-between">
<span className="font-code-sm text-[11px] text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">videocam</span> 45-min Voice &amp; CoderPad AI
              </span>
<button className="px-space-md py-space-xs rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-body-sm text-body-sm font-medium transition-all shadow-sm">
                Setup Environment
              </button>
</div>
</div>
{/* Peer Community Leaderboard Preview */}
<div className="pt-space-xs flex items-center justify-between font-code-sm text-code-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="text-on-surface font-semibold">Weekly Rank: #14</span>
<span>· Top 2% Staff Track</span>
</div>
<a className="text-tertiary hover:underline" href="#">View Leaderboard</a>
</div>
</div>
</section>
</div>
</div>
</div>

    </>
  );
}