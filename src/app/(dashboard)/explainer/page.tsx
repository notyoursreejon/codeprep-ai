"use client";

import { useState } from "react";
import { Code2, ArrowRight, Loader2, Sparkles } from "lucide-react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";

export default function ExplainerPage() {
  const [code, setCode] = useState("function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleExplain = () => {
    setIsLoading(true);
    setTimeout(() => {
      setResult({
        summary: "This is a recursive implementation of the Fibonacci sequence generator.",
        breakdown: [
          { line: "Line 1", desc: "Defines the function `fibonacci` which takes an integer `n`." },
          { line: "Line 2", desc: "The base case: if `n` is 0 or 1, it simply returns `n` to stop the recursion." },
          { line: "Line 3", desc: "The recursive step: it calls itself twice to calculate the two preceding numbers in the sequence, and adds them together." }
        ],
        complexity: "Time Complexity is O(2^n) because it branches twice for every recursive call. Space Complexity is O(n) due to the call stack depth.",
        optimization: "This can be heavily optimized using Memoization or Dynamic Programming to achieve O(n) time complexity."
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Code Explainer</h2>
        <p className="text-neutral-400">Paste confusing snippets and let AI explain them line-by-line.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
        <div className="flex flex-col border border-white/10 rounded-xl overflow-hidden bg-[#0c0c0e]">
          <div className="p-3 border-b border-white/10 bg-white/5 flex justify-between items-center">
            <span className="text-sm font-medium text-neutral-300">Snippet to Explain</span>
            <Button size="sm" onClick={handleExplain} disabled={isLoading}>
              {isLoading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Sparkles className="h-4 w-4 mr-2" />}
              Explain Code
            </Button>
          </div>
          <div className="flex-1 relative">
             <Editor
                height="100%"
                language="javascript"
                theme="vs-dark"
                value={code}
                onChange={(val) => setCode(val || "")}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  padding: { top: 16 }
                }}
              />
          </div>
        </div>

        <div className="flex flex-col border border-white/10 rounded-xl overflow-hidden bg-[#09090b]">
           <div className="p-3 border-b border-white/10 bg-white/5">
            <span className="text-sm font-medium text-neutral-300">AI Explanation</span>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            {!result && !isLoading && (
              <div className="h-full flex flex-col items-center justify-center text-neutral-500 gap-4">
                <Code2 className="h-12 w-12 opacity-20" />
                <p>Click Explain to breakdown the code.</p>
              </div>
            )}
            
            {isLoading && (
              <div className="h-full flex flex-col items-center justify-center text-primary gap-4">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="animate-pulse">Reading code...</p>
              </div>
            )}

            {result && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                  <h4 className="text-primary font-bold mb-1 uppercase tracking-wider text-xs">Summary</h4>
                  <p className="text-neutral-200">{result.summary}</p>
                </div>
                
                <div>
                  <h4 className="text-neutral-400 font-bold mb-3 uppercase tracking-wider text-xs">Line-by-Line Breakdown</h4>
                  <div className="space-y-2">
                    {result.breakdown.map((item: any, i: number) => (
                      <div key={i} className="bg-white/5 p-3 rounded border border-white/5 flex gap-3">
                        <span className="text-xs font-mono text-neutral-500 shrink-0 mt-0.5">{item.line}</span>
                        <span className="text-sm text-neutral-300">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-neutral-400 font-bold mb-2 uppercase tracking-wider text-xs">Complexity</h4>
                  <p className="text-neutral-300 text-sm leading-relaxed">{result.complexity}</p>
                </div>
                
                <div>
                  <h4 className="text-neutral-400 font-bold mb-2 uppercase tracking-wider text-xs">Pro Tip</h4>
                  <p className="text-green-400 text-sm leading-relaxed bg-green-500/5 p-4 rounded-lg border border-green-500/10">
                    {result.optimization}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
