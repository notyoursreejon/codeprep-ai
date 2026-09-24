const fs = require('fs');

const htmlContent = fs.readFileSync('C:/Users/Your Sreejon/.gemini/antigravity/brain/4c48b83d-413e-4367-9e0d-e6b94ca3f617/.system_generated/steps/845/content.md', 'utf8');

// Extract the body content
const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
let bodyHtml = bodyMatch ? bodyMatch[1] : '';

// Convert class to className
bodyHtml = bodyHtml.replace(/class="/g, 'className="');
// Convert onclick to onClick
bodyHtml = bodyHtml.replace(/onclick="/g, 'onClick="');
// Remove comments
bodyHtml = bodyHtml.replace(/<!--[\s\S]*?-->/g, '');

// Self close tags
const voidElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
for (const tag of voidElements) {
    const regex = new RegExp(`<${tag}([^>]*[^/])>`, 'gi');
    bodyHtml = bodyHtml.replace(regex, `<${tag}$1/>`);
}

// Convert inline styles like style="width: 96%" to style={{width: '96%'}}
bodyHtml = bodyHtml.replace(/style="([^"]+)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(rule => {
        if (!rule.trim()) return;
        let [key, value] = rule.split(':').map(s => s.trim());
        // camelCase the key
        key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[key] = value;
    });
    return `style={${JSON.stringify(styleObj)}}`;
});


const reactCode = `
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
        ${bodyHtml.replace(/href="#login"/g, 'href="/login"').replace(/href="#simulator"/g, 'href="/dashboard"')}
      </div>
    </>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', reactCode);
