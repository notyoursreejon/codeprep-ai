"use client";

import { useState } from "react";
import { Bug, ArrowRight, Loader2 } from "lucide-react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";

export default function DebuggerPage() {
  const [code, setCode] = useState("function sum(a, b) {\n  return a - b; // Should be addition\n}");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleDebug = () => {
    setIsLoading(true);
    setTimeout(() => {
      setResult({
        error: "Logical Error: Incorrect Operator",
        why: "The function is named 'sum' but uses the subtraction operator '-' instead of '+'.",
        fix: "Change 'a - b' to 'a + b'.",
        correctedCode: "function sum(a, b) {\n  return a + b;\n}"
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Code Debugger</h2>
        <p className="text-neutral-400">Paste your broken code and let AI find and fix the errors.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
        <div className="flex flex-col border border-white/10 rounded-xl overflow-hidden bg-[#0c0c0e]">
          <div className="p-3 border-b border-white/10 bg-white/5 flex justify-between items-center">
            <span className="text-sm font-medium text-neutral-300">Your Code</span>
            <Button size="sm" onClick={handleDebug} disabled={isLoading}>
              {isLoading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Bug className="h-4 w-4 mr-2" />}
              Debug
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
            <span className="text-sm font-medium text-neutral-300">AI Analysis</span>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            {!result && !isLoading && (
              <div className="h-full flex flex-col items-center justify-center text-neutral-500 gap-4">
                <Bug className="h-12 w-12 opacity-20" />
                <p>Click Debug to analyze your code.</p>
              </div>
            )}
            
            {isLoading && (
              <div className="h-full flex flex-col items-center justify-center text-primary gap-4">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="animate-pulse">Finding bugs...</p>
              </div>
            )}

            {result && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                  <h4 className="text-red-400 font-bold mb-1 uppercase tracking-wider text-xs">Error Found</h4>
                  <p className="text-neutral-200">{result.error}</p>
                </div>
                
                <div>
                  <h4 className="text-neutral-400 font-bold mb-2 uppercase tracking-wider text-xs">Why it happens</h4>
                  <p className="text-neutral-200 text-sm leading-relaxed bg-white/5 p-4 rounded-lg border border-white/5">{result.why}</p>
                </div>

                <div>
                  <h4 className="text-neutral-400 font-bold mb-2 uppercase tracking-wider text-xs">How to fix it</h4>
                  <p className="text-green-400 text-sm leading-relaxed bg-green-500/5 p-4 rounded-lg border border-green-500/10">{result.fix}</p>
                </div>

                <div>
                  <h4 className="text-neutral-400 font-bold mb-2 uppercase tracking-wider text-xs">Corrected Code</h4>
                  <div className="rounded-lg overflow-hidden border border-white/10 h-48">
                    <Editor
                      height="100%"
                      language="javascript"
                      theme="vs-dark"
                      value={result.correctedCode}
                      options={{
                        minimap: { enabled: false },
                        readOnly: true,
                        fontSize: 14,
                        padding: { top: 16 }
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
