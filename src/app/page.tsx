
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  
  // Script functionality from the original HTML
  const switchDemoTab = (tabId) => {
    // Hide all panes
    document.querySelectorAll('.demo-content-pane').forEach(pane => {
      pane.classList.add('hidden');
    });
    // Remove active state from all tabs
    document.querySelectorAll('.demo-tab-btn').forEach(btn => {
      btn.classList.remove('bg-surface-container', 'text-white', 'font-medium');
      btn.classList.add('text-outline');
    });
    // Show selected pane
    document.getElementById('content-' + tabId).classList.remove('hidden');
    // Set active state on selected tab
    const activeTab = document.getElementById('tab-' + tabId);
    activeTab.classList.remove('text-outline');
    activeTab.classList.add('bg-surface-container', 'text-white', 'font-medium');
  };

  const toggleSimMic = () => {
    const micIcon = document.getElementById('mic-icon');
    const micText = document.getElementById('mic-text');
    const waveform = document.getElementById('audio-waveform-bars');
    const btn = document.getElementById('mic-trigger-btn');
    
    if (micText.innerText === 'Push to Speak') {
      micIcon.innerText = 'mic_off';
      micIcon.classList.remove('text-error');
      micIcon.classList.add('text-outline-variant');
      micText.innerText = 'Muted';
      btn.classList.add('opacity-50');
      waveform.style.opacity = '0.3';
    } else {
      micIcon.innerText = 'mic';
      micIcon.classList.remove('text-outline-variant');
      micIcon.classList.add('text-error');
      micText.innerText = 'Push to Speak';
      btn.classList.remove('opacity-50');
      waveform.style.opacity = '1';
    }
  };

  const cycleCandidateResponse = () => {
    const textEl = document.getElementById('candidate-transcript-text');
    const responses = [
      '"We decouple the write quorum by electing regional follower-leases with monotonic epoch generation counters..."',
      '"If the trans-Atlantic fiber drops, the US-East leader retains the lease while EU-Central falls back to serving stale reads..."',
      '"To prevent split-brain during a symmetric partition, we rely on a Zookeeper ensemble deployed in a neutral 3rd region like AP-East..."'
    ];
    let currentIdx = responses.indexOf(textEl.innerText.trim());
    let nextIdx = (currentIdx + 1) % responses.length;
    
    textEl.style.opacity = 0;
    setTimeout(() => {
      textEl.innerText = responses[nextIdx];
      textEl.style.opacity = 1;
    }, 200);
  };

  const handleChaosSlider = (val) => {
    document.getElementById('slider-latency-val').innerText = val + ' ms';
    const line = document.getElementById('wan-cable-line');
    const latencyDisp = document.getElementById('wan-latency-display');
    const euBox = document.getElementById('node-eu-box');
    
    latencyDisp.innerText = val + 'ms RTT';
    
    if (val > 250) {
      line.classList.remove('bg-secondary', 'bg-tertiary');
      line.classList.add('bg-error', 'animate-pulse');
      latencyDisp.classList.add('text-error', 'border-error/50');
      latencyDisp.classList.remove('text-white', 'border-outline-variant/30');
      euBox.classList.add('border-error/50');
    } else if (val > 100) {
      line.classList.remove('bg-secondary', 'bg-error', 'animate-pulse');
      line.classList.add('bg-tertiary');
      latencyDisp.classList.remove('text-error', 'border-error/50');
      latencyDisp.classList.add('text-white', 'border-outline-variant/30');
      euBox.classList.remove('border-error/50');
    } else {
      line.classList.remove('bg-tertiary', 'bg-error', 'animate-pulse');
      line.classList.add('bg-secondary');
      latencyDisp.classList.remove('text-error', 'border-error/50');
      latencyDisp.classList.add('text-white', 'border-outline-variant/30');
      euBox.classList.remove('border-error/50');
    }
    
    // update telemetry fake numbers
    document.getElementById('p99-metric-text').innerText = (Math.max(12, val * 0.85)).toFixed(1) + ' ms';
    
    if (val > 600) {
      document.getElementById('drop-rate-text').innerText = '14.20%';
      document.getElementById('drop-rate-text').classList.add('text-error');
      document.getElementById('drop-rate-text').classList.remove('text-white');
    } else {
      document.getElementById('drop-rate-text').innerText = '0.00%';
      document.getElementById('drop-rate-text').classList.remove('text-error');
      document.getElementById('drop-rate-text').classList.add('text-white');
    }
  };

  const triggerFiberSever = () => {
    const banner = document.getElementById('whiteboard-alert-banner');
    const queueStatus = document.getElementById('queue-status-box');
    const queueLag = document.getElementById('queue-lag-text');
    const storageBox = document.getElementById('storage-status-box');
    const storageLease = document.getElementById('storage-lease-text');
    const btnText = document.getElementById('fiber-sever-text');
    
    if (banner.classList.contains('hidden')) {
      // Trigger fault
      banner.classList.remove('hidden');
      queueStatus.classList.add('border', 'border-error/40', 'bg-error-container/20');
      queueLag.classList.remove('text-secondary');
      queueLag.classList.add('text-error');
      queueLag.innerText = '48,209 msgs (Blocked)';
      
      storageBox.classList.add('border', 'border-tertiary/40', 'bg-tertiary-container/20');
      storageLease.classList.remove('text-secondary');
      storageLease.classList.add('text-tertiary');
      storageLease.innerText = 'Lease Expired (Read-Only)';
      
      btnText.innerText = 'Reset Network Topology';
    } else {
      // Reset
      banner.classList.add('hidden');
      queueStatus.classList.remove('border', 'border-error/40', 'bg-error-container/20');
      queueLag.classList.add('text-secondary');
      queueLag.classList.remove('text-error');
      queueLag.innerText = '14 msgs (Realtime)';
      
      storageBox.classList.remove('border', 'border-tertiary/40', 'bg-tertiary-container/20');
      storageLease.classList.add('text-secondary');
      storageLease.classList.remove('text-tertiary');
      storageLease.innerText = 'Epoch #429 Verified';
      
      btnText.innerText = 'Simulate Severing Trans-Atlantic Fiber';
    }
  };

  const injectSplitBrainFault = () => {
    handleChaosSlider(800);
    document.getElementById('latency-slider').value = 800;
    document.getElementById('chaos-status-badge').innerText = 'CRITICAL: PARTITION DETECTED';
    document.getElementById('chaos-status-badge').classList.replace('bg-secondary/10', 'bg-error/10');
    document.getElementById('chaos-status-badge').classList.replace('text-secondary', 'text-error');
    document.getElementById('chaos-status-badge').classList.replace('border-secondary/30', 'border-error/30');
    
    setTimeout(() => {
      document.getElementById('chaos-status-badge').innerText = 'Leader Stable • Quorum Healthy';
      document.getElementById('chaos-status-badge').classList.replace('bg-error/10', 'bg-secondary/10');
      document.getElementById('chaos-status-badge').classList.replace('text-error', 'text-secondary');
      document.getElementById('chaos-status-badge').classList.replace('border-error/30', 'border-secondary/30');
      handleChaosSlider(45);
      document.getElementById('latency-slider').value = 45;
    }, 4000);
  };

  const filterCurriculum = (cat) => {
    const btns = document.querySelectorAll('.curriculum-filter-btn');
    btns.forEach(b => {
      b.classList.remove('bg-surface-container-high', 'text-white', 'border-primary/40');
      b.classList.add('bg-surface-container', 'text-outline', 'border-outline-variant/20');
    });
    
    // Set active
    const activeBtn = Array.from(btns).find(b => b.innerText.toLowerCase().includes(cat.split(' ')[0].toLowerCase()) || (cat === 'all' && b.innerText.includes('All')));
    if (activeBtn) {
      activeBtn.classList.remove('bg-surface-container', 'text-outline', 'border-outline-variant/20');
      activeBtn.classList.add('bg-surface-container-high', 'text-white', 'border-primary/40');
    }
    
    // Filter
    const cards = document.querySelectorAll('.module-card');
    cards.forEach(card => {
      if (cat === 'all' || card.getAttribute('data-category').includes(cat)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <div className="font-body-md text-on-surface antialiased bg-[#131315]">
        

<header className="fixed top-0 left-0 w-full z-50 bg-[#131315]/90 backdrop-blur-md border-b border-outline-variant/30">
<div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

<div className="flex items-center gap-6 shrink-0">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-surface-container-high border border-outline-variant/40 flex items-center justify-center font-label-mono-bold text-primary text-sm group-hover:border-primary/50 transition-colors">
            &lt;/&gt;
          </div>
<div className="flex items-baseline gap-1.5">
<span className="font-headline-sm font-semibold tracking-tight text-white text-base">CodePrep<span className="text-primary-accent">.ai</span></span>
<span className="font-label-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-surface-container-high text-outline border border-outline-variant/30">v4.2-prod</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-1 font-body-md text-sm">
<a className="px-3 py-1.5 rounded text-on-surface-variant hover:text-white hover:bg-surface-container-high/60 transition-colors" href="/dashboard">Simulator</a>
<a className="px-3 py-1.5 rounded text-on-surface-variant hover:text-white hover:bg-surface-container-high/60 transition-colors" href="#whiteboard">System Whiteboard</a>
<a className="px-3 py-1.5 rounded text-on-surface-variant hover:text-white hover:bg-surface-container-high/60 transition-colors" href="#curriculum">Curriculum</a>
<a className="px-3 py-1.5 rounded text-on-surface-variant hover:text-white hover:bg-surface-container-high/60 transition-colors" href="#examiners">AI Examiners</a>
<a className="px-3 py-1.5 rounded text-on-surface-variant hover:text-white hover:bg-surface-container-high/60 transition-colors" href="#pricing">Pricing</a>
</nav>
</div>

<div className="flex items-center gap-3">

<div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container-lowest border border-outline-variant/30 font-label-mono text-[11px] text-outline">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
<span className="text-on-surface-variant">Cluster SLA</span>
<span className="text-secondary font-semibold">99.98%</span>
</div>

<button className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container border border-outline-variant/30 text-on-surface-variant hover:text-white hover:border-outline transition-colors text-xs font-label-mono" id="cmd-palette-btn">
<span className="material-symbols-outlined text-[14px]">terminal</span>
<span>Quick Run</span>
<kbd className="px-1.5 py-0.5 rounded bg-surface-container-highest text-[10px] text-outline font-label-mono">⌘K</kbd>
</button>
<a className="text-xs font-body-md text-on-surface-variant hover:text-white px-2 py-1.5 transition-colors" href="/login">Sign In</a>
<a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-primary-container hover:bg-primary-accent text-on-primary hover:text-white font-label-mono-bold text-xs transition-all shadow-[0_2px_12px_rgba(128,131,255,0.25)] active:scale-[0.98]" href="/dashboard">
<span className="material-symbols-outlined text-[15px]">power_settings_new</span>
<span>Launch Sandbox</span>
<span className="hidden md:inline font-label-mono text-[10px] opacity-75 ml-1 border-l border-on-primary/30 pl-1.5">G S</span>
</a>
</div>
</div>
</header>
<main className="w-full pt-16">

<section className="relative border-b border-outline-variant/20 pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">

<div className="absolute inset-0 -z-10 opacity-[0.03]" style={{"backgroundImage":"linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)","backgroundSize":"32px 32px"}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/40 text-xs font-label-mono text-on-surface-variant mb-6 hover:border-primary/40 transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span className="text-white font-medium">TELEMETRY CORE 4.2</span>
<span className="text-outline">/</span>
<span className="text-primary">L6/L7 Principal SWE Calibration Active</span>
<span className="material-symbols-outlined text-[13px] text-outline">arrow_forward</span>
</div>

<h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Where Staff Engineers Stress-Test System Design and Live Architecture.
          </h1>

<p className="font-body-lg text-base sm:text-lg text-outline max-w-2xl leading-relaxed mb-8">
            Autonomous synthetic bar-raisers, real-time distributed quorum simulators, and automated post-mortem telemetry. Built strictly for engineers targeting Senior, Staff, and Principal loops at top tier labs.
          </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
<a className="w-full sm:w-auto px-5 py-2.5 rounded bg-primary-container hover:bg-primary-accent text-on-primary hover:text-white font-label-mono-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(128,131,255,0.3)]" href="/dashboard">
<span className="material-symbols-outlined text-[16px]">play_arrow</span>
<span>Start Free Assessment</span>
</a>
<a className="w-full sm:w-auto px-5 py-2.5 rounded bg-surface-container-high border border-outline-variant/50 text-white font-label-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-surface-bright transition-colors" href="#whiteboard">
<span className="material-symbols-outlined text-[16px]">schema</span>
<span>Explore Chaos Canvas</span>
</a>
</div>

<div className="mt-6 flex items-center gap-4 text-xs font-label-mono text-outline">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-secondary">check_circle</span> No card required</span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-secondary">check_circle</span> Zero toy algorithms</span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-secondary">check_circle</span> Real distributed systems</span>
</div>
</div>

<div className="mt-12 max-w-5xl mx-auto rounded-lg border border-outline-variant/40 bg-surface-container-lowest shadow-2xl overflow-hidden" id="simulator">

<div className="bg-surface-container-low border-b border-outline-variant/30 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80"></span>
<span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80"></span>
<span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80"></span>
</div>
<span className="ml-2 font-label-mono text-[11px] text-outline font-medium">SESSION #8829-US-WEST</span>
</div>

<div className="inline-flex rounded bg-surface-container-lowest p-0.5 border border-outline-variant/30 text-xs font-label-mono">
<button className="demo-tab-btn px-3 py-1 rounded bg-surface-container text-white font-medium flex items-center gap-1.5 transition-all" id="tab-bar-raiser" onClick="switchDemoTab('bar-raiser')">
<span className="material-symbols-outlined text-[14px] text-primary">record_voice_over</span>
<span>Live FAANG Bar-Raiser</span>
</button>
<button className="demo-tab-btn px-3 py-1 rounded text-outline hover:text-white flex items-center gap-1.5 transition-all" id="tab-chaos-canvas" onClick="switchDemoTab('chaos-canvas')">
<span className="material-symbols-outlined text-[14px] text-secondary">hub</span>
<span>Distributed Chaos Canvas</span>
</button>
<button className="demo-tab-btn px-3 py-1 rounded text-outline hover:text-white flex items-center gap-1.5 transition-all" id="tab-ats-rubric" onClick="switchDemoTab('ats-rubric')">
<span className="material-symbols-outlined text-[14px] text-tertiary">analytics</span>
<span>ATS &amp; Rubric Deconstruct</span>
</button>
</div>

<div className="flex items-center gap-2 font-label-mono text-[11px]">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="text-secondary font-medium uppercase">SYNTHETIC INQUISITOR ONLINE</span>
</div>
</div>

<div className="demo-content-pane grid grid-cols-1 lg:grid-cols-12 min-h-[460px]" id="content-bar-raiser">

<div className="lg:col-span-7 p-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-outline-variant/20 bg-surface-container-lowest">
<div className="space-y-4">

<div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container border border-outline-variant/40 flex items-center justify-center text-primary font-label-mono font-bold text-xs">
                      AC
                    </div>
<div>
<div className="text-xs font-semibold text-white">Dr. Alex Chen <span className="text-[10px] font-label-mono text-outline font-normal">• Synthetic L7 Principal Bar-Raiser</span></div>
<div className="text-[11px] font-label-mono text-secondary">Probing: Distributed Consensus &amp; Split-Brain Recovery</div>
</div>
</div>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-[11px] font-label-mono text-outline">
<span className="material-symbols-outlined text-[13px] text-secondary">schedule</span>
<span>T+18:42</span>
</div>
</div>

<div className="p-3.5 rounded bg-surface-container/60 border border-outline-variant/30 text-xs leading-relaxed text-on-surface">
<p className="font-medium text-white mb-1.5 flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-primary">psychology</span>
                    Examiner Challenge:
                  </p>
                  "You're proposing synchronous Raft writes across US-East and EU-Central with a 220ms RTT. If the trans-Atlantic fiber experiences a 40% packet degradation, your p99 tail will skyrocket. How will your monotonic fencing tokens prevent stale writes without blocking incoming read replicas?"
                </div>

<div className="p-3 rounded bg-surface-container-low/80 border-l-2 border-primary text-xs space-y-1.5 font-label-mono">
<div className="flex items-center justify-between text-[11px] text-outline">
<span className="text-primary font-medium">Candidate Audio Stream [Transcription]:</span>
<span>Confidence: 94.2%</span>
</div>
<p className="text-on-surface-variant leading-normal" id="candidate-transcript-text">
                    "We decouple the write quorum by electing regional follower-leases with monotonic epoch generation counters. When a lease expires, we fall back to a pessimistic fencing token verified at the RocksDB storage engine layer before fsync commit..."
                  </p>
</div>
</div>

<div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-bright text-xs font-label-mono text-white flex items-center gap-1.5 border border-outline-variant/30 transition-colors" id="mic-trigger-btn" onClick="toggleSimMic()">
<span className="material-symbols-outlined text-[15px] text-error" id="mic-icon">mic</span>
<span id="mic-text">Push to Speak</span>
</button>
<button className="px-2.5 py-1.5 rounded bg-surface-container text-xs font-label-mono text-on-surface-variant hover:text-white transition-colors border border-outline-variant/20" onClick="cycleCandidateResponse()">
                    Cycle Response
                  </button>
</div>

<div className="flex items-center gap-1 h-5" id="audio-waveform-bars">
<span className="w-1 h-2 rounded bg-primary/70 animate-pulse"></span>
<span className="w-1 h-4 rounded bg-primary animate-bounce"></span>
<span className="w-1 h-3 rounded bg-secondary animate-pulse"></span>
<span className="w-1 h-5 rounded bg-secondary"></span>
<span className="w-1 h-2 rounded bg-primary/60"></span>
<span className="w-1 h-4 rounded bg-secondary animate-pulse"></span>
<span className="w-1 h-1 rounded bg-outline"></span>
</div>
</div>
</div>

<div className="lg:col-span-5 p-5 bg-surface-container-low/40 flex flex-col justify-between">
<div className="space-y-4">
<div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
<span className="font-label-mono-bold text-xs uppercase tracking-wider text-outline">Real-Time Rubric Telemetry</span>
<span className="font-label-mono text-[11px] text-secondary font-semibold">L7 Staff SWE Benchmark</span>
</div>

<div className="space-y-2.5 font-label-mono text-xs">
<div>
<div className="flex justify-between text-[11px] mb-1">
<span className="text-on-surface-variant">Consensus &amp; Partition Tolerance</span>
<span className="text-secondary font-semibold">9.4 / 10.0</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width":"94%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[11px] mb-1">
<span className="text-on-surface-variant">Latency vs Durability Trade-offs</span>
<span className="text-primary font-semibold">8.9 / 10.0</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"89%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[11px] mb-1">
<span className="text-on-surface-variant">Biometric Composure &amp; Structure</span>
<span className="text-tertiary font-semibold">91% Composed</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{"width":"91%"}}></div>
</div>
</div>
</div>

<div className="p-3 rounded bg-surface-container-lowest border border-outline-variant/20 space-y-1.5">
<div className="flex items-center justify-between font-label-mono text-[10px] text-outline uppercase">
<span>Autonomous Scribe Event Log</span>
<span className="text-secondary">Synced</span>
</div>
<ul className="font-label-mono text-[11px] space-y-1 text-on-surface-variant">
<li className="flex items-center gap-1.5">
<span className="text-secondary">✓</span> Candidate identified cross-DC WAN jitter bottleneck.
                    </li>
<li className="flex items-center gap-1.5">
<span className="text-secondary">✓</span> Correctly applied monotonic fencing over 2-phase commit.
                    </li>
<li className="flex items-center gap-1.5 text-tertiary">
<span className="text-tertiary">!</span> Reminder: Question durability of in-memory WAL buffers.
                    </li>
</ul>
</div>
</div>
<div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs font-label-mono text-outline">
<span>Model: Claude-3.5-Sonnet-SWE-Spec</span>
<span className="text-white font-medium">Session Score: 92/100</span>
</div>
</div>
</div>

<div className="demo-content-pane hidden p-6 bg-surface-container-lowest" id="content-chaos-canvas">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 p-4 rounded bg-surface-container-low border border-outline-variant/30 space-y-4">
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-2">
<div className="font-label-mono text-xs text-white flex items-center gap-2">
<span className="material-symbols-outlined text-[15px] text-secondary">lan</span>
<span>Active Multi-Region Raft Cluster (3 Nodes)</span>
</div>
<span className="font-label-mono text-[10px] uppercase px-2 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/30" id="chaos-status-badge">
                    Leader Stable • Quorum Healthy
                  </span>
</div>

<div className="relative h-44 rounded bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-around px-4">

<div className="flex flex-col items-center gap-1.5 z-10">
<div className="w-12 h-12 rounded bg-surface-container-high border-2 border-secondary flex flex-col items-center justify-center font-label-mono text-xs text-white">
<span className="text-[9px] text-secondary font-bold">NODE 01</span>
<span className="text-[10px]">Leader</span>
</div>
<span className="font-label-mono text-[10px] text-outline">us-east-1a</span>
</div>

<div className="flex-1 h-[2px] mx-2 relative flex items-center justify-center">
<div className="w-full h-full bg-secondary transition-colors duration-300" id="wan-cable-line"></div>
<span className="absolute -top-4 font-label-mono text-[10px] bg-surface-container-high px-1.5 py-0.2 rounded border border-outline-variant/30 text-white" id="wan-latency-display">45ms RTT</span>
</div>

<div className="flex flex-col items-center gap-1.5 z-10">
<div className="w-12 h-12 rounded bg-surface-container-high border border-outline-variant flex flex-col items-center justify-center font-label-mono text-xs text-white transition-all" id="node-eu-box">
<span className="text-[9px] text-outline font-bold">NODE 02</span>
<span className="text-[10px]">Follower</span>
</div>
<span className="font-label-mono text-[10px] text-outline">eu-central-1</span>
</div>

<div className="flex-1 h-[2px] mx-2 relative flex items-center justify-center">
<div className="w-full h-full bg-outline-variant"></div>
<span className="absolute -top-4 font-label-mono text-[10px] bg-surface-container-high px-1.5 py-0.2 rounded border border-outline-variant/30 text-outline">18ms</span>
</div>

<div className="flex flex-col items-center gap-1.5 z-10">
<div className="w-12 h-12 rounded bg-surface-container-high border border-outline-variant flex flex-col items-center justify-center font-label-mono text-xs text-white">
<span className="text-[9px] text-outline font-bold">NODE 03</span>
<span className="text-[10px]">Follower</span>
</div>
<span className="font-label-mono text-[10px] text-outline">ap-east-1</span>
</div>
</div>

<div className="pt-2 space-y-2">
<div className="flex items-center justify-between text-xs font-label-mono">
<span className="text-on-surface-variant">Induced Trans-Atlantic WAN Latency:</span>
<span className="text-white font-bold" id="slider-latency-val">45 ms</span>
</div>
<input className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-accent" id="latency-slider" max="800" min="30" oninput="handleChaosSlider(this.value)" type="range" value="45"/>
<div className="flex justify-between text-[10px] font-label-mono text-outline">
<span>30ms (Nominal Fiber)</span>
<span>250ms (Jitter)</span>
<span>800ms (Total Partition Split)</span>
</div>
</div>
</div>

<div className="lg:col-span-4 p-4 rounded bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between space-y-3">
<div className="font-label-mono-bold text-xs uppercase tracking-wider text-outline">Cluster Telemetry</div>
<div className="space-y-3 font-label-mono text-xs">
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<div className="text-outline text-[10px] uppercase">P99 Replication Commit</div>
<div className="text-lg font-bold text-secondary" id="p99-metric-text">38.4 ms</div>
<div className="text-[10px] text-on-surface-variant mt-0.5">SLA: &lt; 150ms required</div>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<div className="text-outline text-[10px] uppercase">Raft Heartbeat Drop Rate</div>
<div className="text-lg font-bold text-white" id="drop-rate-text">0.00%</div>
<div className="text-[10px] text-secondary mt-0.5">Zero split-brain events</div>
</div>
</div>
<button className="w-full py-2 rounded bg-error-container/30 hover:bg-error-container/50 border border-error/40 text-error text-xs font-label-mono-bold flex items-center justify-center gap-1.5 transition-colors" onClick="injectSplitBrainFault()">
<span className="material-symbols-outlined text-[15px]">flash_on</span>
<span>Inject Sudden Network Partition</span>
</button>
</div>
</div>
</div>

<div className="demo-content-pane hidden p-6 bg-surface-container-lowest" id="content-ats-rubric">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 space-y-4">
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-2">
<span className="font-label-mono text-xs text-outline uppercase font-medium">Candidate Resume Bullet Scan (L6/L7 Filter)</span>
<span className="font-label-mono text-[11px] text-tertiary">Signal Level: Senior (Needs Staff Elevation)</span>
</div>

<div className="p-3.5 rounded bg-surface-container-low border border-error/30 space-y-1">
<div className="flex items-center gap-1.5 text-error text-[11px] font-label-mono">
<span className="material-symbols-outlined text-[13px]">close</span>
<span>ORIGINAL CANDIDATE BULLET (Weak Staff Signal):</span>
</div>
<p className="text-xs text-on-surface-variant font-body-sm leading-relaxed">
                    "Built a distributed event processing pipeline using Apache Kafka and Go to process millions of user events daily with high availability."
                  </p>
</div>
<div className="p-3.5 rounded bg-surface-container-low border border-secondary/40 space-y-1">
<div className="flex items-center gap-1.5 text-secondary text-[11px] font-label-mono">
<span className="material-symbols-outlined text-[13px]">check</span>
<span>CODEPREP ATS REWRITE (Staff L6+ Calibrated):</span>
</div>
<p className="text-xs text-white font-body-sm leading-relaxed">
                    "Architected active-active Kafka event mesh across 3 AWS regions handling 14.8M ops/sec at p99 &lt; 24ms. Eliminated poison-pill deadlocks via monotonic dead-letter queue backpressure, saving $420k/yr in EC2 ingress."
                  </p>
</div>
</div>

<div className="lg:col-span-5 p-4 rounded bg-surface-container-low border border-outline-variant/30 space-y-3 font-label-mono text-xs">
<div className="font-label-mono-bold uppercase tracking-wider text-outline">ATS Staff Index Rubric</div>
<div className="space-y-2">
<div className="flex justify-between text-[11px]">
<span className="text-on-surface-variant">Distributed Scale Metrics</span>
<span className="text-secondary font-bold">96% Staff Bar</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full">
<div className="bg-secondary h-full rounded-full" style={{"width":"96%"}}></div>
</div>
<div className="flex justify-between text-[11px] pt-1">
<span className="text-on-surface-variant">Cost &amp; Hardware Efficiency Impact</span>
<span className="text-primary font-bold">92% Staff Bar</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full">
<div className="bg-primary h-full rounded-full" style={{"width":"92%"}}></div>
</div>
<div className="flex justify-between text-[11px] pt-1">
<span className="text-on-surface-variant">Failure Domain Isolation</span>
<span className="text-tertiary font-bold">88% Staff Bar</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full">
<div className="bg-tertiary h-full rounded-full" style={{"width":"88%"}}></div>
</div>
</div>
<div className="pt-3 border-t border-outline-variant/20 text-[11px] text-outline leading-normal">
                  FAANG recruiters filter resumes via keyword cluster graphs. CodePrep isolates the 14 precise architectural levers that trigger human recruiter outreach.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-outline-variant/20 py-8 bg-surface-container-lowest">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-xs font-label-mono uppercase tracking-widest text-outline shrink-0">
            Calibrated against L6/L7 Rubrics From
          </div>
<div className="flex flex-wrap items-center justify-center md:justify-end gap-8 md:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all">

<div className="font-headline-sm font-semibold tracking-tight text-white text-base flex items-center gap-1">
<span>Google</span>
<span className="font-label-mono text-[10px] text-outline">L6+</span>
</div>

<div className="font-headline-sm font-semibold tracking-tight text-white text-base flex items-center gap-1">
<span>Meta</span>
<span className="font-label-mono text-[10px] text-outline">E6/E7</span>
</div>

<div className="font-headline-sm font-semibold italic tracking-tight text-white text-base flex items-center gap-1">
<span>stripe</span>
<span className="font-label-mono text-[10px] text-outline not-italic">L4+</span>
</div>

<div className="font-headline-sm font-bold tracking-widest text-[#e50914] text-sm flex items-center gap-1">
<span>NETFLIX</span>
</div>

<div className="font-headline-sm font-semibold tracking-tight text-white text-base flex items-center gap-1">
<span>OpenAI</span>
<span className="font-label-mono text-[10px] text-secondary">MTS</span>
</div>

<div className="font-headline-sm font-medium tracking-tight text-[#7742cf] text-base flex items-center gap-1">
<span>Datadog</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-outline-variant/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-12">
<div className="text-xs font-label-mono text-primary uppercase tracking-widest mb-2 font-semibold">The Staff-Level Divide</div>
<h2 className="font-headline-lg text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Why Solving 500 LeetCode Problems Fails at L6+ Interviews.
          </h2>
<p className="font-body-lg text-outline mt-3 text-base leading-relaxed">
            Junior and Mid-level interviews test memorized pointer mechanics. Staff loops test distributed blast radius, asynchronous data consistency, and graceful degradation during network splits.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-6 rounded-lg bg-surface-container-lowest border border-error/20 flex flex-col justify-between space-y-6">
<div className="space-y-4">
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
<span className="font-label-mono-bold text-xs uppercase text-error tracking-wide flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px]">dangerous</span>
                  Conventional Prep &amp; Toy LeetCode
                </span>
<span className="font-label-mono text-[11px] text-outline">Fails at Staff SWE</span>
</div>
<ul className="space-y-3 font-body-sm text-sm text-outline">
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">remove_circle_outline</span>
<span><strong>In-memory isolation:</strong> Assumes zero disk failure, instant memory reads, and zero packet reordering.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">remove_circle_outline</span>
<span><strong>Silent passivity:</strong> Mock interviewers who passively nod at hand-wavy sentences like "we'll just use Redis".</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">remove_circle_outline</span>
<span><strong>Zero CAP reality:</strong> Fails completely when asked: <em>"What happens to the Write-Ahead Log when the leader loses election mid-fsync?"</em></span>
</li>
</ul>
</div>
<div className="p-3 rounded bg-surface-container-low font-label-mono text-xs text-outline border border-outline-variant/20">
              Outcome: Down-leveled to Senior SWE (L5) with $140,000 lower annual equity grant.
            </div>
</div>

<div className="p-6 rounded-lg bg-surface-container border border-primary/40 flex flex-col justify-between space-y-6 shadow-[0_4px_24px_rgba(99,102,241,0.1)]">
<div className="space-y-4">
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
<span className="font-label-mono-bold text-xs uppercase text-secondary tracking-wide flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px]">verified</span>
                  CodePrep Production Realism
                </span>
<span className="font-label-mono text-[11px] text-primary">L6/L7 Principal Calibration</span>
</div>
<ul className="space-y-3 font-body-sm text-sm text-on-surface">
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span><strong>Multi-region Chaos Simulation:</strong> Live latency injection, simulated BGP flaps, and split-brain recovery harnesses.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span><strong>Aggressive Inquisitors:</strong> AI bar-raisers that interrupt vague abstractions and probe edge-case fencing tokens.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span><strong>Hardware &amp; Cost Calibration:</strong> Compute core counts, NVMe IOPS exhaustion, and cross-AZ egress bill modeling.</span>
</li>
</ul>
</div>
<div className="p-3 rounded bg-surface-container-high font-label-mono text-xs text-secondary border border-secondary/30">
              Outcome: Solidified L6 Staff or L7 Principal hire offer with top-band negotiation leverage.
            </div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-outline-variant/20 bg-surface-container-lowest" id="whiteboard">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
<div>
<div className="text-xs font-label-mono text-secondary uppercase tracking-widest mb-2 font-semibold">Active Interactive Canvas</div>
<h2 className="font-headline-lg text-3xl font-bold text-white tracking-tight">
              Interactive System Design Whiteboard
            </h2>
<p className="font-body-md text-outline mt-1 text-sm">
              Live components with real state propagation: Envoy Ingress, Kafka Streams, and RocksDB stateful nodes.
            </p>
</div>

<div className="flex items-center gap-3">
<button className="px-3.5 py-2 rounded bg-surface-container border border-outline-variant/40 hover:border-error/60 text-xs font-label-mono text-white flex items-center gap-2 transition-colors" id="fiber-sever-btn" onClick="triggerFiberSever()">
<span className="material-symbols-outlined text-error text-[16px]">cable</span>
<span id="fiber-sever-text">Simulate Severing Trans-Atlantic Fiber</span>
</button>
</div>
</div>

<div className="rounded-lg border border-outline-variant/30 bg-surface-container p-6 relative overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-4 rounded bg-surface-container-low border border-outline-variant/30 space-y-3">
<div className="flex items-center justify-between text-xs font-label-mono">
<span className="text-primary font-bold">01 / EDGE INGRESS</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-[10px] text-outline">Envoy Proxy</span>
</div>
<p className="text-xs text-on-surface-variant font-body-sm">
                BGP Anycast routing with TLS termination and token-bucket rate limiters configured at 50,000 req/sec per edge node.
              </p>
<div className="p-2 rounded bg-surface-container-lowest font-label-mono text-[11px] text-outline flex justify-between">
<span>Ingress Jitter:</span>
<span className="text-white font-medium">1.2ms (Healthy)</span>
</div>
</div>

<div className="p-4 rounded bg-surface-container-low border border-outline-variant/30 space-y-3">
<div className="flex items-center justify-between text-xs font-label-mono">
<span className="text-secondary font-bold">02 / EVENT LOG QUEUE</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-[10px] text-outline">Kafka / Pulsar</span>
</div>
<p className="text-xs text-on-surface-variant font-body-sm">
                Multi-partition distributed topic with strict ISR (In-Sync Replicas) = 3 and idempotent producer tokens.
              </p>
<div className="p-2 rounded bg-surface-container-lowest font-label-mono text-[11px] flex justify-between" id="queue-status-box">
<span className="text-outline">Topic Lag:</span>
<span className="text-secondary font-medium" id="queue-lag-text">14 msgs (Realtime)</span>
</div>
</div>

<div className="p-4 rounded bg-surface-container-low border border-outline-variant/30 space-y-3">
<div className="flex items-center justify-between text-xs font-label-mono">
<span className="text-tertiary font-bold">03 / STORAGE FENCING</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-[10px] text-outline">Cockroach / RocksDB</span>
</div>
<p className="text-xs text-on-surface-variant font-body-sm">
                Monotonic epoch generation numbers to reject stale leaseholders during asymmetric network splits.
              </p>
<div className="p-2 rounded bg-surface-container-lowest font-label-mono text-[11px] flex justify-between" id="storage-status-box">
<span className="text-outline">Lease State:</span>
<span className="text-secondary font-medium" id="storage-lease-text">Epoch #429 Verified</span>
</div>
</div>
</div>

<div className="hidden mt-6 p-3 rounded bg-error-container/20 border border-error/50 flex items-center justify-between text-xs font-label-mono text-error" id="whiteboard-alert-banner">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">warning</span>
<span>FAULT INJECTED: US-East &lt;--&gt; EU-Central Fiber Severed. Quorum degraded to 2/3. Dead-Letter-Queue engaged!</span>
</div>
<button className="text-[11px] underline text-white hover:text-error transition-colors" onClick="triggerFiberSever()">Reset Topology</button>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-outline-variant/20" id="curriculum">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-10">
<div className="text-xs font-label-mono text-primary uppercase tracking-widest mb-2 font-semibold">Specialized Modules</div>
<h2 className="font-headline-lg text-3xl font-bold text-white tracking-tight">
            Curriculum Engineered for Staff &amp; Principal SWEs.
          </h2>
<p className="font-body-md text-outline mt-2 text-sm">
            Zero beginner recursion. High-stakes scenarios built on actual production outages and real frontier architectures.
          </p>
</div>

<div className="flex flex-wrap gap-2 mb-8 font-label-mono text-xs">
<button className="curriculum-filter-btn px-3 py-1.5 rounded bg-surface-container-high text-white border border-primary/40" onClick="filterCurriculum('all')">All Tracks (18)</button>
<button className="curriculum-filter-btn px-3 py-1.5 rounded bg-surface-container text-outline hover:text-white border border-outline-variant/20" onClick="filterCurriculum('infra')">Distributed Systems &amp; Infra</button>
<button className="curriculum-filter-btn px-3 py-1.5 rounded bg-surface-container text-outline hover:text-white border border-outline-variant/20" onClick="filterCurriculum('staff')">Staff Systems Architecture</button>
<button className="curriculum-filter-btn px-3 py-1.5 rounded bg-surface-container text-outline hover:text-white border border-outline-variant/20" onClick="filterCurriculum('ingest')">High-Throughput Ingestion</button>
<button className="curriculum-filter-btn px-3 py-1.5 rounded bg-surface-container text-outline hover:text-white border border-outline-variant/20" onClick="filterCurriculum('consensus')">Security &amp; Consensus</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="curriculum-grid">

<div className="module-card p-5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between space-y-4 hover:border-primary/50 transition-colors" data-category="infra consensus">
<div className="space-y-2.5">
<div className="flex items-center justify-between font-label-mono text-[11px] text-outline">
<span className="text-primary font-semibold">MODULE 01</span>
<span>120 Mins • 4.9 ★</span>
</div>
<h3 className="font-headline-sm text-base font-bold text-white leading-snug">
                Multi-Region Active-Active CockroachDB Quorum &amp; Asymmetric Splits
              </h3>
<p className="font-body-sm text-xs text-outline leading-relaxed">
                Design cross-continental data pipelines with local write quorums, dealing with write skew anomalies under Raft lease changes.
              </p>
</div>
<div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between font-label-mono text-[11px]">
<span className="text-on-surface-variant">Bar: Google L6 / Meta E6</span>
<a className="text-primary hover:underline flex items-center gap-0.5" href="/dashboard">Start Drill <span className="material-symbols-outlined text-[13px]">arrow_forward</span></a>
</div>
</div>

<div className="module-card p-5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between space-y-4 hover:border-secondary/50 transition-colors" data-category="ingest staff">
<div className="space-y-2.5">
<div className="flex items-center justify-between font-label-mono text-[11px] text-outline">
<span className="text-secondary font-semibold">MODULE 02</span>
<span>90 Mins • 4.8 ★</span>
</div>
<h3 className="font-headline-sm text-base font-bold text-white leading-snug">
                Real-Time Video Transcoding Mesh with Edge QUIC Ingestion
              </h3>
<p className="font-body-sm text-xs text-outline leading-relaxed">
                Architect high-volume chunking buffers with zero head-of-line blocking, eBPF packet routing, and dynamic GPU pool auto-scaling.
              </p>
</div>
<div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between font-label-mono text-[11px]">
<span className="text-on-surface-variant">Bar: Netflix Senior / Meta E6</span>
<a className="text-secondary hover:underline flex items-center gap-0.5" href="/dashboard">Start Drill <span className="material-symbols-outlined text-[13px]">arrow_forward</span></a>
</div>
</div>

<div className="module-card p-5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between space-y-4 hover:border-tertiary/50 transition-colors" data-category="infra ingest">
<div className="space-y-2.5">
<div className="flex items-center justify-between font-label-mono text-[11px] text-outline">
<span className="text-tertiary font-semibold">MODULE 03</span>
<span>150 Mins • 5.0 ★</span>
</div>
<h3 className="font-headline-sm text-base font-bold text-white leading-snug">
                10M TPS Distributed Financial Ledger with Idempotent Deduplication
              </h3>
<p className="font-body-sm text-xs text-outline leading-relaxed">
                Build strict double-entry balance sheets with deterministic monotonic transaction IDs, distributed two-phase commit, and zero double-spend risks.
              </p>
</div>
<div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between font-label-mono text-[11px]">
<span className="text-on-surface-variant">Bar: Stripe L4 / OpenAI MTS</span>
<a className="text-tertiary hover:underline flex items-center gap-0.5" href="/dashboard">Start Drill <span className="material-symbols-outlined text-[13px]">arrow_forward</span></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-outline-variant/20 bg-surface-container-lowest" id="examiners">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-12">
<div className="text-xs font-label-mono text-tertiary uppercase tracking-widest mb-2 font-semibold">AI Bar-Raiser Personas</div>
<h2 className="font-headline-lg text-3xl font-bold text-white tracking-tight">
            Practice Against Calibrated Technical Archetypes.
          </h2>
<p className="font-body-md text-outline mt-2 text-sm">
            Not friendly conversational bots. These synthetic bar-raisers are calibrated to reflect the exact personalities and pressure tactics of real Big Tech hiring committees.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-5 rounded-lg bg-surface-container border border-outline-variant/30 space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-primary-container/20 border border-primary/40 flex items-center justify-center font-label-mono font-bold text-primary text-sm">
                AC
              </div>
<div>
<h3 className="font-headline-sm text-sm font-bold text-white">Alex Chen, Ph.D.</h3>
<div className="text-[11px] font-label-mono text-outline">Principal Infrastructure Architect</div>
</div>
</div>
<div className="space-y-2 text-xs">
<div className="font-label-mono text-[11px] text-primary">Style: Relentless on Failure Modes</div>
<p className="text-on-surface-variant leading-relaxed font-body-sm">
                Probes deeply into Paxos split-brains, monotonic clock skews, and disk sector corruption. Will interrupt the moment you hand-wave distributed state.
              </p>
</div>
<div className="pt-2 border-t border-outline-variant/20 font-label-mono text-[10px] text-outline">
              Typical Question: <em>"Show me your leader election fencing token logic."</em>
</div>
</div>

<div className="p-5 rounded-lg bg-surface-container border border-outline-variant/30 space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-secondary-container/20 border border-secondary/40 flex items-center justify-center font-label-mono font-bold text-secondary text-sm">
                SL
              </div>
<div>
<h3 className="font-headline-sm text-sm font-bold text-white">Sarah Lin</h3>
<div className="text-[11px] font-label-mono text-outline">VP of Cloud Architecture</div>
</div>
</div>
<div className="space-y-2 text-xs">
<div className="font-label-mono text-[11px] text-secondary">Style: Cost, Blast Radius &amp; Hardware</div>
<p className="text-on-surface-variant leading-relaxed font-body-sm">
                Forces you to calculate real AWS bill egress numbers, NVMe IOPS limits, cross-region bandwidth saturation, and long-term operating expenditure.
              </p>
</div>
<div className="pt-2 border-t border-outline-variant/20 font-label-mono text-[10px] text-outline">
              Typical Question: <em>"That replication topology will burn $1.2M/mo in WAN egress. Redesign it."</em>
</div>
</div>

<div className="p-5 rounded-lg bg-surface-container border border-outline-variant/30 space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-tertiary-container/20 border border-tertiary/40 flex items-center justify-center font-label-mono font-bold text-tertiary text-sm">
                MV
              </div>
<div>
<h3 className="font-headline-sm text-sm font-bold text-white">Marcus Vance</h3>
<div className="text-[11px] font-label-mono text-outline">Staff Reliability Lead (SRE)</div>
</div>
</div>
<div className="space-y-2 text-xs">
<div className="font-label-mono text-[11px] text-tertiary">Style: Post-Mortems &amp; Thundering Herds</div>
<p className="text-on-surface-variant leading-relaxed font-body-sm">
                Tests cascading retries, cache stampedes, circuit breakers, and degraded read-only modes under catastrophic multi-rack power outages.
              </p>
</div>
<div className="pt-2 border-t border-outline-variant/20 font-label-mono text-[10px] text-outline">
              Typical Question: <em>"Your cache just restarted empty with 200k TPS incoming. What prevents total collapse?"</em>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-outline-variant/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-12">
<div className="text-xs font-label-mono text-secondary uppercase tracking-widest mb-2 font-semibold">Verified Case Studies</div>
<h2 className="font-headline-lg text-3xl font-bold text-white tracking-tight">
            How Engineers Secured L6 &amp; L7 Staff Offers.
          </h2>
<p className="font-body-md text-outline mt-2 text-sm">
            Read authentic architectural debriefs from candidates who calibrated on CodePrep before facing their loops.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-6 rounded-lg bg-surface-container-low border border-outline-variant/30 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-label-mono text-xs font-bold text-white">
                  DK
                </div>
<div>
<div className="text-xs font-bold text-white">David K.</div>
<div className="text-[11px] font-label-mono text-secondary">Promoted: Senior SWE → Staff Infra Engineer (Tier-1 Cloud)</div>
</div>
</div>
<span className="font-label-mono text-[10px] px-2 py-0.5 rounded bg-surface-container-highest text-outline">Verified Loop</span>
</div>
<p className="text-xs text-on-surface-variant font-body-sm leading-relaxed">
              "In my actual Google on-site, the interviewer gave me an open-ended scenario about geo-distributed cache coherence. Because I had spent hours running the CodePrep chaos partition simulator against Dr. Alex Chen, I immediately brought up monotonic epoch counters and write-ahead log leases. The interviewer paused and said: <em>'You're the first candidate today who didn't give me a generic LeetCode answer.'</em> That single session secured my L6 offer."
            </p>
<div className="pt-3 border-t border-outline-variant/20 flex items-center gap-4 text-[11px] font-label-mono text-outline">
<span>Prep Duration: 4 Weeks</span>
<span>•</span>
<span>18 Chaos Drills Completed</span>
</div>
</div>

<div className="p-6 rounded-lg bg-surface-container-low border border-outline-variant/30 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-label-mono text-xs font-bold text-white">
                  PM
                </div>
<div>
<div className="text-xs font-bold text-white">Priya M.</div>
<div className="text-[11px] font-label-mono text-primary">Offered: Principal Backend SWE (FinTech Tier-1)</div>
</div>
</div>
<span className="font-label-mono text-[10px] px-2 py-0.5 rounded bg-surface-container-highest text-outline">Verified Loop</span>
</div>
<p className="text-xs text-on-surface-variant font-body-sm leading-relaxed">
              "The synthetic examiner didn't just listen politely; it aggressively pushed back the moment I glossed over distributed 2-phase commit failure modes. Realizing my blind spot in WAL replication under high network jitter completely transformed how I structured my architectural diagrams. It is ten times more rigorous than any human peer mock interview I've ever booked."
            </p>
<div className="pt-3 border-t border-outline-variant/20 flex items-center gap-4 text-[11px] font-label-mono text-outline">
<span>Prep Duration: 3 Weeks</span>
<span>•</span>
<span>100% System Design Pass Rate</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-outline-variant/20 bg-surface-container-lowest" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-12">
<div className="text-xs font-label-mono text-primary uppercase tracking-widest mb-2 font-semibold">Predictable Investment</div>
<h2 className="font-headline-lg text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Transparent Pricing for High-Stakes Career Loops.
          </h2>
<p className="font-body-md text-outline mt-2 text-sm max-w-xl">
            A single level jump from Senior (L5) to Staff (L6) yields over $120k+ in annual compensation. Invest in authentic preparation.
          </p>

<div className="mt-6 inline-flex items-center gap-3 p-1 rounded bg-surface-container border border-outline-variant/30 text-xs font-label-mono">
<button className="px-3 py-1 rounded bg-surface-container-highest text-white font-medium transition-all" id="billing-monthly-btn" onClick="toggleBilling('monthly')">Monthly</button>
<button className="px-3 py-1 rounded text-outline hover:text-white transition-all flex items-center gap-1.5" id="billing-annual-btn" onClick="toggleBilling('annual')">
<span>Annual</span>
<span className="px-1.5 py-0.2 rounded bg-secondary/20 text-secondary text-[10px] font-bold">SAVE 20%</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

<div className="p-6 rounded-lg bg-surface-container border border-outline-variant/30 flex flex-col justify-between space-y-6">
<div className="space-y-4">
<div>
<div className="font-label-mono-bold text-xs uppercase text-outline">Developer Sandbox</div>
<div className="mt-3 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white" id="price-sandbox">$39</span>
<span className="text-xs font-label-mono text-outline">/month</span>
</div>
<p className="text-xs text-on-surface-variant font-body-sm mt-2">
                  Essential tooling for active algorithmic refinement and core system design practice.
                </p>
</div>
<ul className="space-y-2.5 font-label-mono text-xs text-outline pt-3 border-t border-outline-variant/20">
<li className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-secondary text-[15px]">check</span>
                  Full Monaco Coding IDE &amp; Test Suite
                </li>
<li className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-secondary text-[15px]">check</span>
                  5 AI Synthetic Interviews per month
                </li>
<li className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-secondary text-[15px]">check</span>
                  Interactive System Whiteboard
                </li>
<li className="flex items-center gap-2 text-outline">
<span className="material-symbols-outlined text-outline-variant text-[15px]">remove</span>
                  Multi-Region Chaos Engine
                </li>
<li className="flex items-center gap-2 text-outline">
<span className="material-symbols-outlined text-outline-variant text-[15px]">remove</span>
                  ATS Staff Resume Deconstructor
                </li>
</ul>
</div>
<button className="w-full py-2.5 rounded bg-surface-container-high hover:bg-surface-bright text-xs font-label-mono text-white border border-outline-variant/40 transition-colors">
              Get Started with Sandbox
            </button>
</div>

<div className="p-6 rounded-lg bg-surface-container-low border-2 border-primary-container relative flex flex-col justify-between space-y-6 shadow-[0_0_30px_rgba(128,131,255,0.15)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary-container text-on-primary font-label-mono-bold text-[10px] uppercase tracking-wider">
              Most Popular for L6/L7 Loops
            </div>
<div className="space-y-4">
<div>
<div className="font-label-mono-bold text-xs uppercase text-primary">Staff Candidate</div>
<div className="mt-3 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white" id="price-staff">$89</span>
<span className="text-xs font-label-mono text-outline">/month</span>
</div>
<p className="text-xs text-on-surface-variant font-body-sm mt-2">
                  Unrestricted access to the entire distributed simulation harness and all bar-raisers.
                </p>
</div>
<ul className="space-y-2.5 font-label-mono text-xs text-on-surface pt-3 border-t border-outline-variant/20">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[15px]">check</span>
<strong>Unlimited</strong> Synthetic Bar-Raiser Sessions
                </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[15px]">check</span>
                  Full Multi-Region Chaos Engine &amp; Split Sim
                </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[15px]">check</span>
                  Automated Post-Mortem Telemetry Scribe
                </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[15px]">check</span>
                  ATS Resume Deconstructor &amp; Rewriter
                </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[15px]">check</span>
                  Access to All 18 Staff Scenario Modules
                </li>
</ul>
</div>
<button className="w-full py-2.5 rounded bg-primary-container hover:bg-primary-accent text-on-primary hover:text-white text-xs font-label-mono-bold uppercase tracking-wider transition-colors shadow-lg">
              Launch Staff Membership
            </button>
</div>

<div className="p-6 rounded-lg bg-surface-container border border-outline-variant/30 flex flex-col justify-between space-y-6">
<div className="space-y-4">
<div>
<div className="font-label-mono-bold text-xs uppercase text-outline">Principal &amp; Team</div>
<div className="mt-3 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white" id="price-principal">$199</span>
<span className="text-xs font-label-mono text-outline">/month</span>
</div>
<p className="text-xs text-on-surface-variant font-body-sm mt-2">
                  Custom organization rubrics, private problem spaces, and dedicated calibration.
                </p>
</div>
<ul className="space-y-2.5 font-label-mono text-xs text-on-surface pt-3 border-t border-outline-variant/20">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[15px]">check</span>
                  Custom Company Architecture Stacks
                </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[15px]">check</span>
                  Private Question Banks &amp; Internal Rubrics
                </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[15px]">check</span>
                  Dedicated 1-on-1 Calibration Review
                </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[15px]">check</span>
                  SOC2 Compliance &amp; SSO Integration
                </li>
</ul>
</div>
<button className="w-full py-2.5 rounded bg-surface-container-high hover:bg-surface-bright text-xs font-label-mono text-white border border-outline-variant/40 transition-colors">
              Contact Enterprise Desk
            </button>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-outline-variant/20">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-10 text-center">
<div className="text-xs font-label-mono text-primary uppercase tracking-widest mb-2 font-semibold">Technical Architecture FAQ</div>
<h2 className="font-headline-lg text-3xl font-bold text-white tracking-tight">
            Frequently Addressed Engineering Questions.
          </h2>
</div>
<div className="space-y-3">

<div className="rounded border border-outline-variant/30 bg-surface-container-low overflow-hidden">
<button className="w-full p-4 text-left flex items-center justify-between text-sm font-headline-sm font-semibold text-white hover:bg-surface-container transition-colors" onClick="toggleAccordion('faq-1')">
<span>How does the AI examiner calibrate against Google L6 and Meta E6 rubrics?</span>
<span className="material-symbols-outlined text-[18px] text-outline transition-transform duration-200" id="icon-faq-1">expand_more</span>
</button>
<div className="hidden p-4 pt-0 text-xs font-body-sm text-outline leading-relaxed border-t border-outline-variant/20 bg-surface-container-lowest" id="faq-1">
              Our evaluation models are tuned with fine-grained rubric criteria curated from verified L6+ Staff and L7 Principal interviewers at Meta, Google, and Amazon. The system monitors 14 distinct dimensions, including distributed consensus edge cases, failure domain isolation, hardware resource boundaries, and architectural communication clarity.
            </div>
</div>

<div className="rounded border border-outline-variant/30 bg-surface-container-low overflow-hidden">
<button className="w-full p-4 text-left flex items-center justify-between text-sm font-headline-sm font-semibold text-white hover:bg-surface-container transition-colors" onClick="toggleAccordion('faq-2')">
<span>Can I export post-mortem incident reports and architecture whiteboard diagrams?</span>
<span className="material-symbols-outlined text-[18px] text-outline transition-transform duration-200" id="icon-faq-2">expand_more</span>
</button>
<div className="hidden p-4 pt-0 text-xs font-body-sm text-outline leading-relaxed border-t border-outline-variant/20 bg-surface-container-lowest" id="faq-2">
              Yes. At the conclusion of every session, you receive an automated, publication-ready PDF Post-Mortem Incident Report and high-resolution SVG diagram of your architecture. The report contains quantified scoring, detected architectural vulnerabilities, and exact timestamps of hand-waved trade-offs.
            </div>
</div>

<div className="rounded border border-outline-variant/30 bg-surface-container-low overflow-hidden">
<button className="w-full p-4 text-left flex items-center justify-between text-sm font-headline-sm font-semibold text-white hover:bg-surface-container transition-colors" onClick="toggleAccordion('faq-3')">
<span>How is this fundamentally different from generic ChatGPT interview prompts?</span>
<span className="material-symbols-outlined text-[18px] text-outline transition-transform duration-200" id="icon-faq-3">expand_more</span>
</button>
<div className="hidden p-4 pt-0 text-xs font-body-sm text-outline leading-relaxed border-t border-outline-variant/20 bg-surface-container-lowest" id="faq-3">
              Generic LLMs are fundamentally agreeable: they politely validate broken architectures and fail to probe edge cases unless instructed. CodePrep features stateful, real-time distributed simulation engines running concurrent network emulations, active speech interrupt logic, and aggressive bar-raiser personas designed to test your mental composure under genuine interview pressure.
            </div>
</div>

<div className="rounded border border-outline-variant/30 bg-surface-container-low overflow-hidden">
<button className="w-full p-4 text-left flex items-center justify-between text-sm font-headline-sm font-semibold text-white hover:bg-surface-container transition-colors" onClick="toggleAccordion('faq-4')">
<span>Does the simulator support custom infrastructure components like eBPF and Envoy filters?</span>
<span className="material-symbols-outlined text-[18px] text-outline transition-transform duration-200" id="icon-faq-4">expand_more</span>
</button>
<div className="hidden p-4 pt-0 text-xs font-body-sm text-outline leading-relaxed border-t border-outline-variant/20 bg-surface-container-lowest" id="faq-4">
              Yes. The Whiteboard engine includes pre-configured low-level primitives: eBPF sidecar tap filters, Cilium service meshes, monotonic Raft election harnesses, RocksDB LSM trees, and Kafka transactional producers.
            </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-surface-container-lowest border-b border-outline-variant/20 relative overflow-hidden">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="p-8 sm:p-12 rounded-xl bg-surface-container border border-primary/30 flex flex-col items-center text-center space-y-6 shadow-2xl relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest font-label-mono text-xs text-secondary">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span>SYSTEM ENGINE ACTIVE • ZERO COMMITMENT</span>
</div>
<h2 className="font-headline-lg text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl">
            Ready to stress-test your architecture before your dream interview loop?
          </h2>
<p className="font-body-md text-outline max-w-xl text-sm leading-relaxed">
            Run an instant 15-minute diagnostic scenario. No card required. Complete telemetry and rubric analysis delivered immediately.
          </p>

<div className="w-full max-w-md p-2 rounded bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-between text-xs font-label-mono">
<div className="flex items-center gap-2 px-2 text-on-surface-variant overflow-x-auto">
<span className="text-primary font-bold">$</span>
<span id="terminal-cli-command">codeprep run scenario-8829 --level=L7</span>
</div>
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-bright text-[11px] text-white transition-colors shrink-0 flex items-center gap-1" onClick="copyCliCommand()">
<span className="material-symbols-outlined text-[13px]" id="copy-icon">content_copy</span>
<span id="copy-label">Copy</span>
</button>
</div>
<div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm">
<a className="w-full py-3 rounded bg-primary-container hover:bg-primary-accent text-on-primary hover:text-white font-label-mono-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(128,131,255,0.4)]" href="/dashboard">
<span className="material-symbols-outlined text-[16px]">bolt</span>
<span>Launch Instant Diagnostic</span>
</a>
</div>
<div className="text-[11px] font-label-mono text-outline">
            Instant sandbox initialization in &lt; 250ms • Direct browser execution
          </div>
</div>
</div>
</section>
</main>

<footer className="w-full bg-[#0e0e10] border-t border-outline-variant/20 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10 border-b border-outline-variant/20">

<div className="col-span-2 space-y-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-surface-container-high border border-outline-variant/40 flex items-center justify-center font-label-mono text-xs text-primary font-bold">
              &lt;/&gt;
            </div>
<span className="font-headline-sm text-sm font-semibold text-white">CodePrep.ai</span>
<span className="font-label-mono text-[10px] text-outline">v4.2-telemetry</span>
</div>
<p className="font-body-sm text-xs text-outline max-w-xs leading-relaxed">
            The high-stakes technical interview arena engineered for Senior, Staff, and Principal Software Engineers targeting Tier-1 frontier tech companies.
          </p>
<div className="flex items-center gap-2 pt-1 font-label-mono text-[11px] text-secondary">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>All Global Simulation Pods Operational</span>
</div>
</div>

<div className="space-y-2.5 font-label-mono text-xs">
<div className="text-white font-semibold uppercase text-[11px] tracking-wider">Simulator</div>
<ul className="space-y-1.5 text-outline">
<li><a className="hover:text-white transition-colors" href="/dashboard">Bar-Raiser Inquisitor</a></li>
<li><a className="hover:text-white transition-colors" href="#whiteboard">Chaos Whiteboard</a></li>
<li><a className="hover:text-white transition-colors" href="/dashboard">ATS Rubric Deconstruct</a></li>
<li><a className="hover:text-white transition-colors" href="#curriculum">Scenario Modules</a></li>
</ul>
</div>

<div className="space-y-2.5 font-label-mono text-xs">
<div className="text-white font-semibold uppercase text-[11px] tracking-wider">Platform Docs</div>
<ul className="space-y-1.5 text-outline">
<li><a className="hover:text-white transition-colors" href="#">CLI Installation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Raft Consensus Benchmarks</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAANG Rubric Standards</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Endpoints</a></li>
</ul>
</div>

<div className="space-y-2.5 font-label-mono text-xs">
<div className="text-white font-semibold uppercase text-[11px] tracking-wider">Compliance</div>
<ul className="space-y-1.5 text-outline">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">SOC2 Type II Audit</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security Disclosures</a></li>
</ul>
</div>
</div>

<div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-label-mono text-outline">
<div>
          © 2025 CodePrep AI Systems Inc. Engineered for elite algorithmic mastery and system design excellence.
        </div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<span>•</span>
<a className="hover:text-white transition-colors" href="#">Discord Community</a>
<span>•</span>
<a className="hover:text-white transition-colors" href="#">Status Dashboard</a>
</div>
</div>
</div>
</footer>

<script>
    // 1. PRODUCT DEMO TAB SWITCHER
    function switchDemoTab(tabId) {
      // Hide all panes
      document.querySelectorAll('.demo-content-pane').forEach(el => {
        el.classList.add('hidden');
      });
      // Show selected pane
      const targetPane = document.getElementById('content-' + tabId);
      if (targetPane) {
        targetPane.classList.remove('hidden');
      }

      // Reset tab button states
      document.querySelectorAll('.demo-tab-btn').forEach(btn => {
        btn.classList.remove('bg-surface-container', 'text-white', 'font-medium');
        btn.classList.add('text-outline');
      });

      // Highlight active tab
      const activeBtn = document.getElementById('tab-' + tabId);
      if (activeBtn) {
        activeBtn.classList.add('bg-surface-container', 'text-white', 'font-medium');
        activeBtn.classList.remove('text-outline');
      }
    }

    // 2. LIVE FAANG BAR-RAISER: CANDIDATE MIC TOGGLE & RESPONSE CYCLING
    let isMicActive = false;
    function toggleSimMic() {
      isMicActive = !isMicActive;
      const micText = document.getElementById('mic-text');
      const micIcon = document.getElementById('mic-icon');
      if (isMicActive) {
        micText.innerText = "Listening... (Speaking)";
        micIcon.classList.add('animate-pulse');
        micIcon.style.color = "#4edea3";
      } else {
        micText.innerText = "Push to Speak";
        micIcon.classList.remove('animate-pulse');
        micIcon.style.color = "#ffb4ab";
      }
    }

    const responses = [
      '"We decouple the write quorum by electing regional follower-leases with monotonic epoch generation counters. When a lease expires, we fall back to a pessimistic fencing token verified at the RocksDB storage engine layer before fsync commit..."',
      '"To mitigate p99 latency spikes during cross-region packet drops, we implement speculative retry hedges with an exponential backoff jitter cap at 85ms, routing degraded requests to read-only replica snapshots with read-your-writes session tokens."',
      '"If the trans-Atlantic fiber splits entirely, the Raft majority leader in US-East maintains quorum, while the EU-Central cluster enters read-only fallback mode with monotonic epoch barriers, rejecting conflicting mutations."'
    ];
    let responseIdx = 0;
    function cycleCandidateResponse() {
      responseIdx = (responseIdx + 1) % responses.length;
      document.getElementById('candidate-transcript-text').innerText = responses[responseIdx];
    }

    // 3. CHAOS CANVAS: WAN LATENCY SLIDER DYNAMICS
    function handleChaosSlider(val) {
      document.getElementById('slider-latency-val').innerText = val + ' ms';
      document.getElementById('wan-latency-display').innerText = val + 'ms RTT';
      
      const line = document.getElementById('wan-cable-line');
      const statusBadge = document.getElementById('chaos-status-badge');
      const p99Text = document.getElementById('p99-metric-text');
      const dropText = document.getElementById('drop-rate-text');
      const euBox = document.getElementById('node-eu-box');

      if (val < 180) {
        // Nominal
        line.style.backgroundColor = '#4edea3';
        statusBadge.className = "font-label-mono text-[10px] uppercase px-2 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/30";
        statusBadge.innerText = "Leader Stable • Quorum Healthy";
        p99Text.innerText = (parseFloat(val) * 0.85).toFixed(1) + " ms";
        p99Text.className = "text-lg font-bold text-secondary";
        dropText.innerText = "0.00%";
        euBox.style.borderColor = "rgba(144, 143, 160, 0.4)";
      } else if (val < 450) {
        // Degraded
        line.style.backgroundColor = '#ffb95f';
        statusBadge.className = "font-label-mono text-[10px] uppercase px-2 py-0.5 rounded bg-tertiary/10 text-tertiary border border-tertiary/30";
        statusBadge.innerText = "WAN Jitter High • Replicating Async";
        p99Text.innerText = (parseFloat(val) * 1.4).toFixed(1) + " ms";
        p99Text.className = "text-lg font-bold text-tertiary";
        dropText.innerText = "4.12%";
        euBox.style.borderColor = "#ffb95f";
      } else {
        // Partition / Split
        line.style.backgroundColor = '#ffb4ab';
        statusBadge.className = "font-label-mono text-[10px] uppercase px-2 py-0.5 rounded bg-error/10 text-error border border-error/30";
        statusBadge.innerText = "Network Partition • Quorum Asymmetric";
        p99Text.innerText = "TIMEOUT (>800ms)";
        p99Text.className = "text-lg font-bold text-error";
        dropText.innerText = "42.8%";
        euBox.style.borderColor = "#ffb4ab";
      }
    }

    function injectSplitBrainFault() {
      const slider = document.getElementById('latency-slider');
      slider.value = 750;
      handleChaosSlider(750);
    }

    // 4. WHITEBOARD FAULT INJECTION WIDGET
    let isFiberCut = false;
    function triggerFiberSever() {
      isFiberCut = !isFiberCut;
      const banner = document.getElementById('whiteboard-alert-banner');
      const severText = document.getElementById('fiber-sever-text');
      const lagText = document.getElementById('queue-lag-text');
      const leaseText = document.getElementById('storage-lease-text');

      if (isFiberCut) {
        banner.classList.remove('hidden');
        severText.innerText = "Restore Trans-Atlantic Fiber";
        lagText.innerText = "4,290 msgs Lag (DLQ Activated)";
        lagText.className = "text-error font-medium";
        leaseText.innerText = "Epoch Fencing Blocked (Safe Fallback)";
        leaseText.className = "text-tertiary font-medium";
      } else {
        banner.classList.add('hidden');
        severText.innerText = "Simulate Severing Trans-Atlantic Fiber";
        lagText.innerText = "14 msgs (Realtime)";
        lagText.className = "text-secondary font-medium";
        leaseText.innerText = "Epoch #429 Verified";
        leaseText.className = "text-secondary font-medium";
      }
    }

    // 5. CURRICULUM FILTER TOGGLES
    function filterCurriculum(category) {
      // Update filter button styling
      const buttons = document.querySelectorAll('.curriculum-filter-btn');
      buttons.forEach(btn => {
        btn.classList.remove('bg-surface-container-high', 'text-white', 'border-primary/40');
        btn.classList.add('bg-surface-container', 'text-outline', 'border-outline-variant/20');
      });
      event.target.classList.add('bg-surface-container-high', 'text-white', 'border-primary/40');
      event.target.classList.remove('bg-surface-container', 'text-outline', 'border-outline-variant/20');

      // Filter cards
      const cards = document.querySelectorAll('.module-card');
      cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category').includes(category)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // 6. BILLING CYCLE TOGGLE (MONTHLY VS ANNUAL)
    function toggleBilling(cycle) {
      const mBtn = document.getElementById('billing-monthly-btn');
      const aBtn = document.getElementById('billing-annual-btn');
      const priceSandbox = document.getElementById('price-sandbox');
      const priceStaff = document.getElementById('price-staff');
      const pricePrincipal = document.getElementById('price-principal');

      if (cycle === 'annual') {
        aBtn.classList.add('bg-surface-container-highest', 'text-white', 'font-medium');
        aBtn.classList.remove('text-outline');
        mBtn.classList.remove('bg-surface-container-highest', 'text-white', 'font-medium');
        mBtn.classList.add('text-outline');

        priceSandbox.innerText = "$31";
        priceStaff.innerText = "$71";
        pricePrincipal.innerText = "$159";
      } else {
        mBtn.classList.add('bg-surface-container-highest', 'text-white', 'font-medium');
        mBtn.classList.remove('text-outline');
        aBtn.classList.remove('bg-surface-container-highest', 'text-white', 'font-medium');
        aBtn.classList.add('text-outline');

        priceSandbox.innerText = "$39";
        priceStaff.innerText = "$89";
        pricePrincipal.innerText = "$199";
      }
    }

    // 7. ACCORDION LOGIC
    function toggleAccordion(id) {
      const content = document.getElementById(id);
      const icon = document.getElementById('icon-' + id);
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      }
    }

    // 8. CLI COMMAND COPY HELPER
    function copyCliCommand() {
      const cmd = document.getElementById('terminal-cli-command').innerText;
      navigator.clipboard.writeText(cmd).then(() => {
        const copyLabel = document.getElementById('copy-label');
        const copyIcon = document.getElementById('copy-icon');
        copyLabel.innerText = "Copied!";
        copyIcon.innerText = "check";
        setTimeout(() => {
          copyLabel.innerText = "Copy";
          copyIcon.innerText = "content_copy";
        }, 2000);
      });
    }

    // 9. KEYBOARD SHORTCUT TRIGGER SIMULATION
    document.addEventListener('keydown', function(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const cmdBtn = document.getElementById('cmd-palette-btn');
        cmdBtn.click();
      }
    });

    document.getElementById('cmd-palette-btn').addEventListener('click', function() {
      switchDemoTab('chaos-canvas');
      const demo = document.getElementById('simulator');
      demo.scrollIntoView({ behavior: 'smooth' });
    });
  </script>

      </div>
    </>
  );
}
