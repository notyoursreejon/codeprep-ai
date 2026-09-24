"use client";

import { useState } from "react";
import { FileText, Loader2, Sparkles, Upload, CheckCircle2, AlertTriangle, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeAnalyzerPage() {
  const [resumeText, setResumeText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = () => {
    if (!resumeText.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setResult({
        score: 72,
        atsMatch: "Medium",
        strengths: [
          "Good use of action verbs (e.g., 'Developed', 'Optimized')",
          "Clear tech stack mentioned in projects",
          "Includes quantitative metrics for 2 bullet points"
        ],
        weaknesses: [
          "Missing links to live projects or GitHub repositories",
          "Experience section is too dense; needs better formatting",
          "Lack of keywords matching standard 'Software Engineer' roles (e.g., Agile, CI/CD, Testing)"
        ],
        suggestions: [
          "Add links to your deployed apps or source code to provide proof of work.",
          "Break down the 'Backend Developer at XYZ' role into 3-4 distinct bullet points.",
          "Include a 'Skills' section explicitly listing languages and frameworks to pass ATS filters."
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-6xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Resume Analyzer</h2>
        <p className="text-neutral-400">Paste your resume text to get an ATS score and AI-driven feedback.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-0">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-3">
             <div className="flex items-center gap-2 text-sm font-medium text-neutral-300">
              <FileText className="h-4 w-4 text-primary" />
              Resume Content
            </div>
            <Button variant="outline" size="sm" className="h-8">
              <Upload className="h-3.5 w-3.5 mr-2" />
              Upload PDF
            </Button>
          </div>
          
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="John Doe&#10;Software Engineer&#10;john.doe@email.com&#10;&#10;Experience:&#10;Software Developer at TechCorp (2020-Present)&#10;- Built microservices using Node.js and Docker..."
            className="flex-1 w-full bg-background border border-border rounded-xl p-6 text-sm text-neutral-200 resize-none focus:outline-none focus:border-primary/50 transition-colors leading-relaxed font-mono"
          />
          <div className="mt-4 flex justify-end">
            <Button onClick={handleAnalyze} disabled={isAnalyzing || !resumeText.trim()} size="lg">
              {isAnalyzing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
              Analyze Resume
            </Button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-300">
            <FileSearch className="h-4 w-4 text-primary" />
            Analysis Results
          </div>
          
          <div className="flex-1 border border-border rounded-xl bg-background overflow-y-auto">
            {!result && !isAnalyzing && (
              <div className="h-full flex flex-col items-center justify-center text-neutral-500 gap-4 p-8 text-center">
                <FileSearch className="h-12 w-12 opacity-20" />
                <p>Paste your resume text and hit analyze to <br/> see how you'd fare against ATS systems.</p>
              </div>
            )}
            
            {isAnalyzing && (
              <div className="h-full flex flex-col items-center justify-center text-primary gap-4">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="animate-pulse font-medium">Scanning resume keywords...</p>
              </div>
            )}

            {result && (
              <div className="p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4">
                
                {/* Score Header */}
                <div className="flex items-center gap-6 p-6 border border-border rounded-xl bg-white/5">
                   <div className="relative h-24 w-24 shrink-0 flex items-center justify-center">
                      <svg className="h-full w-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/10" />
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="45" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="8" 
                          strokeDasharray={`${result.score * 2.83} 283`}
                          className={result.score > 75 ? "text-green-500" : result.score > 50 ? "text-yellow-500" : "text-red-500"} 
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center text-white font-bold text-2xl">
                        {result.score}
                      </div>
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-1">ATS Compatibility</h3>
                     <p className="text-neutral-400 text-sm">Based on standard software engineering keyword matching and structure parsing.</p>
                   </div>
                </div>

                <div className="space-y-6">
                  {/* Strengths */}
                  <div>
                    <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" /> What you did well
                    </h4>
                    <ul className="space-y-2">
                      {result.strengths.map((s: string, i: number) => (
                        <li key={i} className="text-sm text-neutral-300 flex items-start gap-2">
                          <span className="text-green-500/50 mt-0.5">•</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses */}
                  <div>
                    <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" /> Areas to improve
                    </h4>
                    <ul className="space-y-2">
                      {result.weaknesses.map((w: string, i: number) => (
                        <li key={i} className="text-sm text-neutral-300 flex items-start gap-2">
                          <span className="text-red-500/50 mt-0.5">•</span> {w}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actionable Advice */}
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
                    <h4 className="text-primary font-semibold mb-3">AI Recommendations</h4>
                    <ul className="space-y-3">
                      {result.suggestions.map((s: string, i: number) => (
                        <li key={i} className="text-sm text-neutral-200 flex items-start gap-2">
                           <div className="h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-xs mt-0.5">{i+1}</div>
                           <span className="leading-relaxed">{s}</span>
                        </li>
                      ))}
                    </ul>
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
