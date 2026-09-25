export default function Page() {
  return (
    <div className="bg-surface-container-lowest font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen" dangerouslySetInnerHTML={{ __html: `<aside class="fixed left-0 top-0 bottom-0 w-64 bg-surface-container-low/90 backdrop-blur-xl z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div class="flex flex-col"><div class="h-14 px-gutter flex items-center justify-between"><a href="/dashboard" class="flex items-center gap-space-sm"><img alt="CodePrep AI Logo" class="h-8 w-auto object-contain" src="/logo.svg"/><span class="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">CodePrep AI</span></a><span class="font-label-caps text-label-caps px-space-xs py-0.5 rounded-lg bg-secondary-container text-on-secondary-container uppercase">PRO</span></div><div class="px-gutter py-space-sm"><nav class="flex flex-col gap-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-inner"><a aria-current="page" class="flex items-center gap-space-md px-space-md py-space-sm transition-colors bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-inner" data-path="dashboard" href="/dashboard"><span class="material-symbols-outlined text-[18px]">grid_view</span><span class="font-body-md text-body-md">Dashboard</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="ide-and-ai-solver" href="/ide-and-ai-solver"><span class="material-symbols-outlined text-[18px]">terminal</span><span class="font-body-md text-body-md">IDE &amp; AI Solver</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="system-design" href="/system-design"><span class="material-symbols-outlined text-[18px]">hub</span><span class="font-body-md text-body-md">System Design</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="analytics" href="/analytics"><span class="material-symbols-outlined text-[18px]">monitoring</span><span class="font-body-md text-body-md">Analytics &amp; Metrics</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="behavioral-star" href="/star-method"><span class="material-symbols-outlined text-[18px]">psychology</span><span class="font-body-md text-body-md">Behavioral STAR</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="resume-ats" href="/resume"><span class="material-symbols-outlined text-[18px]">description</span><span class="font-body-md text-body-md">Resume ATS</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="cs-fundamentals" href="/fundamentals"><span class="material-symbols-outlined text-[18px]">menu_book</span><span class="font-body-md text-body-md">CS Fundamentals</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="/settings"><span class="material-symbols-outlined text-[18px]">settings</span><span class="font-body-md text-body-md">Settings</span></a></nav></div></div><div class="p-gutter flex flex-col gap-space-sm"><div class="flex items-center justify-between px-space-md py-space-sm rounded-lg bg-surface-container"><div class="flex items-center gap-space-xs"><span class="text-[14px]">🔥</span><span class="font-code-sm text-code-sm text-on-surface">14-day streak</span></div><span class="font-label-caps text-label-caps text-tertiary">Active</span></div><div class="flex items-center justify-between px-space-md py-space-sm rounded-lg bg-surface-container-lowest"><div class="flex items-center gap-space-xs"><span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span><span class="font-code-sm text-code-sm text-on-surface-variant">AI Engine v4.2</span></div><span class="font-label-caps text-label-caps text-on-surface-variant">Online</span></div></div></aside><div class="pl-64 flex flex-col min-h-screen"><header class="fixed top-0 left-64 right-0 h-14 bg-surface-container-lowest/80 backdrop-blur-xl z-40 flex items-center justify-between px-gutter-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div class="flex items-center gap-space-sm"><span class="font-code-sm text-code-sm text-on-surface-variant">Workspace</span><span class="text-outline text-xs">/</span><span class="font-code-sm text-code-sm text-on-surface-variant">LeetCode Hard</span><span class="text-outline text-xs">/</span><span class="font-code-sm text-code-sm text-on-surface font-medium">LRU Cache</span></div><div class="flex items-center gap-space-md"><button class="flex items-center justify-between w-80 px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors shadow-inner" type="button"><div class="flex items-center gap-space-sm"><span class="material-symbols-outlined text-[16px]">search</span><span class="font-body-sm text-body-sm">Search problems, algorithms...</span></div><kbd class="font-code-sm text-code-sm px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">⌘K</kbd></button><div class="flex items-center gap-space-xs"><div class="hidden xl:flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container"><span class="material-symbols-outlined text-primary text-[16px]">token</span><span class="font-code-sm text-code-sm text-on-surface-variant">94,200 / 100k</span></div><button class="p-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button"><span class="material-symbols-outlined text-[18px]">volume_up</span></button><button class="relative p-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button"><span class="material-symbols-outlined text-[18px]">notifications</span><span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-error"></span></button></div><div class="flex items-center gap-space-sm pl-space-sm"><img alt="Profile" class="w-8 h-8 rounded-full object-cover" src="/avatar.png"/><div class="hidden md:flex flex-col"><span class="font-body-sm text-body-sm font-semibold text-on-surface leading-tight">Alex Chen</span><span class="font-label-caps text-label-caps text-primary leading-tight">Staff Tier</span></div></div></div></header><main class="w-full pt-14 flex-1 bg-surface-container-lowest"><div class="flex flex-col w-full">
<div class="p-gutter-lg space-y-gutter-lg max-w-[1600px] mx-auto w-full">
<!-- Top Welcome Banner with Subtle Indigo Radial Radiance -->
<section class="relative overflow-hidden rounded-xl bg-surface-container-low p-margin-lg shadow-xl">
<!-- Ambient Glow Behind Header -->
<div class="absolute -top-24 -right-16 w-[500px] h-[300px] bg-primary-container/10 blur-[90px] rounded-full pointer-events-none"></div>
<div class="absolute -bottom-20 left-1/4 w-[360px] h-[220px] bg-secondary-container/20 blur-[80px] rounded-full pointer-events-none"></div>
<div class="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-space-xl">
<div class="space-y-space-xs">
<div class="flex items-center gap-space-sm">
<span class="px-space-sm py-0.5 rounded bg-surface-container font-label-caps text-label-caps text-tertiary uppercase tracking-wider flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
              Interview Sprint · Day 14
            </span>
<span class="font-code-sm text-code-sm text-on-surface-variant font-mono">Meta E6 / Google L6 Target</span>
</div>
<h1 class="font-headline-lg text-headline-lg font-semibold text-on-surface tracking-tight">
            Good evening, Alex. Ready to break into Staff level?
          </h1>
<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Your performance benchmark puts you in the top <span class="text-tertiary font-medium">3.8%</span> of algorithmic candidates this month. 2 high-leverage architectural drills are pending review.
          </p>
</div>
<!-- Quick Action CTAs -->
<div class="flex flex-wrap items-center gap-space-sm shrink-0">
<a class="px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-md text-body-md font-medium transition-all shadow-sm flex items-center gap-space-xs group" href="#">
<span class="material-symbols-outlined text-[18px] text-tertiary group-hover:rotate-12 transition-transform">bolt</span>
<span>Resume Daily Challenge</span>
</a>
<a class="px-space-md py-space-sm rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-body-md text-body-md font-medium transition-all shadow-md flex items-center gap-space-xs group" href="#">
<span class="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">smart_toy</span>
<span>Start AI Mock Interview</span>
</a>
</div>
</div>
</section>
<!-- Metric KPI Cards Grid (4 Columns) -->
<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter">
<!-- KPI 1: Problems Solved with Circular Ring Indicator -->
<div class="rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md transition-all hover:bg-surface-container">
<div class="flex items-center justify-between">
<span class="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">Problems Solved</span>
<span class="material-symbols-outlined text-[20px] text-primary">code_blocks</span>
</div>
<div class="my-space-md flex items-baseline justify-between">
<div>
<div class="flex items-baseline gap-space-xs">
<span class="font-headline-lg text-headline-lg font-bold text-on-surface">342</span>
<span class="font-code-sm text-code-sm text-on-surface-variant">/ 450</span>
</div>
<span class="font-code-sm text-code-sm text-tertiary font-mono">76.0% target attained</span>
</div>
<!-- Circular SVG Gauge -->
<div class="relative w-12 h-12 flex items-center justify-center shrink-0">
<svg class="w-12 h-12 -rotate-90" viewbox="0 0 36 36">
<path class="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3.5"></path>
<path class="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="76, 100" stroke-linecap="round" stroke-width="3.5"></path>
</svg>
<span class="absolute font-code-sm text-[10px] text-on-surface font-semibold">76%</span>
</div>
</div>
<!-- Breakdown Bar -->
<div class="space-y-1.5 pt-space-xs">
<div class="flex h-1.5 w-full rounded-full overflow-hidden bg-surface-container-highest">
<div class="bg-tertiary w-[35%]" title="Easy: 120"></div>
<div class="bg-primary w-[53%]" title="Medium: 182"></div>
<div class="bg-secondary-container w-[12%]" title="Hard: 40"></div>
</div>
<div class="flex items-center justify-between font-code-sm text-[11px] text-on-surface-variant">
<span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>120 Easy</span>
<span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-primary"></span>182 Med</span>
<span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>40 Hard</span>
</div>
</div>
</div>
<!-- KPI 2: Acceptance Rate -->
<div class="rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md transition-all hover:bg-surface-container">
<div class="flex items-center justify-between">
<span class="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">Acceptance Rate</span>
<span class="material-symbols-outlined text-[20px] text-tertiary">task_alt</span>
</div>
<div class="my-space-md">
<div class="flex items-baseline gap-space-xs">
<span class="font-headline-lg text-headline-lg font-bold text-on-surface">78.4%</span>
<span class="font-code-sm text-code-sm text-tertiary flex items-center font-medium">
<span class="material-symbols-outlined text-[14px]">trending_up</span> +4.2%
            </span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Top 5% candidate percentile</p>
</div>
<!-- Mini Sparkline inline SVG -->
<div class="pt-space-xs flex items-center justify-between">
<svg class="w-32 h-6 text-tertiary" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 100 24">
<polyline points="0,18 20,16 40,19 60,11 80,12 100,4" vector-effect="non-scaling-stroke"></polyline>
</svg>
<span class="font-code-sm text-[11px] px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant">Last 30 runs</span>
</div>
</div>
<!-- KPI 3: Current Streak -->
<div class="rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md transition-all hover:bg-surface-container">
<div class="flex items-center justify-between">
<span class="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">Consistency Streak</span>
<span class="text-[20px]">🔥</span>
</div>
<div class="my-space-md">
<div class="flex items-baseline gap-space-xs">
<span class="font-headline-lg text-headline-lg font-bold text-on-surface">14 Days</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Personal Best: <span class="text-on-surface font-semibold">28 Days</span></p>
</div>
<div class="pt-space-xs flex items-center gap-1.5">
<div class="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div class="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div class="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div class="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div class="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div class="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div class="h-2 flex-1 rounded bg-tertiary" title="Active"></div>
<div class="h-2 flex-1 rounded bg-surface-container-highest" title="Day 15 Target"></div>
<div class="h-2 flex-1 rounded bg-surface-container-highest" title="Day 16 Target"></div>
</div>
</div>
<!-- KPI 4: Predicted FAANG Level -->
<div class="rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md transition-all hover:bg-surface-container relative overflow-hidden">
<div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
<div class="flex items-center justify-between">
<span class="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">Predicted Readiness</span>
<span class="px-space-xs py-0.5 rounded bg-secondary-container/60 font-code-sm text-[10px] text-on-secondary-container uppercase">AI Calibrated</span>
</div>
<div class="my-space-md">
<div class="flex items-baseline gap-space-xs">
<span class="font-headline-lg text-headline-lg font-bold text-primary">L6 / Staff</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Confidence: <span class="text-tertiary font-semibold">91%</span> (18 evaluations)</p>
</div>
<div class="pt-space-xs flex items-center justify-between font-code-sm text-[11px] text-on-surface-variant">
<span>Meta E6 · Google L6</span>
<span class="text-primary font-medium hover:underline cursor-pointer">View breakdown →</span>
</div>
</div>
</section>
<!-- GitHub-Style Interactive Contribution & Activity Heatmap -->
<section class="rounded-xl bg-surface-container-low p-space-lg shadow-md space-y-space-md">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div class="flex items-center gap-space-sm">
<span class="material-symbols-outlined text-[20px] text-primary">insights</span>
<h2 class="font-headline-sm text-headline-sm font-semibold text-on-surface">52-Week Practice Heatmap</h2>
<span class="font-code-sm text-code-sm text-on-surface-variant">412 Submissions in past 365 days</span>
</div>
<!-- Intensity Legend -->
<div class="flex items-center gap-space-xs font-code-sm text-code-sm text-on-surface-variant">
<span>Less</span>
<span class="w-3 h-3 rounded-xs bg-surface-container-highest"></span>
<span class="w-3 h-3 rounded-xs bg-tertiary/30"></span>
<span class="w-3 h-3 rounded-xs bg-tertiary/60"></span>
<span class="w-3 h-3 rounded-xs bg-tertiary"></span>
<span class="w-3 h-3 rounded-xs bg-primary shadow-[0_0_8px_rgba(128,131,255,0.6)]"></span>
<span>More (Mock Session)</span>
</div>
</div>
<!-- Heatmap Table Simulation -->
<div class="relative overflow-x-auto pb-space-xs">
<div class="min-w-[900px]">
<!-- Month Headers -->
<div class="flex justify-between pl-8 pr-2 font-code-sm text-[11px] text-on-surface-variant pb-1.5 select-none">
<span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span>
</div>
<!-- Heatmap Matrix Grid (7 rows x 52 columns) -->
<div class="flex gap-1.5 items-start">
<!-- Day of Week labels -->
<div class="flex flex-col gap-1 font-code-sm text-[10px] text-on-surface-variant pt-0.5 select-none w-6">
<span class="h-3 leading-3">M</span>
<span class="h-3 leading-3 opacity-0">T</span>
<span class="h-3 leading-3">W</span>
<span class="h-3 leading-3 opacity-0">T</span>
<span class="h-3 leading-3">F</span>
<span class="h-3 leading-3 opacity-0">S</span>
<span class="h-3 leading-3 opacity-0">S</span>
</div>
<!-- Heatmap Week Columns (Generated dynamically structured pattern) -->
<div class="flex-1 grid grid-flow-col grid-rows-7 gap-1" id="heatmap-grid">
<!-- Sample 52 weeks filled with weighted variance -->
<!-- Block 1: Casual Warmup -->
<div class="w-3 h-3 rounded-xs bg-surface-container-highest hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 3: 0 problems"></div>
<div class="w-3 h-3 rounded-xs bg-tertiary/30 hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 4: 1 problem"></div>
<div class="w-3 h-3 rounded-xs bg-surface-container-highest hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 5: 0 problems"></div>
<div class="w-3 h-3 rounded-xs bg-tertiary/60 hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 6: 3 problems"></div>
<div class="w-3 h-3 rounded-xs bg-surface-container-highest hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 7: 0 problems"></div>
<div class="w-3 h-3 rounded-xs bg-tertiary/30 hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 8: 1 problem"></div>
<div class="w-3 h-3 rounded-xs bg-surface-container-highest hover:ring-1 hover:ring-primary cursor-pointer transition-all" data-tip="Nov 9: 0 problems"></div>
<!-- Pattern loops for visual aesthetic density -->
<div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-primary"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div>
<div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div>
<div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-primary"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div>
<div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div>
<div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-primary"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div>
<div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div>
<div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-primary"></div>
<div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div>
<div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-primary"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div>
<div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-primary"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div>
<div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div>
<div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary/30"></div><div class="w-3 h-3 rounded-xs bg-tertiary/60"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-primary"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div>
<!-- Recent Sprint Weeks (Bright Active Streak) -->
<div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-primary"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-primary"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div>
<div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-primary"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-primary"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div>
<div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-primary"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-tertiary"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div><div class="w-3 h-3 rounded-xs bg-surface-container-highest"></div>
</div>
</div>
</div>
</div>
<!-- Hover tooltip notification indicator -->
<div class="flex items-center justify-between pt-space-xs font-code-sm text-code-sm text-on-surface-variant" id="heatmap-status">
<span class="flex items-center gap-space-xs">
<span class="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Latest peak: <strong class="text-on-surface font-semibold">Nov 14: 6 problems solved, 1 System Design session</strong></span>
</span>
<button class="text-primary hover:underline font-code-sm">Download Submission CSV</button>
</div>
</section>
<!-- Main Workspace Split: 'Resume Left Off' & 'Mock Readiness + Upcoming' -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
<!-- Left Column: Resume Where You Left Off (7 cols) -->
<section class="lg:col-span-7 space-y-space-md">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-sm">
<span class="material-symbols-outlined text-[20px] text-tertiary">history</span>
<h2 class="font-headline-sm text-headline-sm font-semibold text-on-surface">Resume Where You Left Off</h2>
</div>
<a class="font-code-sm text-code-sm text-primary hover:underline" href="#">View All Active (5)</a>
</div>
<div class="space-y-space-sm">
<!-- Problem 1: System Design (High Progress) -->
<div class="rounded-xl bg-surface-container-low p-space-md hover:bg-surface-container transition-all group flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
<div class="space-y-space-xs flex-1">
<div class="flex flex-wrap items-center gap-space-xs">
<span class="px-space-xs py-0.5 rounded bg-surface-container-high font-label-caps text-label-caps text-tertiary">SYSTEM DESIGN</span>
<span class="px-space-xs py-0.5 rounded bg-surface-container-highest font-code-sm text-code-sm text-on-surface-variant">Distributed Systems</span>
<span class="font-code-sm text-code-sm text-on-surface-variant">· 42 min elapsed</span>
</div>
<h3 class="font-headline-sm text-[16px] font-semibold text-on-surface group-hover:text-primary transition-colors">
                Design in-memory key-value store with TTL &amp; LRU eviction
              </h3>
<!-- Mini Progress Bar -->
<div class="w-full max-w-md pt-1">
<div class="flex items-center justify-between font-code-sm text-[11px] text-on-surface-variant mb-1">
<span>Architecture &amp; Sharding stage</span>
<span class="text-tertiary font-medium">85% Complete</span>
</div>
<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-tertiary w-[85%] rounded-full"></div>
</div>
</div>
</div>
<div class="shrink-0 flex items-center gap-space-sm">
<a class="px-space-md py-space-sm rounded-lg bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary text-on-surface font-body-sm text-body-sm font-medium transition-all flex items-center gap-1 shadow-sm" href="/system-design">
<span>Continue</span>
<span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
<!-- Problem 2: Hard Algorithm (Trapping Rain Water II) -->
<div class="rounded-xl bg-surface-container-low p-space-md hover:bg-surface-container transition-all group flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
<div class="space-y-space-xs flex-1">
<div class="flex flex-wrap items-center gap-space-xs">
<span class="px-space-xs py-0.5 rounded bg-error-container/50 font-label-caps text-label-caps text-error">HARD ALGORITHM</span>
<span class="px-space-xs py-0.5 rounded bg-surface-container-highest font-code-sm text-code-sm text-on-surface-variant">PriorityQueue</span>
<span class="px-space-xs py-0.5 rounded bg-surface-container-highest font-code-sm text-code-sm text-on-surface-variant">BFS 3D</span>
<span class="font-code-sm text-code-sm text-secondary font-mono">2 hints unlocked</span>
</div>
<h3 class="font-headline-sm text-[16px] font-semibold text-on-surface group-hover:text-primary transition-colors">
                Trapping Rain Water II (3D Elevation Matrix)
              </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                Given an m x n integer matrix representing height of each unit cell, return total volume of water it can trap.
              </p>
</div>
<div class="shrink-0 flex items-center gap-space-sm">
<a class="px-space-md py-space-sm rounded-lg bg-surface-container-high group-hover:bg-primary group-hover:text-on-primary text-on-surface font-body-sm text-body-sm font-medium transition-all flex items-center gap-1 shadow-sm" href="/ide-and-ai-solver">
<span>Resume Code</span>
<span class="material-symbols-outlined text-[16px]">terminal</span>
</a>
</div>
</div>
<!-- STAR Behavioral Scenario -->
<div class="rounded-xl bg-surface-container-low p-space-md hover:bg-surface-container transition-all group flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
<div class="space-y-space-xs flex-1">
<div class="flex flex-wrap items-center gap-space-xs">
<span class="px-space-xs py-0.5 rounded bg-secondary-container font-label-caps text-label-caps text-on-secondary-container">BEHAVIORAL STAR</span>
<span class="px-space-xs py-0.5 rounded bg-surface-container-highest font-code-sm text-code-sm text-on-surface-variant">Staff Leadership</span>
<span class="font-code-sm text-code-sm text-tertiary">Action Step Feedback Ready</span>
</div>
<h3 class="font-headline-sm text-[16px] font-semibold text-on-surface group-hover:text-primary transition-colors">
                Handling Cross-Functional Pushback on Tech Debt Refactoring
              </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                AI Coach suggests quantifying engineering hours reclaimed to convince Product VP.
              </p>
</div>
<div class="shrink-0 flex items-center gap-space-sm">
<a class="px-space-md py-space-sm rounded-lg bg-surface-container-high group-hover:bg-secondary-container group-hover:text-on-secondary-container text-on-surface font-body-sm text-body-sm font-medium transition-all flex items-center gap-1 shadow-sm" href="/star-method">
<span>Refine STAR</span>
<span class="material-symbols-outlined text-[16px]">psychology</span>
</a>
</div>
</div>
</div>
</section>
<!-- Right Column: Topic Mastery Radar & Upcoming Mock (5 cols) -->
<section class="lg:col-span-5 space-y-gutter">
<!-- Live Mock Interview Readiness & Mastery Breakdown -->
<div class="rounded-xl bg-surface-container-low p-space-lg shadow-md space-y-space-md">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-sm">
<span class="material-symbols-outlined text-[20px] text-primary">analytics</span>
<h2 class="font-headline-sm text-headline-sm font-semibold text-on-surface">Skill Radar &amp; Domain Mastery</h2>
</div>
<span class="font-label-caps text-label-caps text-tertiary font-mono">STAFF TARGET</span>
</div>
<div class="space-y-space-sm pt-space-xs">
<!-- Data Structures & Algorithms -->
<div>
<div class="flex justify-between font-code-sm text-code-sm mb-1">
<span class="text-on-surface flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px] text-tertiary">check_circle</span>
                  Data Structures &amp; Algorithms
                </span>
<span class="text-on-surface font-mono font-medium">94%</span>
</div>
<div class="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-tertiary rounded-full transition-all" style="width: 94%"></div>
</div>
</div>
<!-- Distributed Systems & System Design -->
<div>
<div class="flex justify-between font-code-sm text-code-sm mb-1">
<span class="text-on-surface flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px] text-primary">hub</span>
                  Distributed Systems Architecture
                </span>
<span class="text-on-surface font-mono font-medium">82%</span>
</div>
<div class="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full transition-all" style="width: 82%"></div>
</div>
</div>
<!-- Concurrency & Multithreading -->
<div>
<div class="flex justify-between font-code-sm text-code-sm mb-1">
<span class="text-on-surface flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px] text-secondary">memory</span>
                  Concurrency &amp; Low-Latency
                </span>
<span class="text-on-surface font-mono font-medium">76%</span>
</div>
<div class="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-secondary-container rounded-full transition-all" style="width: 76%"></div>
</div>
</div>
<!-- Behavioral Leadership (STAR) -->
<div>
<div class="flex justify-between font-code-sm text-code-sm mb-1">
<span class="text-on-surface flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px] text-tertiary">groups</span>
                  Behavioral &amp; Staff Leadership
                </span>
<span class="text-on-surface font-mono font-medium">88%</span>
</div>
<div class="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-tertiary rounded-full transition-all" style="width: 88%"></div>
</div>
</div>
</div>
<div class="p-space-sm rounded-lg bg-surface-container flex items-center justify-between text-on-surface-variant font-code-sm text-[11px]">
<span>Next recommended focus:</span>
<span class="text-primary font-medium cursor-pointer hover:underline">Raft Consensus &amp; Lock-free Queues →</span>
</div>
</div>
<!-- Upcoming AI Mock Interviews & Benchmark -->
<div class="rounded-xl bg-surface-container-low p-space-lg shadow-md space-y-space-md">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-sm">
<span class="material-symbols-outlined text-[20px] text-primary">event_available</span>
<h2 class="font-headline-sm text-headline-sm font-semibold text-on-surface">Scheduled AI Mock</h2>
</div>
<span class="font-code-sm text-code-sm text-primary">Tomorrow</span>
</div>
<div class="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-sm">
<div class="flex items-start justify-between">
<div>
<span class="font-label-caps text-[10px] text-tertiary uppercase">L6 System Design</span>
<h4 class="font-headline-sm text-[15px] font-semibold text-on-surface">Google Staff Level Architecture Simulation</h4>
<p class="font-code-sm text-code-sm text-on-surface-variant mt-0.5">Focus: Global Video Transcoding at Scale</p>
</div>
<span class="px-space-xs py-1 rounded bg-surface-container-highest font-code-sm text-code-sm text-on-surface">10:00 AM PST</span>
</div>
<div class="pt-space-xs flex items-center justify-between">
<span class="font-code-sm text-[11px] text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">videocam</span> 45-min Voice &amp; CoderPad AI
              </span>
<button class="px-space-md py-space-xs rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-body-sm text-body-sm font-medium transition-all shadow-sm">
                Setup Environment
              </button>
</div>
</div>
<!-- Peer Community Leaderboard Preview -->
<div class="pt-space-xs flex items-center justify-between font-code-sm text-code-sm text-on-surface-variant">
<div class="flex items-center gap-2">
<span class="text-on-surface font-semibold">Weekly Rank: #14</span>
<span>· Top 2% Staff Track</span>
</div>
<a class="text-tertiary hover:underline" href="#">View Leaderboard</a>
</div>
</div>
</section>
</div>
</div>
</div>
<script>
  // Micro-interaction for Heatmap hover tooltip feedback
  document.querySelectorAll('#heatmap-grid > div').forEach(cell => {
    cell.addEventListener('mouseenter', (e) => {
      const info = e.target.getAttribute('data-tip');
      const statusEl = document.getElementById('heatmap-status');
      if (info && statusEl) {
        statusEl.querySelector('strong').textContent = info;
      }
    });
  });
</script></main></div><div class="fixed bottom-space-lg right-space-lg z-50 flex flex-col gap-space-sm pointer-events-none"><div class="pointer-events-auto flex items-center justify-between gap-space-lg p-space-md rounded-xl bg-surface-container/90 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]"><div class="flex items-center gap-space-md"><div class="p-space-xs rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center"><span class="material-symbols-outlined text-[18px]">check_circle</span></div><div class="flex flex-col"><span class="font-body-sm text-body-sm font-semibold text-on-surface">Optimal Solution Detected</span><span class="font-code-sm text-code-sm text-on-surface-variant">LRU Cache O(1) passed all test suites</span></div></div><button class="text-on-surface-variant hover:text-on-surface p-space-xs" type="button"><span class="material-symbols-outlined text-[16px]">close</span></button></div></div>` }} />
  );
}