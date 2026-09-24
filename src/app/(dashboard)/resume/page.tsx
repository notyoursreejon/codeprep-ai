"use client";
import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    const container = document.getElementById('resumepage-container');
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
        id="resumepage-container"
        className="w-full h-full bg-[#0e0e10] text-[#e5e1e4]" 
        dangerouslySetInnerHTML={{ __html: `<header class="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"><div class="h-16 w-full px-gutter-desktop flex items-center justify-between gap-space-md"><div class="flex items-center gap-space-lg shrink-0"><div class="flex items-center gap-space-sm"><img alt="CodePrep AI Logo" class="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UN5h6Nw_OyDdf59-PtCbUJSdTqkmMXCNYJvl_Mirtt3dUBGC8otnAFnA87QcQyk9WmrCQKETHagtLTi0j-ENapJzWihI2n9jKaS_qGQpRtj7ywpSvvSIivdFsybtc5yHCpxgTaIIIvFTjBCAi9W1ApWXrxS3ZY-2wUkhPtcj7h2I9PpW_I9qn7LdJX-bDG-INnkOHZif2frrRO72df3v9TICgG3O_A_SZRdJBUbJO595FbPVgGMGpVAjAc"/><span class="font-headline-sm text-headline-sm tracking-tight text-on-surface flex items-center">CodePrep<span class="text-primary font-headline-sm text-headline-sm">.ai</span></span></div><nav class="hidden xl:flex items-center gap-space-xs" data-active-classes="bg-surface-container-high text-on-surface font-headline-sm"><a class="px-space-sm py-space-xs rounded font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="landing" href="#">Landing</a><a class="px-space-sm py-space-xs rounded font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="dashboard" href="#">Dashboard</a><a class="px-space-sm py-space-xs rounded font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="ai-workspace" href="#">AI Workspace</a><a aria-current="page" class="px-space-sm py-space-xs rounded transition-colors bg-surface-container-high text-on-surface font-headline-sm" data-path="ats-analyzer" href="#">ATS Analyzer</a><a class="px-space-sm py-space-xs rounded font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="curriculum" href="#">Curriculum</a></nav></div><div class="flex-1 max-w-md hidden md:block mx-space-sm"><div class="relative flex items-center"><span class="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px] pointer-events-none">search</span><input class="w-full bg-surface-container-lowest/80 text-on-surface placeholder:text-outline border border-outline-variant/40 rounded-full pl-9 pr-14 py-1.5 font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all" placeholder="Search algorithms, system designs, patterns..." type="text"/><div class="absolute right-2.5 flex items-center px-1.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/40 text-on-surface-variant font-label-mono text-label-mono">⌘K</div></div></div><div class="flex items-center gap-space-sm shrink-0"><div class="hidden lg:flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container-low border border-outline-variant/30"><span class="text-tertiary text-xs leading-none">🔥</span><span class="font-label-mono-bold text-label-mono-bold text-tertiary">14 Days</span></div><div class="hidden sm:flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container-low border border-outline-variant/30"><span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span><span class="font-label-mono-bold text-label-mono-bold text-secondary">Lv. 42 Staff SWE</span></div><button aria-label="Notifications" class="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"><span class="material-symbols-outlined text-[20px]">notifications</span><span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary ring-2 ring-surface"></span></button><div class="flex items-center gap-space-xs pl-space-xs border-l border-outline-variant/40"><img alt="Profile" class="w-8 h-8 rounded-full object-cover ring-1 ring-primary/40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvXgF9m7wnvO3tLwisNOMY0zycQsMTZIHndWo6Z5NW2XKr6ETnenrq9bGDVEvml8iEJuuzYRqGTIZjunRvWX8K-sOubGsdmU9Cv-gNF6Zg_X8Jcm1p3zhr-rl3cYVYrGRjUfy8nGPe6H4Xqc1u6GHEeeMMIlKgR5flWa3UwJ8W5wfvBZZryyZ1YqVepWYjkwOq1V_HNzf44pIGOdrDDAaYGdFuP0GqW6sV7FyeFh30EXra10ZbKd7y3g"/><span class="material-symbols-outlined text-on-surface-variant text-[18px] cursor-pointer hover:text-on-surface transition-colors">keyboard_arrow_down</span></div></div></div></header><aside class="fixed left-0 top-16 bottom-0 w-64 bg-surface-container-lowest/90 backdrop-blur-xl border-r border-outline-variant/20 z-40 flex flex-col justify-between p-space-sm"><div class="space-y-space-xs"><div class="px-3 py-2 text-outline font-label-mono text-label-mono uppercase tracking-wider">Navigation Engine</div><nav class="space-y-1" data-active-classes="bg-surface-container-high text-on-surface font-headline-sm"><a class="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="dashboard" href="#"><span class="material-symbols-outlined text-[18px]">grid_view</span>Dashboard</a><a class="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="ai-workspace" href="#"><span class="material-symbols-outlined text-[18px]">terminal</span>AI Workspace</a><a class="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="curriculum" href="#"><span class="material-symbols-outlined text-[18px]">account_tree</span>Curriculum</a><a aria-current="page" class="flex items-center gap-3 px-3 py-2 rounded transition-all bg-surface-container-high text-on-surface font-headline-sm" data-path="ats-analyzer" href="#"><span class="material-symbols-outlined text-[18px]">document_scanner</span>ATS Resume Audit</a></nav></div><div class="p-space-sm rounded bg-surface-container-low border border-outline-variant/30 space-y-1.5"><div class="flex items-center justify-between text-on-surface font-label-mono text-label-mono"><span class="text-secondary">● Live Engine</span><span>99.98%</span></div><div class="w-full bg-surface-container-high h-1 rounded-full overflow-hidden"><div class="bg-secondary h-full w-4/5"></div></div><div class="font-label-mono text-label-mono text-outline">Target: L6 / Principal SWE</div></div></aside><div class="pl-64"><main class="relative pt-16 bg-background min-h-screen"><div class="flex flex-col w-full">
<div class="p-gutter-desktop space-y-space-lg max-w-[1720px] mx-auto w-full">
<!-- Top Telemetry & Header Deck -->
<div class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md p-space-lg rounded-xl bg-surface-container-low/60 backdrop-blur-xl relative overflow-hidden">
<div class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
<div class="absolute left-1/3 -bottom-24 w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
<div class="space-y-space-xs relative z-10">
<div class="flex items-center gap-space-sm">
<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/15 text-primary font-label-mono-bold text-label-mono uppercase tracking-wider">
<span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            Neural Parser v4.12
          </span>
<span class="font-label-mono text-label-mono text-outline">ENGINE: FAANG-ATS-HEURISTICS</span>
</div>
<div class="flex flex-wrap items-baseline gap-x-space-md gap-y-1">
<p class="font-headline-lg text-headline-lg tracking-tight text-on-surface">Staff & Principal SWE ATS Calibration Studio</p>
<span class="font-code-sm text-code-sm text-secondary">TARGET: L6 DISTRIBUTED SYSTEMS</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Deep-scan lexical parsing against verified Silicon Valley bar-raiser resumes. Evaluates quantified algorithmic impact, concurrency topologies, and enterprise architectural tokens.
        </p>
</div>
<!-- Quick Stats HUD -->
<div class="flex items-center gap-space-sm relative z-10 shrink-0">
<div class="bg-surface-container-high/80 px-space-md py-space-sm rounded-lg flex flex-col">
<span class="font-label-mono text-label-mono text-outline">BENCHMARK POOL</span>
<span class="font-code-lg text-code-lg text-on-surface font-semibold">14,820 L6+ Resumes</span>
</div>
<div class="bg-surface-container-high/80 px-space-md py-space-sm rounded-lg flex flex-col">
<span class="font-label-mono text-label-mono text-outline">PARSE CONFIDENCE</span>
<span class="font-code-lg text-code-lg text-secondary font-semibold">99.4% Latent</span>
</div>
</div>
</div>
<!-- Main Workspace Grid: Left Input Cockpit vs Right Intelligence Suite -->
<div class="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
<!-- LEFT SECTION: Upload Zone & Role Parameterization (5 Cols) -->
<div class="xl:col-span-5 flex flex-col space-y-space-lg">
<!-- Futuristic Neon Upload Zone -->
<div class="bg-surface-container-low/70 rounded-xl p-space-lg backdrop-blur-xl relative group shadow-xl">
<div class="flex items-center justify-between mb-space-md">
<div class="flex items-center gap-space-xs">
<span class="material-symbols-outlined text-primary text-[20px]">document_scanner</span>
<span class="font-headline-sm text-headline-sm text-on-surface">Active Document Artifact</span>
</div>
<span class="font-label-mono text-label-mono text-secondary px-2 py-0.5 rounded bg-secondary/10">READY FOR SYNC</span>
</div>
<!-- Pulsing Dropzone -->
<div class="relative rounded-lg p-space-xl flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 bg-surface-container-lowest/80 overflow-hidden hover:bg-surface-container-lowest" id="dropzone">
<!-- Animated neon glow perimeter overlay -->
<div class="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500">
<div class="w-full h-full bg-gradient-to-r from-primary/20 via-secondary/20 to-tertiary/20 blur-sm"></div>
</div>
<div class="relative z-10 w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center shadow-lg shadow-primary/20 mb-space-md group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-[32px] group-hover:text-secondary transition-colors">cloud_upload</span>
</div>
<h4 class="font-headline-sm text-headline-sm text-on-surface mb-1">Drop resume or paste LinkedIn artifact</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant max-w-xs mb-space-md">
              Supports ATS-formatted PDF, DOCX, LaTeX plain source, or Markdown dump (Max 15MB)
            </p>
<div class="flex items-center gap-space-xs">
<span class="px-2.5 py-1 rounded bg-surface-container-high font-label-mono text-label-mono text-outline">OCR Enabled</span>
<span class="px-2.5 py-1 rounded bg-surface-container-high font-label-mono text-label-mono text-outline">Table Flattening</span>
<span class="px-2.5 py-1 rounded bg-surface-container-high font-label-mono text-label-mono text-secondary">Token Matcher</span>
</div>
</div>
<!-- Active File Card -->
<div class="mt-space-md p-space-md rounded-lg bg-surface-container-high/60 flex items-center justify-between gap-space-md transition-all hover:bg-surface-container-high">
<div class="flex items-center gap-space-md min-w-0">
<div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
<span class="material-symbols-outlined text-[24px]">description</span>
</div>
<div class="min-w-0">
<p class="font-body-md text-body-md font-semibold text-on-surface truncate">Alex_Rivera_Staff_Software_Engineer_2025.pdf</p>
<div class="flex items-center gap-space-sm text-outline font-label-mono text-label-mono">
<span>340 KB</span>
<span>•</span>
<span>SHA256: 8c4a...e7b1</span>
<span>•</span>
<span class="text-secondary font-label-mono-bold">Synthesized 4m ago</span>
</div>
</div>
</div>
<button class="px-3 py-1.5 rounded bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-bright font-label-mono text-label-mono transition-colors shrink-0 flex items-center gap-1.5" onclick="alert('File selector triggered')">
<span class="material-symbols-outlined text-[16px]">sync</span>
              Re-upload
            </button>
</div>
</div>
<!-- Target Role & Tech Stack Selector -->
<div class="bg-surface-container-low/70 rounded-xl p-space-lg backdrop-blur-xl space-y-space-md shadow-xl">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<span class="material-symbols-outlined text-secondary text-[20px]">tune</span>
<span class="font-headline-sm text-headline-sm text-on-surface">Role Topology & Calibration Target</span>
</div>
<span class="font-label-mono text-label-mono text-primary cursor-pointer hover:underline">Reset Defaults</span>
</div>
<!-- Target Position Tags -->
<div class="space-y-space-xs">
<label class="font-label-mono text-label-mono text-outline uppercase tracking-wider block">Target Archetype</label>
<div class="flex flex-wrap gap-space-xs">
<button class="px-3 py-1.5 rounded-full bg-primary/20 text-primary font-label-mono-bold text-label-mono flex items-center gap-1 shadow-[0_0_12px_rgba(192,193,255,0.2)]">
<span class="material-symbols-outlined text-[14px]">check</span>
                Staff Software Engineer - Infrastructure
              </button>
<button class="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-mono text-label-mono">
                L6 Distributed Systems
              </button>
<button class="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-mono text-label-mono">
                Principal Backend Platform
              </button>
<button class="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-mono text-label-mono flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">add</span> Custom L6+ Role
              </button>
</div>
</div>
<!-- Required Keywords Extraction Matrix -->
<div class="space-y-space-xs pt-space-xs">
<div class="flex items-center justify-between">
<label class="font-label-mono text-label-mono text-outline uppercase tracking-wider">Required Engineering Keywords</label>
<span class="font-label-mono text-label-mono text-secondary">5/5 Matched in Heuristic</span>
</div>
<div class="flex flex-wrap gap-space-xs">
<span class="px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-code-sm text-code-sm flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px]">check_circle</span> Kafka
              </span>
<span class="px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-code-sm text-code-sm flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px]">check_circle</span> Kubernetes
              </span>
<span class="px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-code-sm text-code-sm flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px]">check_circle</span> Rust
              </span>
<span class="px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-code-sm text-code-sm flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px]">check_circle</span> gRPC
              </span>
<span class="px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-code-sm text-code-sm flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px]">check_circle</span> Distributed Consensus
              </span>
<span class="px-2.5 py-1 rounded-full bg-surface-container-high text-outline hover:text-on-surface font-code-sm text-code-sm flex items-center gap-1 cursor-pointer">
<span class="material-symbols-outlined text-[14px]">add</span> Add Keyword
              </span>
</div>
</div>
<!-- Target Company Profile Simulation -->
<div class="p-space-md rounded-lg bg-surface-container-lowest/90 space-y-space-xs">
<div class="flex items-center justify-between text-on-surface">
<span class="font-label-mono-bold text-label-mono">Simulation Target: Tier-1 Tech Bars</span>
<span class="font-label-mono text-label-mono text-tertiary">Strict Mode (Leveling Committee)</span>
</div>
<div class="grid grid-cols-4 gap-2 pt-1">
<div class="p-2 rounded bg-surface-container text-center">
<div class="font-label-mono-bold text-label-mono text-secondary">Meta E6</div>
<div class="font-label-mono text-[10px] text-outline">91% Match</div>
</div>
<div class="p-2 rounded bg-surface-container text-center">
<div class="font-label-mono-bold text-label-mono text-secondary">Stripe L4</div>
<div class="font-label-mono text-[10px] text-outline">88% Match</div>
</div>
<div class="p-2 rounded bg-surface-container text-center">
<div class="font-label-mono-bold text-label-mono text-tertiary">Google L6</div>
<div class="font-label-mono text-[10px] text-outline">84% Match</div>
</div>
<div class="p-2 rounded bg-surface-container text-center">
<div class="font-label-mono-bold text-label-mono text-secondary">Netflix Sr</div>
<div class="font-label-mono text-[10px] text-outline">89% Match</div>
</div>
</div>
</div>
</div>
<!-- ATS Security & Privacy Seal Card -->
<div class="p-space-md rounded-xl bg-surface-container-low/40 backdrop-blur-md flex items-center gap-space-md">
<span class="material-symbols-outlined text-secondary text-[28px]">verified_user</span>
<div class="min-w-0">
<h5 class="font-body-md text-body-md font-semibold text-on-surface">Zero Data Retention Policy</h5>
<p class="font-body-sm text-body-sm text-outline">Resumes are parsed in encrypted ephemeral RAM instances. Never retained for LLM public training pipelines.</p>
</div>
</div>
</div>
<!-- RIGHT SECTION: Telemetry Score, Meter Breakdown, AI Diagnostics (7 Cols) -->
<div class="xl:col-span-7 flex flex-col space-y-space-lg">
<!-- Score & Meter Matrix Glass Deck -->
<div class="bg-surface-container-low/80 rounded-xl p-space-lg backdrop-blur-xl shadow-xl relative overflow-hidden">
<div class="flex flex-col lg:flex-row items-center gap-space-xl">
<!-- Animated Circular Gauge with Glowing Gradient Stroke -->
<div class="relative shrink-0 flex flex-col items-center">
<div class="relative w-52 h-52 flex items-center justify-center">
<svg class="w-full h-full -rotate-90 transform" viewbox="0 0 160 160">
<defs>
<lineargradient id="scoreGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#ffb95f"></stop>
<stop offset="45%" stop-color="#ca8100"></stop>
<stop offset="80%" stop-color="#4edea3"></stop>
<stop offset="100%" stop-color="#6ffbbe"></stop>
</lineargradient>
<filter height="140%" id="gaugeGlow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="3"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>
<!-- Track -->
<circle class="text-surface-container-highest" cx="80" cy="80" fill="none" r="68" stroke="currentColor" stroke-width="12"></circle>
<!-- Active Gradient Arc (88% of 427.2 circumference = ~375.9 stroke-dasharray) -->
<circle class="transition-all duration-1000 ease-out" cx="80" cy="80" fill="none" filter="url(#gaugeGlow)" r="68" stroke="url(#scoreGradient)" stroke-dasharray="427.2" stroke-dashoffset="51.26" stroke-linecap="round" stroke-width="12"></circle>
</svg>
<!-- Center Score Output -->
<div class="absolute inset-0 flex flex-col items-center justify-center text-center">
<span class="font-display-hero text-display-hero tracking-tighter text-on-surface leading-none font-bold">88</span>
<span class="font-label-mono-bold text-label-mono text-outline">OUT OF 100</span>
<div class="mt-1 flex items-center gap-1 text-secondary font-label-mono text-[10px]">
<span class="material-symbols-outlined text-[12px]">trending_up</span>
<span>TOP 4.2%</span>
</div>
</div>
</div>
<div class="mt-space-sm text-center">
<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label-mono-bold text-label-mono">
<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  High Match Probability for Tier-1 Tech
                </span>
</div>
</div>
<!-- Breakdown Meter Bars -->
<div class="flex-1 w-full space-y-space-md">
<div>
<h4 class="font-headline-sm text-headline-sm text-on-surface">Dimensional Heuristics</h4>
<p class="font-body-sm text-body-sm text-outline">Evaluated through automated ATS lexers and hiring committee rubric weighting.</p>
</div>
<!-- Meter 1: Keyword Relevance -->
<div class="space-y-1.5">
<div class="flex justify-between items-center text-on-surface">
<span class="font-body-sm text-body-sm font-medium flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
                    Keyword & Tech Stack Relevance
                  </span>
<span class="font-code-sm text-code-sm font-semibold text-secondary">94%</span>
</div>
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-secondary h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(78,222,163,0.6)]" style="width: 94%"></div>
</div>
</div>
<!-- Meter 2: System Design Impact -->
<div class="space-y-1.5">
<div class="flex justify-between items-center text-on-surface">
<span class="font-body-sm text-body-sm font-medium flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary"></span>
                    System Architecture & Scale Density
                  </span>
<span class="font-code-sm text-code-sm font-semibold text-primary">89%</span>
</div>
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-primary h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(192,193,255,0.6)]" style="width: 89%"></div>
</div>
</div>
<!-- Meter 3: Measurable Metrics -->
<div class="space-y-1.5">
<div class="flex justify-between items-center text-on-surface">
<span class="font-body-sm text-body-sm font-medium flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-tertiary"></span>
                    Quantified Metrics & Commercial ROI
                  </span>
<span class="font-code-sm text-code-sm font-semibold text-tertiary">76%</span>
</div>
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-tertiary h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(255,185,95,0.6)]" style="width: 76%"></div>
</div>
</div>
<!-- Meter 4: Formatting & Parser Readability -->
<div class="space-y-1.5">
<div class="flex justify-between items-center text-on-surface">
<span class="font-body-sm text-body-sm font-medium flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
                    Formatting, Layout & Parser Readability
                  </span>
<span class="font-code-sm text-code-sm font-semibold text-secondary">96%</span>
</div>
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-secondary h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(78,222,163,0.6)]" style="width: 96%"></div>
</div>
</div>
</div>
</div>
</div>
<!-- AI Recommendations & Missing Signals -->
<div class="bg-surface-container-low/70 rounded-xl p-space-lg backdrop-blur-xl space-y-space-md shadow-xl">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<span class="material-symbols-outlined text-tertiary text-[22px]">lightbulb</span>
<h3 class="font-headline-sm text-headline-sm text-on-surface">AI Recommendations & Missing Signals</h3>
</div>
<span class="font-label-mono text-label-mono text-outline">3 Action Items Detected</span>
</div>
<!-- Critical Fix Alert Box -->
<div class="p-space-md rounded-lg bg-surface-container-high/60 flex items-start gap-space-md hover:bg-surface-container-high transition-colors">
<div class="p-2 rounded bg-tertiary/15 text-tertiary shrink-0 mt-0.5">
<span class="material-symbols-outlined text-[20px]">warning</span>
</div>
<div class="space-y-1 flex-1">
<div class="flex items-center justify-between">
<span class="font-label-mono-bold text-label-mono text-tertiary uppercase">High Priority Impact Gap</span>
<span class="font-label-mono text-label-mono text-outline">+6 ATS PTS Potential</span>
</div>
<p class="font-body-md text-body-md text-on-surface">
                Add quantitative metrics to your distributed cache migration project. Current line says: <span class="italic text-outline">"Migrated Redis to custom cluster"</span>.
              </p>
<div class="p-2.5 rounded bg-surface-container-lowest font-code-sm text-code-sm text-secondary">
<span class="text-outline font-label-mono block mb-1">RECOMMENDED REWRITE:</span>
                "Architected and executed zero-downtime distributed Redis tier migration handling 1.4M req/sec, slumping p99 latency by 34ms and reducing compute footprint by 28%."
              </div>
</div>
</div>
<!-- Suggested Keywords Insertion Deck -->
<div class="p-space-md rounded-lg bg-surface-container-high/60 space-y-space-xs">
<div class="flex items-center justify-between">
<span class="font-label-mono-bold text-label-mono text-primary uppercase">Critical Latent Keywords to Insert</span>
<span class="font-label-mono text-label-mono text-outline">Missing in Leveling Scope</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">
              These exact technical terms appeared in 92% of successful Staff SWE screenings for Infrastructure and Platform:
            </p>
<div class="grid grid-cols-1 md:grid-cols-3 gap-space-xs pt-1">
<div class="p-2.5 rounded bg-surface-container-lowest flex items-center justify-between group hover:bg-surface-container">
<div class="flex flex-col">
<span class="font-code-sm text-code-sm text-on-surface font-semibold">Raft consensus</span>
<span class="font-label-mono text-[10px] text-tertiary">Missing in Experience #2</span>
</div>
<button class="p-1 rounded text-primary hover:bg-primary/20" title="Auto-Insert Keyword">
<span class="material-symbols-outlined text-[16px]">add_circle</span>
</button>
</div>
<div class="p-2.5 rounded bg-surface-container-lowest flex items-center justify-between group hover:bg-surface-container">
<div class="flex flex-col">
<span class="font-code-sm text-code-sm text-on-surface font-semibold">eBPF telemetry</span>
<span class="font-label-mono text-[10px] text-tertiary">Missing in Tech Section</span>
</div>
<button class="p-1 rounded text-primary hover:bg-primary/20" title="Auto-Insert Keyword">
<span class="material-symbols-outlined text-[16px]">add_circle</span>
</button>
</div>
<div class="p-2.5 rounded bg-surface-container-lowest flex items-center justify-between group hover:bg-surface-container">
<div class="flex flex-col">
<span class="font-code-sm text-code-sm text-on-surface font-semibold">Zero-downtime deploys</span>
<span class="font-label-mono text-[10px] text-tertiary">Missing in Architecture</span>
</div>
<button class="p-1 rounded text-primary hover:bg-primary/20" title="Auto-Insert Keyword">
<span class="material-symbols-outlined text-[16px]">add_circle</span>
</button>
</div>
</div>
</div>
<!-- Primary CTA Button Bar -->
<div class="pt-space-xs flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div class="flex items-center gap-space-xs text-outline font-label-mono text-label-mono">
<span class="material-symbols-outlined text-secondary text-[18px]">auto_awesome</span>
<span>Claude 3.7 Sonnet + GPT-4o Staff Lexer Ensemble</span>
</div>
<button class="w-full sm:w-auto px-space-xl py-space-md rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-headline-sm flex items-center justify-center gap-space-xs shadow-[0_0_24px_rgba(128,131,255,0.45)] hover:shadow-[0_0_36px_rgba(128,131,255,0.7)] hover:bg-primary transition-all duration-200" id="optimizeBtn">
<span class="material-symbols-outlined text-[20px]">auto_fix_high</span>
<span>Auto-Optimize Resume with AI</span>
</button>
</div>
</div>
</div>
</div>
<!-- Comparative Resume Teardown & Live Preview Strip -->
<div class="p-space-lg rounded-xl bg-surface-container-low/60 backdrop-blur-xl space-y-space-md">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div>
<h4 class="font-headline-sm text-headline-sm text-on-surface">Algorithmic Resume Teardown & Inline Tokenizer</h4>
<p class="font-body-sm text-body-sm text-outline">Real-time inspection of how parsing robots categorize your experience tokens.</p>
</div>
<div class="flex items-center gap-space-xs">
<span class="font-label-mono text-label-mono text-outline">VIEWPORT:</span>
<button class="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-mono text-label-mono">Split Parser</button>
<button class="px-2.5 py-1 rounded bg-surface-container text-outline hover:text-on-surface font-label-mono text-label-mono">Raw JSON AST</button>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
<!-- Original Segment -->
<div class="p-space-md rounded-lg bg-surface-container-lowest/80 space-y-space-xs font-code-sm text-code-sm">
<div class="flex items-center justify-between text-outline font-label-mono text-[10px]">
<span>PARSER INPUT (RAW TEXT STREAM)</span>
<span class="text-tertiary">Unquantified Verb Detected</span>
</div>
<p class="text-on-surface-variant font-code-sm leading-relaxed">
            "Designed and built high-performance distributed messaging backbone using Kafka and gRPC. Oversaw team of 6 engineers to maintain high availability and reliability across cloud providers."
          </p>
</div>
<!-- AI Augmented Variant -->
<div class="p-space-md rounded-lg bg-surface-container-high/50 space-y-space-xs font-code-sm text-code-sm shadow-inner">
<div class="flex items-center justify-between text-secondary font-label-mono text-[10px]">
<span class="flex items-center gap-1 font-label-mono-bold">
<span class="material-symbols-outlined text-[12px]">verified</span>
              OPTIMIZED CANDIDATE (ATS SCORE: 98/100)
            </span>
<span class="text-primary font-label-mono">L6 Staff Bar Pass</span>
</div>
<p class="text-on-surface font-code-sm leading-relaxed">
            "Spearheaded distributed event streaming fabric (<span class="text-secondary font-semibold">Kafka, gRPC, Rust</span>) processing <span class="text-tertiary font-semibold">120k eps @ 99.999% SLA</span>; orchestrated cross-regional failover architecture reducing multi-cloud egress overhead by <span class="text-tertiary font-semibold">\$480K annually</span>."
          </p>
</div>
</div>
</div>
</div>
<script>
    // Micro-interaction for Optimize Button
    const optBtn = document.getElementById('optimizeBtn');
    if (optBtn) {
      optBtn.addEventListener('click', function() {
        const originalContent = optBtn.innerHTML;
        optBtn.innerHTML = \`
          <span class="material-symbols-outlined text-[20px] animate-spin">refresh</span>
          <span>Synthesizing Tailored PDF...</span>
        \`;
        optBtn.disabled = true;
        setTimeout(() => {
          optBtn.innerHTML = \`
            <span class="material-symbols-outlined text-[20px]">done_all</span>
            <span>Optimized Artifact Generated! (98/100)</span>
          \`;
          setTimeout(() => {
            optBtn.innerHTML = originalContent;
            optBtn.disabled = false;
          }, 3000);
        }, 1500);
      });
    }

    // Drag-over styling
    const dropzone = document.getElementById('dropzone');
    if (dropzone) {
      ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropzone.classList.add('bg-surface-container-high');
        }, false);
      });
      ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropzone.classList.remove('bg-surface-container-high');
        }, false);
      });
    }
  </script>
</div></main></div>` }} 
    />
  );
}
