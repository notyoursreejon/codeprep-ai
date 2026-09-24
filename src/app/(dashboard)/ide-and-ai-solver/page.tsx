"use client";
import { useState } from "react";

export default function IDEAndAISolverPage() {
  const [activeTab, setActiveTab] = useState("Description");
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <>
      <div className="flex flex-col w-full h-[calc(100vh-3.5rem)] overflow-hidden bg-surface-container-lowest">
{/* IDE Control Header Strip */}
<div className="flex-none h-13 px-gutter-lg bg-surface-container-low/95 backdrop-blur-md flex items-center justify-between shadow-sm z-30">
<div className="flex items-center gap-space-md min-w-0">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface truncate">42. Trapping Rain Water</span>
<span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-error-container/40 text-error uppercase font-medium">Hard</span>
<span className="hidden md:inline-flex font-code-sm text-code-sm text-on-surface-variant/80 px-2 py-0.5 rounded bg-surface-container">61.2% Acc.</span>
</div>
<div className="hidden lg:flex items-center gap-1.5 pl-space-xs">
<span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Google</span>
<span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Meta</span>
<span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Apple</span>
</div>
</div>
{/* Right Controls: Language Selector, Timer, Actions */}
<div className="flex items-center gap-space-sm flex-none">
{/* Language Selector */}
<div className="relative">
<button className="flex items-center gap-2 px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-code-sm text-code-sm hover:bg-surface-container-high transition-colors" id="lang-select-btn" type="button">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span>Python 3 (v3.11)</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
</button>
</div>
{/* Stop Watch Session Timer */}
<div className="flex items-center gap-1.5 px-space-md py-1 rounded-lg bg-surface-container-lowest text-on-surface-variant font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[15px] text-tertiary">timer</span>
<span className="font-medium text-on-surface" id="session-timer">18:42</span>
<button className="hover:text-on-surface transition-colors ml-0.5" id="timer-toggle-btn" title="Pause / Resume" type="button">
<span className="material-symbols-outlined text-[16px]" id="timer-icon">pause</span>
</button>
</div>
{/* Quick Action Buttons */}
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Reset Code Template" type="button">
<span className="material-symbols-outlined text-[18px]">restart_alt</span>
</button>
<button className="hidden sm:flex items-center gap-1 px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-code-sm text-code-sm" title="Prettify / Format" type="button">
<span className="material-symbols-outlined text-[16px]">format_align_left</span>
<span>Format</span>
<kbd className="text-[10px] opacity-60">⌘S</kbd>
</button>
<button className="flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high hover:text-primary transition-all font-code-sm text-code-sm active:scale-95 shadow-sm" id="run-code-btn" type="button">
<span className="material-symbols-outlined text-[16px] text-tertiary">play_arrow</span>
<span>Run</span>
<kbd className="hidden md:inline text-[10px] text-on-surface-variant">⌘↵</kbd>
</button>
<button className="relative group flex items-center gap-1.5 px-space-lg py-1.5 rounded-lg bg-gradient-to-r from-primary-container via-inverse-primary to-secondary-container text-on-primary-fixed font-headline-sm text-body-sm font-semibold shadow-md hover:shadow-[0_0_20px_rgba(128,131,255,0.4)] transition-all active:scale-[0.98]" id="submit-code-btn" type="button">
<span className="material-symbols-outlined text-[16px]">cloud_upload</span>
<span>Submit</span>
</button>
{/* Toggle AI Drawer */}
<button className="flex items-center gap-1 px-space-sm py-1.5 rounded-lg bg-secondary-container/40 text-on-secondary-container hover:bg-secondary-container/70 transition-colors font-code-sm text-code-sm ml-1" onClick={() => setDrawerOpen(!drawerOpen)} title="Toggle AI Copilot" type="button">
<span className="material-symbols-outlined text-[17px] text-secondary">psychology</span>
<span className="hidden xl:inline">AI Mentor</span>
</button>
</div>
</div>
{/* Primary Multi-Pane Workspace */}
<div className="flex-1 flex overflow-hidden relative">
{/* LEFT PANE: Problem Specification & Meta (Tabs) */}
<div className="w-1/3 min-w-[340px] max-w-[520px] flex flex-col bg-surface-container-low shadow-md overflow-hidden" id="left-pane">
{/* Problem Tabs Strip */}
<div className="flex-none h-11 px-gutter bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm font-medium flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[16px] text-primary">description</span>
<span>Description</span>
</button>
<button className="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm">
<span>Submissions</span>
<span className="ml-1 text-[11px] px-1 rounded bg-surface-container-highest">4</span>
</button>
<button className="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm">
<span>Editorial</span>
</button>
</div>
<div className="flex items-center gap-1">
<span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-medium">O(N) Time</span>
<span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-medium">O(1) Space</span>
</div>
</div>
{activeTab === "Description" && (
<div className="flex-1 overflow-y-auto p-gutter-lg flex flex-col gap-space-lg text-on-surface">
<div className="flex flex-col gap-space-sm">
<p className="font-body-md text-body-md leading-relaxed text-on-surface/90">
            Given <code className="font-code-sm text-code-sm px-1.5 py-0.5 rounded bg-surface-container-highest text-primary">n</code> non-negative integers representing an elevation map where the width of each bar is <code className="font-code-sm text-code-sm px-1.5 py-0.5 rounded bg-surface-container-highest text-primary">1</code>, compute how much water it can trap after raining.
          </p>
</div>

<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs shadow-inner">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-caps text-label-caps uppercase text-outline">Elevation Cross-Section (Example 1)</span>
<span className="font-code-sm text-code-sm text-tertiary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> 6 Units Trapped
            </span>
</div>
<div className="h-28 w-full flex items-end justify-between px-2 pt-2 bg-surface-container-lowest/60 rounded-lg overflow-hidden">
{/* Heights: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] with trapped water overlay */}
<div className="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div className="w-full bg-surface-variant rounded-t-xs h-[0%]"></div><span className="text-[9px] text-on-surface-variant/50 mt-1">0</span></div>
<div className="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div className="w-full bg-outline-variant rounded-t-xs h-[33%]"></div><span className="text-[9px] text-on-surface-variant/50 mt-1">1</span></div>
<div className="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div className="w-full bg-primary/40 rounded-t-xs h-[33%] flex items-center justify-center"><span className="text-[9px] text-primary font-code-sm">1</span></div><span className="text-[9px] text-on-surface-variant/50 mt-1">0</span></div>
<div className="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div className="w-full bg-outline-variant rounded-t-xs h-[66%]"></div><span className="text-[9px] text-on-surface-variant/50 mt-1">2</span></div>
<div className="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div className="w-full bg-primary/40 rounded-t-xs h-[33%]"><div className="w-full bg-outline-variant h-[50%] mt-[50%]"></div></div><span className="text-[9px] text-on-surface-variant/50 mt-1">1</span></div>
<div className="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div className="w-full bg-primary/40 rounded-t-xs h-[66%] flex items-center justify-center"><span className="text-[9px] text-primary font-code-sm">2</span></div><span className="text-[9px] text-on-surface-variant/50 mt-1">0</span></div>
<div className="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div className="w-full bg-primary/40 rounded-t-xs h-[66%]"><div className="w-full bg-outline-variant h-[50%] mt-[50%]"></div></div><span className="text-[9px] text-on-surface-variant/50 mt-1">1</span></div>
<div className="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div className="w-full bg-outline rounded-t-xs h-[100%]"></div><span className="text-[9px] text-on-surface-variant/50 mt-1">3</span></div>
<div className="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div className="w-full bg-outline-variant rounded-t-xs h-[66%]"></div><span className="text-[9px] text-on-surface-variant/50 mt-1">2</span></div>
<div className="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div className="w-full bg-primary/40 rounded-t-xs h-[66%]"><div className="w-full bg-outline-variant h-[50%] mt-[50%]"></div></div><span className="text-[9px] text-on-surface-variant/50 mt-1">1</span></div>
<div className="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div className="w-full bg-outline-variant rounded-t-xs h-[66%]"></div><span className="text-[9px] text-on-surface-variant/50 mt-1">2</span></div>
<div className="flex flex-col items-center flex-1 h-full justify-end px-0.5"><div className="w-full bg-outline-variant rounded-t-xs h-[33%]"></div><span className="text-[9px] text-on-surface-variant/50 mt-1">1</span></div>
</div>
<div className="flex items-center gap-space-md text-[11px] text-on-surface-variant font-code-sm pt-1">
<span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-xs bg-outline-variant"></span> Terrain Elevation</span>
<span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-xs bg-primary/50"></span> Trapped Liquid Volume</span>
</div>
</div>
{/* Example 1 */}
<div className="flex flex-col gap-space-xs">
<span className="font-body-md text-body-md font-semibold text-on-surface">Example 1:</span>
<div className="p-space-md rounded-lg bg-surface-container font-code-md text-code-md flex flex-col gap-1.5">
<div className="flex gap-2">
<span className="text-on-surface-variant select-none w-14">Input:</span>
<span className="text-on-surface font-medium">height = [0,1,0,2,1,0,1,3,2,1,2,1]</span>
</div>
<div className="flex gap-2">
<span className="text-on-surface-variant select-none w-14">Output:</span>
<span className="text-tertiary font-semibold">6</span>
</div>
<div className="flex gap-2 text-on-surface-variant text-code-sm">
<span className="select-none w-14">Explanation:</span>
<span>The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped.</span>
</div>
</div>
</div>
{/* Example 2 */}
<div className="flex flex-col gap-space-xs">
<span className="font-body-md text-body-md font-semibold text-on-surface">Example 2:</span>
<div className="p-space-md rounded-lg bg-surface-container font-code-md text-code-md flex flex-col gap-1.5">
<div className="flex gap-2">
<span className="text-on-surface-variant select-none w-14">Input:</span>
<span className="text-on-surface font-medium">height = [4,2,0,3,2,5]</span>
</div>
<div className="flex gap-2">
<span className="text-on-surface-variant select-none w-14">Output:</span>
<span className="text-tertiary font-semibold">9</span>
</div>
</div>
</div>
{/* Constraints */}
<div className="flex flex-col gap-space-sm pt-space-xs">
<span className="font-body-md text-body-md font-semibold text-on-surface">Constraints:</span>
<ul className="flex flex-col gap-1.5 pl-2">
<li className="flex items-center gap-2 font-code-sm text-code-sm text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<code className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-medium">n == height.length</code>
</li>
<li className="flex items-center gap-2 font-code-sm text-code-sm text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<code className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-medium">1 &lt;= n &lt;= 2 * 10<sup>4</sup></code>
</li>
<li className="flex items-center gap-2 font-code-sm text-code-sm text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<code className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-medium">0 &lt;= height[i] &lt;= 10<sup>5</sup></code>
</li>
</ul>
</div>
{/* Follow-up Question Prompt */}
<div className="p-space-md rounded-xl bg-surface-container-highest/40 flex items-start gap-space-md">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">tips_and_updates</span>
<div className="flex flex-col gap-0.5">
<span className="font-body-sm text-body-sm font-semibold text-on-surface">Pro Follow-up</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Can you solve this in O(1) auxiliary space without building explicit prefix max arrays?</span>
</div>
</div>
</div>
)}
{activeTab !== "Description" && (
<div className="flex-1 p-space-lg text-on-surface-variant flex items-center justify-center font-code-sm">Content for {activeTab} coming soon...</div>
)}
</div>
{/* CENTER PANE: Code Editor & Bottom Test Results Pane */}
<div className="flex-1 flex flex-col min-w-0 bg-surface-container-lowest overflow-hidden">
{/* Editor Filename & Status Ribbon */}
<div className="flex-none h-11 px-gutter bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="flex items-center gap-2 px-space-md py-1.5 rounded-t-lg bg-surface-container-lowest text-on-surface font-code-sm text-code-sm font-medium">
<span className="text-primary font-semibold text-[13px]">Py</span>
<span>solution.py</span>
<span className="w-2 h-2 rounded-full bg-tertiary/70 ml-1"></span>
</div>
<span className="font-code-sm text-code-sm text-outline px-2">UTF-8</span>
<span className="font-code-sm text-code-sm text-outline">Spaces: 4</span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant">
<span className="font-code-sm text-code-sm text-outline">Ln 14, Col 28</span>
<button className="p-1 rounded hover:bg-surface-container hover:text-on-surface transition-colors" title="Copy Solution" type="button">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
</button>
<button className="p-1 rounded hover:bg-surface-container hover:text-on-surface transition-colors" title="Settings" type="button">
<span className="material-symbols-outlined text-[16px]">tune</span>
</button>
</div>
</div>
{/* Monaco Style Synthetic Code Editor Area */}
<div className="flex-1 flex overflow-hidden font-code-md text-code-md leading-[22px] bg-surface-container-lowest select-text relative">
{/* Line Numbers Column */}
<div className="w-12 py-3 bg-surface-container-lowest flex flex-col text-right pr-3 select-none text-outline-variant font-code-sm">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span className="text-primary font-semibold">14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span>
</div>
{/* Code Content Buffer with Active Line highlight & Syntax styling */}
<div className="flex-1 py-3 pl-2 overflow-y-auto font-code-md text-on-surface relative">
{/* Active Line highlight bar at line 14 */}
<div className="absolute left-0 right-0 top-[299px] h-[22px] bg-surface-container/70 pointer-events-none"></div>
<div><span className="text-secondary font-medium">from</span> typing <span className="text-secondary font-medium">import</span> List</div>
<div><br/></div>
<div><span className="text-secondary font-medium">class</span> <span className="text-tertiary font-semibold">Solution</span>:</div>
<div>    <span className="text-secondary font-medium">def</span> <span className="text-primary font-semibold">trap</span>(<span className="text-on-surface">self</span>, <span className="text-on-surface-variant">height</span>: List[<span className="text-tertiary">int</span>]) -&gt; <span className="text-tertiary">int</span>:</div>
<div>        <span className="text-outline italic"># Guard edge condition: zero or insufficient walls</span></div>
<div>        <span className="text-secondary font-medium">if not</span> height <span className="text-secondary font-medium">or</span> <span className="text-primary">len</span>(height) &lt; <span className="text-primary-container">3</span>:</div>
<div>            <span className="text-secondary font-medium">return</span> <span className="text-primary-container">0</span></div>
<div><br/></div>
<div>        left, right = <span className="text-primary-container">0</span>, <span className="text-primary">len</span>(height) - <span className="text-primary-container">1</span></div>
<div>        left_max, right_max = height[left], height[right]</div>
<div>        water_trapped = <span className="text-primary-container">0</span></div>
<div><br/></div>
<div>        <span className="text-secondary font-medium">while</span> left &lt; right:</div>
<div className="relative"><span className="text-secondary font-medium">            <span className="text-secondary font-medium">if</span> left_max &lt; right_max:</span><span className="inline-block w-2 h-4 bg-primary align-middle ml-1 animate-pulse"></span></div>
<div>                left += <span className="text-primary-container">1</span></div>
<div>                left_max = <span className="text-primary">max</span>(left_max, height[left])</div>
<div>                water_trapped += left_max - height[left]</div>
<div>            <span className="text-secondary font-medium">else</span>:</div>
<div>                right -= <span className="text-primary-container">1</span></div>
<div>                right_max = <span className="text-primary">max</span>(right_max, height[right])</div>
<div>                water_trapped += right_max - height[right]</div>
<div><br/></div>
<div>        <span className="text-secondary font-medium">return</span> water_trapped</div>
<div><br/></div>
</div>
</div>
{/* BOTTOM DOCK: Test Cases Console & Execution Profiler */}
<div className="h-64 flex-none flex flex-col bg-surface-container-low shadow-xl" id="test-console">
{/* Dock Header Navigation */}
<div className="h-10 px-gutter bg-surface-container flex items-center justify-between flex-none">
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-1 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm font-medium flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[15px] text-tertiary">check_circle</span>
<span>Test Result</span>
</button>
<button className="px-space-md py-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm text-body-sm">
<span>Standard Output</span>
</button>
</div>
{/* Execution Telemetry Badge */}
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-sm font-code-sm text-code-sm">
<span className="text-tertiary font-semibold">Accepted</span>
<span className="text-outline">|</span>
<span className="text-on-surface">Runtime: <strong className="text-tertiary">48ms</strong></span>
<span className="text-outline-variant font-normal">(Beats 96.4%)</span>
<span className="text-outline">|</span>
<span className="text-on-surface">Memory: <strong className="text-secondary">18.2MB</strong></span>
<span className="text-outline-variant font-normal">(Beats 89.1%)</span>
</div>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Collapse Console" type="button">
<span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
</button>
</div>
</div>
{/* Test Case Selector Bar & Parameters */}
<div className="flex-1 p-space-md flex flex-col gap-space-sm overflow-y-auto">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container text-on-surface font-code-sm text-code-sm font-medium shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Case 1</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-code-sm text-code-sm transition-colors">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Case 2</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-code-sm text-code-sm transition-colors">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Case 3</span>
</button>
<button className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-code-sm text-code-sm transition-colors">
<span className="material-symbols-outlined text-[14px]">add</span>
<span>Custom</span>
</button>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant">All 32 test suites passed successfully</span>
</div>
{/* Visual Input & Output Comparison Block */}
<div className="grid grid-cols-2 gap-space-md flex-1">
<div className="flex flex-col gap-1 p-space-sm rounded-lg bg-surface-container font-code-sm text-code-sm">
<span className="text-on-surface-variant text-[11px] font-label-caps uppercase">Input height =</span>
<div className="p-2 rounded bg-surface-container-lowest text-on-surface font-mono overflow-x-auto whitespace-nowrap">
                [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
              </div>
</div>
<div className="flex flex-col gap-1 p-space-sm rounded-lg bg-surface-container font-code-sm text-code-sm">
<div className="flex items-center justify-between">
<span className="text-on-surface-variant text-[11px] font-label-caps uppercase">Output vs Expected</span>
<span className="text-tertiary font-semibold text-[11px]">Match ✓</span>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="p-2 rounded bg-surface-container-lowest text-tertiary font-semibold">
                  6 <span className="text-outline text-[11px] font-normal">(Actual)</span>
</div>
<div className="p-2 rounded bg-surface-container-lowest text-on-surface font-semibold">
                  6 <span className="text-outline text-[11px] font-normal">(Expected)</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* RIGHT SLIDE-IN DRAWER: AI Explainer & Co-Pilot Mentor */}
<div className="w-[380px] xl:w-[420px] flex flex-col bg-surface-container shadow-2xl flex-none transition-all duration-300" id="ai-drawer">
{/* AI Header */}
<div className="h-11 px-gutter bg-surface-container-high flex items-center justify-between flex-none">
<div className="flex items-center gap-space-sm">
<div className="w-6 h-6 rounded-md bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-[15px]">neurology</span>
</div>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm font-semibold text-on-surface leading-tight">CodePrep AI Mentor</span>
<span className="font-label-caps text-[10px] text-tertiary leading-tight">Claude 3.5 Sonnet / High Precision</span>
</div>
</div>
<div className="flex items-center gap-1">
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Clear Conversation" type="button">
<span className="material-symbols-outlined text-[16px]">clear_all</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" onClick={() => setDrawerOpen(false)} title="Minimize Drawer" type="button">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
{/* Quick Interactive Prompt Action Chips */}
<div className="px-space-md py-2 bg-surface-container-low flex gap-2 overflow-x-auto whitespace-nowrap flex-none scrollbar-none">
<button className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-code-sm text-code-sm hover:bg-surface-container-high transition-colors shadow-sm flex items-center gap-1">
<span>⚡ Time Complexity</span>
</button>
<button className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-code-sm text-code-sm hover:bg-surface-container-high transition-colors shadow-sm flex items-center gap-1">
<span>💡 Give Hint</span>
</button>
<button className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-code-sm text-code-sm hover:bg-surface-container-high transition-colors shadow-sm flex items-center gap-1">
<span>⚔️ Brute vs Optimal</span>
</button>
</div>
{/* AI Chat Stream Area */}
<div className="flex-1 overflow-y-auto p-gutter flex flex-col gap-space-md font-body-sm text-body-sm">
{/* User Query Bubble */}
<div className="flex flex-col items-end gap-1 self-end max-w-[90%]">
<div className="p-space-md rounded-xl rounded-tr-xs bg-primary-container text-on-primary-container shadow-sm">
<p className="text-[13px] leading-relaxed">
              Why can we safely move the pointer that has the smaller height without missing trapped water?
            </p>
</div>
<span className="font-code-sm text-[10px] text-outline">You • 18:39</span>
</div>
{/* AI Assistant Reasoning Bubble */}
<div className="flex flex-col items-start gap-1 self-start max-w-[98%]">
<div className="p-space-md rounded-xl rounded-tl-xs bg-surface-container-low shadow-sm flex flex-col gap-space-sm text-on-surface">
<div className="flex items-center gap-1.5 text-secondary font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[15px]">auto_awesome</span>
<span>Invariant Verification</span>
</div>
<p className="text-[13px] leading-relaxed text-on-surface/90">
              The volume of water trapped above bar <code className="font-code-sm text-primary">i</code> is determined strictly by:
            </p>
<div className="p-space-sm rounded-lg bg-surface-container-lowest font-code-sm text-code-sm text-tertiary">
              water[i] = max(0, min(max_L, max_R) - height[i])
            </div>
<p className="text-[13px] leading-relaxed text-on-surface/90">
              When <code className="font-code-sm text-primary">left_max &lt; right_max</code>, the water trapped at <code className="font-code-sm text-primary">left</code> is bounded <em>solely</em> by <code className="font-code-sm text-primary">left_max</code>. We do <strong>not</strong> need to know the exact future maxima on the right, because we already hold a wall at <code className="font-code-sm text-secondary">right_max</code> that is guaranteed to be equal or taller!
            </p>
{/* ASCII Graphic representation */}
<div className="p-space-sm rounded bg-surface-container-lowest font-code-sm text-[11px] leading-snug text-on-surface-variant font-mono">
              [left_max = 2] ~ ~ ~ ~ ~ ~ [right_max = 3]<br/>
                            ▲<br/>
                 Bounded by 2 (lower limit)
            </div>
{/* Suggestion Action Card */}
<div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between gap-2 mt-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[18px]">verified</span>
<span className="text-[12px] font-medium text-on-surface">O(1) Memory Invariant Verified</span>
</div>
<button className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[11px] font-code-sm font-medium hover:bg-secondary-container/80 transition-colors">
                Apply Diff
              </button>
</div>
</div>
<span className="font-code-sm text-[10px] text-outline">CodePrep AI • Claude 3.5 Sonnet</span>
</div>
</div>
{/* AI Prompt Input Box */}
<div className="p-gutter bg-surface-container-low flex-none">
<form className="relative flex items-center" id="ai-prompt-form" onSubmit={(e) => e.preventDefault()}>
<input className="w-full pl-space-md pr-10 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" placeholder="Ask AI anything about this problem or code..." type="text"/>
<button className="absolute right-2 p-1.5 rounded-lg bg-primary-container text-on-primary-container hover:opacity-90 transition-opacity" type="submit">
<span className="material-symbols-outlined text-[16px]">arrow_upward</span>
</button>
</form>
<div className="flex items-center justify-between pt-2 px-1 text-[11px] text-outline font-code-sm">
<span>Press Enter to generate</span>
<span>Tokens: 94.2k remaining</span>
</div>
</div>
</div>
}
</div>
</div>

    </>
  );
}