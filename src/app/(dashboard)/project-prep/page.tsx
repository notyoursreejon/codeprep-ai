"use client";

import { useState } from "react";
import { GraduationCap, ArrowRight, Loader2, PlayCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectPrepPage() {
  const [projectDesc, setProjectDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<string[] | null>(null);

  const handleGenerate = () => {
    if (!projectDesc.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      setQuestions([
        "Can you explain the overall architecture of this project?",
        "What was the most challenging technical hurdle you faced, and how did you overcome it?",
        "Why did you choose the specific tech stack you used for this project?",
        "How did you handle state management and data fetching?",
        "If you had 3 more months to work on this, how would you scale the database to handle 10x traffic?"
      ]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Project Interview Prep</h2>
        <p className="text-neutral-400">Paste your resume project descriptions to generate likely interview questions.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-0">
        <div className="flex flex-col">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-300">
            <GraduationCap className="h-4 w-4 text-primary" />
            Project Description
          </div>
          <textarea
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.target.value)}
            placeholder="e.g. Built a real-time chat application using React, Node.js, and WebSockets. Implemented JWT authentication and PostgreSQL for message persistence..."
            className="flex-1 w-full bg-background border border-border rounded-xl p-4 text-sm text-neutral-200 resize-none focus:outline-none focus:border-primary/50 transition-colors leading-relaxed"
          />
          <div className="mt-4 flex justify-end">
            <Button onClick={handleGenerate} disabled={isLoading || !projectDesc.trim()}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <PlayCircle className="mr-2 h-4 w-4" />}
              Generate Questions
            </Button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-300">
            <HelpCircle className="h-4 w-4 text-primary" />
            Generated Interview Questions
          </div>
          <div className="flex-1 border border-border rounded-xl bg-white/5 p-6 overflow-y-auto">
            {!questions && !isLoading && (
              <div className="h-full flex flex-col items-center justify-center text-neutral-500 gap-4 text-center">
                <HelpCircle className="h-12 w-12 opacity-20" />
                <p>Paste a project from your resume and<br/>we'll grill you on it.</p>
              </div>
            )}
            
            {isLoading && (
              <div className="h-full flex flex-col items-center justify-center text-primary gap-4">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="animate-pulse font-medium">Analyzing architecture...</p>
              </div>
            )}

            {questions && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                {questions.map((q, i) => (
                  <div key={i} className="p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer group">
                    <div className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-xs font-bold text-primary">
                        {i + 1}
                      </div>
                      <p className="text-sm text-neutral-200 leading-relaxed group-hover:text-white transition-colors">{q}</p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-8 pt-6 border-t border-border text-center">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Start Mock Interview with these Questions
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
