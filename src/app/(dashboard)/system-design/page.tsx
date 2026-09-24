"use client";
export default function SystemDesignPage() {
  return (
    <>
      <div className="flex flex-col w-full">
{/* Top Architecture Context Bar */}
<div className="w-full bg-surface-container-low px-gutter-lg py-space-sm flex flex-wrap items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-inner">
<span className="material-symbols-outlined text-[22px]">hub</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-caps text-label-caps text-tertiary uppercase">Staff / Principal Simulation</span>
<span className="text-surface-variant text-[10px]">•</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Round 03 of 05</span>
</div>
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Design a Globally Distributed Rate Limiter</h1>
<span className="font-code-sm text-code-sm px-2 py-0.5 rounded-lg bg-surface-container-highest text-primary">99.999% SLA</span>
</div>
</div>
</div>
{/* Live Telemetry & Session Timers */}
<div className="flex items-center gap-space-lg">
<div className="hidden xl:flex items-center gap-space-md bg-surface-container px-space-md py-space-xs rounded-lg shadow-inner">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant">Throughput Load</span>
<span className="font-code-md text-code-md font-semibold text-tertiary">10.2M RPS</span>
</div>
<div className="w-px h-6 bg-surface-variant"></div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant">P99 Latency Target</span>
<span className="font-code-md text-code-md font-semibold text-on-surface">&lt; 5.0ms</span>
</div>
</div>
<div className="flex items-center gap-space-sm bg-surface-container-high px-space-md py-space-xs rounded-xl shadow-md">
<span className="material-symbols-outlined text-error text-[18px] animate-pulse">timer</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant">Elapsed Session</span>
<span className="font-code-md text-code-md font-medium text-on-surface tracking-wider">24:15 <span className="text-outline text-xs">/ 45:00</span></span>
</div>
</div>
<div className="flex items-center gap-space-xs bg-tertiary-container/30 px-space-sm py-1.5 rounded-lg">
<span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
<span className="font-code-sm text-code-sm text-tertiary font-medium">AI Evaluator Syncing</span>
</div>
<button className="px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-semibold hover:opacity-90 transition-opacity shadow-sm flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[16px]">publish</span>
<span>Conclude Session</span>
</button>
</div>
</div>
{/* Primary Workspace: 3-Column Glassmorphic Split-Pane Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter p-gutter-lg w-full">
{/* LEFT PANE: Architecture Definition & Text-based Modeling (4 Cols) */}
<div className="lg:col-span-4 flex flex-col gap-space-md min-w-0">
{/* Architectural Tabs */}
<div className="bg-surface-container-low rounded-xl p-space-xs flex items-center justify-between shadow-sm">
<button className="flex-1 py-space-xs px-space-sm rounded-lg bg-surface-container-highest text-on-surface font-code-sm text-code-sm font-semibold text-center transition-colors" type="button">
          Reqs &amp; Math
        </button>
<button className="flex-1 py-space-xs px-space-sm rounded-lg text-on-surface-variant hover:text-on-surface font-code-sm text-code-sm text-center transition-colors" type="button">
          Topology DSL
        </button>
<button className="flex-1 py-space-xs px-space-sm rounded-lg text-on-surface-variant hover:text-on-surface font-code-sm text-code-sm text-center transition-colors" type="button">
          Schema
        </button>
<button className="flex-1 py-space-xs px-space-sm rounded-lg text-on-surface-variant hover:text-on-surface font-code-sm text-code-sm text-center transition-colors" type="button">
          Failure Modes
        </button>
</div>
{/* Capacity & Scale Estimations Bento */}
<div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">calculate</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">System Sizing &amp; Quant</span>
</div>
<span className="font-label-caps text-label-caps text-tertiary bg-surface-container-highest px-2 py-0.5 rounded">Validated O(1)</span>
</div>
<div className="grid grid-cols-3 gap-space-sm">
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant">Peak QPS</span>
<span className="font-code-md text-code-md font-bold text-on-surface mt-1">10.0M</span>
<span className="font-code-sm text-code-sm text-tertiary text-[10px] mt-0.5">+40% Spike Headroom</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant">Mem State</span>
<span className="font-code-md text-code-md font-bold text-primary mt-1">2.4 TB</span>
<span className="font-code-sm text-code-sm text-on-surface-variant text-[10px] mt-0.5">60B/key * 40M active</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant">Sync Bandwidth</span>
<span className="font-code-md text-code-md font-bold text-secondary mt-1">3.2 Gbps</span>
<span className="font-code-sm text-code-sm text-on-surface-variant text-[10px] mt-0.5">Inter-DC Async Batch</span>
</div>
</div>
{/* Inline Math Proof Card */}
<div className="bg-surface-container-lowest p-space-md rounded-lg font-code-sm text-code-sm text-on-surface-variant leading-relaxed">
<div className="text-tertiary font-semibold mb-1">// Mathematical Upper Bound Calculation</div>
<p className="text-on-surface">10,000,000 requests/sec across 5 global geos = 2,000,000 rps/region.</p>
<p className="mt-1">Assuming Redis throughput per shard = 80,000 ops/sec with Lua batching.</p>
<p className="mt-1 text-primary">Required Shards = 2,000,000 / 80,000 = <span className="font-bold text-tertiary">25 Redis Master Shards per Region</span> + 25 Read Replicas across 3 Availability Zones.</p>
</div>
</div>
{/* Algorithm Trade-Off Matrix */}
<div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Rate Limit Algorithm Trade-Offs</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Matrix v2.1</span>
</div>
<div className="space-y-space-xs mt-1">
{/* Token Bucket (Selected) */}
<div className="p-space-sm bg-surface-container-high rounded-lg flex flex-col gap-1 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-code-sm text-code-sm font-bold text-on-surface">Token Bucket (Engine Default)</span>
</div>
<span className="font-label-caps text-label-caps text-tertiary bg-surface-container px-1.5 py-0.5 rounded">Selected</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Burst-friendly, memory efficient (<span className="font-code-sm text-code-sm text-primary">16 bytes state</span>: tokens + last_timestamp). Evaluated in Redis via atomic Lua script.</p>
</div>
{/* Sliding Window Counter */}
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1 opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-outline"></span>
<span className="font-code-sm text-code-sm font-medium text-on-surface">Sliding Window Counter</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant">High Precision</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Smoothest traffic curve, but higher Redis memory consumption (<span className="font-code-sm text-code-sm text-error">48+ bytes</span>) during burst sync across global nodes.</p>
</div>
{/* Leaky Bucket */}
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1 opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-outline"></span>
<span className="font-code-sm text-code-sm font-medium text-on-surface">Leaky Bucket</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant">Strict Constant Rate</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Drops burst traffic outright; sub-optimal for user-facing bursty API workloads.</p>
</div>
</div>
</div>
{/* Architectural DSL Blueprint Code Editor Snippet */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-inner flex flex-col gap-space-xs">
<div className="flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-space-xs font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[14px]">code</span>
<span>limiter-topology.hcl</span>
</div>
<span className="font-label-caps text-label-caps text-primary">SYNTAX VALID</span>
</div>
<pre className="font-code-sm text-code-sm text-on-surface leading-5 overflow-x-auto p-space-xs bg-surface-container/50 rounded-lg"><code><span className="text-secondary">node</span> <span className="text-tertiary">"envoy_edge"</span> {"{"}
  routing      = <span className="text-primary">"anycast_bgp"</span>
  filter_chain = [<span className="text-tertiary">"tls_termination"</span>, <span className="text-tertiary">"token_bucket_eval"</span>]
  timeout_ms   = <span className="text-tertiary">3.5</span>
  on_timeout   = <span className="text-error">"FAIL_OPEN"</span> <span className="text-surface-variant">// SLA Preservation</span>
{"}"}
<span className="text-secondary">cluster</span> <span className="text-tertiary">"redis_tier"</span> {"{"}
  topology     = <span className="text-primary">"active_active_crdt"</span>
  quorum_sync  = <span className="text-secondary">false</span>
  fallback_db  = <span className="text-primary">"dynamodb_global"</span>
{"}"}</code></pre>
</div>
</div>
{/* CENTER PANE: Visual Topology Diagram Canvas (5 Cols) */}
<div className="lg:col-span-5 flex flex-col gap-space-md">
{/* Interactive Topology Canvas */}
<div className="bg-surface-container rounded-xl p-space-md shadow-xl flex flex-col h-full min-h-[680px] relative overflow-hidden">
{/* Canvas Toolbar */}
<div className="flex items-center justify-between z-10">
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded-lg">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-code-sm text-code-sm font-semibold text-on-surface">Topology Simulator: Active</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface" type="button">
<span className="material-symbols-outlined text-[16px]">zoom_in</span>
</button>
<button className="p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface" type="button">
<span className="material-symbols-outlined text-[16px]">zoom_out</span>
</button>
<button className="p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface" type="button">
<span className="material-symbols-outlined text-[16px]">refresh</span>
</button>
<button className="px-space-sm py-1 rounded-lg bg-surface-container-highest text-primary font-code-sm text-code-sm flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">play_arrow</span> Run Chaos Test
            </button>
</div>
</div>
{/* Ambient Visual Background Grid for Canvas */}
<div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #c0c1ff 1px, transparent 0); background-size: 24px 24px;" }}></div>
{/* System Architecture Graphic SVG & Nodes */}
<div className="relative flex-1 flex flex-col justify-between py-space-md z-10">
{/* Node Tier 1: Clients & CDN Ingress */}
<div className="flex items-center justify-around gap-space-sm">
<div className="bg-surface-container-high p-space-sm rounded-xl shadow-lg flex flex-col items-center w-36 text-center">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary mb-1">
<span className="material-symbols-outlined text-[18px]">devices</span>
</div>
<span className="font-code-sm text-code-sm font-semibold text-on-surface">Client Edge</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Web / Mobile / IoT</span>
<span className="mt-1 font-code-sm text-code-sm text-tertiary">10.2M RPS</span>
</div>
<span className="material-symbols-outlined text-outline text-[20px] animate-pulse">arrow_forward</span>
<div className="bg-surface-container-high p-space-sm rounded-xl shadow-lg flex flex-col items-center w-44 text-center">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-1">
<span className="material-symbols-outlined text-[18px]">cloud</span>
</div>
<span className="font-code-sm text-code-sm font-semibold text-on-surface">Cloudflare Anycast</span>
<span className="font-label-caps text-label-caps text-secondary">BGP Geo-DNS Tier</span>
<div className="flex items-center gap-1 mt-1 text-[11px] font-code-sm text-on-surface-variant">
<span className="text-tertiary">0.8ms</span> | <span>TLS 1.3 Term</span>
</div>
</div>
</div>
{/* SVG Flow Connectors (Tier 1 -> Tier 2) */}
<div className="h-10 w-full flex justify-center items-center">
<svg className="w-full h-full" fill="none" viewBox="0 0 400 40">
<path className="opacity-70 animate-pulse" d="M 200 0 L 200 40" stroke="#8083ff" strokeDasharray="4 4" strokeWidth="2"/>
<circle cx="200" cy="20" fill="#4edea3" r="3"/>
</svg>
</div>
{/* Node Tier 2: Envoy API Gateway + Local Token Filter */}
<div className="flex justify-center">
<div className="bg-surface-container-highest/90 p-space-md rounded-2xl shadow-xl w-80 flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="p-1 rounded bg-primary-container text-on-primary-container">
<span className="material-symbols-outlined text-[16px]">security</span>
</div>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Envoy Edge Proxy</span>
</div>
<span className="font-code-sm text-code-sm px-1.5 py-0.5 rounded bg-surface-container-low text-tertiary">Healthy</span>
</div>
<div className="font-code-sm text-code-sm text-on-surface-variant flex justify-between">
<span>Distributed Filter Pipeline</span>
<span className="text-primary font-semibold">P99: 1.1ms</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-tertiary h-full w-[68%]"></div>
</div>
<div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant mt-0.5">
<span>Memory Cache: 88%</span>
<span>Fail-Open Enabled</span>
</div>
</div>
</div>
{/* SVG Flow Connectors (Tier 2 -> Tier 3 Dual Branch) */}
<div className="h-12 w-full flex justify-center items-center">
<svg className="w-full h-full" fill="none" viewBox="0 0 400 50">
<path className="opacity-60" d="M 200 0 L 120 50" stroke="#8083ff" strokeDasharray="3 3" strokeWidth="2"/>
<path className="opacity-60" d="M 200 0 L 280 50" stroke="#8083ff" strokeDasharray="3 3" strokeWidth="2"/>
<circle cx="120" cy="30" fill="#c0c1ff" r="2.5"/>
<circle cx="280" cy="30" fill="#4edea3" r="2.5"/>
</svg>
</div>
{/* Node Tier 3: Redis Multi-Region Cluster & Kafka Async Log */}
<div className="grid grid-cols-2 gap-space-md">
{/* Sharded Redis Cluster */}
<div className="bg-surface-container-high p-space-sm rounded-xl shadow-md flex flex-col gap-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-primary text-[16px]">storage</span>
<span className="font-code-sm text-code-sm font-bold text-on-surface">Redis Cluster</span>
</div>
<span className="font-label-caps text-label-caps text-tertiary bg-surface-container px-1 py-0.5 rounded">Multi-AZ</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant">Active-Active CRDT (75 Shards)</span>
<div className="mt-1 font-code-sm text-code-sm flex flex-col gap-0.5 text-on-surface">
<div className="flex justify-between">
<span className="text-on-surface-variant">P99 Read:</span>
<span className="text-tertiary">0.9ms</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Lua Script:</span>
<span className="text-primary font-mono">token_eval.lua</span>
</div>
</div>
</div>
{/* Kafka Audit Log Stream */}
<div className="bg-surface-container-high p-space-sm rounded-xl shadow-md flex flex-col gap-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-[16px]">stream</span>
<span className="font-code-sm text-code-sm font-bold text-on-surface">Kafka Pipeline</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-1 py-0.5 rounded">Partition: 64</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant">Async Decision Audit Events</span>
<div className="mt-1 font-code-sm text-code-sm flex flex-col gap-0.5 text-on-surface">
<div className="flex justify-between">
<span className="text-on-surface-variant">Lag:</span>
<span className="text-tertiary">14ms</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Sink:</span>
<span className="text-on-surface">TimescaleDB</span>
</div>
</div>
</div>
</div>
{/* Node Tier 4: DynamoDB Persistent Storage Fallback */}
<div className="mt-space-sm flex justify-center">
<div className="bg-surface-container-low px-space-md py-space-xs rounded-xl flex items-center justify-between w-full shadow-inner">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">dns</span>
<div className="flex flex-col">
<span className="font-code-sm text-code-sm font-semibold text-on-surface">DynamoDB Global Tables</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Persistent Tier • Cold Token Recovery &amp; Long-term Tier quotas</span>
</div>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant">Replica Latency: 28ms</span>
</div>
</div>
</div>
{/* Topology Live Metric Footer */}
<div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-code-sm text-code-sm">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>Global Topology Simulation Running</span>
</div>
<span className="font-label-caps text-label-caps text-primary">Zero Single-Point-Of-Failure</span>
</div>
</div>
</div>
{/* RIGHT PANE: Dynamic Auto-Updating Grading Rubric & AI Staff Mentor (3 Cols) */}
<div className="lg:col-span-3 flex flex-col gap-space-md min-w-0">
{/* Real-time AI Evaluation Rubric Card */}
<div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">analytics</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Staff Rubric Score</span>
</div>
<div className="flex items-baseline gap-1">
<span className="font-display-hero text-headline-lg font-bold text-tertiary">91</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">/ 100</span>
</div>
</div>
{/* Rubric Progress Metric Bars */}
<div className="space-y-space-sm">
<div>
<div className="flex justify-between font-code-sm text-code-sm mb-1">
<span className="text-on-surface">Scalability &amp; Throughput</span>
<span className="font-bold text-tertiary">95 / 100</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full w-[95%]"></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 block">Consistent hashing with 1024 virtual nodes mitigates hot keys.</span>
</div>
<div>
<div className="flex justify-between font-code-sm text-code-sm mb-1">
<span className="text-on-surface">High Availability &amp; SLAs</span>
<span className="font-bold text-primary">88 / 100</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[88%]"></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 block">Fail-open edge strategy maintains 99.999% availability target.</span>
</div>
<div>
<div className="flex justify-between font-code-sm text-code-sm mb-1">
<span className="text-on-surface">Latency &amp; Bottlenecks</span>
<span className="font-bold text-tertiary">92 / 100</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full w-[92%]"></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 block">In-memory Lua evaluation guarantees P99 &lt; 2.2ms roundtrip.</span>
</div>
<div>
<div className="flex justify-between font-code-sm text-code-sm mb-1">
<span className="text-on-surface">Cost &amp; Operational Model</span>
<span className="font-bold text-secondary">84 / 100</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[84%]"></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 block">Cross-region data transfer fees optimized via batched sync.</span>
</div>
</div>
</div>
{/* Live AI Interjection Card (Staff Interviewer Pushback) */}
<div className="bg-surface-container-high rounded-xl p-space-md shadow-xl flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute top-0 left-0 bottom-0 w-1 bg-primary"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<img className="w-7 h-7 rounded-full object-cover shadow-sm" data-alt="A futuristic, hyper-realistic minimalist holographic AI interviewer avatar rendered in dark slate and vibrant indigo light lines, sleek tech studio background, 8k resolution, cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB96-d8izKGB8DbHueIF7XFYAkdQtBPD-WUAOksRgDgAGAdJh7giY2Lgs4fYOOBOlJEn1QoZMl33jnvFy94ju5H-mBcTuopg-VP63t83Beh3oYgzr3nqrP6onMdle9gGIR0lKvhJ6efO6NdcWK09FWd2fnSNfSeGZGTWHNFSJzSTFPLZvcWhJIibYvmKlR-ezusixr0-mhruB-CMKbh-mLko1PWpYv5jsk5tZqeLjxgvhq27_fS6X8R"/>
<span className="font-code-sm text-code-sm font-bold text-primary">Staff Principal Interjection</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant">Live</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
          “What happens during a split-brain network partition between <span className="font-code-sm text-code-sm text-tertiary">US-East</span> and <span className="font-code-sm text-code-sm text-secondary">EU-West</span>? How do you prevent quota over-consumption without degrading the P99 SLA?”
        </p>
<div className="bg-surface-container-lowest p-space-xs rounded-lg flex items-center justify-between text-on-surface-variant font-code-sm text-code-sm">
<span>Target Topic: CAP Theorem &amp; CRDTs</span>
<span className="text-tertiary font-medium">Difficulty: Hard</span>
</div>
</div>
{/* Candidate Real-Time Interactive Response Box */}
<div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant">Defend Architecture Choice</span>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">mic</span>
<span className="font-code-sm text-code-sm">Voice enabled</span>
</div>
</div>
<div className="relative w-full">
<textarea className="w-full bg-surface-container-lowest rounded-lg p-space-sm font-code-sm text-code-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary resize-none shadow-inner" placeholder="We trade temporary consistency for availability (AP system). Under partition, we allocate fractional local quotas (e.g., 50% max burst per region) using Conflict-free Replicated Data Types (PN-Counters)..." rows={4}></textarea>
</div>
<div className="flex items-center justify-between gap-space-sm">
<button className="p-space-xs rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors" title="Record Audio Defense" type="button">
<span className="material-symbols-outlined text-[18px]">mic_none</span>
</button>
<button className="flex-1 py-space-xs px-space-md rounded-lg bg-primary text-on-primary font-headline-sm text-body-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-space-xs shadow-md" type="button">
<span>Submit to Interviewer</span>
<span className="material-symbols-outlined text-[16px]">send</span>
</button>
</div>
</div>
{/* Quick Concept Cheatsheet / Guardrails */}
<div className="bg-surface-container-low p-space-sm rounded-xl flex items-center justify-between text-on-surface-variant font-code-sm text-code-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
<span>CAP Assessment: AP Mode Validated</span>
</div>
<kbd className="bg-surface-container-highest px-1.5 py-0.5 rounded text-[10px] text-on-surface">⌘+Enter</kbd>
</div>
</div>
</div>
</div>

    </>
  );
}