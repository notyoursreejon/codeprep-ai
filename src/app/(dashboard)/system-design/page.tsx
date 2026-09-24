"use client";
import { useEffect } from "react";

export default function SystemDesignPage() {
  useEffect(() => {
    const container = document.getElementById('systemdesignpage-container');
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
        id="systemdesignpage-container"
        className="w-full h-full bg-[#0e0e10] text-[#e5e1e4]" 
        dangerouslySetInnerHTML={{ __html: `<header class="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"><div class="h-16 w-full px-gutter-desktop flex items-center justify-between gap-space-md"><div class="flex items-center gap-space-lg shrink-0"><div class="flex items-center gap-space-sm"><img alt="CodePrep AI Logo" class="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UN5h6Nw_OyDdf59-PtCbUJSdTqkmMXCNYJvl_Mirtt3dUBGC8otnAFnA87QcQyk9WmrCQKETHagtLTi0j-ENapJzWihI2n9jKaS_qGQpRtj7ywpSvvSIivdFsybtc5yHCpxgTaIIIvFTjBCAi9W1ApWXrxS3ZY-2wUkhPtcj7h2I9PpW_I9qn7LdJX-bDG-INnkOHZif2frrRO72df3v9TICgG3O_A_SZRdJBUbJO595FbPVgGMGpVAjAc"/><span class="font-headline-sm text-headline-sm tracking-tight text-on-surface flex items-center">CodePrep<span class="text-primary font-headline-sm text-headline-sm">.ai</span></span></div><nav class="hidden xl:flex items-center gap-space-xs" data-active-classes="bg-surface-container-high text-on-surface font-headline-sm"><a class="px-space-sm py-space-xs rounded font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="landing" href="#">Landing</a><a class="px-space-sm py-space-xs rounded font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="dashboard" href="#">Dashboard</a><a class="px-space-sm py-space-xs rounded font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="ai-workspace" href="#">AI Workspace</a><a aria-current="page" class="px-space-sm py-space-xs rounded transition-colors bg-surface-container-high text-on-surface font-headline-sm" data-path="system-design" href="#">System Design</a><a class="px-space-sm py-space-xs rounded font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="ats-analyzer" href="#">ATS Analyzer</a><a class="px-space-sm py-space-xs rounded font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="curriculum" href="#">Curriculum</a></nav></div><div class="flex-1 max-w-md hidden md:block mx-space-sm"><div class="relative flex items-center"><span class="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px] pointer-events-none">search</span><input class="w-full bg-surface-container-lowest/80 text-on-surface placeholder:text-outline border border-outline-variant/40 rounded-full pl-9 pr-14 py-1.5 font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all" placeholder="Search algorithms, system designs, patterns..." type="text"/><div class="absolute right-2.5 flex items-center px-1.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/40 text-on-surface-variant font-label-mono text-label-mono">⌘K</div></div></div><div class="flex items-center gap-space-sm shrink-0"><div class="hidden lg:flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container-low border border-outline-variant/30"><span class="text-tertiary text-xs leading-none">🔥</span><span class="font-label-mono-bold text-label-mono-bold text-tertiary">14 Days</span></div><div class="hidden sm:flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container-low border border-outline-variant/30"><span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span><span class="font-label-mono-bold text-label-mono-bold text-secondary">Lv. 42 Staff SWE</span></div><button aria-label="Notifications" class="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"><span class="material-symbols-outlined text-[20px]">notifications</span><span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary ring-2 ring-surface"></span></button><div class="flex items-center gap-space-xs pl-space-xs border-l border-outline-variant/40"><img alt="Profile" class="w-8 h-8 rounded-full object-cover ring-1 ring-primary/40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvXgF9m7wnvO3tLwisNOMY0zycQsMTZIHndWo6Z5NW2XKr6ETnenrq9bGDVEvml8iEJuuzYRqGTIZjunRvWX8K-sOubGsdmU9Cv-gNF6Zg_X8Jcm1p3zhr-rl3cYVYrGRjUfy8nGPe6H4Xqc1u6GHEeeMMIlKgR5flWa3UwJ8W5wfvBZZryyZ1YqVepWYjkwOq1V_HNzf44pIGOdrDDAaYGdFuP0GqW6sV7FyeFh30EXra10ZbKd7y3g"/><span class="material-symbols-outlined text-on-surface-variant text-[18px] cursor-pointer hover:text-on-surface transition-colors">keyboard_arrow_down</span></div></div></div></header><aside class="fixed left-0 top-16 bottom-0 w-64 bg-surface-container-lowest/90 backdrop-blur-xl border-r border-outline-variant/20 z-40 flex flex-col justify-between p-space-sm"><div class="space-y-space-xs"><div class="px-3 py-2 text-outline font-label-mono text-label-mono uppercase tracking-wider">Navigation Engine</div><nav class="space-y-1" data-active-classes="bg-surface-container-high text-on-surface font-headline-sm"><a class="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="dashboard" href="#"><span class="material-symbols-outlined text-[18px]">grid_view</span>Dashboard</a><a class="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="ai-workspace" href="#"><span class="material-symbols-outlined text-[18px]">terminal</span>AI Workspace</a><a aria-current="page" class="flex items-center gap-3 px-3 py-2 rounded transition-all bg-surface-container-high text-on-surface font-headline-sm" data-path="system-design" href="#"><span class="material-symbols-outlined text-[18px]">schema</span>System Design</a><a class="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="curriculum" href="#"><span class="material-symbols-outlined text-[18px]">account_tree</span>Curriculum</a><a class="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="ats-analyzer" href="#"><span class="material-symbols-outlined text-[18px]">document_scanner</span>ATS Resume Audit</a></nav></div><div class="p-space-sm rounded bg-surface-container-low border border-outline-variant/30 space-y-1.5"><div class="flex items-center justify-between text-on-surface font-label-mono text-label-mono"><span class="text-secondary">● Live Engine</span><span>99.98%</span></div><div class="w-full bg-surface-container-high h-1 rounded-full overflow-hidden"><div class="bg-secondary h-full w-4/5"></div></div><div class="font-label-mono text-label-mono text-outline">Target: L6 / Principal SWE</div></div></aside><div class="pl-64"><main class="relative pt-16 bg-background min-h-screen"><div class="flex flex-col w-full">
<!-- Mission Bar / System Scenario Header -->
<section class="w-full px-gutter-desktop py-space-sm bg-surface-container-lowest">
<div class="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-md">
<!-- Title & Architectural Badges -->
<div class="space-y-space-xs">
<div class="flex flex-wrap items-center gap-space-xs">
<span class="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-label-mono text-label-mono">SCENARIO #18</span>
<span class="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-mono-bold text-label-mono-bold uppercase tracking-wider">FAANG Staff (L6/L7)</span>
<span class="flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono text-label-mono">
<span class="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
            Live Architectural Simulation
          </span>
</div>
<h1 class="font-headline-md text-headline-md text-on-surface tracking-tight">Real-Time Global Video Ingestion &amp; Transcoding Mesh</h1>
<!-- Requirements SLAs Strip -->
<div class="flex flex-wrap items-center gap-space-sm pt-1">
<div class="flex items-center gap-1.5 px-2 py-1 rounded bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
<span class="text-outline">Scale:</span> <span class="text-on-surface font-semibold">50M DAU</span>
</div>
<div class="flex items-center gap-1.5 px-2 py-1 rounded bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
<span class="text-outline">Write TPS:</span> <span class="text-secondary font-semibold">120k req/s</span>
</div>
<div class="flex items-center gap-1.5 px-2 py-1 rounded bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
<span class="text-outline">p99 Latency:</span> <span class="text-primary font-semibold">&lt;85ms</span>
</div>
<div class="flex items-center gap-1.5 px-2 py-1 rounded bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
<span class="text-outline">Availability:</span> <span class="text-secondary font-semibold">99.999% SLA</span>
</div>
<div class="flex items-center gap-1.5 px-2 py-1 rounded bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
<span class="text-outline">Storage Delta:</span> <span class="text-tertiary font-semibold">4.8 PB / Month</span>
</div>
</div>
</div>
<!-- Action Cluster & Clock -->
<div class="flex flex-wrap items-center gap-space-sm shrink-0 self-stretch xl:self-auto justify-end">
<div class="px-3 py-1.5 rounded bg-surface-container-high flex items-center gap-2">
<span class="material-symbols-outlined text-outline text-[18px]">timer</span>
<div class="flex flex-col">
<span class="font-label-mono text-label-mono text-outline">REMAINING</span>
<span class="font-code-lg text-code-lg text-on-surface font-bold tracking-tight">28:14</span>
</div>
</div>
<button class="px-3 py-2 rounded bg-surface-container-high hover:bg-surface-container-highest text-tertiary font-body-sm text-body-sm flex items-center gap-1.5 transition-all shadow-sm" id="fault-injection-btn">
<span class="material-symbols-outlined text-[18px] text-tertiary">bolt</span>
<span>Inject Fault</span>
</button>
<button class="px-4 py-2 rounded bg-primary hover:bg-primary-fixed text-on-primary font-body-sm text-body-sm font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(192,193,255,0.35)] transition-all" id="run-benchmark-btn">
<span class="material-symbols-outlined text-[18px]">play_arrow</span>
<span>Run Traffic Benchmark</span>
</button>
</div>
</div>
</section>
<!-- Main Multi-Pane Architect Workspace -->
<div class="w-full flex flex-col xl:flex-row min-h-[820px] bg-background">
<!-- Left Floating Dock / Component Palette -->
<section class="w-full xl:w-64 bg-surface-container-lowest flex flex-col shrink-0 p-space-sm space-y-space-md">
<!-- Toolbar Modes -->
<div class="space-y-space-xs">
<div class="px-2 py-1 font-label-mono text-label-mono text-outline uppercase tracking-wider">Canvas Tools</div>
<div class="grid grid-cols-4 gap-1 p-1 bg-surface-container rounded">
<button class="p-1.5 rounded bg-primary text-on-primary flex items-center justify-center transition-all shadow-sm" title="Select &amp; Move">
<span class="material-symbols-outlined text-[18px]">near_me</span>
</button>
<button class="p-1.5 rounded hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-all" title="Connect Wire">
<span class="material-symbols-outlined text-[18px]">timeline</span>
</button>
<button class="p-1.5 rounded hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-all" title="Text Annotation">
<span class="material-symbols-outlined text-[18px]">text_fields</span>
</button>
<button class="p-1.5 rounded hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-all" title="Delete Component">
<span class="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
<!-- Component Library Accordions -->
<div class="space-y-space-sm flex-1 overflow-y-auto pr-1">
<div class="font-label-mono text-label-mono text-outline uppercase tracking-wider px-2">Infrastructure Fleet</div>
<!-- Ingress & Edge -->
<div class="space-y-1">
<div class="px-2 py-1 text-on-surface-variant font-label-mono text-label-mono flex items-center justify-between">
<span class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span> Edge &amp; Ingress
            </span>
<span class="material-symbols-outlined text-[14px]">expand_more</span>
</div>
<div class="grid grid-cols-1 gap-1 pl-2">
<div class="p-2 rounded bg-surface-container hover:bg-surface-container-high cursor-grab flex items-center justify-between transition-colors" draggable="true">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[18px]">hub</span>
<span class="font-body-sm text-body-sm text-on-surface">Cloudflare Edge CDN</span>
</div>
<span class="font-label-mono text-label-mono text-outline">Geo-Anycast</span>
</div>
<div class="p-2 rounded bg-surface-container hover:bg-surface-container-high cursor-grab flex items-center justify-between transition-colors" draggable="true">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[18px]">alt_route</span>
<span class="font-body-sm text-body-sm text-on-surface">Envoy Gateway</span>
</div>
<span class="font-label-mono text-label-mono text-outline">Layer 7</span>
</div>
</div>
</div>
<!-- Compute Fleet -->
<div class="space-y-1">
<div class="px-2 py-1 text-on-surface-variant font-label-mono text-label-mono flex items-center justify-between">
<span class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> Compute &amp; Workers
            </span>
<span class="material-symbols-outlined text-[14px]">expand_more</span>
</div>
<div class="grid grid-cols-1 gap-1 pl-2">
<div class="p-2 rounded bg-surface-container hover:bg-surface-container-high cursor-grab flex items-center justify-between transition-colors" draggable="true">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[18px]">memory</span>
<span class="font-body-sm text-body-sm text-on-surface">Ingest Service</span>
</div>
<span class="font-label-mono text-label-mono text-outline">Go Pods</span>
</div>
<div class="p-2 rounded bg-surface-container hover:bg-surface-container-high cursor-grab flex items-center justify-between transition-colors" draggable="true">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[18px]">developer_board</span>
<span class="font-body-sm text-body-sm text-on-surface">Transcode Cluster</span>
</div>
<span class="font-label-mono text-label-mono text-outline">H.265 / AV1</span>
</div>
</div>
</div>
<!-- Queues & Streaming -->
<div class="space-y-1">
<div class="px-2 py-1 text-on-surface-variant font-label-mono text-label-mono flex items-center justify-between">
<span class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Streaming &amp; Queues
            </span>
<span class="material-symbols-outlined text-[14px]">expand_more</span>
</div>
<div class="grid grid-cols-1 gap-1 pl-2">
<div class="p-2 rounded bg-surface-container hover:bg-surface-container-high cursor-grab flex items-center justify-between transition-colors" draggable="true">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-tertiary text-[18px]">swap_horiz</span>
<span class="font-body-sm text-body-sm text-on-surface">Apache Kafka</span>
</div>
<span class="font-label-mono text-label-mono text-outline">Partitions</span>
</div>
<div class="p-2 rounded bg-surface-container hover:bg-surface-container-high cursor-grab flex items-center justify-between transition-colors" draggable="true">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-tertiary text-[18px]">layers</span>
<span class="font-body-sm text-body-sm text-on-surface">Redis Streams</span>
</div>
<span class="font-label-mono text-label-mono text-outline">In-Memory</span>
</div>
</div>
</div>
<!-- Storage & Databases -->
<div class="space-y-1">
<div class="px-2 py-1 text-on-surface-variant font-label-mono text-label-mono flex items-center justify-between">
<span class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim"></span> Storage &amp; Persistence
            </span>
<span class="material-symbols-outlined text-[14px]">expand_more</span>
</div>
<div class="grid grid-cols-1 gap-1 pl-2">
<div class="p-2 rounded bg-surface-container hover:bg-surface-container-high cursor-grab flex items-center justify-between transition-colors" draggable="true">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[18px]">cloud_queue</span>
<span class="font-body-sm text-body-sm text-on-surface">S3 Blob Store</span>
</div>
<span class="font-label-mono text-label-mono text-outline">Object Store</span>
</div>
<div class="p-2 rounded bg-surface-container hover:bg-surface-container-high cursor-grab flex items-center justify-between transition-colors" draggable="true">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[18px]">database</span>
<span class="font-body-sm text-body-sm text-on-surface">CockroachDB</span>
</div>
<span class="font-label-mono text-label-mono text-outline">Raft Multi-DC</span>
</div>
</div>
</div>
</div>
<!-- Quick Canvas HUD stats -->
<div class="p-2 rounded bg-surface-container-low space-y-1">
<div class="flex items-center justify-between font-label-mono text-label-mono text-outline">
<span>Active Nodes</span>
<span class="text-on-surface font-semibold">9 Nodes / 14 Wires</span>
</div>
<div class="flex items-center justify-between font-label-mono text-label-mono text-outline">
<span>Estimated Monthly Infra</span>
<span class="text-secondary font-semibold">\$18,420/mo</span>
</div>
</div>
</section>
<!-- Center Whiteboard Canvas (Blueprint & Active Network Graph) -->
<section class="flex-1 relative overflow-hidden bg-surface flex flex-col">
<!-- Blueprint Grid Canvas Background -->
<div class="absolute inset-0 pointer-events-none opacity-25" style="background-image: radial-gradient(rgba(192, 193, 255, 0.25) 1px, transparent 0); background-size: 24px 24px;"></div>
<!-- Floating Canvas Quick Status Bar -->
<div class="absolute top-4 left-4 z-20 flex items-center gap-space-xs bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded shadow-lg">
<span class="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary">
<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span> Wire Protocol: gRPC + QUIC
        </span>
<span class="text-outline">/</span>
<span class="font-label-mono text-label-mono text-on-surface-variant">Throughput: 44.8 Gbps</span>
<span class="text-outline">/</span>
<span class="font-label-mono text-label-mono text-tertiary">Hot Partition Alert: 1 Active</span>
</div>
<!-- Mini-Map / Zoom Controls -->
<div class="absolute bottom-4 left-4 z-20 flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-md p-1 rounded shadow-lg">
<button class="p-1.5 rounded hover:bg-surface-container-high text-on-surface flex items-center justify-center">
<span class="material-symbols-outlined text-[16px]">zoom_in</span>
</button>
<span class="font-label-mono text-label-mono px-1.5 text-outline">100%</span>
<button class="p-1.5 rounded hover:bg-surface-container-high text-on-surface flex items-center justify-center">
<span class="material-symbols-outlined text-[16px]">zoom_out</span>
</button>
<button class="p-1.5 rounded hover:bg-surface-container-high text-on-surface flex items-center justify-center">
<span class="material-symbols-outlined text-[16px]">fit_screen</span>
</button>
</div>
<!-- Interactive Canvas SVG Topology & Nodes Container -->
<div class="relative w-full h-full min-h-[760px] p-6 overflow-auto">
<!-- SVG Connecting Splines / Data Flow Vectors -->
<svg class="absolute inset-0 w-full h-full pointer-events-none z-0">
<defs>
<lineargradient id="flow-indigo" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#8083ff" stop-opacity="0.4"></stop>
<stop offset="50%" stop-color="#c0c1ff" stop-opacity="0.9"></stop>
<stop offset="100%" stop-color="#4edea3" stop-opacity="0.4"></stop>
</lineargradient>
<lineargradient id="flow-warning" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#ffb95f"></stop>
<stop offset="100%" stop-color="#ffb4ab"></stop>
</lineargradient>
<filter id="glow-light">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<!-- Path: Clients to Cloudflare -->
<path class="animate-pulse" d="M 180 140 C 230 140, 250 140, 300 140" fill="none" filter="url(#glow-light)" stroke="url(#flow-indigo)" stroke-dasharray="6,4" stroke-width="2.5"></path>
<!-- Path: Cloudflare to Gateway -->
<path class="animate-pulse" d="M 460 140 C 510 140, 520 140, 570 140" fill="none" stroke="url(#flow-indigo)" stroke-dasharray="6,4" stroke-width="2.5"></path>
<!-- Path: Gateway to Upload Ingestion Service -->
<path d="M 650 190 C 650 250, 420 250, 420 310" fill="none" stroke="#8083ff" stroke-opacity="0.8" stroke-width="2"></path>
<!-- Path: Gateway to Auth Guard & Rate Limiter -->
<path d="M 730 140 C 780 140, 810 140, 850 140" fill="none" stroke="#8083ff" stroke-opacity="0.6" stroke-width="2"></path>
<!-- Path: Upload Ingest to Kafka Video Queue -->
<path d="M 500 365 C 570 365, 590 365, 650 365" fill="none" filter="url(#glow-light)" stroke="url(#flow-warning)" stroke-width="3"></path>
<!-- Path: Kafka to Transcoding Fleet -->
<path d="M 830 365 C 900 365, 900 480, 720 540" fill="none" stroke="url(#flow-indigo)" stroke-dasharray="8,4" stroke-width="2.5"></path>
<!-- Path: Transcoder to S3 Object Store -->
<path d="M 560 595 C 440 620, 380 620, 270 595" fill="none" stroke="#4edea3" stroke-opacity="0.9" stroke-width="2.5"></path>
<!-- Path: Transcoder to CockroachDB Metadata -->
<path d="M 680 640 C 680 680, 780 680, 820 680" fill="none" stroke="#c0c1ff" stroke-opacity="0.7" stroke-width="2"></path>
<!-- Path: Upload Ingest to Redis Cache -->
<path d="M 330 365 C 260 365, 230 430, 230 460" fill="none" stroke="#8083ff" stroke-dasharray="4,4" stroke-width="1.5"></path>
</svg>
<!-- Topology Nodes Floating Layer -->
<!-- Node 1: Client Fleet -->
<div class="absolute left-6 top-20 w-44 p-3 rounded bg-surface-container-high/90 backdrop-blur-xl shadow-xl hover:shadow-[0_0_20px_rgba(192,193,255,0.2)] transition-all cursor-pointer">
<div class="flex items-center justify-between mb-1">
<span class="flex items-center gap-1.5 font-label-mono text-label-mono text-primary">
<span class="material-symbols-outlined text-[16px]">devices</span> Edge Tier
            </span>
<span class="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div class="font-headline-sm text-headline-sm text-on-surface">Global Clients</div>
<div class="font-label-mono text-label-mono text-outline mt-1">iOS, Android, WebRTC, DASH</div>
<div class="mt-2 pt-2 bg-surface-container/60 rounded px-2 py-1 flex items-center justify-between font-label-mono text-label-mono">
<span class="text-outline">Active Egress</span>
<span class="text-secondary font-bold">120k TPS</span>
</div>
</div>
<!-- Node 2: Cloudflare Edge CDN -->
<div class="absolute left-[300px] top-20 w-44 p-3 rounded bg-surface-container-high/90 backdrop-blur-xl shadow-xl hover:shadow-[0_0_20px_rgba(192,193,255,0.2)] transition-all cursor-pointer">
<div class="flex items-center justify-between mb-1">
<span class="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary">
<span class="material-symbols-outlined text-[16px]">cloud</span> CDN &amp; WAF
            </span>
<span class="px-1.5 py-0.2 rounded bg-secondary-container/20 text-secondary font-label-mono text-label-mono">Cached</span>
</div>
<div class="font-headline-sm text-headline-sm text-on-surface">Anycast Edge</div>
<div class="font-label-mono text-label-mono text-outline mt-1">TLS 1.3 Termination, Geo-Route</div>
<div class="mt-2 pt-2 bg-surface-container/60 rounded px-2 py-1 flex items-center justify-between font-label-mono text-label-mono">
<span class="text-outline">Edge Cache Hit</span>
<span class="text-secondary font-bold">89.4%</span>
</div>
</div>
<!-- Node 3: Envoy API Gateway -->
<div class="absolute left-[570px] top-20 w-44 p-3 rounded bg-surface-container-high/90 backdrop-blur-xl shadow-xl hover:shadow-[0_0_20px_rgba(192,193,255,0.2)] transition-all cursor-pointer">
<div class="flex items-center justify-between mb-1">
<span class="flex items-center gap-1.5 font-label-mono text-label-mono text-primary">
<span class="material-symbols-outlined text-[16px]">router</span> Ingress
            </span>
<span class="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div class="font-headline-sm text-headline-sm text-on-surface">Envoy Gateway</div>
<div class="font-label-mono text-label-mono text-outline mt-1">Path Rewrite &amp; Auth Verify</div>
<div class="mt-2 pt-2 bg-surface-container/60 rounded px-2 py-1 flex items-center justify-between font-label-mono text-label-mono">
<span class="text-outline">p99 Latency</span>
<span class="text-primary font-bold">12ms</span>
</div>
</div>
<!-- Node 4: Rate Limiter Token Bucket -->
<div class="absolute left-[850px] top-20 w-48 p-3 rounded bg-surface-container-high/90 backdrop-blur-xl shadow-xl hover:shadow-[0_0_20px_rgba(192,193,255,0.2)] transition-all cursor-pointer">
<div class="flex items-center justify-between mb-1">
<span class="flex items-center gap-1.5 font-label-mono text-label-mono text-tertiary">
<span class="material-symbols-outlined text-[16px]">speed</span> Rate Limiter
            </span>
<span class="px-1.5 py-0.2 rounded bg-tertiary-container/30 text-tertiary font-label-mono text-label-mono">Redis Lock</span>
</div>
<div class="font-headline-sm text-headline-sm text-on-surface">Token Bucket Guard</div>
<div class="font-label-mono text-label-mono text-outline mt-1">Sliding Window Leaky Bucket</div>
<div class="mt-2 pt-2 bg-surface-container/60 rounded px-2 py-1 flex items-center justify-between font-label-mono text-label-mono">
<span class="text-outline">Rejected</span>
<span class="text-error font-bold">0.02%</span>
</div>
</div>
<!-- Node 5: Ingestion Service (Go) -->
<div class="absolute left-[330px] top-72 w-52 p-3 rounded bg-surface-container-high/90 backdrop-blur-xl shadow-xl hover:shadow-[0_0_20px_rgba(192,193,255,0.2)] transition-all cursor-pointer">
<div class="flex items-center justify-between mb-1">
<span class="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary">
<span class="material-symbols-outlined text-[16px]">flight_takeoff</span> Microservice
            </span>
<span class="font-label-mono text-label-mono text-secondary">Healthy</span>
</div>
<div class="font-headline-sm text-headline-sm text-on-surface">Video Ingest Fleet</div>
<div class="font-label-mono text-label-mono text-outline mt-1">Chunk Multi-Part Parser (4MB)</div>
<div class="mt-2 pt-2 bg-surface-container/60 rounded px-2 py-1 flex items-center justify-between font-label-mono text-label-mono">
<span class="text-outline">Fleet Pods</span>
<span class="text-on-surface font-bold">64 Pods (HPA)</span>
</div>
</div>
<!-- Node 6: Kafka Message Broker WITH HOT PARTITION CALLOUT -->
<div class="absolute left-[650px] top-72 w-60 p-3 rounded bg-surface-container-high/90 backdrop-blur-xl shadow-2xl shadow-tertiary/10 transition-all cursor-pointer">
<div class="flex items-center justify-between mb-1">
<span class="flex items-center gap-1.5 font-label-mono text-label-mono text-tertiary">
<span class="material-symbols-outlined text-[16px]">sync_alt</span> Stream Bus
            </span>
<span class="px-2 py-0.5 rounded bg-tertiary-container/40 text-tertiary font-label-mono text-label-mono animate-pulse">Hot Partition</span>
</div>
<div class="font-headline-sm text-headline-sm text-on-surface">Apache Kafka Cluster</div>
<div class="font-label-mono text-label-mono text-outline mt-1">Topic: <code class="text-primary font-code-sm text-code-sm">raw-video-chunks</code></div>
<div class="mt-2 pt-2 bg-surface-container/60 rounded px-2 py-1 flex items-center justify-between font-label-mono text-label-mono">
<span class="text-outline">64 Partitions</span>
<span class="text-tertiary font-bold">4.2GB/s Inflow</span>
</div>
<!-- Alert Annotation Callout -->
<div class="absolute -top-14 -right-16 z-30 w-64 p-2 rounded bg-surface-container-highest shadow-2xl text-left pointer-events-auto">
<div class="flex items-start gap-1.5">
<span class="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">warning</span>
<div>
<p class="font-label-mono-bold text-label-mono-bold text-tertiary uppercase">Partition Skew Detected</p>
<p class="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight">Key hash ring using creator_id caused 42% write concentration on partition 0. Spike p99 to 142ms.</p>
</div>
</div>
</div>
</div>
<!-- Node 7: Distributed Transcoder Workers Fleet -->
<div class="absolute left-[560px] top-[500px] w-64 p-3 rounded bg-surface-container-high/90 backdrop-blur-xl shadow-xl hover:shadow-[0_0_20px_rgba(78,222,163,0.2)] transition-all cursor-pointer">
<div class="flex items-center justify-between mb-1">
<span class="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary">
<span class="material-symbols-outlined text-[16px]">smart_toy</span> GPU Worker Fleet
            </span>
<span class="px-1.5 py-0.5 rounded bg-secondary-container/20 text-secondary font-label-mono text-label-mono">Autoscaling</span>
</div>
<div class="font-headline-sm text-headline-sm text-on-surface">FFmpeg Transcoder Cluster</div>
<div class="font-label-mono text-label-mono text-outline mt-1">H.264 / AV1 / VP9 Adaptive Ladders</div>
<div class="mt-2 grid grid-cols-2 gap-1 pt-1 font-label-mono text-label-mono">
<div class="p-1.5 bg-surface-container rounded text-center">
<div class="text-outline">Active Workers</div>
<div class="text-secondary font-bold">420 Pods</div>
</div>
<div class="p-1.5 bg-surface-container rounded text-center">
<div class="text-outline">GPU VRAM Load</div>
<div class="text-tertiary font-bold">78.4%</div>
</div>
</div>
</div>
<!-- Node 8: S3 Distributed Object Storage -->
<div class="absolute left-28 top-[500px] w-52 p-3 rounded bg-surface-container-high/90 backdrop-blur-xl shadow-xl hover:shadow-[0_0_20px_rgba(192,193,255,0.2)] transition-all cursor-pointer">
<div class="flex items-center justify-between mb-1">
<span class="flex items-center gap-1.5 font-label-mono text-label-mono text-primary">
<span class="material-symbols-outlined text-[16px]">folder_special</span> Object Storage
            </span>
<span class="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div class="font-headline-sm text-headline-sm text-on-surface">AWS S3 Multi-Region</div>
<div class="font-label-mono text-label-mono text-outline mt-1">Lifecycle: Glacier Infrequent</div>
<div class="mt-2 pt-2 bg-surface-container/60 rounded px-2 py-1 flex items-center justify-between font-label-mono text-label-mono">
<span class="text-outline">Durability</span>
<span class="text-secondary font-bold">99.999999999%</span>
</div>
</div>
<!-- Node 9: CockroachDB Metadata Layer -->
<div class="absolute left-[780px] top-[640px] w-56 p-3 rounded bg-surface-container-high/90 backdrop-blur-xl shadow-xl hover:shadow-[0_0_20px_rgba(192,193,255,0.2)] transition-all cursor-pointer">
<div class="flex items-center justify-between mb-1">
<span class="flex items-center gap-1.5 font-label-mono text-label-mono text-primary">
<span class="material-symbols-outlined text-[16px]">account_tree</span> Consensus DB
            </span>
<span class="px-1.5 py-0.5 rounded bg-primary-container/20 text-primary font-label-mono text-label-mono">Raft Leader</span>
</div>
<div class="font-headline-sm text-headline-sm text-on-surface">CockroachDB Cluster</div>
<div class="font-label-mono text-label-mono text-outline mt-1">Multi-Region Strict Serializability</div>
<div class="mt-2 pt-2 bg-surface-container/60 rounded px-2 py-1 flex items-center justify-between font-label-mono text-label-mono">
<span class="text-outline">Quorum Status</span>
<span class="text-secondary font-bold">5/5 Replicas OK</span>
</div>
</div>
<!-- Node 10: Hot Redis Cache -->
<div class="absolute left-40 top-96 w-48 p-3 rounded bg-surface-container-high/90 backdrop-blur-xl shadow-xl hover:shadow-[0_0_20px_rgba(192,193,255,0.2)] transition-all cursor-pointer">
<div class="flex items-center justify-between mb-1">
<span class="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary">
<span class="material-symbols-outlined text-[16px]">bolt</span> In-Memory Cache
            </span>
<span class="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div class="font-headline-sm text-headline-sm text-on-surface">Redis Cluster</div>
<div class="font-label-mono text-label-mono text-outline mt-1">Session &amp; Chunk Manifests</div>
<div class="mt-2 pt-2 bg-surface-container/60 rounded px-2 py-1 flex items-center justify-between font-label-mono text-label-mono">
<span class="text-outline">Hit Rate</span>
<span class="text-secondary font-bold">96.2%</span>
</div>
</div>
</div>
</section>
<!-- Right-Hand AI System Evaluator & Live Telemetry Inspector -->
<section class="w-full xl:w-96 bg-surface-container-lowest flex flex-col shrink-0 p-space-sm space-y-space-md">
<!-- Architecture Rubric Score Banner -->
<div class="p-space-sm rounded bg-surface-container space-y-space-xs shadow-md">
<div class="flex items-center justify-between">
<span class="font-label-mono text-label-mono text-outline uppercase tracking-wider">Evaluation Scorecard</span>
<span class="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary font-label-mono-bold text-label-mono-bold">L6 STAFF PASS</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-display-hero-mobile text-display-hero-mobile text-on-surface font-bold leading-none">89</span>
<span class="font-headline-sm text-headline-sm text-outline">/ 100</span>
<span class="text-secondary font-label-mono text-label-mono ml-auto flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">trending_up</span> Top 4% SWEs
          </span>
</div>
<!-- Breakdown Pillars -->
<div class="space-y-2 pt-1">
<div>
<div class="flex justify-between font-label-mono text-label-mono mb-1">
<span class="text-on-surface-variant">Scalability &amp; Throughput</span>
<span class="text-secondary font-bold">94%</span>
</div>
<div class="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div class="bg-secondary h-full rounded-full" style="width: 94%"></div>
</div>
</div>
<div>
<div class="flex justify-between font-label-mono text-label-mono mb-1">
<span class="text-on-surface-variant">Fault Tolerance &amp; CAP</span>
<span class="text-secondary font-bold">86%</span>
</div>
<div class="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div class="bg-secondary h-full rounded-full" style="width: 86%"></div>
</div>
</div>
<div>
<div class="flex justify-between font-label-mono text-label-mono mb-1">
<span class="text-on-surface-variant">Cost &amp; Hardware Efficiency</span>
<span class="text-tertiary font-bold">78%</span>
</div>
<div class="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div class="bg-tertiary h-full rounded-full" style="width: 78%"></div>
</div>
</div>
</div>
</div>
<!-- Real-Time Traffic Simulator Engine Controls -->
<div class="p-space-sm rounded bg-surface-container-low space-y-space-sm">
<div class="flex items-center justify-between">
<span class="font-label-mono text-label-mono text-outline uppercase tracking-wider flex items-center gap-1.5">
<span class="material-symbols-outlined text-secondary text-[16px]">tune</span> Traffic Simulator
          </span>
<span class="font-label-mono text-label-mono text-secondary">ACTIVE</span>
</div>
<div class="space-y-3">
<!-- RPS Slider -->
<div>
<div class="flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant mb-1">
<span>Simulated Ingestion Load:</span>
<span class="text-primary font-bold" id="rps-readout">120,000 req/s</span>
</div>
<input class="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" id="rps-slider" max="500000" min="10000" step="5000" type="range" value="120000"/>
<div class="flex justify-between font-label-mono text-[10px] text-outline mt-0.5">
<span>10k</span>
<span>250k</span>
<span>500k RPS</span>
</div>
</div>
<!-- Chaos Injection Slider -->
<div>
<div class="flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant mb-1">
<span>Simulated Packet Loss:</span>
<span class="text-tertiary font-bold" id="loss-readout">0.10%</span>
</div>
<input class="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-tertiary" id="loss-slider" max="5" min="0" step="0.05" type="range" value="0.1"/>
</div>
<!-- Telemetry Sparkline SVG Visualizer -->
<div class="p-2 rounded bg-surface-container-lowest space-y-1">
<div class="flex justify-between font-label-mono text-label-mono">
<span class="text-outline">p99 Latency Profile</span>
<span class="text-secondary font-bold">64.2ms avg</span>
</div>
<svg class="w-full h-10 overflow-visible" viewbox="0 0 280 40">
<path d="M 0 32 Q 25 30, 50 31 T 100 28 T 150 34 T 200 12 T 230 29 T 280 26" fill="none" stroke="#4edea3" stroke-width="2"></path>
<!-- Hot partition bump marker -->
<circle cx="200" cy="12" fill="#ffb95f" r="3.5"></circle>
<text class="font-label-mono text-[9px]" fill="#ffb95f" x="180" y="8">142ms Spike</text>
</svg>
</div>
</div>
</div>
<!-- Cipher AI Architecture Bar-Raiser Feedback Panel -->
<div class="p-space-sm rounded bg-surface-container flex-1 flex flex-col justify-between space-y-space-sm shadow-md">
<div class="space-y-space-xs">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">psychology</span>
<span class="font-headline-sm text-headline-sm text-on-surface">Cipher AI Bar-Raiser</span>
</div>
<div class="p-2.5 rounded bg-surface-container-high text-body-sm font-body-sm text-on-surface-variant leading-relaxed space-y-2">
<p>
<strong class="text-on-surface font-semibold">Staff Evaluation Note:</strong> 
              Excellent decoupled buffering via Kafka. However, passing chunks through Envoy creates an unnecessary network hop for heavy payloads.
            </p>
<div class="p-2 rounded bg-surface-container-lowest text-[12px] space-y-1">
<div class="text-secondary font-semibold flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">lightbulb</span> Recommended Architectural Fix
              </div>
<p class="text-outline text-[11px]">
                Issue presigned multi-part S3 upload URLs directly to client nodes to eliminate proxy CPU saturation. Introduce a Dead Letter Queue (DLQ) for corrupt chunk retries.
              </p>
</div>
</div>
</div>
<!-- AI Assistant One-Click Action & Input -->
<div class="space-y-2 pt-2">
<button class="w-full py-2.5 px-3 rounded bg-primary-container text-on-primary-container font-body-sm text-body-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-sm" id="ai-fix-btn">
<span class="material-symbols-outlined text-[18px]">auto_fix_high</span>
<span>Refactor Partition Key with AI</span>
</button>
<div class="relative flex items-center">
<input class="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Ask Cipher AI: e.g. How to handle 10x traffic surge?" type="text"/>
<button class="absolute right-2 text-primary hover:text-primary-fixed">
<span class="material-symbols-outlined text-[18px]">arrow_upward</span>
</button>
</div>
</div>
</div>
</section>
</div>
</div>
<script>
  (function() {
    const rpsSlider = document.getElementById('rps-slider');
    const rpsReadout = document.getElementById('rps-readout');
    const lossSlider = document.getElementById('loss-slider');
    const lossReadout = document.getElementById('loss-readout');
    const faultBtn = document.getElementById('fault-injection-btn');
    const benchmarkBtn = document.getElementById('run-benchmark-btn');
    const aiFixBtn = document.getElementById('ai-fix-btn');

    if (rpsSlider && rpsReadout) {
      rpsSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        rpsReadout.textContent = val.toLocaleString() + ' req/s';
      });
    }

    if (lossSlider && lossReadout) {
      lossSlider.addEventListener('input', (e) => {
        lossReadout.textContent = parseFloat(e.target.value).toFixed(2) + '%';
      });
    }

    if (faultBtn) {
      faultBtn.addEventListener('click', () => {
        faultBtn.classList.add('bg-tertiary', 'text-on-tertiary');
        faultBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">report_problem</span> Partition Injected!';
        setTimeout(() => {
          faultBtn.classList.remove('bg-tertiary', 'text-on-tertiary');
          faultBtn.innerHTML = '<span class="material-symbols-outlined text-[18px] text-tertiary">bolt</span><span>Inject Fault</span>';
        }, 2500);
      });
    }

    if (benchmarkBtn) {
      benchmarkBtn.addEventListener('click', () => {
        benchmarkBtn.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">refresh</span> Benchmarking...';
        setTimeout(() => {
          benchmarkBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">check_circle</span> Target p99 Met: 41ms';
          setTimeout(() => {
            benchmarkBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">play_arrow</span> Run Traffic Benchmark';
          }, 2500);
        }, 1200);
      });
    }

    if (aiFixBtn) {
      aiFixBtn.addEventListener('click', () => {
        aiFixBtn.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">sync</span> Applying Salted Chunk Keys...';
        setTimeout(() => {
          aiFixBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">verified</span> Hotspot Resolved (Score -> 96/100)';
          aiFixBtn.classList.add('bg-secondary', 'text-on-secondary');
        }, 1500);
      });
    }
  })();
</script></main></div>` }} 
    />
  );
}
