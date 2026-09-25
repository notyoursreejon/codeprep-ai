export default function Page() {
  return (
    <div className="bg-surface-container-lowest font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen" dangerouslySetInnerHTML={{ __html: `<aside class="fixed left-0 top-0 bottom-0 w-64 bg-surface-container-low/90 backdrop-blur-xl z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div class="flex flex-col"><div class="h-14 px-gutter flex items-center justify-between"><a href="/dashboard" class="flex items-center gap-space-sm"><img alt="CodePrep AI Logo" class="h-8 w-auto object-contain" src="/logo.svg"/><span class="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">CodePrep AI</span></a><span class="font-label-caps text-label-caps px-space-xs py-0.5 rounded-lg bg-secondary-container text-on-secondary-container uppercase">PRO</span></div><div class="px-gutter py-space-sm"><nav class="flex flex-col gap-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-inner"><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="dashboard" href="/dashboard"><span class="material-symbols-outlined text-[18px]">grid_view</span><span class="font-body-md text-body-md">Dashboard</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="ide-and-ai-solver" href="/ide-and-ai-solver"><span class="material-symbols-outlined text-[18px]">terminal</span><span class="font-body-md text-body-md">IDE &amp; AI Solver</span></a><a aria-current="page" class="flex items-center gap-space-md px-space-md py-space-sm transition-colors bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-inner" data-path="system-design" href="/system-design"><span class="material-symbols-outlined text-[18px]">hub</span><span class="font-body-md text-body-md">System Design</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="behavioral-star" href="/star-method"><span class="material-symbols-outlined text-[18px]">psychology</span><span class="font-body-md text-body-md">Behavioral STAR</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="resume-ats" href="/resume"><span class="material-symbols-outlined text-[18px]">description</span><span class="font-body-md text-body-md">Resume ATS</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="cs-fundamentals" href="/fundamentals"><span class="material-symbols-outlined text-[18px]">menu_book</span><span class="font-body-md text-body-md">CS Fundamentals</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="/settings"><span class="material-symbols-outlined text-[18px]">settings</span><span class="font-body-md text-body-md">Settings</span></a></nav></div></div><div class="p-gutter flex flex-col gap-space-sm"><div class="flex items-center justify-between px-space-md py-space-sm rounded-lg bg-surface-container"><div class="flex items-center gap-space-xs"><span class="text-[14px]">🔥</span><span class="font-code-sm text-code-sm text-on-surface">14-day streak</span></div><span class="font-label-caps text-label-caps text-tertiary">Active</span></div><div class="flex items-center justify-between px-space-md py-space-sm rounded-lg bg-surface-container-lowest"><div class="flex items-center gap-space-xs"><span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span><span class="font-code-sm text-code-sm text-on-surface-variant">AI Engine v4.2</span></div><span class="font-label-caps text-label-caps text-on-surface-variant">Online</span></div></div></aside><div class="pl-64 flex flex-col min-h-screen"><header class="fixed top-0 left-64 right-0 h-14 bg-surface-container-lowest/80 backdrop-blur-xl z-40 flex items-center justify-between px-gutter-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div class="flex items-center gap-space-sm"><span class="font-code-sm text-code-sm text-on-surface-variant">Workspace</span><span class="text-outline text-xs">/</span><span class="font-code-sm text-code-sm text-on-surface-variant">LeetCode Hard</span><span class="text-outline text-xs">/</span><span class="font-code-sm text-code-sm text-on-surface font-medium">LRU Cache</span></div><div class="flex items-center gap-space-md"><button class="flex items-center justify-between w-80 px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors shadow-inner" type="button"><div class="flex items-center gap-space-sm"><span class="material-symbols-outlined text-[16px]">search</span><span class="font-body-sm text-body-sm">Search problems, algorithms...</span></div><kbd class="font-code-sm text-code-sm px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">⌘K</kbd></button><div class="flex items-center gap-space-xs"><div class="hidden xl:flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container"><span class="material-symbols-outlined text-primary text-[16px]">token</span><span class="font-code-sm text-code-sm text-on-surface-variant">94,200 / 100k</span></div><button class="p-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button"><span class="material-symbols-outlined text-[18px]">volume_up</span></button><button class="relative p-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button"><span class="material-symbols-outlined text-[18px]">notifications</span><span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-error"></span></button></div><div class="flex items-center gap-space-sm pl-space-sm"><img alt="Profile" class="w-8 h-8 rounded-full object-cover" src="/avatar.png"/><div class="hidden md:flex flex-col"><span class="font-body-sm text-body-sm font-semibold text-on-surface leading-tight">Alex Chen</span><span class="font-label-caps text-label-caps text-primary leading-tight">Staff Tier</span></div></div></div></header><main class="w-full pt-14 flex-1 bg-surface-container-lowest"><div class="flex flex-col w-full">
<!-- Top Architecture Context Bar -->
<div class="w-full bg-surface-container-low px-gutter-lg py-space-sm flex flex-wrap items-center justify-between gap-space-md shadow-sm">
<div class="flex items-center gap-space-md">
<div class="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-inner">
<span class="material-symbols-outlined text-[22px]">hub</span>
</div>
<div class="flex flex-col">
<div class="flex items-center gap-space-xs">
<span class="font-label-caps text-label-caps text-tertiary uppercase">Staff / Principal Simulation</span>
<span class="text-surface-variant text-[10px]">•</span>
<span class="font-code-sm text-code-sm text-on-surface-variant">Round 03 of 05</span>
</div>
<div class="flex items-center gap-space-sm">
<h1 class="font-headline-sm text-headline-sm font-semibold text-on-surface">Design a Globally Distributed Rate Limiter</h1>
<span class="font-code-sm text-code-sm px-2 py-0.5 rounded-lg bg-surface-container-highest text-primary">99.999% SLA</span>
</div>
</div>
</div>
<!-- Live Telemetry & Session Timers -->
<div class="flex items-center gap-space-lg">
<div class="hidden xl:flex items-center gap-space-md bg-surface-container px-space-md py-space-xs rounded-lg shadow-inner">
<div class="flex flex-col">
<span class="font-label-caps text-label-caps text-on-surface-variant">Throughput Load</span>
<span class="font-code-md text-code-md font-semibold text-tertiary">10.2M RPS</span>
</div>
<div class="w-px h-6 bg-surface-variant"></div>
<div class="flex flex-col">
<span class="font-label-caps text-label-caps text-on-surface-variant">P99 Latency Target</span>
<span class="font-code-md text-code-md font-semibold text-on-surface">&lt; 5.0ms</span>
</div>
</div>
<div class="flex items-center gap-space-sm bg-surface-container-high px-space-md py-space-xs rounded-xl shadow-md">
<span class="material-symbols-outlined text-error text-[18px] animate-pulse">timer</span>
<div class="flex flex-col">
<span class="font-label-caps text-label-caps text-on-surface-variant">Elapsed Session</span>
<span class="font-code-md text-code-md font-medium text-on-surface tracking-wider">24:15 <span class="text-outline text-xs">/ 45:00</span></span>
</div>
</div>
<div class="flex items-center gap-space-xs bg-tertiary-container/30 px-space-sm py-1.5 rounded-lg">
<span class="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
<span class="font-code-sm text-code-sm text-tertiary font-medium">AI Evaluator Syncing</span>
</div>
<button class="px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-semibold hover:opacity-90 transition-opacity shadow-sm flex items-center gap-space-xs" type="button">
<span class="material-symbols-outlined text-[16px]">publish</span>
<span>Conclude Session</span>
</button>
</div>
</div>
<!-- Primary Workspace: 3-Column Glassmorphic Split-Pane Layout -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter p-gutter-lg w-full">
<!-- LEFT PANE: Architecture Definition & Text-based Modeling (4 Cols) -->
<div class="lg:col-span-4 flex flex-col gap-space-md min-w-0">
<!-- Architectural Tabs -->
<div class="bg-surface-container-low rounded-xl p-space-xs flex items-center justify-between shadow-sm">
<button class="flex-1 py-space-xs px-space-sm rounded-lg bg-surface-container-highest text-on-surface font-code-sm text-code-sm font-semibold text-center transition-colors" type="button">
          Reqs &amp; Math
        </button>
<button class="flex-1 py-space-xs px-space-sm rounded-lg text-on-surface-variant hover:text-on-surface font-code-sm text-code-sm text-center transition-colors" type="button">
          Topology DSL
        </button>
<button class="flex-1 py-space-xs px-space-sm rounded-lg text-on-surface-variant hover:text-on-surface font-code-sm text-code-sm text-center transition-colors" type="button">
          Schema
        </button>
<button class="flex-1 py-space-xs px-space-sm rounded-lg text-on-surface-variant hover:text-on-surface font-code-sm text-code-sm text-center transition-colors" type="button">
          Failure Modes
        </button>
</div>
<!-- Capacity & Scale Estimations Bento -->
<div class="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col gap-space-md">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<span class="material-symbols-outlined text-primary text-[18px]">calculate</span>
<span class="font-headline-sm text-headline-sm font-semibold text-on-surface">System Sizing &amp; Quant</span>
</div>
<span class="font-label-caps text-label-caps text-tertiary bg-surface-container-highest px-2 py-0.5 rounded">Validated O(1)</span>
</div>
<div class="grid grid-cols-3 gap-space-sm">
<div class="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
<span class="font-label-caps text-label-caps text-on-surface-variant">Peak QPS</span>
<span class="font-code-md text-code-md font-bold text-on-surface mt-1">10.0M</span>
<span class="font-code-sm text-code-sm text-tertiary text-[10px] mt-0.5">+40% Spike Headroom</span>
</div>
<div class="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
<span class="font-label-caps text-label-caps text-on-surface-variant">Mem State</span>
<span class="font-code-md text-code-md font-bold text-primary mt-1">2.4 TB</span>
<span class="font-code-sm text-code-sm text-on-surface-variant text-[10px] mt-0.5">60B/key * 40M active</span>
</div>
<div class="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
<span class="font-label-caps text-label-caps text-on-surface-variant">Sync Bandwidth</span>
<span class="font-code-md text-code-md font-bold text-secondary mt-1">3.2 Gbps</span>
<span class="font-code-sm text-code-sm text-on-surface-variant text-[10px] mt-0.5">Inter-DC Async Batch</span>
</div>
</div>
<!-- Inline Math Proof Card -->
<div class="bg-surface-container-lowest p-space-md rounded-lg font-code-sm text-code-sm text-on-surface-variant leading-relaxed">
<div class="text-tertiary font-semibold mb-1">// Mathematical Upper Bound Calculation</div>
<p class="text-on-surface">10,000,000 requests/sec across 5 global geos = 2,000,000 rps/region.</p>
<p class="mt-1">Assuming Redis throughput per shard = 80,000 ops/sec with Lua batching.</p>
<p class="mt-1 text-primary">Required Shards = 2,000,000 / 80,000 = <span class="font-bold text-tertiary">25 Redis Master Shards per Region</span> + 25 Read Replicas across 3 Availability Zones.</p>
</div>
</div>
<!-- Algorithm Trade-Off Matrix -->
<div class="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col gap-space-sm">
<div class="flex items-center justify-between">
<span class="font-headline-sm text-headline-sm font-semibold text-on-surface">Rate Limit Algorithm Trade-Offs</span>
<span class="font-code-sm text-code-sm text-on-surface-variant">Matrix v2.1</span>
</div>
<div class="space-y-space-xs mt-1">
<!-- Token Bucket (Selected) -->
<div class="p-space-sm bg-surface-container-high rounded-lg flex flex-col gap-1 shadow-sm">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<span class="w-2 h-2 rounded-full bg-tertiary"></span>
<span class="font-code-sm text-code-sm font-bold text-on-surface">Token Bucket (Engine Default)</span>
</div>
<span class="font-label-caps text-label-caps text-tertiary bg-surface-container px-1.5 py-0.5 rounded">Selected</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">Burst-friendly, memory efficient (<span class="font-code-sm text-code-sm text-primary">16 bytes state</span>: tokens + last_timestamp). Evaluated in Redis via atomic Lua script.</p>
</div>
<!-- Sliding Window Counter -->
<div class="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1 opacity-80 hover:opacity-100 transition-opacity">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<span class="w-2 h-2 rounded-full bg-outline"></span>
<span class="font-code-sm text-code-sm font-medium text-on-surface">Sliding Window Counter</span>
</div>
<span class="font-label-caps text-label-caps text-on-surface-variant">High Precision</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">Smoothest traffic curve, but higher Redis memory consumption (<span class="font-code-sm text-code-sm text-error">48+ bytes</span>) during burst sync across global nodes.</p>
</div>
<!-- Leaky Bucket -->
<div class="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1 opacity-80 hover:opacity-100 transition-opacity">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<span class="w-2 h-2 rounded-full bg-outline"></span>
<span class="font-code-sm text-code-sm font-medium text-on-surface">Leaky Bucket</span>
</div>
<span class="font-label-caps text-label-caps text-on-surface-variant">Strict Constant Rate</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">Drops burst traffic outright; sub-optimal for user-facing bursty API workloads.</p>
</div>
</div>
</div>
<!-- Architectural DSL Blueprint Code Editor Snippet -->
<div class="bg-surface-container-lowest rounded-xl p-space-md shadow-inner flex flex-col gap-space-xs">
<div class="flex items-center justify-between text-on-surface-variant">
<div class="flex items-center gap-space-xs font-code-sm text-code-sm">
<span class="material-symbols-outlined text-[14px]">code</span>
<span>limiter-topology.hcl</span>
</div>
<span class="font-label-caps text-label-caps text-primary">SYNTAX VALID</span>
</div>
<pre class="font-code-sm text-code-sm text-on-surface leading-5 overflow-x-auto p-space-xs bg-surface-container/50 rounded-lg"><code><span class="text-secondary">node</span> <span class="text-tertiary">"envoy_edge"</span> {
  routing      = <span class="text-primary">"anycast_bgp"</span>
  filter_chain = [<span class="text-tertiary">"tls_termination"</span>, <span class="text-tertiary">"token_bucket_eval"</span>]
  timeout_ms   = <span class="text-tertiary">3.5</span>
  on_timeout   = <span class="text-error">"FAIL_OPEN"</span> <span class="text-surface-variant">// SLA Preservation</span>
}
<span class="text-secondary">cluster</span> <span class="text-tertiary">"redis_tier"</span> {
  topology     = <span class="text-primary">"active_active_crdt"</span>
  quorum_sync  = <span class="text-secondary">false</span>
  fallback_db  = <span class="text-primary">"dynamodb_global"</span>
}</code></pre>
</div>
</div>
<!-- CENTER PANE: Visual Topology Diagram Canvas (5 Cols) -->
<div class="lg:col-span-5 flex flex-col gap-space-md">
<!-- Interactive Topology Canvas -->
<div class="bg-surface-container rounded-xl p-space-md shadow-xl flex flex-col h-full min-h-[680px] relative overflow-hidden">
<!-- Canvas Toolbar -->
<div class="flex items-center justify-between z-10">
<div class="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded-lg">
<span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span class="font-code-sm text-code-sm font-semibold text-on-surface">Topology Simulator: Active</span>
</div>
<div class="flex items-center gap-space-xs">
<button class="p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface" type="button">
<span class="material-symbols-outlined text-[16px]">zoom_in</span>
</button>
<button class="p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface" type="button">
<span class="material-symbols-outlined text-[16px]">zoom_out</span>
</button>
<button class="p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface" type="button">
<span class="material-symbols-outlined text-[16px]">refresh</span>
</button>
<button class="px-space-sm py-1 rounded-lg bg-surface-container-highest text-primary font-code-sm text-code-sm flex items-center gap-1" type="button">
<span class="material-symbols-outlined text-[14px]">play_arrow</span> Run Chaos Test
            </button>
</div>
</div>
<!-- Ambient Visual Background Grid for Canvas -->
<div class="absolute inset-0 opacity-15 pointer-events-none" style="background-image: radial-gradient(circle at 1px 1px, #c0c1ff 1px, transparent 0); background-size: 24px 24px;"></div>
<!-- System Architecture Graphic SVG & Nodes -->
<div class="relative flex-1 flex flex-col justify-between py-space-md z-10">
<!-- Node Tier 1: Clients & CDN Ingress -->
<div class="flex items-center justify-around gap-space-sm">
<div class="bg-surface-container-high p-space-sm rounded-xl shadow-lg flex flex-col items-center w-36 text-center">
<div class="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary mb-1">
<span class="material-symbols-outlined text-[18px]">devices</span>
</div>
<span class="font-code-sm text-code-sm font-semibold text-on-surface">Client Edge</span>
<span class="font-label-caps text-label-caps text-on-surface-variant">Web / Mobile / IoT</span>
<span class="mt-1 font-code-sm text-code-sm text-tertiary">10.2M RPS</span>
</div>
<span class="material-symbols-outlined text-outline text-[20px] animate-pulse">arrow_forward</span>
<div class="bg-surface-container-high p-space-sm rounded-xl shadow-lg flex flex-col items-center w-44 text-center">
<div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-1">
<span class="material-symbols-outlined text-[18px]">cloud</span>
</div>
<span class="font-code-sm text-code-sm font-semibold text-on-surface">Cloudflare Anycast</span>
<span class="font-label-caps text-label-caps text-secondary">BGP Geo-DNS Tier</span>
<div class="flex items-center gap-1 mt-1 text-[11px] font-code-sm text-on-surface-variant">
<span class="text-tertiary">0.8ms</span> | <span>TLS 1.3 Term</span>
</div>
</div>
</div>
<!-- SVG Flow Connectors (Tier 1 -> Tier 2) -->
<div class="h-10 w-full flex justify-center items-center">
<svg class="w-full h-full" fill="none" viewbox="0 0 400 40">
<path class="opacity-70 animate-pulse" d="M 200 0 L 200 40" stroke="#8083ff" stroke-dasharray="4 4" stroke-width="2"></path>
<circle cx="200" cy="20" fill="#4edea3" r="3"></circle>
</svg>
</div>
<!-- Node Tier 2: Envoy API Gateway + Local Token Filter -->
<div class="flex justify-center">
<div class="bg-surface-container-highest/90 p-space-md rounded-2xl shadow-xl w-80 flex flex-col gap-space-xs">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<div class="p-1 rounded bg-primary-container text-on-primary-container">
<span class="material-symbols-outlined text-[16px]">security</span>
</div>
<span class="font-headline-sm text-headline-sm font-semibold text-on-surface">Envoy Edge Proxy</span>
</div>
<span class="font-code-sm text-code-sm px-1.5 py-0.5 rounded bg-surface-container-low text-tertiary">Healthy</span>
</div>
<div class="font-code-sm text-code-sm text-on-surface-variant flex justify-between">
<span>Distributed Filter Pipeline</span>
<span class="text-primary font-semibold">P99: 1.1ms</span>
</div>
<div class="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-1">
<div class="bg-tertiary h-full w-[68%]"></div>
</div>
<div class="flex justify-between font-label-caps text-label-caps text-on-surface-variant mt-0.5">
<span>Memory Cache: 88%</span>
<span>Fail-Open Enabled</span>
</div>
</div>
</div>
<!-- SVG Flow Connectors (Tier 2 -> Tier 3 Dual Branch) -->
<div class="h-12 w-full flex justify-center items-center">
<svg class="w-full h-full" fill="none" viewbox="0 0 400 50">
<path class="opacity-60" d="M 200 0 L 120 50" stroke="#8083ff" stroke-dasharray="3 3" stroke-width="2"></path>
<path class="opacity-60" d="M 200 0 L 280 50" stroke="#8083ff" stroke-dasharray="3 3" stroke-width="2"></path>
<circle cx="120" cy="30" fill="#c0c1ff" r="2.5"></circle>
<circle cx="280" cy="30" fill="#4edea3" r="2.5"></circle>
</svg>
</div>
<!-- Node Tier 3: Redis Multi-Region Cluster & Kafka Async Log -->
<div class="grid grid-cols-2 gap-space-md">
<!-- Sharded Redis Cluster -->
<div class="bg-surface-container-high p-space-sm rounded-xl shadow-md flex flex-col gap-1">
<div class="flex items-center justify-between">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-primary text-[16px]">storage</span>
<span class="font-code-sm text-code-sm font-bold text-on-surface">Redis Cluster</span>
</div>
<span class="font-label-caps text-label-caps text-tertiary bg-surface-container px-1 py-0.5 rounded">Multi-AZ</span>
</div>
<span class="font-label-caps text-label-caps text-on-surface-variant">Active-Active CRDT (75 Shards)</span>
<div class="mt-1 font-code-sm text-code-sm flex flex-col gap-0.5 text-on-surface">
<div class="flex justify-between">
<span class="text-on-surface-variant">P99 Read:</span>
<span class="text-tertiary">0.9ms</span>
</div>
<div class="flex justify-between">
<span class="text-on-surface-variant">Lua Script:</span>
<span class="text-primary font-mono">token_eval.lua</span>
</div>
</div>
</div>
<!-- Kafka Audit Log Stream -->
<div class="bg-surface-container-high p-space-sm rounded-xl shadow-md flex flex-col gap-1">
<div class="flex items-center justify-between">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-secondary text-[16px]">stream</span>
<span class="font-code-sm text-code-sm font-bold text-on-surface">Kafka Pipeline</span>
</div>
<span class="font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-1 py-0.5 rounded">Partition: 64</span>
</div>
<span class="font-label-caps text-label-caps text-on-surface-variant">Async Decision Audit Events</span>
<div class="mt-1 font-code-sm text-code-sm flex flex-col gap-0.5 text-on-surface">
<div class="flex justify-between">
<span class="text-on-surface-variant">Lag:</span>
<span class="text-tertiary">14ms</span>
</div>
<div class="flex justify-between">
<span class="text-on-surface-variant">Sink:</span>
<span class="text-on-surface">TimescaleDB</span>
</div>
</div>
</div>
</div>
<!-- Node Tier 4: DynamoDB Persistent Storage Fallback -->
<div class="mt-space-sm flex justify-center">
<div class="bg-surface-container-low px-space-md py-space-xs rounded-xl flex items-center justify-between w-full shadow-inner">
<div class="flex items-center gap-space-sm">
<span class="material-symbols-outlined text-secondary text-[18px]">dns</span>
<div class="flex flex-col">
<span class="font-code-sm text-code-sm font-semibold text-on-surface">DynamoDB Global Tables</span>
<span class="font-label-caps text-label-caps text-on-surface-variant">Persistent Tier • Cold Token Recovery &amp; Long-term Tier quotas</span>
</div>
</div>
<span class="font-code-sm text-code-sm text-on-surface-variant">Replica Latency: 28ms</span>
</div>
</div>
</div>
<!-- Topology Live Metric Footer -->
<div class="pt-space-xs flex items-center justify-between text-on-surface-variant font-code-sm text-code-sm">
<div class="flex items-center gap-space-xs">
<span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>Global Topology Simulation Running</span>
</div>
<span class="font-label-caps text-label-caps text-primary">Zero Single-Point-Of-Failure</span>
</div>
</div>
</div>
<!-- RIGHT PANE: Dynamic Auto-Updating Grading Rubric & AI Staff Mentor (3 Cols) -->
<div class="lg:col-span-3 flex flex-col gap-space-md min-w-0">
<!-- Real-time AI Evaluation Rubric Card -->
<div class="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col gap-space-md">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<span class="material-symbols-outlined text-primary text-[18px]">analytics</span>
<span class="font-headline-sm text-headline-sm font-semibold text-on-surface">Staff Rubric Score</span>
</div>
<div class="flex items-baseline gap-1">
<span class="font-display-hero text-headline-lg font-bold text-tertiary">91</span>
<span class="font-code-sm text-code-sm text-on-surface-variant">/ 100</span>
</div>
</div>
<!-- Rubric Progress Metric Bars -->
<div class="space-y-space-sm">
<div>
<div class="flex justify-between font-code-sm text-code-sm mb-1">
<span class="text-on-surface">Scalability &amp; Throughput</span>
<span class="font-bold text-tertiary">95 / 100</span>
</div>
<div class="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div class="bg-tertiary h-full w-[95%]"></div>
</div>
<span class="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 block">Consistent hashing with 1024 virtual nodes mitigates hot keys.</span>
</div>
<div>
<div class="flex justify-between font-code-sm text-code-sm mb-1">
<span class="text-on-surface">High Availability &amp; SLAs</span>
<span class="font-bold text-primary">88 / 100</span>
</div>
<div class="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div class="bg-primary h-full w-[88%]"></div>
</div>
<span class="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 block">Fail-open edge strategy maintains 99.999% availability target.</span>
</div>
<div>
<div class="flex justify-between font-code-sm text-code-sm mb-1">
<span class="text-on-surface">Latency &amp; Bottlenecks</span>
<span class="font-bold text-tertiary">92 / 100</span>
</div>
<div class="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div class="bg-tertiary h-full w-[92%]"></div>
</div>
<span class="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 block">In-memory Lua evaluation guarantees P99 &lt; 2.2ms roundtrip.</span>
</div>
<div>
<div class="flex justify-between font-code-sm text-code-sm mb-1">
<span class="text-on-surface">Cost &amp; Operational Model</span>
<span class="font-bold text-secondary">84 / 100</span>
</div>
<div class="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div class="bg-secondary h-full w-[84%]"></div>
</div>
<span class="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 block">Cross-region data transfer fees optimized via batched sync.</span>
</div>
</div>
</div>
<!-- Live AI Interjection Card (Staff Interviewer Pushback) -->
<div class="bg-surface-container-high rounded-xl p-space-md shadow-xl flex flex-col gap-space-sm relative overflow-hidden">
<div class="absolute top-0 left-0 bottom-0 w-1 bg-primary"></div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<img class="w-7 h-7 rounded-full object-cover shadow-sm" data-alt="A futuristic, hyper-realistic minimalist holographic AI interviewer avatar rendered in dark slate and vibrant indigo light lines, sleek tech studio background, 8k resolution, cinematic lighting" src="/avatar.png"/>
<span class="font-code-sm text-code-sm font-bold text-primary">Staff Principal Interjection</span>
</div>
<span class="font-label-caps text-label-caps text-on-surface-variant">Live</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface leading-relaxed">
          “What happens during a split-brain network partition between <span class="font-code-sm text-code-sm text-tertiary">US-East</span> and <span class="font-code-sm text-code-sm text-secondary">EU-West</span>? How do you prevent quota over-consumption without degrading the P99 SLA?”
        </p>
<div class="bg-surface-container-lowest p-space-xs rounded-lg flex items-center justify-between text-on-surface-variant font-code-sm text-code-sm">
<span>Target Topic: CAP Theorem &amp; CRDTs</span>
<span class="text-tertiary font-medium">Difficulty: Hard</span>
</div>
</div>
<!-- Candidate Real-Time Interactive Response Box -->
<div class="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col gap-space-sm">
<div class="flex items-center justify-between">
<span class="font-label-caps text-label-caps text-on-surface-variant">Defend Architecture Choice</span>
<div class="flex items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]">mic</span>
<span class="font-code-sm text-code-sm">Voice enabled</span>
</div>
</div>
<div class="relative w-full">
<textarea class="w-full bg-surface-container-lowest rounded-lg p-space-sm font-code-sm text-code-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary resize-none shadow-inner" placeholder="We trade temporary consistency for availability (AP system). Under partition, we allocate fractional local quotas (e.g., 50% max burst per region) using Conflict-free Replicated Data Types (PN-Counters)..." rows="4"></textarea>
</div>
<div class="flex items-center justify-between gap-space-sm">
<button class="p-space-xs rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors" title="Record Audio Defense" type="button">
<span class="material-symbols-outlined text-[18px]">mic_none</span>
</button>
<button class="flex-1 py-space-xs px-space-md rounded-lg bg-primary text-on-primary font-headline-sm text-body-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-space-xs shadow-md" type="button">
<span>Submit to Interviewer</span>
<span class="material-symbols-outlined text-[16px]">send</span>
</button>
</div>
</div>
<!-- Quick Concept Cheatsheet / Guardrails -->
<div class="bg-surface-container-low p-space-sm rounded-xl flex items-center justify-between text-on-surface-variant font-code-sm text-code-sm">
<div class="flex items-center gap-space-xs">
<span class="material-symbols-outlined text-secondary text-[16px]">verified</span>
<span>CAP Assessment: AP Mode Validated</span>
</div>
<kbd class="bg-surface-container-highest px-1.5 py-0.5 rounded text-[10px] text-on-surface">⌘+Enter</kbd>
</div>
</div>
</div>
</div>
<script>
  // Dynamic interaction handles for the system design simulation
  document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea');
    if (textarea) {
      textarea.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
          e.preventDefault();
          const submitBtn = textarea.closest('div.bg-surface-container').querySelector('button.bg-primary');
          if (submitBtn) {
            submitBtn.click();
          }
        }
      });
    }
  });
</script></main></div><div class="fixed bottom-space-lg right-space-lg z-50 flex flex-col gap-space-sm pointer-events-none"><div class="pointer-events-auto flex items-center justify-between gap-space-lg p-space-md rounded-xl bg-surface-container/90 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]"><div class="flex items-center gap-space-md"><div class="p-space-xs rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center"><span class="material-symbols-outlined text-[18px]">check_circle</span></div><div class="flex flex-col"><span class="font-body-sm text-body-sm font-semibold text-on-surface">Optimal Solution Detected</span><span class="font-code-sm text-code-sm text-on-surface-variant">LRU Cache O(1) passed all test suites</span></div></div><button class="text-on-surface-variant hover:text-on-surface p-space-xs" type="button"><span class="material-symbols-outlined text-[16px]">close</span></button></div></div>` }} />
  );
}