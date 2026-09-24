"use client";
import { useEffect } from "react";

export default function DashboardPage() {
  useEffect(() => {
    const container = document.getElementById('dashboardpage-container');
    if (container) {
        const scriptTags = container.getElementsByTagName('script');
        for (let i = 0; i < scriptTags.length; i++) {
            const newScript = document.createElement('script');
            if (scriptTags[i].src) {
                newScript.src = scriptTags[i].src;
            } else {
                newScript.innerHTML = scriptTags[i].innerHTML;
            }
            document.body.appendChild(newScript);
        }
    }
  }, []);

  return (
    <div 
        id="dashboardpage-container"
        className="w-full h-full bg-[#0e0e10] text-[#e5e1e4]" 
        dangerouslySetInnerHTML={{ __html: `<header class="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"><div class="h-16 w-full px-gutter-desktop flex items-center justify-between gap-space-md"><div class="flex items-center gap-space-lg shrink-0"><div class="flex items-center gap-space-sm"><img alt="CodePrep AI Logo" class="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UN5h6Nw_OyDdf59-PtCbUJSdTqkmMXCNYJvl_Mirtt3dUBGC8otnAFnA87QcQyk9WmrCQKETHagtLTi0j-ENapJzWihI2n9jKaS_qGQpRtj7ywpSvvSIivdFsybtc5yHCpxgTaIIIvFTjBCAi9W1ApWXrxS3ZY-2wUkhPtcj7h2I9PpW_I9qn7LdJX-bDG-INnkOHZif2frrRO72df3v9TICgG3O_A_SZRdJBUbJO595FbPVgGMGpVAjAc"/><span class="font-headline-sm text-headline-sm tracking-tight text-on-surface flex items-center">CodePrep<span class="text-primary font-headline-sm text-headline-sm">.ai</span></span></div><nav class="hidden xl:flex items-center gap-space-xs" data-active-classes="bg-surface-container-high text-on-surface font-headline-sm"><a class="px-space-sm py-space-xs rounded font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="landing" href="#">Landing</a><a aria-current="page" class="px-space-sm py-space-xs rounded transition-colors bg-surface-container-high text-on-surface font-headline-sm" data-path="dashboard" href="#">Dashboard</a><a class="px-space-sm py-space-xs rounded font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="ai-workspace" href="#">AI Workspace</a><a class="px-space-sm py-space-xs rounded font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="ats-analyzer" href="#">ATS Analyzer</a><a class="px-space-sm py-space-xs rounded font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="curriculum" href="#">Curriculum</a></nav></div><div class="flex-1 max-w-md hidden md:block mx-space-sm"><div class="relative flex items-center"><span class="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px] pointer-events-none">search</span><input class="w-full bg-surface-container-lowest/80 text-on-surface placeholder:text-outline border border-outline-variant/40 rounded-full pl-9 pr-14 py-1.5 font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all" placeholder="Search algorithms, system designs, patterns..." type="text"/><div class="absolute right-2.5 flex items-center px-1.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/40 text-on-surface-variant font-label-mono text-label-mono">⌘K</div></div></div><div class="flex items-center gap-space-sm shrink-0"><div class="hidden lg:flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container-low border border-outline-variant/30"><span class="text-tertiary text-xs leading-none">🔥</span><span class="font-label-mono-bold text-label-mono-bold text-tertiary">14 Days</span></div><div class="hidden sm:flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container-low border border-outline-variant/30"><span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span><span class="font-label-mono-bold text-label-mono-bold text-secondary">Lv. 42 Staff SWE</span></div><button aria-label="Notifications" class="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"><span class="material-symbols-outlined text-[20px]">notifications</span><span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary ring-2 ring-surface"></span></button><div class="flex items-center gap-space-xs pl-space-xs border-l border-outline-variant/40"><img alt="Profile" class="w-8 h-8 rounded-full object-cover ring-1 ring-primary/40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvXgF9m7wnvO3tLwisNOMY0zycQsMTZIHndWo6Z5NW2XKr6ETnenrq9bGDVEvml8iEJuuzYRqGTIZjunRvWX8K-sOubGsdmU9Cv-gNF6Zg_X8Jcm1p3zhr-rl3cYVYrGRjUfy8nGPe6H4Xqc1u6GHEeeMMIlKgR5flWa3UwJ8W5wfvBZZryyZ1YqVepWYjkwOq1V_HNzf44pIGOdrDDAaYGdFuP0GqW6sV7FyeFh30EXra10ZbKd7y3g"/><span class="material-symbols-outlined text-on-surface-variant text-[18px] cursor-pointer hover:text-on-surface transition-colors">keyboard_arrow_down</span></div></div></div></header><aside class="fixed left-0 top-16 bottom-0 w-64 bg-surface-container-lowest/90 backdrop-blur-xl border-r border-outline-variant/20 z-40 flex flex-col justify-between p-space-sm"><div class="space-y-space-xs"><div class="px-3 py-2 text-outline font-label-mono text-label-mono uppercase tracking-wider">Navigation Engine</div><nav class="space-y-1" data-active-classes="bg-surface-container-high text-on-surface font-headline-sm"><a aria-current="page" class="flex items-center gap-3 px-3 py-2 rounded transition-all bg-surface-container-high text-on-surface font-headline-sm" data-path="dashboard" href="#"><span class="material-symbols-outlined text-[18px]">grid_view</span>Dashboard</a><a class="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="ai-workspace" href="#"><span class="material-symbols-outlined text-[18px]">terminal</span>AI Workspace</a><a class="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="curriculum" href="#"><span class="material-symbols-outlined text-[18px]">account_tree</span>Curriculum</a><a class="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="ats-analyzer" href="#"><span class="material-symbols-outlined text-[18px]">document_scanner</span>ATS Resume Audit</a></nav></div><div class="p-space-sm rounded bg-surface-container-low border border-outline-variant/30 space-y-1.5"><div class="flex items-center justify-between text-on-surface font-label-mono text-label-mono"><span class="text-secondary">● Live Engine</span><span>99.98%</span></div><div class="w-full bg-surface-container-high h-1 rounded-full overflow-hidden"><div class="bg-secondary h-full w-4/5"></div></div><div class="font-label-mono text-label-mono text-outline">Target: L6 / Principal SWE</div></div></aside><div class="pl-64"><main class="relative pt-16 bg-background min-h-screen"><div class="flex flex-col w-full">
<div class="w-full px-gutter-desktop py-space-md space-y-space-md max-w-[1720px] mx-auto">
<section class="flex flex-col md:flex-row md:items-center justify-between gap-space-md p-space-md rounded-xl bg-surface-container-low shadow-sm">
<div class="flex items-center gap-space-md">
<div class="relative w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
<svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" viewbox="0 0 24 24">
<polyline points="7 8 3 12 7 16"></polyline>
<polyline points="17 8 21 12 17 16"></polyline>
<line class="text-tertiary" stroke="currentColor" x1="14" x2="10" y1="4" y2="20"></line>
<circle class="text-secondary" cx="12" cy="12" fill="currentColor" r="2"></circle>
</svg>
<span class="absolute -top-1 -right-1 flex h-3 w-3">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span class="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
</span>
</div>
<div>
<div class="flex items-center gap-space-xs">
<h1 class="font-headline-md text-headline-md tracking-tight text-on-surface">Candidate Telemetry Console</h1>
<span class="px-2 py-0.5 rounded-full font-label-mono text-label-mono bg-secondary/10 text-secondary">FAANG TRACK</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">Live interview evaluation pipeline · Target role: Staff Distributed Systems Engineer</p>
</div>
</div>
<div class="flex items-center gap-space-sm flex-wrap">
<div class="flex items-center gap-space-xs px-3 py-1.5 rounded-xl bg-surface-container-high">
<span class="material-symbols-outlined text-[16px] text-tertiary">bolt</span>
<span class="font-label-mono-bold text-label-mono-bold text-on-surface">XP: 14,850</span>
<span class="font-label-mono text-label-mono text-tertiary">+350 today</span>
</div>
<button class="px-3.5 py-1.5 rounded-lg bg-primary text-on-primary font-headline-sm text-body-sm transition-all duration-150 hover:shadow-[0_0_20px_rgba(192,193,255,0.45)] flex items-center gap-1.5" id="quick-sim-btn">
<span class="material-symbols-outlined text-[18px]">play_arrow</span>
          Instant AI Sandbox
        </button>
</div>
</section>
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-space-md">
<div class="xl:col-span-5 rounded-xl bg-surface-container-lowest p-space-md flex flex-col justify-between shadow-md transition-all duration-200 hover:bg-surface-container-low group">
<div class="flex items-start justify-between">
<div class="space-y-1">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-tertiary text-[20px]">local_fire_department</span>
<span class="font-label-mono-bold text-label-mono-bold text-tertiary uppercase tracking-wider">Consistency Matrix</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-display-hero-mobile text-display-hero-mobile text-on-surface font-headline-lg tracking-tight">24</span>
<span class="font-headline-sm text-headline-sm text-on-surface-variant">Days Streak</span>
</div>
</div>
<div class="flex flex-col items-end gap-1">
<span class="px-2.5 py-1 rounded-full font-label-mono-bold text-label-mono-bold bg-tertiary-container/30 text-tertiary">Top 2% Globally</span>
<span class="font-label-mono text-label-mono text-on-surface-variant flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> 2.5x Multiplier
            </span>
</div>
</div>
<div class="my-space-md p-space-sm rounded-xl bg-surface-container-low/70 flex items-center justify-between gap-1">
<div class="flex flex-col items-center gap-1.5 flex-1">
<span class="font-label-mono text-label-mono text-outline">MON</span>
<div class="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
</div>
<div class="flex flex-col items-center gap-1.5 flex-1">
<span class="font-label-mono text-label-mono text-outline">TUE</span>
<div class="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
</div>
<div class="flex flex-col items-center gap-1.5 flex-1">
<span class="font-label-mono text-label-mono text-outline">WED</span>
<div class="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
</div>
<div class="flex flex-col items-center gap-1.5 flex-1">
<span class="font-label-mono text-label-mono text-outline">THU</span>
<div class="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
</div>
<div class="flex flex-col items-center gap-1.5 flex-1">
<span class="font-label-mono text-label-mono text-outline">FRI</span>
<div class="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
</div>
<div class="flex flex-col items-center gap-1.5 flex-1">
<span class="font-label-mono text-label-mono text-outline">SAT</span>
<div class="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
</div>
<div class="flex flex-col items-center gap-1.5 flex-1">
<span class="font-label-mono text-label-mono text-primary font-headline-sm">TODAY</span>
<div class="w-7 h-7 rounded-lg bg-primary-container/40 flex items-center justify-center text-primary animate-pulse">
<span class="material-symbols-outlined text-[16px]">local_fire_department</span>
</div>
</div>
</div>
<div class="flex items-center justify-between pt-1">
<div class="flex items-center gap-2">
<span class="font-label-mono text-label-mono text-on-surface-variant">Daily quota: 3/3 solved</span>
<span class="font-label-mono-bold text-label-mono-bold text-secondary">100% Complete</span>
</div>
<span class="font-label-mono text-label-mono text-outline">Reset in 05h 42m</span>
</div>
</div>
<div class="xl:col-span-7 rounded-xl bg-surface-container-lowest p-space-md flex flex-col justify-between shadow-md relative overflow-hidden transition-all duration-200 hover:bg-surface-container-low group">
<div class="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
<div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">videocam</span>
<span class="font-label-mono-bold text-label-mono-bold text-primary uppercase tracking-wider">Scheduled Simulation</span>
</div>
<span class="px-2.5 py-0.5 rounded-full font-label-mono-bold text-label-mono-bold bg-error-container/20 text-error flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span> in 2h 15m
            </span>
</div>
<div class="mt-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div>
<h2 class="font-headline-md text-headline-md text-on-surface">Meta L6 Systems Interview</h2>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">High-throughput Event Broker Design (Kafka / Pulsar Architecture)</p>
</div>
<div class="flex items-center gap-2.5 bg-surface-container-high px-3 py-2 rounded-xl shrink-0">
<div class="w-8 h-8 rounded-full bg-inverse-primary/30 flex items-center justify-center font-label-mono-bold text-label-mono-bold text-primary">
                AI
              </div>
<div class="text-left">
<div class="font-label-mono-bold text-label-mono-bold text-on-surface">Alex.ai v4.2</div>
<div class="font-label-mono text-label-mono text-secondary">Staff Bar Raiser</div>
</div>
</div>
</div>
</div>
<div class="grid grid-cols-2 sm:grid-cols-4 gap-2 my-space-sm py-space-xs">
<div class="p-2 rounded bg-surface-container-low">
<div class="font-label-mono text-label-mono text-outline">Target Latency</div>
<div class="font-label-mono-bold text-label-mono-bold text-on-surface mt-0.5">< 5ms p99</div>
</div>
<div class="p-2 rounded bg-surface-container-low">
<div class="font-label-mono text-label-mono text-outline">Partition Model</div>
<div class="font-label-mono-bold text-label-mono-bold text-on-surface mt-0.5">Raft Consensus</div>
</div>
<div class="p-2 rounded bg-surface-container-low">
<div class="font-label-mono text-label-mono text-outline">Expected Scale</div>
<div class="font-label-mono-bold text-label-mono-bold text-on-surface mt-0.5">10M write ops/s</div>
</div>
<div class="p-2 rounded bg-surface-container-low">
<div class="font-label-mono text-label-mono text-outline">Telemetry Mode</div>
<div class="font-label-mono-bold text-label-mono-bold text-secondary mt-0.5">Live Audio + Code</div>
</div>
</div>
<div class="flex flex-wrap items-center justify-between gap-space-sm pt-2">
<button class="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors font-body-sm text-body-sm flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">menu_book</span> Review L6 Rubric
          </button>
<div class="flex items-center gap-space-xs">
<button class="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm hover:bg-surface-variant transition-colors">
              Pre-flight Mic Check
            </button>
<button class="px-4 py-1.5 rounded-lg bg-primary text-on-primary font-headline-sm text-body-sm shadow-[0_0_15px_rgba(192,193,255,0.3)] hover:shadow-[0_0_25px_rgba(192,193,255,0.6)] transition-all flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px]">rocket_launch</span> Launch Prep Room
            </button>
</div>
</div>
</div>
<div class="xl:col-span-8 rounded-xl bg-surface-container-lowest p-space-md shadow-md transition-all duration-200 hover:bg-surface-container-low flex flex-col justify-between">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm">
<div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[20px]">insights</span>
<span class="font-headline-sm text-headline-sm text-on-surface">Quarterly Algorithmic Velocity</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">342 verified submissions across Q2 · 98.4th percentile runtime speed</p>
</div>
<div class="flex items-center gap-1.5 bg-surface-container-low p-1 rounded-lg">
<button class="px-2.5 py-0.5 rounded font-label-mono-bold text-label-mono-bold bg-surface-container-high text-on-surface">All</button>
<button class="px-2.5 py-0.5 rounded font-label-mono text-label-mono text-error hover:bg-surface-container-high/50">Hard (84)</button>
<button class="px-2.5 py-0.5 rounded font-label-mono text-label-mono text-tertiary hover:bg-surface-container-high/50">Med (192)</button>
<button class="px-2.5 py-0.5 rounded font-label-mono text-label-mono text-secondary hover:bg-surface-container-high/50">Easy (66)</button>
</div>
</div>
<div class="my-space-sm overflow-x-auto">
<div class="min-w-[580px] space-y-1.5">
<div class="flex text-outline font-label-mono text-label-mono justify-between px-1">
<span>W1 (Apr)</span>
<span>W3</span>
<span>W5 (May)</span>
<span>W7</span>
<span>W9 (Jun)</span>
<span>W11</span>
<span>W12</span>
</div>
<div class="grid grid-rows-7 grid-flow-col gap-1.5 w-full" id="heatmap-grid">
<div class="w-3.5 h-3.5 rounded bg-surface-container-high" title="0 solved"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/30" title="2 solved"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/60" title="4 solved"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary" title="7 solved"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/40" title="3 solved"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/80" title="6 solved"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary" title="8 solved"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/40"></div>
<div class="w-3.5 h-3.5 rounded bg-surface-container-high"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/60"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/90"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/50"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/30"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/60"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/40"></div>
<div class="w-3.5 h-3.5 rounded bg-surface-container-high"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/50"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/80"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/90"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/60"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/20"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/70"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/40"></div>
<div class="w-3.5 h-3.5 rounded bg-surface-container-high"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/30"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/50"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/80"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/70"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/90"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/60"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/90"></div>
<div class="w-3.5 h-3.5 rounded bg-surface-container-high"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/40"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/50"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/80"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/90"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/40"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/70"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-surface-container-high"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/60"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/30"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/80"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/90"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/40"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/60"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/70"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-surface-container-high"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/50"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/80"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/90"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/60"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/90"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/80"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/40"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/70"></div>
<div class="w-3.5 h-3.5 rounded bg-surface-container-high"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/50"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/90"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/80"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/60"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/30"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/90"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/70"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary/90"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary"></div>
<div class="w-3.5 h-3.5 rounded bg-secondary animate-pulse ring-2 ring-secondary/30"></div>
</div>
</div>
</div>
<div class="flex items-center justify-between text-outline font-label-mono text-label-mono pt-space-xs">
<div class="flex items-center gap-2">
<span>Less</span>
<div class="w-2.5 h-2.5 rounded bg-surface-container-high"></div>
<div class="w-2.5 h-2.5 rounded bg-secondary/30"></div>
<div class="w-2.5 h-2.5 rounded bg-secondary/60"></div>
<div class="w-2.5 h-2.5 rounded bg-secondary"></div>
<span>More</span>
</div>
<div class="flex items-center gap-4">
<span>Avg Solvetime: <strong class="text-on-surface">18m 42s</strong></span>
<span>Accepted Rate: <strong class="text-secondary">87.2%</strong></span>
</div>
</div>
</div>
<div class="xl:col-span-4 rounded-xl bg-surface-container-lowest p-space-md shadow-md transition-all duration-200 hover:bg-surface-container-low flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">radar</span>
<span class="font-headline-sm text-headline-sm text-on-surface">Domain Competency</span>
</div>
<span class="font-label-mono-bold text-label-mono-bold text-secondary">L6 Ready (86%)</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Composite score derived from 48 mock reviews</p>
</div>
<div class="my-space-sm flex items-center justify-center relative">
<svg class="w-44 h-44 -rotate-90 transform" viewbox="0 0 120 120">
<circle class="text-surface-container-high" cx="60" cy="60" fill="transparent" r="50" stroke="currentColor" stroke-width="8"></circle>
<circle class="text-primary" cx="60" cy="60" fill="transparent" r="50" stroke="currentColor" stroke-dasharray="314.15" stroke-dashoffset="44" stroke-linecap="round" stroke-width="8"></circle>
<circle class="text-surface-container-high" cx="60" cy="60" fill="transparent" r="38" stroke="currentColor" stroke-width="6"></circle>
<circle class="text-secondary" cx="60" cy="60" fill="transparent" r="38" stroke="currentColor" stroke-dasharray="238.7" stroke-dashoffset="35" stroke-linecap="round" stroke-width="6"></circle>
</svg>
<div class="absolute flex flex-col items-center justify-center text-center">
<span class="font-headline-lg text-headline-lg font-bold text-on-surface">86<span class="text-primary font-headline-sm text-headline-sm">%</span></span>
<span class="font-label-mono text-label-mono text-outline uppercase tracking-wider">Pass Index</span>
</div>
</div>
<div class="space-y-2">
<div class="flex items-center justify-between text-body-sm">
<span class="font-body-sm text-on-surface-variant flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-primary"></span> Dynamic Programming
            </span>
<span class="font-label-mono-bold text-label-mono-bold text-on-surface">92%</span>
</div>
<div class="flex items-center justify-between text-body-sm">
<span class="font-body-sm text-on-surface-variant flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-secondary"></span> Graph Theory & Trees
            </span>
<span class="font-label-mono-bold text-label-mono-bold text-on-surface">88%</span>
</div>
<div class="flex items-center justify-between text-body-sm">
<span class="font-body-sm text-on-surface-variant flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-tertiary"></span> Concurrency & Multi-threading
            </span>
<span class="font-label-mono-bold text-label-mono-bold text-on-surface">84%</span>
</div>
<div class="flex items-center justify-between text-body-sm">
<span class="font-body-sm text-on-surface-variant flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-error"></span> Distributed Architecture
            </span>
<span class="font-label-mono-bold text-label-mono-bold text-on-surface">79%</span>
</div>
</div>
</div>
<div class="xl:col-span-7 rounded-xl bg-surface-container-lowest p-space-md shadow-md transition-all duration-200 hover:bg-surface-container-low flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-tertiary text-[20px]">stars</span>
<span class="font-label-mono-bold text-label-mono-bold text-tertiary uppercase tracking-wider">Curated Daily Problem</span>
</div>
<span class="px-2.5 py-0.5 rounded-full font-label-mono-bold text-label-mono-bold bg-error-container/30 text-error">HARD</span>
</div>
<div class="mt-space-sm">
<div class="flex items-center justify-between">
<h3 class="font-headline-md text-headline-md text-on-surface">Median of Two Sorted Arrays</h3>
<span class="font-label-mono-bold text-label-mono-bold text-tertiary">+150 XP</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays in strictly O(log (m+n)) runtime complexity.</p>
</div>
</div>
<div class="my-space-sm p-space-sm rounded-lg bg-surface-container-high/60 font-code-sm text-code-sm text-on-surface-variant flex items-center justify-between">
<div class="flex items-center gap-2 truncate">
<span class="text-primary font-headline-sm">def</span>
<span class="text-secondary font-headline-sm">findMedianSortedArrays</span>(nums1: List[int], nums2: List[int]) -> float:
          </div>
<span class="font-label-mono text-label-mono text-outline shrink-0 ml-2">Python 3.12</span>
</div>
<div class="flex flex-wrap items-center justify-between gap-space-sm pt-1">
<div class="flex items-center gap-space-sm font-label-mono text-label-mono text-outline">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">schedule</span> Est. 25m</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">domain</span> Google, Meta, Apple</span>
</div>
<div class="flex items-center gap-space-xs">
<button class="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-variant transition-colors font-body-sm text-body-sm">
              View Hints (3)
            </button>
<button class="px-4 py-1.5 rounded-lg bg-primary text-on-primary font-headline-sm text-body-sm hover:shadow-[0_0_20px_rgba(192,193,255,0.45)] transition-all flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">code</span> Solve in Workspace
            </button>
</div>
</div>
</div>
<div class="xl:col-span-5 rounded-xl bg-surface-container-lowest p-space-md shadow-md transition-all duration-200 hover:bg-surface-container-low flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-error text-[20px]">smart_toy</span>
<span class="font-label-mono-bold text-label-mono-bold text-error uppercase tracking-wider">AI Weakness Diagnostics</span>
</div>
<span class="px-2 py-0.5 rounded font-label-mono text-label-mono bg-error-container/20 text-error">Priority: High</span>
</div>
<div class="mt-space-sm space-y-2">
<div class="p-space-sm rounded-lg bg-surface-container-low">
<div class="flex items-center justify-between">
<span class="font-headline-sm text-headline-sm text-on-surface">Distributed Locking Fallback</span>
<span class="font-label-mono text-label-mono text-outline">Meta Fail Pattern</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Identified gap: Redlock consensus and clock drift vulnerability edge cases in Distributed Key-Value Stores.
              </p>
</div>
<div class="p-space-sm rounded-lg bg-surface-container-low">
<div class="flex items-center justify-between">
<span class="font-headline-sm text-headline-sm text-on-surface">Memory Footprint in Tries</span>
<span class="font-label-mono text-label-mono text-outline">Cache Locality</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">
                High pointer overhead noted during auto-complete retrieval mock. Recommend compressed Radix Tries drill.
              </p>
</div>
</div>
</div>
<div class="pt-space-sm flex items-center justify-between">
<span class="font-label-mono text-label-mono text-outline">Next diagnostic audit in 3 sessions</span>
<button class="px-3 py-1.5 rounded-lg bg-inverse-primary/20 text-primary hover:bg-inverse-primary/30 transition-colors font-body-sm text-body-sm flex items-center gap-1">
<span>Fix Gaps With AI</span>
<span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
<section class="rounded-xl bg-surface-container-lowest p-space-md shadow-md">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm">
<div>
<h3 class="font-headline-md text-headline-md text-on-surface">Recent Mock Interview Transcripts & Scorecards</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Real-time telemetry and evaluator sentiment summaries from latest rounds</p>
</div>
<button class="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface text-body-sm font-body-sm self-start sm:self-auto">
          Full Transcripts Archive
        </button>
</div>
<div class="space-y-2 mt-2">
<div class="p-space-sm rounded-lg bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-sm hover:bg-surface-container-high/60 transition-colors">
<div class="flex items-center gap-space-sm">
<div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm text-secondary">
              L6
            </div>
<div>
<div class="flex items-center gap-2">
<span class="font-headline-sm text-headline-sm text-on-surface">Distributed Real-time Video Transcoder</span>
<span class="px-2 py-0.2 rounded font-label-mono text-label-mono bg-secondary/10 text-secondary">Strong Hire</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">Interviewer: Sophia.ai · Focus: Sharding, FFmpeg Pipeline, Backpressure handling</p>
</div>
</div>
<div class="flex items-center gap-space-md justify-between md:justify-end">
<div class="text-right">
<div class="font-label-mono-bold text-label-mono-bold text-on-surface">94 / 100</div>
<div class="font-label-mono text-label-mono text-outline">Yesterday</div>
</div>
<button class="p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors">
<span class="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
<div class="p-space-sm rounded-lg bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-sm hover:bg-surface-container-high/60 transition-colors">
<div class="flex items-center gap-space-sm">
<div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm text-tertiary">
              L5
            </div>
<div>
<div class="flex items-center gap-2">
<span class="font-headline-sm text-headline-sm text-on-surface">LRU Cache with O(1) Expiry Policies</span>
<span class="px-2 py-0.2 rounded font-label-mono text-label-mono bg-tertiary/10 text-tertiary">Lean Hire</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">Interviewer: David.ai · Focus: Doubly Linked Lists, Concurrent SkipLists, Lock contention</p>
</div>
</div>
<div class="flex items-center gap-space-md justify-between md:justify-end">
<div class="text-right">
<div class="font-label-mono-bold text-label-mono-bold text-on-surface">78 / 100</div>
<div class="font-label-mono text-label-mono text-outline">3 days ago</div>
</div>
<button class="p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors">
<span class="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
      const simBtn = document.getElementById('quick-sim-btn');
      if (simBtn) {
        simBtn.addEventListener('click', () => {
          const originalText = simBtn.innerHTML;
          simBtn.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">refresh</span> Spinning Workspace...';
          simBtn.classList.add('opacity-80');
          setTimeout(() => {
            simBtn.innerHTML = originalText;
            simBtn.classList.remove('opacity-80');
          }, 1200);
        });
      }

      const heatmapSquares = document.querySelectorAll('#heatmap-grid > div');
      heatmapSquares.forEach(square => {
        square.addEventListener('mouseenter', () => {
          square.style.transform = 'scale(1.25)';
          square.style.transition = 'transform 0.1s ease';
          square.style.zIndex = '10';
        });
        square.addEventListener('mouseleave', () => {
          square.style.transform = 'scale(1)';
          square.style.zIndex = '1';
        });
      });
    });
  </script>
</div></main></div>` }} 
    />
  );
}
