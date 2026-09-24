"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Play, RotateCcw, ChevronLeft, Loader2, Send, BrainCircuit } from "lucide-react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";

export default function SolverClient({ initialProblem }: { initialProblem: any }) {
  const [problemDescription, setProblemDescription] = useState(
    initialProblem?.description || "Write a function to find the two sum..."
  );
  const [language, setLanguage] = useState("javascript");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("explanation");

  const [aiResponse, setAiResponse] = useState<any>(null);

  const handleSolve = () => {
    setIsLoading(true);
    // Simulate AI API Call
    setTimeout(() => {
      setAiResponse({
        explanation: "The Two Sum problem asks us to find two numbers in an array that add up to a specific target.",
        approach: "We can use a Hash Map to store the numbers we have seen so far and their indices. As we iterate through the array, we check if the complement (target - current number) exists in the map.",
        complexity: {
          time: "O(n) where n is the number of elements in the array.",
          space: "O(n) to store the elements in the hash map."
        },
        code: "function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const comp = target - nums[i];\n    if (map.has(comp)) return [map.get(comp), i];\n    map.set(nums[i], i);\n  }\n}",
        edgeCases: ["Array with negative numbers", "Multiple same numbers", "No solution exists"]
      });
      setIsLoading(false);
      setActiveTab("code");
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen bg-[#09090b]">
      {/* Header */}
      <header className="h-14 flex items-center justify-between px-4 border-b border-white/10 shrink-0 bg-[#09090b]">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-neutral-400 hover:text-white transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-semibold text-sm">AI Solver</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-white/5 border border-white/10 text-white text-sm rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
          <Button size="sm" onClick={handleSolve} disabled={isLoading}>
            {isLoading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Play className="h-4 w-4 mr-2" />}
            Solve
          </Button>
        </div>
      </header>

      {/* Main Split View */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* Left: Problem Input */}
        <div className="w-1/2 flex flex-col border-r border-white/10 bg-[#0c0c0e]">
          <div className="px-4 py-2 bg-white/5 border-b border-white/10 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
            Problem Description
          </div>
          <textarea
            className="flex-1 w-full bg-transparent text-neutral-300 p-4 resize-none focus:outline-none text-sm leading-relaxed"
            placeholder="Paste your coding problem, assignment, or competitive programming question here..."
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
          />
        </div>

        {/* Right: AI Output / Code */}
        <div className="w-1/2 flex flex-col bg-[#09090b] relative">
          {!aiResponse && !isLoading && (
             <div className="absolute inset-0 flex items-center justify-center text-neutral-500 flex-col gap-4">
                <BrainCircuit className="h-12 w-12 opacity-20" />
                <p>Paste a problem and click Solve.</p>
             </div>
          )}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center text-primary flex-col gap-4 bg-[#09090b]/50 backdrop-blur-sm z-10">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="text-sm font-medium animate-pulse">Analyzing problem...</p>
            </div>
          )}
          
          {aiResponse && (
            <>
              {/* Tabs */}
              <div className="flex border-b border-white/10 bg-white/5 px-2 overflow-x-auto">
                {["explanation", "approach", "code", "complexity", "edge cases"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2.5 text-xs font-medium capitalize whitespace-nowrap transition-colors border-b-2 ${
                      activeTab === tab 
                        ? "text-primary border-primary" 
                        : "text-neutral-500 border-transparent hover:text-neutral-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto">
                {activeTab === "code" ? (
                  <div className="h-full w-full relative">
                    <Editor
                      height="100%"
                      language={language}
                      theme="vs-dark"
                      value={aiResponse.code}
                      options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineHeight: 1.5,
                        padding: { top: 16 },
                        scrollBeyondLastLine: false,
                        readOnly: true,
                        fontFamily: "var(--font-geist-mono), monospace"
                      }}
                    />
                  </div>
                ) : (
                  <div className="p-6 text-sm text-neutral-300 space-y-4 leading-relaxed">
                    {activeTab === "explanation" && <p>{aiResponse.explanation}</p>}
                    {activeTab === "approach" && <p>{aiResponse.approach}</p>}
                    {activeTab === "complexity" && (
                      <div className="space-y-4">
                        <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                          <h4 className="font-semibold text-neutral-200 mb-1">Time Complexity</h4>
                          <p className="font-mono text-green-400">{aiResponse.complexity.time}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                          <h4 className="font-semibold text-neutral-200 mb-1">Space Complexity</h4>
                          <p className="font-mono text-orange-400">{aiResponse.complexity.space}</p>
                        </div>
                      </div>
                    )}
                    {activeTab === "edge cases" && (
                      <ul className="list-disc pl-5 space-y-2">
                        {aiResponse.edgeCases.map((c: string, i: number) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
