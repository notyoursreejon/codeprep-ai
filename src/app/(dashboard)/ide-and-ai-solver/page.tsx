export default function Page() {
  return (
    <div className="bg-surface-container-lowest font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen" dangerouslySetInnerHTML={{ __html: `<aside class="fixed left-0 top-0 bottom-0 w-64 bg-surface-container-low/90 backdrop-blur-xl z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div class="flex flex-col"><div class="h-14 px-gutter flex items-center justify-between"><a href="/dashboard" class="flex items-center gap-space-sm"><img alt="CodePrep AI Logo" class="h-8 w-auto object-contain" src="/logo.svg"/><span class="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">CodePrep AI</span></a><span class="font-label-caps text-label-caps px-space-xs py-0.5 rounded-lg bg-secondary-container text-on-secondary-container uppercase">PRO</span></div><div class="px-gutter py-space-sm"><nav class="flex flex-col gap-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-inner"><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="dashboard" href="/dashboard"><span class="material-symbols-outlined text-[18px]">grid_view</span><span class="font-body-md text-body-md">Dashboard</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="ide-and-ai-solver" href="/ide-and-ai-solver"><span class="material-symbols-outlined text-[18px]">terminal</span><span class="font-body-md text-body-md">IDE &amp; AI Solver</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="system-design" href="/system-design"><span class="material-symbols-outlined text-[18px]">hub</span><span class="font-body-md text-body-md">System Design</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="behavioral-star" href="/star-method"><span class="material-symbols-outlined text-[18px]">psychology</span><span class="font-body-md text-body-md">Behavioral STAR</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="resume-ats" href="/resume"><span class="material-symbols-outlined text-[18px]">description</span><span class="font-body-md text-body-md">Resume ATS</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="cs-fundamentals" href="/fundamentals"><span class="material-symbols-outlined text-[18px]">menu_book</span><span class="font-body-md text-body-md">CS Fundamentals</span></a><a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="/settings"><span class="material-symbols-outlined text-[18px]">settings</span><span class="font-body-md text-body-md">Settings</span></a></nav></div></div><div class="p-gutter flex flex-col gap-space-sm"><div class="flex items-center justify-between px-space-md py-space-sm rounded-lg bg-surface-container"><div class="flex items-center gap-space-xs"><span class="text-[14px]">🔥</span><span class="font-code-sm text-code-sm text-on-surface">14-day streak</span></div><span class="font-label-caps text-label-caps text-tertiary">Active</span></div><div class="flex items-center justify-between px-space-md py-space-sm rounded-lg bg-surface-container-lowest"><div class="flex items-center gap-space-xs"><span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span><span class="font-code-sm text-code-sm text-on-surface-variant">AI Engine v4.2</span></div><span class="font-label-caps text-label-caps text-on-surface-variant">Online</span></div></div></aside><div class="pl-64 flex flex-col min-h-screen"><header class="fixed top-0 left-64 right-0 h-14 bg-surface-container-lowest/80 backdrop-blur-xl z-40 flex items-center justify-between px-gutter-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div class="flex items-center gap-space-sm"><span class="font-code-sm text-code-sm text-on-surface-variant">Workspace</span><span class="text-outline text-xs">/</span><span class="font-code-sm text-code-sm text-on-surface-variant">LeetCode Hard</span><span class="text-outline text-xs">/</span><span class="font-code-sm text-code-sm text-on-surface font-medium">LRU Cache</span></div><div class="flex items-center gap-space-md"><button class="flex items-center justify-between w-80 px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors shadow-inner" type="button"><div class="flex items-center gap-space-sm"><span class="material-symbols-outlined text-[16px]">search</span><span class="font-body-sm text-body-sm">Search problems, algorithms...</span></div><kbd class="font-code-sm text-code-sm px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">⌘K</kbd></button><div class="flex items-center gap-space-xs"><div class="hidden xl:flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container"><span class="material-symbols-outlined text-primary text-[16px]">token</span><span class="font-code-sm text-code-sm text-on-surface-variant">94,200 / 100k</span></div><button class="p-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button"><span class="material-symbols-outlined text-[18px]">volume_up</span></button><button class="relative p-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button"><span class="material-symbols-outlined text-[18px]">notifications</span><span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-error"></span></button></div><div class="flex items-center gap-space-sm pl-space-sm"><img alt="Profile" class="w-8 h-8 rounded-full object-cover" src="/avatar.png"/><div class="hidden md:flex flex-col"><span class="font-body-sm text-body-sm font-semibold text-on-surface leading-tight">Alex Chen</span><span class="font-label-caps text-label-caps text-primary leading-tight">Staff Tier</span></div></div></div></header><main class="w-full pt-14 flex-1 bg-surface-container-lowest"><div class="flex flex-col w-full h-[calc(100vh-3.5rem)] overflow-hidden bg-surface-container-lowest">
<!-- IDE Control Header Strip -->
<div class="flex-none h-13 px-gutter-lg bg-surface-container-low/95 backdrop-blur-md flex items-center justify-between shadow-sm z-30">
<div class="flex items-center gap-space-md min-w-0">
<div class="flex items-center gap-space-sm">
<span class="font-headline-sm text-headline-sm font-semibold text-on-surface truncate">42. Trapping Rain Water</span>
<span class="font-label-caps text-label-caps px-2 py-0.5 rounded bg-error-container/40 text-error uppercase font-medium">Hard</span>
<span class="hidden md:inline-flex font-code-sm text-code-sm text-on-surface-variant/80 px-2 py-0.5 rounded bg-surface-container">61.2% Acc.</span>
</div>
<div class="hidden lg:flex items-center gap-1.5 pl-space-xs">
<span class="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Google</span>
<span class="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Meta</span>
<span class="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Apple</span>
</div>
</div>
<!-- Right Controls: Language Selector, Timer, Actions -->
<div class="flex items-center gap-space-sm flex-none">
<!-- Language Selector -->
<div class="relative">
<button class="flex items-center gap-2 px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-code-sm text-code-sm hover:bg-surface-container-high transition-colors" id="lang-select-btn" type="button">
<span class="w-2 h-2 rounded-full bg-primary-container"></span>
<span>Python 3 (v3.11)</span>
<span class="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
</button>
</div>
<!-- Stop Watch Session Timer -->
<div class="flex items-center gap-1.5 px-space-md py-1 rounded-lg bg-surface-container-lowest text-on-surface-variant font-code-sm text-code-sm">
<span class="material-symbols-outlined text-[15px] text-tertiary">timer</span>
<span class="font-medium text-on-surface" id="session-timer">18:42</span>
<button class="hover:text-on-surface transition-colors ml-0.5" id="timer-toggle-btn" title="Pause / Resume" type="button">
<span class="material-symbols-outlined text-[16px]" id="timer-icon">pause</span>
</button>
</div>
<!-- Quick Action Buttons -->
<button class="p-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Reset Code Template" type="button">
<span class="material-symbols-outlined text-[18px]">restart_alt</span>
</button>
<button class="hidden sm:flex items-center gap-1 px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-code-sm text-code-sm" title="Prettify / Format" type="button">
<span class="material-symbols-outlined text-[16px]">format_align_left</span>
<span>Format</span>
<kbd class="text-[10px] opacity-60">⌘S</kbd>
</button>
<button class="flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high hover:text-primary transition-all font-code-sm text-code-sm active:scale-95 shadow-sm" id="run-code-btn" type="button">
<span class="material-symbols-outlined text-[16px] text-tertiary">play_arrow</span>
<span>Run</span>
<kbd class="hidden md:inline text-[10px] text-on-surface-variant">⌘↵</kbd>
</button>
<button class="relative group flex items-center gap-1.5 px-space-lg py-1.5 rounded-lg bg-gradient-to-r from-primary-container via-inverse-primary to-secondary-container text-on-primary-fixed font-headline-sm text-body-sm font-semibold shadow-md hover:shadow-[0_0_20px_rgba(128,131,255,0.4)] transition-all active:scale-[0.98]" id="submit-code-btn" type="button">
<span class="material-symbols-outlined text-[16px]">cloud_upload</span>
<span>Submit</span>
</button>
<!-- Toggle AI Drawer -->
<button class="flex items-center gap-1 px-space-sm py-1.5 rounded-lg bg-secondary-container/40 text-on-secondary-container hover:bg-secondary-container/70 transition-colors font-code-sm text-code-sm ml-1" id="toggle-copilot-btn" title="Toggle AI Copilot" type="button">
<span class="material-symbols-outlined text-[17px] text-secondary">psychology</span>
<span class="hidden xl:inline">AI Mentor</span>
</button>
</div>
</div>
<!-- Primary Multi-Pane Workspace -->
<div class="flex-1 flex overflow-hidden relative">
<!-- LEFT PANE: Problem Specification & Meta (Tabs) -->
<div class="w-1/3 min-w-[340px] max-w-[520px] flex flex-col bg-surface-container-low shadow-md overflow-hidden" id="left-pane">
<!-- Problem Tabs Strip -->
<div class="flex-none h-11 px-gutter bg-surface-container flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<button class="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm font-medium flex items-center gap-1.5 shadow-sm">
<span class="material-symbols-outlined text-[16px] text-primary">description</span>
<span>Description</span>
</button>
<button class="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm">
<span>Submissions</span>
<span class="ml-1 text-[11px] px-1 rounded bg-surface-container-highest">4</span>
</button>
<button class="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm">
<span>Editorial</span>
</button>
</div>
<div class="flex items-center gap-1">
<span class="font-code-sm text-code-sm px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-medium">O(N) Time</span>
<span class="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-medium">O(1) Space</span>
</div>
</div>
<!-- Problem Scrollable Description Body -->
<div class="flex-1 overflow-y-auto p-gutter-lg flex flex-col gap-space-lg text-on-surface">
<div class="flex flex-col gap-space-sm">
<p class="font-body-md text-body-md leading-relaxed text-on-surface/90">
            Given <code class="font-code-sm text-code-sm px-1.5 py-0.5 rounded bg-surface-container-highest text-primary">n</code> non-negative integers representing an elevation map where the width of each bar is <code class="font-code-sm text-code-sm px-1.5 py-0.5 rounded bg-surface-container-highest text-primary">1</code>, compute how much water it can trap after raining.
          </p>
</div>
<!-- Inline Visual Elevation Graphic (SVG representation of heights [0,1,0,2,1,0,1,3,2,1,2,1]) -->
<div class="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs shadow-inner">
<div class="flex items-center justify-between text-on-surface-variant">
<span class="font-label-caps text-label-caps uppercase text-outline">Elevation Cross-Section (Example 1)</span>
<span class="font-code-sm text-code-sm text-tertiary flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span> 6 Units Trapped
            </span>
</div>
<div class="h-28 w-full flex items-end justify-between px-2 pt-2 bg-surface-container-lowest/60 rounded-lg overflow-hidden">
<!-- Heights: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] with trapped water overlay -->
<div class="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div class="w-full bg-surface-variant rounded-t-xs h-[0%]"></div><span class="text-[9px] text-on-surface-variant/50 mt-1">0</span></div>
<div class="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div class="w-full bg-outline-variant rounded-t-xs h-[33%]"></div><span class="text-[9px] text-on-surface-variant/50 mt-1">1</span></div>
<div class="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div class="w-full bg-primary/40 rounded-t-xs h-[33%] flex items-center justify-center"><span class="text-[9px] text-primary font-code-sm">1</span></div><span class="text-[9px] text-on-surface-variant/50 mt-1">0</span></div>
<div class="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div class="w-full bg-outline-variant rounded-t-xs h-[66%]"></div><span class="text-[9px] text-on-surface-variant/50 mt-1">2</span></div>
<div class="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div class="w-full bg-primary/40 rounded-t-xs h-[33%]"><div class="w-full bg-outline-variant h-[50%] mt-[50%]"></div></div><span class="text-[9px] text-on-surface-variant/50 mt-1">1</span></div>
<div class="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div class="w-full bg-primary/40 rounded-t-xs h-[66%] flex items-center justify-center"><span class="text-[9px] text-primary font-code-sm">2</span></div><span class="text-[9px] text-on-surface-variant/50 mt-1">0</span></div>
<div class="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div class="w-full bg-primary/40 rounded-t-xs h-[66%]"><div class="w-full bg-outline-variant h-[50%] mt-[50%]"></div></div><span class="text-[9px] text-on-surface-variant/50 mt-1">1</span></div>
<div class="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div class="w-full bg-outline rounded-t-xs h-[100%]"></div><span class="text-[9px] text-on-surface-variant/50 mt-1">3</span></div>
<div class="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div class="w-full bg-outline-variant rounded-t-xs h-[66%]"></div><span class="text-[9px] text-on-surface-variant/50 mt-1">2</span></div>
<div class="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div class="w-full bg-primary/40 rounded-t-xs h-[66%]"><div class="w-full bg-outline-variant h-[50%] mt-[50%]"></div></div><span class="text-[9px] text-on-surface-variant/50 mt-1">1</span></div>
<div class="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div class="w-full bg-outline-variant rounded-t-xs h-[66%]"></div><span class="text-[9px] text-on-surface-variant/50 mt-1">2</span></div>
<div class="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div class="w-full bg-outline-variant rounded-t-xs h-[33%]"></div><span class="text-[9px] text-on-surface-variant/50 mt-1">1</span></div>
</div>
<div class="flex items-center gap-space-md text-[11px] text-on-surface-variant font-code-sm pt-1">
<span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-xs bg-outline-variant"></span> Terrain Elevation</span>
<span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-xs bg-primary/50"></span> Trapped Liquid Volume</span>
</div>
</div>
<!-- Example 1 -->
<div class="flex flex-col gap-space-xs">
<span class="font-body-md text-body-md font-semibold text-on-surface">Example 1:</span>
<div class="p-space-md rounded-lg bg-surface-container font-code-md text-code-md flex flex-col gap-1.5">
<div class="flex gap-2">
<span class="text-on-surface-variant select-none w-14">Input:</span>
<span class="text-on-surface font-medium">height = [0,1,0,2,1,0,1,3,2,1,2,1]</span>
</div>
<div class="flex gap-2">
<span class="text-on-surface-variant select-none w-14">Output:</span>
<span class="text-tertiary font-semibold">6</span>
</div>
<div class="flex gap-2 text-on-surface-variant text-code-sm">
<span class="select-none w-14">Explanation:</span>
<span>The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped.</span>
</div>
</div>
</div>
<!-- Example 2 -->
<div class="flex flex-col gap-space-xs">
<span class="font-body-md text-body-md font-semibold text-on-surface">Example 2:</span>
<div class="p-space-md rounded-lg bg-surface-container font-code-md text-code-md flex flex-col gap-1.5">
<div class="flex gap-2">
<span class="text-on-surface-variant select-none w-14">Input:</span>
<span class="text-on-surface font-medium">height = [4,2,0,3,2,5]</span>
</div>
<div class="flex gap-2">
<span class="text-on-surface-variant select-none w-14">Output:</span>
<span class="text-tertiary font-semibold">9</span>
</div>
</div>
</div>
<!-- Constraints -->
<div class="flex flex-col gap-space-sm pt-space-xs">
<span class="font-body-md text-body-md font-semibold text-on-surface">Constraints:</span>
<ul class="flex flex-col gap-1.5 pl-2">
<li class="flex items-center gap-2 font-code-sm text-code-sm text-on-surface-variant">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
<code class="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-medium">n == height.length</code>
</li>
<li class="flex items-center gap-2 font-code-sm text-code-sm text-on-surface-variant">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
<code class="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-medium">1 &lt;= n &lt;= 2 * 10<sup>4</sup></code>
</li>
<li class="flex items-center gap-2 font-code-sm text-code-sm text-on-surface-variant">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
<code class="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-medium">0 &lt;= height[i] &lt;= 10<sup>5</sup></code>
</li>
</ul>
</div>
<!-- Follow-up Question Prompt -->
<div class="p-space-md rounded-xl bg-surface-container-highest/40 flex items-start gap-space-md">
<span class="material-symbols-outlined text-primary text-[20px] mt-0.5">tips_and_updates</span>
<div class="flex flex-col gap-0.5">
<span class="font-body-sm text-body-sm font-semibold text-on-surface">Pro Follow-up</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">Can you solve this in O(1) auxiliary space without building explicit prefix max arrays?</span>
</div>
</div>
</div>
</div>
<!-- CENTER PANE: Code Editor & Bottom Test Results Pane -->
<div class="flex-1 flex flex-col min-w-0 bg-surface-container-lowest overflow-hidden">
<!-- Editor Filename & Status Ribbon -->
<div class="flex-none h-11 px-gutter bg-surface-container-low flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<div class="flex items-center gap-2 px-space-md py-1.5 rounded-t-lg bg-surface-container-lowest text-on-surface font-code-sm text-code-sm font-medium">
<span class="text-primary font-semibold text-[13px]">Py</span>
<span>solution.py</span>
<span class="w-2 h-2 rounded-full bg-tertiary/70 ml-1"></span>
</div>
<span class="font-code-sm text-code-sm text-outline px-2">UTF-8</span>
<span class="font-code-sm text-code-sm text-outline">Spaces: 4</span>
</div>
<div class="flex items-center gap-space-sm text-on-surface-variant">
<span class="font-code-sm text-code-sm text-outline">Ln 14, Col 28</span>
<button class="p-1 rounded hover:bg-surface-container hover:text-on-surface transition-colors" title="Copy Solution" type="button">
<span class="material-symbols-outlined text-[16px]">content_copy</span>
</button>
<button class="p-1 rounded hover:bg-surface-container hover:text-on-surface transition-colors" title="Settings" type="button">
<span class="material-symbols-outlined text-[16px]">tune</span>
</button>
</div>
</div>
<!-- Monaco Style Synthetic Code Editor Area -->
<div class="flex-1 flex overflow-hidden font-code-md text-code-md leading-[22px] bg-surface-container-lowest select-text relative">
<!-- Line Numbers Column -->
<div class="w-12 py-3 bg-surface-container-lowest flex flex-col text-right pr-3 select-none text-outline-variant font-code-sm">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span class="text-primary font-semibold">14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span>
</div>
<!-- Code Content Buffer with Active Line highlight & Syntax styling -->
<div class="flex-1 py-3 pl-2 overflow-y-auto font-code-md text-on-surface relative">
<!-- Active Line highlight bar at line 14 -->
<div class="absolute left-0 right-0 top-[299px] h-[22px] bg-surface-container/70 pointer-events-none"></div>
<div><span class="text-secondary font-medium">from</span> typing <span class="text-secondary font-medium">import</span> List</div>
<div><br/></div>
<div><span class="text-secondary font-medium">class</span> <span class="text-tertiary font-semibold">Solution</span>:</div>
<div>    <span class="text-secondary font-medium">def</span> <span class="text-primary font-semibold">trap</span>(<span class="text-on-surface">self</span>, <span class="text-on-surface-variant">height</span>: List[<span class="text-tertiary">int</span>]) -&gt; <span class="text-tertiary">int</span>:</div>
<div>        <span class="text-outline italic"># Guard edge condition: zero or insufficient walls</span></div>
<div>        <span class="text-secondary font-medium">if not</span> height <span class="text-secondary font-medium">or</span> <span class="text-primary">len</span>(height) &lt; <span class="text-primary-container">3</span>:</div>
<div>            <span class="text-secondary font-medium">return</span> <span class="text-primary-container">0</span></div>
<div><br/></div>
<div>        left, right = <span class="text-primary-container">0</span>, <span class="text-primary">len</span>(height) - <span class="text-primary-container">1</span></div>
<div>        left_max, right_max = height[left], height[right]</div>
<div>        water_trapped = <span class="text-primary-container">0</span></div>
<div><br/></div>
<div>        <span class="text-secondary font-medium">while</span> left &lt; right:</div>
<div class="relative"><span class="text-secondary font-medium">            <span class="text-secondary font-medium">if</span> left_max &lt; right_max:</span><span class="inline-block w-2 h-4 bg-primary align-middle ml-1 animate-pulse"></span></div>
<div>                left += <span class="text-primary-container">1</span></div>
<div>                left_max = <span class="text-primary">max</span>(left_max, height[left])</div>
<div>                water_trapped += left_max - height[left]</div>
<div>            <span class="text-secondary font-medium">else</span>:</div>
<div>                right -= <span class="text-primary-container">1</span></div>
<div>                right_max = <span class="text-primary">max</span>(right_max, height[right])</div>
<div>                water_trapped += right_max - height[right]</div>
<div><br/></div>
<div>        <span class="text-secondary font-medium">return</span> water_trapped</div>
<div><br/></div>
</div>
</div>
<!-- BOTTOM DOCK: Test Cases Console & Execution Profiler -->
<div class="h-64 flex-none flex flex-col bg-surface-container-low shadow-xl" id="test-console">
<!-- Dock Header Navigation -->
<div class="h-10 px-gutter bg-surface-container flex items-center justify-between flex-none">
<div class="flex items-center gap-space-xs">
<button class="px-space-md py-1 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm font-medium flex items-center gap-1.5 shadow-sm">
<span class="material-symbols-outlined text-[15px] text-tertiary">check_circle</span>
<span>Test Result</span>
</button>
<button class="px-space-md py-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm">
<span>Standard Output</span>
</button>
</div>
<!-- Execution Telemetry Badge -->
<div class="flex items-center gap-space-md">
<div class="flex items-center gap-space-sm font-code-sm text-code-sm">
<span class="text-tertiary font-semibold">Accepted</span>
<span class="text-outline">|</span>
<span class="text-on-surface">Runtime: <strong class="text-tertiary">48ms</strong></span>
<span class="text-outline-variant font-normal">(Beats 96.4%)</span>
<span class="text-outline">|</span>
<span class="text-on-surface">Memory: <strong class="text-secondary">18.2MB</strong></span>
<span class="text-outline-variant font-normal">(Beats 89.1%)</span>
</div>
<button class="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Collapse Console" type="button">
<span class="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
</button>
</div>
</div>
<!-- Test Case Selector Bar & Parameters -->
<div class="flex-1 p-space-md flex flex-col gap-space-sm overflow-y-auto">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<button class="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container text-on-surface font-code-sm text-code-sm font-medium shadow-sm">
<span class="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Case 1</span>
</button>
<button class="flex items-center gap-1.5 px-3 py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-code-sm text-code-sm transition-colors">
<span class="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Case 2</span>
</button>
<button class="flex items-center gap-1.5 px-3 py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-code-sm text-code-sm transition-colors">
<span class="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Case 3</span>
</button>
<button class="flex items-center gap-1 px-2.5 py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-code-sm text-code-sm transition-colors">
<span class="material-symbols-outlined text-[14px]">add</span>
<span>Custom</span>
</button>
</div>
<span class="font-code-sm text-code-sm text-on-surface-variant">All 32 test suites passed successfully</span>
</div>
<!-- Visual Input & Output Comparison Block -->
<div class="grid grid-cols-2 gap-space-md flex-1">
<div class="flex flex-col gap-1 p-space-sm rounded-lg bg-surface-container font-code-sm text-code-sm">
<span class="text-on-surface-variant text-[11px] font-label-caps uppercase">Input height =</span>
<div class="p-2 rounded bg-surface-container-lowest text-on-surface font-mono overflow-x-auto whitespace-nowrap">
                [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
              </div>
</div>
<div class="flex flex-col gap-1 p-space-sm rounded-lg bg-surface-container font-code-sm text-code-sm">
<div class="flex items-center justify-between">
<span class="text-on-surface-variant text-[11px] font-label-caps uppercase">Output vs Expected</span>
<span class="text-tertiary font-semibold text-[11px]">Match ✓</span>
</div>
<div class="grid grid-cols-2 gap-2">
<div class="p-2 rounded bg-surface-container-lowest text-tertiary font-semibold">
                  6 <span class="text-outline text-[11px] font-normal">(Actual)</span>
</div>
<div class="p-2 rounded bg-surface-container-lowest text-on-surface font-semibold">
                  6 <span class="text-outline text-[11px] font-normal">(Expected)</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- RIGHT SLIDE-IN DRAWER: AI Explainer & Co-Pilot Mentor -->
<div class="w-[380px] xl:w-[420px] flex flex-col bg-surface-container shadow-2xl flex-none transition-all duration-300" id="ai-drawer">
<!-- AI Header -->
<div class="h-11 px-gutter bg-surface-container-high flex items-center justify-between flex-none">
<div class="flex items-center gap-space-sm">
<div class="w-6 h-6 rounded-md bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span class="material-symbols-outlined text-[15px]">neurology</span>
</div>
<div class="flex flex-col">
<span class="font-body-sm text-body-sm font-semibold text-on-surface leading-tight">CodePrep AI Mentor</span>
<span class="font-label-caps text-[10px] text-tertiary leading-tight">Claude 3.5 Sonnet / High Precision</span>
</div>
</div>
<div class="flex items-center gap-1">
<button class="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Clear Conversation" type="button">
<span class="material-symbols-outlined text-[16px]">clear_all</span>
</button>
<button class="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" id="close-drawer-btn" title="Minimize Drawer" type="button">
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
<!-- Quick Interactive Prompt Action Chips -->
<div class="px-space-md py-2 bg-surface-container-low flex gap-2 overflow-x-auto whitespace-nowrap flex-none scrollbar-none">
<button class="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-code-sm text-code-sm hover:bg-surface-container-high transition-colors shadow-sm flex items-center gap-1">
<span>⚡ Time Complexity</span>
</button>
<button class="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-code-sm text-code-sm hover:bg-surface-container-high transition-colors shadow-sm flex items-center gap-1">
<span>💡 Give Hint</span>
</button>
<button class="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-code-sm text-code-sm hover:bg-surface-container-high transition-colors shadow-sm flex items-center gap-1">
<span>⚔️ Brute vs Optimal</span>
</button>
</div>
<!-- AI Chat Stream Area -->
<div class="flex-1 overflow-y-auto p-gutter flex flex-col gap-space-md font-body-sm text-body-sm">
<!-- User Query Bubble -->
<div class="flex flex-col items-end gap-1 self-end max-w-[90%]">
<div class="p-space-md rounded-xl rounded-tr-xs bg-primary-container text-on-primary-container shadow-sm">
<p class="text-[13px] leading-relaxed">
              Why can we safely move the pointer that has the smaller height without missing trapped water?
            </p>
</div>
<span class="font-code-sm text-[10px] text-outline">You • 18:39</span>
</div>
<!-- AI Assistant Reasoning Bubble -->
<div class="flex flex-col items-start gap-1 self-start max-w-[98%]">
<div class="p-space-md rounded-xl rounded-tl-xs bg-surface-container-low shadow-sm flex flex-col gap-space-sm text-on-surface">
<div class="flex items-center gap-1.5 text-secondary font-code-sm text-code-sm">
<span class="material-symbols-outlined text-[15px]">auto_awesome</span>
<span>Invariant Verification</span>
</div>
<p class="text-[13px] leading-relaxed text-on-surface/90">
              The volume of water trapped above bar <code class="font-code-sm text-primary">i</code> is determined strictly by:
            </p>
<div class="p-space-sm rounded-lg bg-surface-container-lowest font-code-sm text-code-sm text-tertiary">
              water[i] = max(0, min(max_L, max_R) - height[i])
            </div>
<p class="text-[13px] leading-relaxed text-on-surface/90">
              When <code class="font-code-sm text-primary">left_max &lt; right_max</code>, the water trapped at <code class="font-code-sm text-primary">left</code> is bounded <em>solely</em> by <code class="font-code-sm text-primary">left_max</code>. We do <strong>not</strong> need to know the exact future maxima on the right, because we already hold a wall at <code class="font-code-sm text-secondary">right_max</code> that is guaranteed to be equal or taller!
            </p>
<!-- ASCII Graphic representation -->
<div class="p-space-sm rounded bg-surface-container-lowest font-code-sm text-[11px] leading-snug text-on-surface-variant font-mono">
              [left_max = 2] ~ ~ ~ ~ ~ ~ [right_max = 3]<br/>
                            ▲<br/>
                 Bounded by 2 (lower limit)
            </div>
<!-- Suggestion Action Card -->
<div class="p-space-sm rounded-lg bg-surface-container flex items-center justify-between gap-2 mt-1">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-tertiary text-[18px]">verified</span>
<span class="text-[12px] font-medium text-on-surface">O(1) Memory Invariant Verified</span>
</div>
<button class="px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[11px] font-code-sm font-medium hover:bg-secondary-container/80 transition-colors">
                Apply Diff
              </button>
</div>
</div>
<span class="font-code-sm text-[10px] text-outline">CodePrep AI • Claude 3.5 Sonnet</span>
</div>
</div>
<!-- AI Prompt Input Box -->
<div class="p-gutter bg-surface-container-low flex-none">
<form class="relative flex items-center" id="ai-prompt-form" onsubmit="event.preventDefault();">
<input class="w-full pl-space-md pr-10 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" placeholder="Ask AI anything about this problem or code..." type="text"/>
<button class="absolute right-2 p-1.5 rounded-lg bg-primary-container text-on-primary-container hover:opacity-90 transition-opacity" type="submit">
<span class="material-symbols-outlined text-[16px]">arrow_upward</span>
</button>
</form>
<div class="flex items-center justify-between pt-2 px-1 text-[11px] text-outline font-code-sm">
<span>Press Enter to generate</span>
<span>Tokens: 94.2k remaining</span>
</div>
</div>
</div>
</div>
</div>
<script>
  // Simple micro-interactions: Drawer toggle, Timer, Run/Submit simulation
  (function() {
    const toggleBtn = document.getElementById('toggle-copilot-btn');
    const closeBtn = document.getElementById('close-drawer-btn');
    const drawer = document.getElementById('ai-drawer');

    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => {
        drawer.classList.toggle('hidden');
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => {
        drawer.classList.add('hidden');
      });
    }

    // Timer simulation
    let seconds = 18 * 60 + 42;
    let isRunning = true;
    const timerElem = document.getElementById('session-timer');
    const toggleTimerBtn = document.getElementById('timer-toggle-btn');
    const timerIcon = document.getElementById('timer-icon');

    setInterval(() => {
      if (isRunning && timerElem) {
        seconds++;
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        timerElem.textContent = \`\${mins}:\${secs}\`;
      }
    }, 1000);

    if (toggleTimerBtn) {
      toggleTimerBtn.addEventListener('click', () => {
        isRunning = !isRunning;
        timerIcon.textContent = isRunning ? 'pause' : 'play_arrow';
      });
    }

    // Run Code Toast Simulation
    const runBtn = document.getElementById('run-code-btn');
    if (runBtn) {
      runBtn.addEventListener('click', () => {
        const originalText = runBtn.innerHTML;
        runBtn.innerHTML = '<span class="material-symbols-outlined text-[16px] animate-spin">refresh</span><span>Running...</span>';
        setTimeout(() => {
          runBtn.innerHTML = originalText;
        }, 600);
      });
    }
  })();
</script></main></div><div class="fixed bottom-space-lg right-space-lg z-50 flex flex-col gap-space-sm pointer-events-none"><div class="pointer-events-auto flex items-center justify-between gap-space-lg p-space-md rounded-xl bg-surface-container/90 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]"><div class="flex items-center gap-space-md"><div class="p-space-xs rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center"><span class="material-symbols-outlined text-[18px]">check_circle</span></div><div class="flex flex-col"><span class="font-body-sm text-body-sm font-semibold text-on-surface">Optimal Solution Detected</span><span class="font-code-sm text-code-sm text-on-surface-variant">LRU Cache O(1) passed all test suites</span></div></div><button class="text-on-surface-variant hover:text-on-surface p-space-xs" type="button"><span class="material-symbols-outlined text-[16px]">close</span></button></div></div>` }} />
  );
}