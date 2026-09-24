"use client";
import { useEffect } from "react";

export default function LandingPage() {
  
  // This is needed because the script tags inside dangerouslySetInnerHTML don't execute automatically in React
  useEffect(() => {
    const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    let match;
    const scripts = [];
    
    // We extracted the raw HTML, now let's just let it be, 
    // but React doesn't run scripts inside innerHTML. We need to manually eval them or append them.
    const container = document.getElementById('landing-page-container');
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
        id="landing-page-container"
        className="min-h-screen bg-[#0e0e10] text-[#e5e1e4]" 
        dangerouslySetInnerHTML={{ __html: `
<!-- ========================================================================= -->
<!-- 1. REFINED STICKY NAVBAR                                                  -->
<!-- ========================================================================= -->
<header class="fixed top-0 left-0 w-full z-50 bg-[#0e0e10]/90 backdrop-blur-md border-b border-outline-variant">
<div class="max-w-[1400px] mx-auto h-14 px-4 sm:px-6 flex items-center justify-between gap-4">
<!-- Brand & Version -->
<div class="flex items-center gap-6">
<a class="flex items-center gap-2.5 group" href="#">
<div class="w-7 h-7 rounded border border-outline-variant bg-surface-container flex items-center justify-center font-mono text-xs font-bold text-primary group-hover:border-primary/50 transition-colors">
            &gt;_
          </div>
<div class="flex items-center gap-2">
<span class="font-geist font-bold text-sm tracking-tight text-on-surface">CodePrep<span class="text-primary font-mono">.ai</span></span>
<span class="px-1.5 py-0.5 rounded text-[10px] font-mono tracking-wider bg-surface-container-high text-on-surface-variant border border-outline-variant/60">v4.19-prod</span>
</div>
</a>
<!-- Main Nav -->
<nav class="hidden lg:flex items-center gap-1 font-geist text-xs">
<a class="px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#product-showcase">Architecture Canvas</a>
<a class="px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#fault-engine">Fault Engine</a>
<a class="px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#bar-raiser">Live Bar-Raiser</a>
<a class="px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#pricing">Pricing</a>
<a class="px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#faq">FAQ</a>
</nav>
</div>
<!-- Quick Metrics & Actions -->
<div class="flex items-center gap-3">
<div class="hidden md:flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant text-[11px] font-mono text-outline">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>us-east-1 chaos ring:</span>
<span class="text-secondary font-medium">nom-idle</span>
</div>
<a class="hidden sm:inline-flex text-xs font-mono text-on-surface-variant hover:text-on-surface px-2.5 py-1.5 transition-colors" href="#documentation">
          Docs
        </a>
<a class="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-medium bg-on-surface text-surface-container-lowest hover:bg-white active:scale-95 transition-all shadow-sm" href="#hero-terminal">
<span>Launch Sandbox</span>
<kbd class="hidden sm:inline-block px-1.5 py-0.2 rounded bg-surface-container-lowest/15 border border-surface-container-lowest/30 text-[10px]">⌘K</kbd>
</a>
</div>
</div>
</header>
<!-- ========================================================================= -->
<!-- 2. AUTHENTIC DEVELOPER HERO SECTION                                      -->
<!-- ========================================================================= -->
<main class="w-full pt-14">
<section class="relative border-b border-outline-variant bg-[#0e0e10] overflow-hidden">
<!-- Grid Overlay -->
<div class="absolute inset-0 grid-mesh opacity-40 pointer-events-none"></div>
<div class="max-w-[1400px] mx-auto px-4 sm:px-6 pt-16 pb-20 relative">
<!-- System Status Kicker -->
<div class="inline-flex items-center gap-2.5 px-3 py-1 rounded border border-outline-variant bg-surface-container-low/70 mb-8 font-mono text-xs">
<span class="inline-flex items-center gap-1.5 text-secondary">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
</span>
<span>Raft v2.4 Certified</span>
</span>
<span class="text-outline-variant">|</span>
<span class="text-on-surface-variant">Deterministic L6/L7 Mock Arena</span>
<span class="text-outline-variant hidden sm:inline">|</span>
<span class="text-outline hidden sm:inline">P99 synthetic jitter &lt;14ms</span>
</div>
<!-- Main Headline -->
<div class="max-w-4xl">
<h1 class="font-geist font-bold text-3xl sm:text-5xl lg:text-6xl tracking-[-0.03em] text-on-surface leading-[1.08]">
            The distributed systems &amp; interview arena for <span class="text-primary font-mono font-normal">&lt;Staff+&gt;</span> engineers.
          </h1>
<p class="mt-6 font-inter text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Test your architecture against asymmetric WAN partitions, live Raft failovers, and rigorous synthetic FAANG bar-raisers before your real L6/L7 loop.
          </p>
<!-- Dual CTAs & Telemetry -->
<div class="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs">
<a class="px-5 py-3 rounded bg-primary text-surface-container-lowest font-semibold hover:bg-white active:scale-95 transition-all flex items-center gap-2" href="#product-showcase">
<span class="material-symbols-outlined text-[16px]">play_arrow</span>
<span>Launch Chaos Sandbox</span>
</a>
<button class="px-4 py-3 rounded border border-outline-variant bg-surface-container-low text-on-surface hover:bg-surface-container hover:border-outline transition-colors flex items-center gap-2" onclick="switchHeroTab('consensus')">
<span class="material-symbols-outlined text-[16px] text-tertiary">emergency</span>
<span>Inspect Incident #8829 (Split-Brain)</span>
<span class="px-1.5 py-0.5 rounded bg-surface-container-high text-[10px] text-secondary">LIVE</span>
</button>
</div>
</div>
<!-- Interactive Hero Workspace Terminal Widget -->
<div class="mt-12 rounded-lg border border-outline-variant bg-surface-container-lowest overflow-hidden shadow-2xl" id="hero-terminal">
<!-- Terminal Header Bar -->
<div class="px-4 py-2.5 bg-surface-container-low border-b border-outline-variant flex flex-wrap items-center justify-between gap-3">
<div class="flex items-center gap-2">
<div class="flex items-center gap-1.5 mr-2">
<div class="w-2.5 h-2.5 rounded-full bg-[#3e3d45]"></div>
<div class="w-2.5 h-2.5 rounded-full bg-[#3e3d45]"></div>
<div class="w-2.5 h-2.5 rounded-full bg-[#3e3d45]"></div>
</div>
<span class="font-mono text-xs text-outline">topology://cluster-west-az1.internal/repartition-test</span>
</div>
<!-- Interactive Tab Selectors -->
<div class="flex items-center p-0.5 bg-surface-container-lowest rounded border border-outline-variant font-mono text-xs">
<button class="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-medium transition-colors" id="hero-tab-btn-arch" onclick="switchHeroTab('arch')">
                System Topology
              </button>
<button class="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface transition-colors" id="hero-tab-btn-consensus" onclick="switchHeroTab('consensus')">
                Live Consensus Log
              </button>
<button class="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface transition-colors" id="hero-tab-btn-rubric" onclick="switchHeroTab('rubric')">
                L7 Bar-Raiser Rubric
              </button>
</div>
</div>
<!-- Tab Content Views -->
<div class="p-4 sm:p-6 font-mono text-xs min-h-[340px]">
<!-- View 1: Architecture Topology (Interactive Node Map) -->
<div class="space-y-4" id="hero-view-arch">
<div class="flex items-center justify-between text-outline text-[11px] pb-2 border-b border-outline-variant">
<span>ACTIVE SHARDS: 3 REPLICAS (EPOCH 1482)</span>
<span class="text-secondary flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> WAN JITTER: 1.2ms (STABLE)
                </span>
</div>
<!-- Visual Node Graph -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-3 py-2">
<!-- Node 1 -->
<div class="p-3 rounded border border-outline-variant bg-surface-container-low flex flex-col justify-between">
<div>
<div class="flex items-center justify-between text-[11px] mb-1">
<span class="text-on-surface font-semibold">Edge Ingress</span>
<span class="text-secondary text-[10px]">HEALTHY</span>
</div>
<p class="text-on-surface-variant text-[11px] font-mono">Envoy Proxy v1.28</p>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant/50 text-[10px] text-outline flex justify-between">
<span>94,200 req/s</span>
<span>p99: 4.1ms</span>
</div>
</div>
<!-- Node 2 (Leader) -->
<div class="p-3 rounded border border-primary/50 bg-surface-container flex flex-col justify-between relative">
<div class="absolute -top-2 right-2 px-1.5 py-0.2 rounded bg-primary text-surface-container-lowest font-bold text-[9px]">
                    RAFT LEADER
                  </div>
<div>
<div class="flex items-center justify-between text-[11px] mb-1">
<span class="text-on-surface font-semibold">Node-01 (us-west-1a)</span>
</div>
<p class="text-on-surface-variant text-[11px] font-mono">Term: 42 // State: Leader</p>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant/50 text-[10px] text-primary flex justify-between">
<span>Lease valid: 1,480ms</span>
<span>Commit: #891,029</span>
</div>
</div>
<!-- Node 3 (Follower) -->
<div class="p-3 rounded border border-outline-variant bg-surface-container-low flex flex-col justify-between">
<div>
<div class="flex items-center justify-between text-[11px] mb-1">
<span class="text-on-surface font-semibold">Node-02 (us-west-1b)</span>
<span class="text-secondary text-[10px]">SYNCED</span>
</div>
<p class="text-on-surface-variant text-[11px] font-mono">Term: 42 // Follower</p>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant/50 text-[10px] text-outline flex justify-between">
<span>Lag: 0 entries</span>
<span>Heartbeat: 42ms</span>
</div>
</div>
<!-- Node 4 (Target for Chaos) -->
<div class="p-3 rounded border border-dashed border-tertiary/60 bg-surface-container-low flex flex-col justify-between transition-all" id="sim-target-node">
<div>
<div class="flex items-center justify-between text-[11px] mb-1">
<span class="text-on-surface font-semibold">Node-03 (us-west-1c)</span>
<span class="text-tertiary text-[10px]" id="node3-status-badge">CANDIDATE TARGET</span>
</div>
<p class="text-on-surface-variant text-[11px] font-mono" id="node3-status-desc">Simulate 400ms packet drop</p>
</div>
<div class="mt-3 pt-2 border-t border-outline-variant/50 text-[10px] flex items-center justify-between">
<span class="text-outline" id="node3-status-sub">Chaos Injector Ready</span>
<button class="px-2 py-0.5 rounded bg-tertiary/20 text-tertiary hover:bg-tertiary hover:text-surface-container-lowest font-medium transition-colors text-[10px]" id="hero-chaos-btn" onclick="triggerHeroChaos()">
                      Inject Partition
                    </button>
</div>
</div>
</div>
<!-- Interactive Command Output -->
<div class="p-3 rounded bg-surface-container-low border border-outline-variant text-[11px] text-on-surface-variant leading-relaxed font-mono">
<span class="text-outline">\$ codeprep chaos-mesh --target=node-03 --mode=asymmetric-partition --delay=250ms</span><br/>
<span class="text-secondary">&gt; [OK]</span> Cluster heartbeat ping active. Quorum 2/3 maintained across partition boundaries. Zero data write loss detected.
              </div>
</div>
<!-- View 2: Live Consensus Logs (Hidden by default) -->
<div class="hidden space-y-2" id="hero-view-consensus">
<div class="text-[11px] text-outline pb-1 border-b border-outline-variant flex justify-between">
<span>RAFT STREAM // COMMIT INDEX: 891029</span>
<span class="text-primary font-mono">STRICT_ORDERED_ACID</span>
</div>
<div class="space-y-1.5 font-mono text-[11px] text-on-surface-variant">
<div class="flex gap-2">
<span class="text-outline">00:04:12.891</span>
<span class="text-primary">[TERM 42]</span>
<span class="text-on-surface">LEADER [Node-01] received ClientCommand(AppendTxId=0x98FF4A, payload_bytes=1024)</span>
</div>
<div class="flex gap-2">
<span class="text-outline">00:04:12.894</span>
<span class="text-secondary">[REPLICATION]</span>
<span>AppendEntriesRPC dispatched to Node-02, Node-03. BatchID: #4019</span>
</div>
<div class="flex gap-2">
<span class="text-outline">00:04:12.899</span>
<span class="text-secondary">[QUORUM]</span>
<span>Node-02 ACK received (RTT: 4.8ms). Majority consensus reached (2/3 replicas confirmed).</span>
</div>
<div class="flex gap-2 bg-surface-container p-1 rounded border-l-2 border-primary">
<span class="text-outline">00:04:12.902</span>
<span class="text-primary font-semibold">[COMMIT]</span>
<span class="text-on-surface font-medium">Index 891029 applied to State Machine. Client write unlocked in 11ms.</span>
</div>
<div class="flex gap-2">
<span class="text-outline">00:04:13.104</span>
<span class="text-tertiary">[HEARTBEAT]</span>
<span>Leader lease verified. Wall-clock drift: +0.02ms. Epoch valid.</span>
</div>
</div>
</div>
<!-- View 3: L7 Bar-Raiser Rubric (Hidden by default) -->
<div class="hidden space-y-3 font-mono text-xs" id="hero-view-rubric">
<div class="flex items-center justify-between pb-2 border-b border-outline-variant">
<span class="text-on-surface font-semibold">FAANG Staff (L6/L7) System Design Grading Matrix</span>
<span class="text-secondary font-bold">CURRENT SCORE: 9.4 / 10</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
<div class="p-2.5 rounded bg-surface-container-low border border-outline-variant">
<div class="text-outline text-[10px] uppercase">Distributed Consensus</div>
<div class="text-sm font-bold text-on-surface mt-1">Exceeds Bar</div>
<p class="text-[11px] text-on-surface-variant mt-1 font-inter">Identified split-brain split condition, implemented generational fencing tokens immediately.</p>
</div>
<div class="p-2.5 rounded bg-surface-container-low border border-outline-variant">
<div class="text-outline text-[10px] uppercase">Backpressure &amp; Capacity</div>
<div class="text-sm font-bold text-on-surface mt-1">Meets Bar (L6)</div>
<p class="text-[11px] text-on-surface-variant mt-1 font-inter">Calculated write bandwidth accurately at 48k rps. Proactively added leaky-bucket rate limiting.</p>
</div>
<div class="p-2.5 rounded bg-surface-container-low border border-outline-variant">
<div class="text-outline text-[10px] uppercase">Failure Mode Enumeration</div>
<div class="text-sm font-bold text-primary mt-1">Staff+ Exceptional</div>
<p class="text-[11px] text-on-surface-variant mt-1 font-inter">Analyzed asymmetric network partitions where node drops write acks but retains read heartbeats.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- ========================================================================= -->
<!-- 3. VERIFIED PRODUCTION CREDIBILITY (Proof without fake logos)             -->
<!-- ========================================================================= -->
<section class="border-b border-outline-variant bg-surface-container-lowest py-8">
<div class="max-w-[1400px] mx-auto px-4 sm:px-6">
<div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div class="max-w-xs">
<p class="text-xs font-mono uppercase tracking-wider text-outline">Deterministic Engine</p>
<h4 class="font-geist text-sm font-semibold text-on-surface mt-0.5">Engineered to mirror real-world production incidents at scale</h4>
</div>
<!-- Telemetry Strip -->
<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 flex-1 max-w-4xl">
<div class="p-3 rounded border border-outline-variant bg-surface-container-low">
<span class="text-xs font-mono text-outline">Stress Injection</span>
<div class="font-mono text-lg font-bold text-on-surface mt-0.5">48,000 rps</div>
<span class="text-[11px] text-secondary font-mono">Sustained failover loops</span>
</div>
<div class="p-3 rounded border border-outline-variant bg-surface-container-low">
<span class="text-xs font-mono text-outline">Interviewer Latency</span>
<div class="font-mono text-lg font-bold text-primary mt-0.5">&lt;140ms</div>
<span class="text-[11px] text-on-surface-variant font-mono">Full speech-to-speech</span>
</div>
<div class="p-3 rounded border border-outline-variant bg-surface-container-low">
<span class="text-xs font-mono text-outline">Raft State Verification</span>
<div class="font-mono text-lg font-bold text-secondary mt-0.5">100%</div>
<span class="text-[11px] text-secondary font-mono">Deterministic log replay</span>
</div>
<div class="p-3 rounded border border-outline-variant bg-surface-container-low">
<span class="text-xs font-mono text-outline">ACID Consistency</span>
<div class="font-mono text-lg font-bold text-tertiary mt-0.5">Zero Loss</div>
<span class="text-[11px] text-on-surface-variant font-mono">Jepsen-style assertion</span>
</div>
</div>
</div>
</div>
</section>
<!-- ========================================================================= -->
<!-- 4. INTERACTIVE PRODUCT SHOWCASE (Tabbed Dual-Pane Workspace)              -->
<!-- ========================================================================= -->
<section class="py-20 border-b border-outline-variant bg-surface" id="product-showcase">
<div class="max-w-[1400px] mx-auto px-4 sm:px-6">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
<div>
<span class="font-mono text-xs uppercase tracking-wider text-primary">Core Interactive Tooling</span>
<h2 class="font-geist text-2xl sm:text-3xl font-bold tracking-tight text-on-surface mt-1">
              Production Simulator &amp; Bar-Raiser Sandbox
            </h2>
</div>
<!-- Mode Tabs -->
<div class="flex items-center p-1 bg-surface-container-low rounded border border-outline-variant font-mono text-xs overflow-x-auto">
<button class="px-3 py-1.5 rounded bg-surface-container-high text-on-surface font-medium whitespace-nowrap transition-colors" id="showcase-tab-0" onclick="switchShowcaseTab(0)">
              1. Whiteboard &amp; Chaos Injector
            </button>
<button class="px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" id="showcase-tab-1" onclick="switchShowcaseTab(1)">
              2. Disaster Recovery Scrubber
            </button>
<button class="px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" id="showcase-tab-2" onclick="switchShowcaseTab(2)">
              3. Synthetic Bar-Raiser Arena
            </button>
</div>
</div>
<!-- Showcase Dual-Pane Container -->
<div class="rounded-lg border border-outline-variant bg-surface-container-lowest overflow-hidden shadow-xl">
<!-- Pane View 0: System Design Whiteboard & Chaos Injector -->
<div class="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]" id="showcase-pane-0">
<!-- Left Canvas Area (Cols 8) -->
<div class="lg:col-span-8 p-6 border-b lg:border-b-0 lg:border-r border-outline-variant blueprint-dot flex flex-col justify-between">
<div>
<div class="flex items-center justify-between font-mono text-xs text-outline pb-4 mb-6 border-b border-outline-variant">
<span class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span>CANVAS: Video Streaming Edge Architecture (Netflix L7 benchmark)</span>
</span>
<span class="text-on-surface-variant">Active nodes: 6 // QPS: 120,000</span>
</div>
<!-- Interactive Service Topology Nodes -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
<!-- Ingress Column -->
<div class="space-y-3">
<div class="text-[11px] font-mono text-outline">01. INGRESS TIER</div>
<div class="p-3 rounded border border-outline-variant bg-surface-container-low font-mono text-xs">
<div class="font-bold text-on-surface">Cloudflare Anycast</div>
<div class="text-[11px] text-outline mt-1">DDoS Layer 7 Scrubbing</div>
<div class="mt-2 text-[10px] text-secondary">TTL 300s | Geo-routed</div>
</div>
<div class="p-3 rounded border border-outline-variant bg-surface-container-low font-mono text-xs">
<div class="font-bold text-on-surface">Envoy Proxy Mesh</div>
<div class="text-[11px] text-outline mt-1">gRPC mTLS termination</div>
<div class="mt-2 text-[10px] text-secondary">Active Connections: 34k</div>
</div>
</div>
<!-- Compute / Processing Column -->
<div class="space-y-3">
<div class="text-[11px] font-mono text-outline">02. COMPUTE TIER</div>
<div class="p-3 rounded border border-outline-variant bg-surface-container-low font-mono text-xs transition-all" id="transcode-cluster-node">
<div class="font-bold text-on-surface">Transcode Cluster</div>
<div class="text-[11px] text-outline mt-1">FFmpeg GPU Workers</div>
<div class="mt-2 text-[10px] text-secondary" id="transcode-status">Auto-scaled: 48 Pods</div>
</div>
<div class="p-3 rounded border border-outline-variant bg-surface-container-low font-mono text-xs">
<div class="font-bold text-on-surface">Metadata Engine</div>
<div class="text-[11px] text-outline mt-1">In-Memory Redis Shards</div>
<div class="mt-2 text-[10px] text-secondary">Hit Ratio: 99.4%</div>
</div>
</div>
<!-- Storage / Event Log Column -->
<div class="space-y-3">
<div class="text-[11px] font-mono text-outline">03. PERSISTENCE TIER</div>
<div class="p-3 rounded border border-outline-variant bg-surface-container-low font-mono text-xs transition-all" id="kafka-partition-node">
<div class="font-bold text-on-surface">Kafka Log Bus</div>
<div class="text-[11px] text-outline mt-1">Append-only Event Log</div>
<div class="mt-2 text-[10px] text-secondary" id="kafka-status">ISR: 3/3 Replicas</div>
</div>
<div class="p-3 rounded border border-outline-variant bg-surface-container-low font-mono text-xs">
<div class="font-bold text-on-surface">S3 Data Lake</div>
<div class="text-[11px] text-outline mt-1">Object Store (Chunks)</div>
<div class="mt-2 text-[10px] text-secondary">Erasure Coded 8+4</div>
</div>
</div>
</div>
</div>
<!-- Interactive Chaos Action Bar -->
<div class="pt-4 border-t border-outline-variant flex flex-wrap items-center justify-between gap-3">
<div class="font-mono text-xs text-on-surface-variant">
<span class="text-outline">Active Scenario:</span> Regional Fiber Severance (us-east to us-west)
                </div>
<div class="flex items-center gap-2">
<button class="px-3 py-1.5 rounded bg-surface-container-high text-xs font-mono text-on-surface-variant hover:text-on-surface transition-colors" id="chaos-reset-btn" onclick="resetChaosSimulation()">
                    Reset
                  </button>
<button class="px-4 py-1.5 rounded bg-error text-xs font-mono font-semibold text-surface-container-lowest hover:bg-white active:scale-95 transition-all flex items-center gap-1.5" id="chaos-trigger-btn" onclick="runSplitBrainChaos()">
<span class="material-symbols-outlined text-[16px]">bolt</span>
<span>Simulate Split-Brain WAN Cut</span>
</button>
</div>
</div>
</div>
<!-- Right Telemetry Panel (Cols 4) -->
<div class="lg:col-span-4 p-6 bg-surface-container-low font-mono text-xs flex flex-col justify-between">
<div>
<div class="flex items-center justify-between pb-3 border-b border-outline-variant mb-4">
<span class="font-semibold text-on-surface">FAILOVER TELEMETRY</span>
<span class="text-secondary text-[11px]" id="telemetry-indicator">ALL_SYSTEMS_NOMINAL</span>
</div>
<div class="space-y-3 text-[11px]">
<div>
<div class="text-outline mb-1">CIRCUIT BREAKER STATUS:</div>
<div class="p-2 rounded bg-surface-container text-secondary font-medium" id="circuit-breaker-val">CLOSED (Traffic Allowed 100%)</div>
</div>
<div>
<div class="text-outline mb-1">PARTITION BUFFER BACKPRESSURE:</div>
<div class="w-full bg-surface-container rounded h-2 overflow-hidden">
<div class="bg-secondary h-full transition-all duration-300" id="buffer-progress" style="width: 14%;"></div>
</div>
<div class="text-right text-[10px] text-outline mt-1" id="buffer-text">14% (12MB / 100MB)</div>
</div>
<div class="p-3 rounded bg-surface-container-lowest border border-outline-variant space-y-1.5">
<div class="text-outline uppercase text-[10px]">Staff Bar-Raiser Feedback</div>
<p class="text-on-surface-variant font-inter leading-relaxed" id="bar-raiser-eval-text">
                      "Good baseline caching. When WAN partitions occur, ensure your Kafka producer switches to idempotent ack-all mode to avoid duplicate stream writes."
                    </p>
</div>
</div>
</div>
<div class="pt-4 border-t border-outline-variant text-[11px] text-outline">
                Deterministic Seed: <span class="text-on-surface-variant">0x8829F_CHAOS_ENGINE</span>
</div>
</div>
</div>
<!-- Pane View 1: Disaster Recovery Incident Scrubber (Hidden by default) -->
<div class="hidden p-6 font-mono text-xs space-y-6" id="showcase-pane-1">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-outline-variant">
<div>
<span class="text-error font-bold">[SEV-1 POST-MORTEM REPLAY]</span>
<span class="text-on-surface ml-2">Incident #4912: Multi-Region Leader Epoch Race</span>
</div>
<span class="text-outline text-[11px]">Total Incident Timeline: 02m 45s</span>
</div>
<!-- Interactive Timeline Slider -->
<div class="space-y-3 bg-surface-container-low p-4 rounded border border-outline-variant">
<div class="flex justify-between text-[11px] text-outline">
<span>T+00s (Severance)</span>
<span>T+48s (DLQ Ingestion)</span>
<span>T+02m 15s (Epoch Fencing)</span>
<span>T+02m 45s (Resolved)</span>
</div>
<input class="w-full accent-primary cursor-pointer bg-surface-container h-2 rounded" id="incident-slider" max="3" min="0" oninput="updateIncidentScrubber(this.value)" step="1" type="range" value="0"/>
<div class="flex justify-between font-mono text-[10px] text-on-surface-variant">
<span>Keyframe 0</span>
<span>Keyframe 1</span>
<span>Keyframe 2</span>
<span>Keyframe 3</span>
</div>
</div>
<!-- Dynamic State Box Updated by Slider -->
<div class="p-5 rounded border border-outline-variant bg-surface-container grid grid-cols-1 md:grid-cols-3 gap-4" id="incident-status-card">
<div>
<div class="text-outline text-[10px] uppercase">Incident Phase</div>
<div class="text-base font-bold text-error mt-0.5" id="inc-phase">T+00s: WAN Partition Severance</div>
<p class="text-on-surface-variant font-inter text-[12px] mt-1" id="inc-desc">Cross-regional fiber optic link severed between us-east-1 and eu-central-1. Heartbeats begin dropping.</p>
</div>
<div>
<div class="text-outline text-[10px] uppercase">System State</div>
<div class="text-on-surface font-semibold mt-0.5" id="inc-cluster">Quorum Threatened</div>
<div class="text-secondary text-[11px] mt-1 font-mono" id="inc-action">Attempting consensus with remaining 2 AZs</div>
</div>
<div>
<div class="text-outline text-[10px] uppercase">L7 Candidate Expectation</div>
<div class="text-primary text-[12px] font-inter mt-0.5" id="inc-eval">Identify split immediately. Do NOT permit writes on partitioned minority segment.</div>
</div>
</div>
</div>
<!-- Pane View 2: Synthetic FAANG Bar-Raiser Arena (Hidden by default) -->
<div class="hidden p-6 font-mono text-xs space-y-6" id="showcase-pane-2">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant">
<div class="flex items-center gap-3">
<div class="w-9 h-9 rounded bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary font-bold">
                  AI
                </div>
<div>
<div class="font-bold text-on-surface">Synthetic Principal Bar-Raiser (Meta E7 / Staff Benchmark)</div>
<div class="text-outline text-[11px]">Calibrated to: Distributed Storage Deep Dive</div>
</div>
</div>
<div class="flex items-center gap-2">
<span class="px-2.5 py-1 rounded bg-secondary/15 text-secondary border border-secondary/30 text-[10px]">SPEECH LATENCY: 112ms</span>
<span class="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant text-[10px]">VOICE MODEL: NEURAL-FLUID v3</span>
</div>
</div>
<!-- Dialogue & Realtime Waveform -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-4">
<div class="md:col-span-8 p-4 rounded bg-surface-container-low border border-outline-variant space-y-4">
<div class="space-y-1">
<div class="text-outline text-[10px] uppercase flex items-center gap-2">
<span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
<span>Interviewer Voice Stream (Live Synthesis)</span>
</div>
<p class="text-on-surface font-inter text-sm leading-relaxed">
                    "You've chosen a primary-secondary replication scheme. Walk me through the exact instant the leader undergoes a 4-second garbage collection pause. How do you prevent split-brain before the election timer trips?"
                  </p>
</div>
<!-- Synthetic Waveform Representation -->
<div class="p-2 rounded bg-surface-container flex items-center gap-1 h-8">
<span class="w-1 h-2 bg-primary/40 rounded-full"></span>
<span class="w-1 h-4 bg-primary/70 rounded-full"></span>
<span class="w-1 h-6 bg-primary rounded-full"></span>
<span class="w-1 h-3 bg-primary/50 rounded-full"></span>
<span class="w-1 h-7 bg-secondary rounded-full"></span>
<span class="w-1 h-5 bg-secondary/80 rounded-full"></span>
<span class="w-1 h-2 bg-outline rounded-full"></span>
<span class="w-1 h-4 bg-primary rounded-full"></span>
<span class="w-1 h-7 bg-primary rounded-full"></span>
<span class="w-1 h-3 bg-secondary rounded-full"></span>
<span class="w-1 h-5 bg-secondary rounded-full"></span>
<span class="w-1 h-2 bg-outline rounded-full"></span>
<span class="w-1 h-6 bg-primary rounded-full"></span>
<span class="w-1 h-3 bg-primary/50 rounded-full"></span>
<span class="w-1 h-5 bg-secondary rounded-full"></span>
</div>
</div>
<!-- Candidate Telemetry -->
<div class="md:col-span-4 p-4 rounded bg-surface-container-low border border-outline-variant space-y-3">
<div class="text-outline text-[10px] uppercase">Candidate Telemetry</div>
<div class="flex justify-between items-center text-[11px]">
<span class="text-on-surface-variant">Speaking Rate:</span>
<span class="font-bold text-on-surface">118 WPM (Optimal)</span>
</div>
<div class="flex justify-between items-center text-[11px]">
<span class="text-on-surface-variant">Hesitation Pauses:</span>
<span class="font-bold text-secondary">0.8s (Meets L7 Bar)</span>
</div>
<div class="flex justify-between items-center text-[11px]">
<span class="text-on-surface-variant">Composure Score:</span>
<span class="font-bold text-primary">88 / 100</span>
</div>
<div class="pt-2 border-t border-outline-variant text-[10px] text-outline">
                  Auto-interrupts on hand-waving: <span class="text-secondary">ENABLED</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- ========================================================================= -->
<!-- 5. VISUAL STORYTELLING FEATURES (Varied Layout Rhythm)                    -->
<!-- ========================================================================= -->
<section class="py-20 border-b border-outline-variant bg-surface-container-lowest">
<div class="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-24">
<!-- Feature 1: Full-Width Deep Dive (Asymmetric Fault Injection Engine) -->
<div class="space-y-6" id="fault-engine">
<div class="max-w-3xl">
<span class="font-mono text-xs uppercase tracking-wider text-secondary">Engine Feature 01</span>
<h3 class="font-geist text-2xl sm:text-4xl font-bold tracking-tight text-on-surface mt-1">
              Asymmetric Fault Injection with Declarative Chaos YAML
            </h3>
<p class="font-inter text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
              Don't just draw boxes on a digital whiteboard. CodePrep executes actual kernel-level packet drops, clock skews, and memory pressure tests against your system topology definition in isolated microVMs.
            </p>
</div>
<div class="rounded-lg border border-outline-variant bg-surface-container-low overflow-hidden">
<div class="px-4 py-2 bg-surface-container border-b border-outline-variant flex items-center justify-between font-mono text-xs">
<span class="text-outline">topology-chaos-spec.v1alpha1.yaml</span>
<span class="text-secondary font-mono text-[11px]">VALIDATED_BY_EBPF_AGENT</span>
</div>
<div class="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 font-mono text-xs">
<div class="lg:col-span-7 bg-surface-container-lowest p-4 rounded border border-outline-variant overflow-x-auto text-[12px] leading-relaxed">
<div><span class="text-primary font-bold">apiVersion:</span> <span class="text-secondary">chaos.codeprep.ai/v1alpha1</span></div>
<div><span class="text-primary font-bold">kind:</span> <span class="text-secondary">NetworkPartitionExperiment</span></div>
<div><span class="text-primary font-bold">metadata:</span></div>
<div class="pl-4"><span class="text-on-surface">name:</span> <span class="text-tertiary">raft-leader-asymmetric-blackhole</span></div>
<div class="pl-4"><span class="text-on-surface">targetCluster:</span> <span class="text-on-surface-variant">"spanner-mock-zone-c"</span></div>
<div><span class="text-primary font-bold">spec:</span></div>
<div class="pl-4"><span class="text-on-surface">mode:</span> <span class="text-tertiary">one-way-drop</span> <span class="text-outline"># ingress packets dropped, egress passes</span></div>
<div class="pl-4"><span class="text-on-surface">selector:</span></div>
<div class="pl-8"><span class="text-on-surface">role:</span> <span class="text-secondary">raft-active-leader</span></div>
<div class="pl-4"><span class="text-on-surface">duration:</span> <span class="text-tertiary">12s</span></div>
<div class="pl-4"><span class="text-on-surface">injectedJitter:</span> <span class="text-tertiary">350ms</span></div>
<div class="pl-4"><span class="text-on-surface">assertionProof:</span></div>
<div class="pl-8"><span class="text-on-surface">ensureZeroDuplicateWrites:</span> <span class="text-secondary font-bold">true</span></div>
<div class="pl-8"><span class="text-on-surface">maxFailoverLatencyMs:</span> <span class="text-secondary font-bold">850</span></div>
</div>
<div class="lg:col-span-5 flex flex-col justify-between space-y-4">
<div class="space-y-3">
<div class="text-on-surface font-semibold font-geist text-sm">Deterministic Verification Loop</div>
<p class="font-inter text-xs text-on-surface-variant leading-relaxed">
                    Most mock interview platforms evaluate distributed systems by opinion. CodePrep evaluates by test assertions. If your proposed architecture permits a phantom read during the 12-second lease window, the assertion throws a hard verification trace.
                  </p>
<div class="p-3 rounded bg-surface-container border border-outline-variant space-y-1.5 text-[11px]">
<div class="text-outline uppercase text-[10px]">Assert Failure Trace #428</div>
<div class="text-error font-mono">ERROR: Split-brain detected at term 43</div>
<div class="text-on-surface-variant font-inter">Follower Node-02 promoted before Leader Node-01 yielded lease. Write payload diverged at offset 0x9AF0.</div>
</div>
</div>
<div class="pt-3 border-t border-outline-variant font-mono text-[11px] text-outline flex items-center justify-between">
<span>MicroVM boot time: 24ms</span>
<span class="text-secondary">Firecracker Jail</span>
</div>
</div>
</div>
</div>
</div>
<!-- Feature 2: Split 60/40 Layout (Real-Time Speech-to-Speech Bar Raiser) -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-outline-variant" id="bar-raiser">
<div class="lg:col-span-7 space-y-4">
<span class="font-mono text-xs uppercase tracking-wider text-primary">Engine Feature 02</span>
<h3 class="font-geist text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
              Synthetic Speech-to-Speech Bar Raisers with Strict Interviewer Personas
            </h3>
<p class="font-inter text-sm text-on-surface-variant leading-relaxed">
              Trained on verbatim hiring committee transcripts from Meta, Google, and Amazon. Select from calibrated interviewer personas: the benevolent Google Fellow who probes algorithmic correctness, or the adversarial Meta E8 who interrupts every ambiguous scaling estimate.
            </p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
<div class="p-3 rounded border border-outline-variant bg-surface-container-low">
<div class="text-primary font-bold">Latency Budget: &lt;140ms</div>
<p class="text-[11px] text-on-surface-variant font-inter mt-1">Direct audio streaming without text-intermediate bottlenecks ensures natural human conversational interruption dynamics.</p>
</div>
<div class="p-3 rounded border border-outline-variant bg-surface-container-low">
<div class="text-secondary font-bold">Dynamic Whiteboard Sync</div>
<p class="text-[11px] text-on-surface-variant font-inter mt-1">Interviewer observes your mouse trajectory, node placements, and math calculations in real-time as you speak.</p>
</div>
</div>
</div>
<div class="lg:col-span-5 rounded-lg border border-outline-variant bg-surface-container-low p-4 font-mono text-xs space-y-3">
<div class="flex items-center justify-between pb-2 border-b border-outline-variant text-[11px]">
<span class="text-outline">TRANSCRIPT AUTO-INDEXER</span>
<span class="text-secondary">LIVE RECORDING</span>
</div>
<div class="space-y-2 text-[11px]">
<div class="p-2 rounded bg-surface-container border-l-2 border-outline">
<span class="text-outline text-[10px]">00:14:02 // Candidate</span>
<p class="text-on-surface font-inter text-xs mt-0.5">"For the caching layer, I'll place Redis in front of PostgreSQL with a simple write-around policy."</p>
</div>
<div class="p-2 rounded bg-surface-container border-l-2 border-primary">
<span class="text-primary text-[10px] font-bold">00:14:09 // Synthetic Bar-Raiser (Interruption)</span>
<p class="text-on-surface font-inter text-xs mt-0.5">"Hold on. What happens when your Redis cluster suffers an uneven key hash partition under a sudden spike in celebrity live broadcasts?"</p>
</div>
<div class="p-2 rounded bg-surface-container-lowest border border-outline-variant text-[10px] text-on-surface-variant">
<span class="text-secondary font-bold">RUBRIC TRIGGER:</span> Hotkey skew detection requirement flagged for scoring matrix.
              </div>
</div>
</div>
</div>
<!-- Feature 3: Monospaced Incident Feed (Automated Post-Mortem Generator) -->
<div class="pt-8 border-t border-outline-variant space-y-6">
<div class="max-w-3xl">
<span class="font-mono text-xs uppercase tracking-wider text-tertiary">Engine Feature 03</span>
<h3 class="font-geist text-2xl sm:text-3xl font-bold tracking-tight text-on-surface mt-1">
              Automated Post-Mortem Incident Generation &amp; Deterministic Proofs
            </h3>
<p class="font-inter text-sm text-on-surface-variant mt-2 leading-relaxed">
              Every round generates a 12-page production post-mortem detailing your architectural trade-offs, theoretical p99 latencies under 100k QPS, and exact code patches for observed data-loss vectors.
            </p>
</div>
<!-- Feed Terminal -->
<div class="rounded-lg border border-outline-variant bg-surface-container-lowest font-mono text-xs p-4 sm:p-5 overflow-x-auto">
<div class="text-outline text-[11px] pb-2 border-b border-outline-variant flex items-center justify-between">
<span>POST-MORTEM ARTIFACT GENERATOR // OUTPUT STREAM</span>
<span class="text-primary">SHA-256: e8f912c4b...</span>
</div>
<div class="mt-3 space-y-1 text-on-surface-variant text-[11px]">
<div><span class="text-outline">[2025-02-27T08:12:01Z]</span> <span class="text-secondary">[OK]</span> Compiling candidate architecture AST (Abstract Syntax Tree)...</div>
<div><span class="text-outline">[2025-02-27T08:12:02Z]</span> <span class="text-secondary">[OK]</span> Jepsen test suite executed: 1,024 randomized read/write operations injected.</div>
<div><span class="text-outline">[2025-02-27T08:12:03Z]</span> <span class="text-primary">[INFO]</span> Latency SLA analysis: 99th percentile write latency projected at 38.4ms.</div>
<div><span class="text-outline">[2025-02-27T08:12:04Z]</span> <span class="text-tertiary">[WARN]</span> Single Point of Failure (SPOF) detected in primary database write pipeline without auto-fencing token.</div>
<div><span class="text-outline">[2025-02-27T08:12:05Z]</span> <span class="text-secondary">[OK]</span> Markdown Post-Mortem and Staff rubric PDF compiled (Artifact ID: #ART-9921).</div>
</div>
</div>
</div>
</div>
</section>
<!-- ========================================================================= -->
<!-- 6. INTERACTIVE PRICING MATRIX                                             -->
<!-- ========================================================================= -->
<section class="py-20 border-b border-outline-variant bg-surface" id="pricing">
<div class="max-w-[1400px] mx-auto px-4 sm:px-6">
<div class="text-center max-w-2xl mx-auto mb-12">
<span class="font-mono text-xs uppercase tracking-wider text-primary">Transparent Investment</span>
<h2 class="font-geist text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mt-1">
            Predictable Pricing for Serious Career Transitions
          </h2>
<p class="font-inter text-sm sm:text-base text-on-surface-variant mt-3">
            Calibrated for Senior Engineers, Tech Leads, and Staff candidates preparing for top-tier tech loops.
          </p>
<!-- Billing Period Toggle -->
<div class="mt-6 inline-flex items-center p-1 rounded bg-surface-container border border-outline-variant font-mono text-xs">
<button class="px-3 py-1.5 rounded bg-surface-container-high text-on-surface font-medium transition-colors" id="billing-monthly" onclick="setBilling('monthly')">
              Monthly
            </button>
<button class="px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5" id="billing-annual" onclick="setBilling('annual')">
<span>Annual</span>
<span class="px-1.5 py-0.2 rounded bg-secondary/20 text-secondary text-[10px] font-bold">Save 25%</span>
</button>
</div>
</div>
<!-- Pricing Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
<!-- Plan 1: Community Sandbox -->
<div class="rounded-lg border border-outline-variant bg-surface-container-low p-6 flex flex-col justify-between">
<div>
<div class="flex justify-between items-center">
<span class="font-geist font-bold text-base text-on-surface">Community Sandbox</span>
<span class="px-2 py-0.5 rounded bg-surface-container text-[11px] font-mono text-outline">TIER 0</span>
</div>
<p class="text-xs text-on-surface-variant font-inter mt-2">Self-paced algorithmic practice and baseline system architecture whiteboard.</p>
<div class="mt-6 pb-6 border-b border-outline-variant">
<div class="font-mono text-3xl font-bold text-on-surface">\$0</div>
<div class="text-xs font-mono text-outline mt-1">Free forever // No credit card</div>
</div>
<div class="mt-6 space-y-2.5 font-mono text-xs">
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px] text-secondary">check</span>
<span>Blind 75 &amp; NeetCode 150 code IDE</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px] text-secondary">check</span>
<span>3 Chaos system simulations / mo</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px] text-secondary">check</span>
<span>Standard algorithmic test harness</span>
</div>
<div class="flex items-center gap-2 text-outline line-through">
<span class="material-symbols-outlined text-[16px]">close</span>
<span>Live Voice Bar-Raiser Sessions</span>
</div>
<div class="flex items-center gap-2 text-outline line-through">
<span class="material-symbols-outlined text-[16px]">close</span>
<span>Incident Scrubber Post-Mortems</span>
</div>
</div>
</div>
<a class="mt-8 block text-center py-2.5 rounded border border-outline-variant bg-surface-container hover:bg-surface-container-high font-mono text-xs text-on-surface font-medium transition-colors" href="#hero-terminal">
              Access Community Sandbox
            </a>
</div>
<!-- Plan 2: Staff SWE Accelerator (Featured) -->
<div class="rounded-lg border-2 border-primary bg-surface-container p-6 flex flex-col justify-between relative shadow-2xl">
<div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-surface-container-lowest font-mono font-bold text-[10px] uppercase tracking-wider">
              Most Popular for L6/L7 Loop
            </div>
<div>
<div class="flex justify-between items-center">
<span class="font-geist font-bold text-base text-on-surface">Staff Accelerator</span>
<span class="px-2 py-0.5 rounded bg-primary/20 text-[11px] font-mono text-primary font-bold">PRO</span>
</div>
<p class="text-xs text-on-surface-variant font-inter mt-2">Unlimited chaos simulations, synthetic bar-raiser loops, and full post-mortem reports.</p>
<div class="mt-6 pb-6 border-b border-outline-variant">
<div class="flex items-baseline gap-1">
<span class="font-mono text-3xl font-bold text-on-surface" id="price-staff-val">\$79</span>
<span class="text-xs font-mono text-outline" id="price-staff-sub">/ month</span>
</div>
<div class="text-xs font-mono text-secondary mt-1">Billed monthly or \$59/mo annually</div>
</div>
<div class="mt-6 space-y-2.5 font-mono text-xs">
<div class="flex items-center gap-2 text-on-surface">
<span class="material-symbols-outlined text-[16px] text-secondary">check</span>
<span>Unlimited Chaos Network Partition tests</span>
</div>
<div class="flex items-center gap-2 text-on-surface">
<span class="material-symbols-outlined text-[16px] text-secondary">check</span>
<span>20 Full synthetic voice Bar-Raiser mocks / mo</span>
</div>
<div class="flex items-center gap-2 text-on-surface">
<span class="material-symbols-outlined text-[16px] text-secondary">check</span>
<span>Full Post-Mortem Incident Replay scrubbers</span>
</div>
<div class="flex items-center gap-2 text-on-surface">
<span class="material-symbols-outlined text-[16px] text-secondary">check</span>
<span>MicroVM firecracker isolation runner</span>
</div>
<div class="flex items-center gap-2 text-on-surface">
<span class="material-symbols-outlined text-[16px] text-secondary">check</span>
<span>FAANG Staff calibration rubric grading</span>
</div>
</div>
</div>
<a class="mt-8 block text-center py-2.5 rounded bg-primary text-surface-container-lowest font-mono text-xs font-bold hover:bg-white active:scale-95 transition-all" href="#hero-terminal">
              Start 7-Day Staff Trial
            </a>
</div>
<!-- Plan 3: Enterprise & Team Pods -->
<div class="rounded-lg border border-outline-variant bg-surface-container-low p-6 flex flex-col justify-between">
<div>
<div class="flex justify-between items-center">
<span class="font-geist font-bold text-base text-on-surface">Enterprise Pods</span>
<span class="px-2 py-0.5 rounded bg-surface-container text-[11px] font-mono text-outline">CUSTOM</span>
</div>
<p class="text-xs text-on-surface-variant font-inter mt-2">Custom cloud topologies, private LLM bar-raiser calibration, and company interview tracks.</p>
<div class="mt-6 pb-6 border-b border-outline-variant">
<div class="font-mono text-3xl font-bold text-on-surface">Custom</div>
<div class="text-xs font-mono text-outline mt-1">Starting from 5 engineering seats</div>
</div>
<div class="mt-6 space-y-2.5 font-mono text-xs">
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px] text-secondary">check</span>
<span>Import proprietary Terraform / K8s specs</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px] text-secondary">check</span>
<span>Fine-tuned company specific interview rubrics</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px] text-secondary">check</span>
<span>SOC2 Type II compliance &amp; zero data retention</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px] text-secondary">check</span>
<span>Dedicated Slack channel with Staff AI engineers</span>
</div>
</div>
</div>
<a class="mt-8 block text-center py-2.5 rounded border border-outline-variant bg-surface-container hover:bg-surface-container-high font-mono text-xs text-on-surface font-medium transition-colors" href="mailto:enterprise@codeprep.ai">
              Contact Engineering Sales
            </a>
</div>
</div>
</div>
</section>
<!-- ========================================================================= -->
<!-- 7. ENGINEERING FAQ (Accordion with Real Concerns)                        -->
<!-- ========================================================================= -->
<section class="py-20 border-b border-outline-variant bg-surface-container-lowest" id="faq">
<div class="max-w-[900px] mx-auto px-4 sm:px-6">
<div class="mb-10">
<span class="font-mono text-xs uppercase tracking-wider text-outline">Frequently Asked Questions</span>
<h2 class="font-geist text-2xl sm:text-3xl font-bold tracking-tight text-on-surface mt-1">
            Real Technical Answers for Systems Engineers
          </h2>
</div>
<div class="space-y-3 font-mono text-xs">
<!-- Accordion Item 1 -->
<div class="border border-outline-variant rounded bg-surface-container-low overflow-hidden">
<button class="w-full px-4 py-3.5 text-left font-geist font-semibold text-sm text-on-surface flex items-center justify-between hover:bg-surface-container transition-colors" onclick="toggleFaq(1)">
<span>How does the synthetic bar-raiser achieve &lt;140ms voice latency without hallucinating?</span>
<span class="material-symbols-outlined text-[18px] text-outline transition-transform duration-200" id="faq-icon-1">expand_more</span>
</button>
<div class="hidden px-4 pb-4 pt-1 font-inter text-xs text-on-surface-variant leading-relaxed border-t border-outline-variant/40" id="faq-content-1">
              We bypass classical text-to-speech-to-text daisy chains using a direct neural speech model pipeline hosted on edge GPU clusters. The model ingests streaming audio tokens while simultaneously referencing an architectural graph knowledge base, ensuring immediate response times with zero speculative hallucination on distributed consistency protocols.
            </div>
</div>
<!-- Accordion Item 2 -->
<div class="border border-outline-variant rounded bg-surface-container-low overflow-hidden">
<button class="w-full px-4 py-3.5 text-left font-geist font-semibold text-sm text-on-surface flex items-center justify-between hover:bg-surface-container transition-colors" onclick="toggleFaq(2)">
<span>Does the synthetic interviewer interrupt when I am explaining edge cases?</span>
<span class="material-symbols-outlined text-[18px] text-outline transition-transform duration-200" id="faq-icon-2">expand_more</span>
</button>
<div class="hidden px-4 pb-4 pt-1 font-inter text-xs text-on-surface-variant leading-relaxed border-t border-outline-variant/40" id="faq-content-2">
              Yes, depending on the calibrated persona. In real FAANG Staff (L6+) loops, interviewers deliberately interrupt if a candidate spends more than 90 seconds in theoretical discourse without defining concrete storage bounds or failure topologies. The system reproduces these high-pressure pushbacks to train candidate composure.
            </div>
</div>
<!-- Accordion Item 3 -->
<div class="border border-outline-variant rounded bg-surface-container-low overflow-hidden">
<button class="w-full px-4 py-3.5 text-left font-geist font-semibold text-sm text-on-surface flex items-center justify-between hover:bg-surface-container transition-colors" onclick="toggleFaq(3)">
<span>How are Raft and Paxos states mathematically proven during the chaos simulation?</span>
<span class="material-symbols-outlined text-[18px] text-outline transition-transform duration-200" id="faq-icon-3">expand_more</span>
</button>
<div class="hidden px-4 pb-4 pt-1 font-inter text-xs text-on-surface-variant leading-relaxed border-t border-outline-variant/40" id="faq-content-3">
              When you design a consensus tier, our back-end compiles your visual graph into a formal model validated by an internal linearizability checker (similar to Jepsen testing). We simulate randomized network partitions, delay packets, and assert whether linearizable consistency (ACID) holds across all replica terms.
            </div>
</div>
<!-- Accordion Item 4 -->
<div class="border border-outline-variant rounded bg-surface-container-low overflow-hidden">
<button class="w-full px-4 py-3.5 text-left font-geist font-semibold text-sm text-on-surface flex items-center justify-between hover:bg-surface-container transition-colors" onclick="toggleFaq(4)">
<span>What happens to my resume and audio data? Is it used to train AI models?</span>
<span class="material-symbols-outlined text-[18px] text-outline transition-transform duration-200" id="faq-icon-4">expand_more</span>
</button>
<div class="hidden px-4 pb-4 pt-1 font-inter text-xs text-on-surface-variant leading-relaxed border-t border-outline-variant/40" id="faq-content-4">
              Never. We enforce a strict zero-retention policy for candidate audio streams and uploaded resume data. All voice recordings are discarded immediately after post-mortem generation. Enterprise accounts can further mandate client-side ephemeral encryption keys.
            </div>
</div>
</div>
</div>
</section>
</main>
<!-- ========================================================================= -->
<!-- 8. HIGH-FIDELITY FOOTER                                                   -->
<!-- ========================================================================= -->
<footer class="bg-surface-container-lowest border-t border-outline-variant py-14">
<div class="max-w-[1400px] mx-auto px-4 sm:px-6">
<div class="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-outline-variant">
<!-- Col 1: Brand & Status -->
<div class="md:col-span-2 space-y-4">
<div class="flex items-center gap-2.5">
<div class="w-6 h-6 rounded border border-outline-variant bg-surface-container flex items-center justify-center font-mono text-xs font-bold text-primary">
              &gt;_
            </div>
<span class="font-geist font-bold text-sm tracking-tight text-on-surface">CodePrep<span class="text-primary font-mono">.ai</span></span>
</div>
<p class="font-inter text-xs text-on-surface-variant max-w-sm leading-relaxed">
            The deterministic distributed systems and interview arena for Staff and Principal engineers preparing for top-tier tech loops.
          </p>
<div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container border border-outline-variant text-[11px] font-mono">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-on-surface">All Systems Operational // 99.99%</span>
</div>
</div>
<!-- Col 2: Platform -->
<div class="space-y-3 font-mono text-xs">
<div class="text-outline uppercase text-[11px] font-semibold">Engine</div>
<ul class="space-y-2 text-on-surface-variant">
<li><a class="hover:text-on-surface transition-colors" href="#product-showcase">Architecture Canvas</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#fault-engine">Chaos Injector</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#bar-raiser">Synthetic Bar-Raiser</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#pricing">Pricing Matrix</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Changelog <span class="text-secondary text-[10px]">v4.19</span></a></li>
</ul>
</div>
<!-- Col 3: Curriculum -->
<div class="space-y-3 font-mono text-xs">
<div class="text-outline uppercase text-[11px] font-semibold">Curriculum</div>
<ul class="space-y-2 text-on-surface-variant">
<li><a class="hover:text-on-surface transition-colors" href="#">Distributed Caching (L6)</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Raft Consensus Proofs</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Global Geo-Replication</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Backpressure &amp; Rate Limits</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Staff Behavioral Rubrics</a></li>
</ul>
</div>
<!-- Col 4: Operations & Legal -->
<div class="space-y-3 font-mono text-xs">
<div class="text-outline uppercase text-[11px] font-semibold">Security</div>
<ul class="space-y-2 text-on-surface-variant">
<li><a class="hover:text-on-surface transition-colors" href="#">SOC2 Compliance</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Zero-Retention Audio</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Privacy Policy</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Security Whitepaper</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Bug Bounty</a></li>
</ul>
</div>
</div>
<!-- Bottom Bar -->
<div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-outline">
<div>
          © 2025 CodePrep AI Inc. Precision tooling for distributed engineering.
        </div>
<div class="flex items-center gap-4">
<span>Git: <span class="text-on-surface-variant">7a91bf2</span></span>
<span>Region: <span class="text-secondary">us-east-1</span></span>
<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">ESC to close modals</span>
</div>
</div>
</div>
</footer>
<!-- ========================================================================= -->
<!-- VANILLA INTERACTIVITY JAVASCRIPT                                         -->
<!-- ========================================================================= -->
<script>
    // 1. Hero Terminal Tab Switcher
    function switchHeroTab(tabId) {
      const views = {
        'arch': document.getElementById('hero-view-arch'),
        'consensus': document.getElementById('hero-view-consensus'),
        'rubric': document.getElementById('hero-view-rubric')
      };
      const buttons = {
        'arch': document.getElementById('hero-tab-btn-arch'),
        'consensus': document.getElementById('hero-tab-btn-consensus'),
        'rubric': document.getElementById('hero-tab-btn-rubric')
      };

      for (const [key, view] of Object.entries(views)) {
        if (key === tabId) {
          view.classList.remove('hidden');
          buttons[key].className = 'px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-medium transition-colors';
        } else {
          view.classList.add('hidden');
          buttons[key].className = 'px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface transition-colors';
        }
      }
    }

    // 2. Hero Chaos Injection Simulation
    let heroChaosActive = false;
    function triggerHeroChaos() {
      const node = document.getElementById('sim-target-node');
      const badge = document.getElementById('node3-status-badge');
      const desc = document.getElementById('node3-status-desc');
      const btn = document.getElementById('hero-chaos-btn');

      if (!heroChaosActive) {
        heroChaosActive = true;
        node.classList.remove('border-dashed', 'border-tertiary/60');
        node.classList.add('border-error', 'bg-error/10');
        badge.className = 'text-error text-[10px] font-bold animate-pulse';
        badge.textContent = 'PARTITIONED (100% DROP)';
        desc.textContent = 'Heartbeat ACK missed (380ms)';
        btn.textContent = 'Recover Partition';
        btn.className = 'px-2 py-0.5 rounded bg-secondary/20 text-secondary hover:bg-secondary hover:text-surface-container-lowest font-medium transition-colors text-[10px]';
      } else {
        heroChaosActive = false;
        node.classList.remove('border-error', 'bg-error/10');
        node.classList.add('border-dashed', 'border-tertiary/60');
        badge.className = 'text-tertiary text-[10px]';
        badge.textContent = 'CANDIDATE TARGET';
        desc.textContent = 'Simulate 400ms packet drop';
        btn.textContent = 'Inject Partition';
        btn.className = 'px-2 py-0.5 rounded bg-tertiary/20 text-tertiary hover:bg-tertiary hover:text-surface-container-lowest font-medium transition-colors text-[10px]';
      }
    }

    // 3. Showcase Workspace Tab Switcher
    function switchShowcaseTab(tabIndex) {
      for (let i = 0; i < 3; i++) {
        const pane = document.getElementById(\`showcase-pane-\${i}\`);
        const btn = document.getElementById(\`showcase-tab-\${i}\`);
        if (i === tabIndex) {
          pane.classList.remove('hidden');
          btn.className = 'px-3 py-1.5 rounded bg-surface-container-high text-on-surface font-medium whitespace-nowrap transition-colors';
        } else {
          pane.classList.add('hidden');
          btn.className = 'px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors';
        }
      }
    }

    // 4. Whiteboard Split-Brain Chaos Runner
    function runSplitBrainChaos() {
      const transcode = document.getElementById('transcode-cluster-node');
      const kafka = document.getElementById('kafka-partition-node');
      const transStatus = document.getElementById('transcode-status');
      const kafkaStatus = document.getElementById('kafka-status');
      const breaker = document.getElementById('circuit-breaker-val');
      const barEval = document.getElementById('bar-raiser-eval-text');
      const indicator = document.getElementById('telemetry-indicator');
      const bufferBar = document.getElementById('buffer-progress');
      const bufferText = document.getElementById('buffer-text');

      transcode.classList.add('border-error', 'bg-error/10');
      kafka.classList.add('border-tertiary', 'bg-tertiary/10');
      transStatus.textContent = 'DROPPING FRAME SYNC';
      transStatus.className = 'mt-2 text-[10px] text-error font-bold';
      kafkaStatus.textContent = 'ISR: 1/3 (QUORUM LOST)';
      kafkaStatus.className = 'mt-2 text-[10px] text-tertiary font-bold';

      breaker.textContent = 'OPEN (Tripped - 80% Traffic Diverted)';
      breaker.className = 'p-2 rounded bg-surface-container text-error font-medium';
      indicator.textContent = 'SEV-1_DEGRADED';
      indicator.className = 'text-error text-[11px] font-bold animate-pulse';

      bufferBar.style.width = '88%';
      bufferBar.className = 'bg-error h-full transition-all duration-300';
      bufferText.textContent = '88% (88MB / 100MB - Spillover Near Cap)';

      barEval.textContent = '"Alert: Candidate should now invoke the Dead Letter Queue fallback and switch ingress proxies to serve cached video segments with reduced bitrate."';
    }

    function resetChaosSimulation() {
      const transcode = document.getElementById('transcode-cluster-node');
      const kafka = document.getElementById('kafka-partition-node');
      const transStatus = document.getElementById('transcode-status');
      const kafkaStatus = document.getElementById('kafka-status');
      const breaker = document.getElementById('circuit-breaker-val');
      const barEval = document.getElementById('bar-raiser-eval-text');
      const indicator = document.getElementById('telemetry-indicator');
      const bufferBar = document.getElementById('buffer-progress');
      const bufferText = document.getElementById('buffer-text');

      transcode.className = 'p-3 rounded border border-outline-variant bg-surface-container-low font-mono text-xs transition-all';
      kafka.className = 'p-3 rounded border border-outline-variant bg-surface-container-low font-mono text-xs transition-all';
      transStatus.textContent = 'Auto-scaled: 48 Pods';
      transStatus.className = 'mt-2 text-[10px] text-secondary';
      kafkaStatus.textContent = 'ISR: 3/3 Replicas';
      kafkaStatus.className = 'mt-2 text-[10px] text-secondary';

      breaker.textContent = 'CLOSED (Traffic Allowed 100%)';
      breaker.className = 'p-2 rounded bg-surface-container text-secondary font-medium';
      indicator.textContent = 'ALL_SYSTEMS_NOMINAL';
      indicator.className = 'text-secondary text-[11px]';

      bufferBar.style.width = '14%';
      bufferBar.className = 'bg-secondary h-full transition-all duration-300';
      bufferText.textContent = '14% (12MB / 100MB)';

      barEval.textContent = '"Good baseline caching. When WAN partitions occur, ensure your Kafka producer switches to idempotent ack-all mode to avoid duplicate stream writes."';
    }

    // 5. Disaster Recovery Scrubber
    const incidentData = [
      {
        phase: "T+00s: WAN Partition Severance",
        desc: "Cross-regional fiber optic link severed between us-east-1 and eu-central-1. Heartbeats begin dropping.",
        cluster: "Quorum Threatened",
        action: "Attempting consensus with remaining 2 AZs",
        eval: "Identify split immediately. Do NOT permit writes on partitioned minority segment."
      },
      {
        phase: "T+48s: Dead Letter Queue Ingestion",
        desc: "Buffer queues hit 70% threshold. Async consumers fallback to local NVMe spillover buckets.",
        cluster: "Degraded Mode Active",
        action: "Backpressure signaled to Edge Envoy tier",
        eval: "Validate that write acknowledgments return 503 Retry-After rather than silent data drop."
      },
      {
        phase: "T+02m 15s: Epoch Fencing Token Enforced",
        desc: "Stale leader from old term tries to commit write. Fencing token rejected by storage nodes.",
        cluster: "Split-Brain Averted",
        action: "Generation Token #1483 validated",
        eval: "Staff+ standard: Ensure generational monotonic token prevents zombie leader write corruption."
      },
      {
        phase: "T+02m 45s: Re-convergence & Catch-up",
        desc: "Fiber link reconnected. Log replication engine streams delta offsets from WAL to catch up replica.",
        cluster: "Full Quorum Restored",
        action: "Lag reduced to 0 entries. ACID intact.",
        eval: "Interview cleared. Perfect response to asymmetric WAN partition failure."
      }
    ];

    function updateIncidentScrubber(val) {
      const data = incidentData[val];
      document.getElementById('inc-phase').textContent = data.phase;
      document.getElementById('inc-desc').textContent = data.desc;
      document.getElementById('inc-cluster').textContent = data.cluster;
      document.getElementById('inc-action').textContent = data.action;
      document.getElementById('inc-eval').textContent = data.eval;
    }

    // 6. Pricing Toggle
    function setBilling(mode) {
      const btnM = document.getElementById('billing-monthly');
      const btnA = document.getElementById('billing-annual');
      const priceStaff = document.getElementById('price-staff-val');
      const priceSub = document.getElementById('price-staff-sub');

      if (mode === 'annual') {
        btnA.className = 'px-3 py-1.5 rounded bg-surface-container-high text-on-surface font-medium transition-colors flex items-center gap-1.5';
        btnM.className = 'px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface transition-colors';
        priceStaff.textContent = '\$59';
        priceSub.textContent = '/ month (billed annually)';
      } else {
        btnM.className = 'px-3 py-1.5 rounded bg-surface-container-high text-on-surface font-medium transition-colors';
        btnA.className = 'px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5';
        priceStaff.textContent = '\$79';
        priceSub.textContent = '/ month';
      }
    }

    // 7. FAQ Accordion Toggle
    function toggleFaq(id) {
      const content = document.getElementById(\`faq-content-\${id}\`);
      const icon = document.getElementById(\`faq-icon-\${id}\`);
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.textContent = 'expand_less';
      } else {
        content.classList.add('hidden');
        icon.textContent = 'expand_more';
      }
    }
  </script>
` }} 
    />
  );
}
