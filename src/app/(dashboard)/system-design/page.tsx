"use client";

import { useState } from "react";
import { Server, Database, ArrowRight, Loader2, PlayCircle, Settings, CheckCircle2, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  "Design a URL Shortener like Bitly",
  "Design a Rate Limiter",
  "Design Twitter (X)",
  "Design Netflix or Youtube",
  "Design a Web Crawler",
];

export default function SystemDesignPage() {
  const [activeQuestion, setActiveQuestion] = useState(questions[0]);
  const [architecture, setArchitecture] = useState("");
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [rubric, setRubric] = useState<any>(null);

  const handleEvaluate = () => {
    if (!architecture.trim()) return;
    setIsEvaluating(true);
    setTimeout(() => {
      setRubric([
        { category: "Requirements Gathering", score: "Pass", notes: "Good job outlining functional vs non-functional requirements." },
        { category: "Capacity Estimation", score: "Needs Work", notes: "You forgot to estimate storage capacity for a 5-year timeline." },
        { category: "High Level Design", score: "Pass", notes: "Clear breakdown of load balancers, web servers, and database layer." },
        { category: "Database Schema", score: "Pass", notes: "Relational schema looks appropriate for the access patterns." },
        { category: "Scalability / Bottlenecks", score: "Needs Work", notes: "Did not mention how to handle cache invalidation at scale." }
      ]);
      setIsEvaluating(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2 flex items-center gap-2">
            <Server className="h-6 w-6 text-blue-500" />
            System Design Simulator
          </h2>
          <p className="text-neutral-400">Practice text-based system architecture interviews.</p>
        </div>
        
        <div className="flex gap-2">
           <select 
             className="bg-[#121214] border border-white/10 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
             value={activeQuestion}
             onChange={(e) => {
               setActiveQuestion(e.target.value);
               setArchitecture("");
               setRubric(null);
             }}
           >
             {questions.map(q => <option key={q} value={q}>{q}</option>)}
           </select>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
        
        {/* Editor Area */}
        <div className="flex flex-col border border-white/10 rounded-xl overflow-hidden bg-[#09090b]">
           <div className="p-3 border-b border-white/10 bg-white/5 flex items-center gap-2">
            <Database className="h-4 w-4 text-neutral-400" />
            <span className="text-sm font-medium text-neutral-300">Your Architecture Document</span>
          </div>
          
          <textarea
            value={architecture}
            onChange={(e) => setArchitecture(e.target.value)}
            placeholder="Structure your answer:&#10;1. Requirements&#10;2. Estimations&#10;3. API Design&#10;4. Database Schema&#10;5. High-Level Design&#10;6. Bottlenecks..."
            className="flex-1 w-full bg-transparent p-6 text-sm text-neutral-200 resize-none focus:outline-none font-mono leading-relaxed"
          />
          
          <div className="p-4 border-t border-white/10 bg-white/5 flex justify-end">
             <Button onClick={handleEvaluate} disabled={isEvaluating || !architecture.trim()}>
              {isEvaluating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <PlayCircle className="mr-2 h-4 w-4" />}
              Evaluate Architecture
            </Button>
          </div>
        </div>

        {/* Feedback Area */}
        <div className="flex flex-col border border-white/10 rounded-xl bg-[#0c0c0e] overflow-y-auto">
          <div className="p-6">
            {!rubric && !isEvaluating && (
              <div className="h-[400px] flex flex-col items-center justify-center text-neutral-500 gap-4 text-center">
                <Settings className="h-12 w-12 opacity-20" />
                <p>Type out your system design<br/>to receive a senior engineer grading rubric.</p>
              </div>
            )}
            
            {isEvaluating && (
              <div className="h-[400px] flex flex-col items-center justify-center text-primary gap-4">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="animate-pulse">Evaluating system scale...</p>
              </div>
            )}

            {rubric && (
              <div className="space-y-6 animate-in fade-in">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Evaluation Rubric</h3>
                  <p className="text-sm text-neutral-400">Based on standard FAANG system design expectations.</p>
                </div>
                
                <div className="space-y-3">
                  {rubric.map((item: any, i: number) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col gap-2">
                       <div className="flex justify-between items-center">
                         <span className="font-semibold text-white">{item.category}</span>
                         <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${item.score === 'Pass' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                           {item.score}
                         </span>
                       </div>
                       <p className="text-sm text-neutral-300 leading-relaxed">{item.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
