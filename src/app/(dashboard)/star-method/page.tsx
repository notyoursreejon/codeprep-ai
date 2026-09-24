"use client";

import { useState } from "react";
import { Star, MessageSquare, Loader2, Sparkles, Send, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  "Tell me about a time you had a conflict with a coworker.",
  "Describe a situation where you had to meet a tight deadline.",
  "Tell me about a time you failed and what you learned from it.",
  "Describe a time you showed leadership initiative.",
  "Tell me about a time you had to learn a new technology quickly."
];

export default function StarMethodPage() {
  const [qIndex, setQIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<any>(null);

  const [form, setForm] = useState({
    situation: "",
    task: "",
    action: "",
    result: ""
  });

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setFeedback({
        score: "8/10",
        comments: "Great job outlining the Situation and Task. However, your Action section could be more specific about YOUR individual contribution rather than the team's. Your Result was excellent and quantified.",
        improvements: [
          "Use 'I' instead of 'We' in the Action section to highlight your role.",
          "Add one specific metric to the Result (e.g., 'reduced load time by 40%')."
        ]
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const cycleQuestion = () => {
    setQIndex((prev) => (prev + 1) % questions.length);
    setForm({ situation: "", task: "", action: "", result: "" });
    setFeedback(null);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white mb-2 flex items-center gap-2">
          <Star className="h-6 w-6 text-yellow-500 fill-yellow-500/20" />
          Behavioral STAR Method
        </h2>
        <p className="text-neutral-400">Master behavioral interviews by structuring your stories.</p>
      </div>

      <div className="bg-[#121214] border border-white/10 rounded-xl p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 bg-primary h-full" />
        <div className="flex justify-between items-start gap-4">
          <div>
            <div className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Interview Question</div>
            <h3 className="text-xl font-bold text-white leading-relaxed">{questions[qIndex]}</h3>
          </div>
          <Button variant="outline" size="sm" onClick={cycleQuestion} className="shrink-0">
            <RefreshCw className="h-4 w-4 mr-2" /> New Question
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">S</div>
              Situation
            </label>
            <textarea
              value={form.situation}
              onChange={(e) => setForm({ ...form, situation: e.target.value })}
              placeholder="Set the scene and give the necessary details of your example..."
              className="w-full bg-[#09090b] border border-white/10 rounded-lg p-3 text-sm text-white resize-none h-24 focus:border-blue-500/50 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">T</div>
              Task
            </label>
            <textarea
              value={form.task}
              onChange={(e) => setForm({ ...form, task: e.target.value })}
              placeholder="Describe what your responsibility was in that situation..."
              className="w-full bg-[#09090b] border border-white/10 rounded-lg p-3 text-sm text-white resize-none h-24 focus:border-purple-500/50 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">A</div>
              Action
            </label>
            <textarea
              value={form.action}
              onChange={(e) => setForm({ ...form, action: e.target.value })}
              placeholder="Explain exactly what steps you took to address it..."
              className="w-full bg-[#09090b] border border-white/10 rounded-lg p-3 text-sm text-white resize-none h-32 focus:border-orange-500/50 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center font-bold">R</div>
              Result
            </label>
            <textarea
              value={form.result}
              onChange={(e) => setForm({ ...form, result: e.target.value })}
              placeholder="Share what outcomes your actions achieved (use metrics if possible)..."
              className="w-full bg-[#09090b] border border-white/10 rounded-lg p-3 text-sm text-white resize-none h-24 focus:border-green-500/50 focus:outline-none"
            />
          </div>
          
          <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full" size="lg">
            {isSubmitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Sparkles className="h-4 w-4 mr-2" />}
            Evaluate My Answer
          </Button>
        </div>

        <div className="flex flex-col border border-white/10 rounded-xl bg-[#09090b] p-6 h-fit sticky top-6">
          <div className="flex items-center gap-2 font-medium text-neutral-300 mb-6">
            <MessageSquare className="h-5 w-5 text-primary" />
            AI Interviewer Feedback
          </div>

          {!feedback && !isSubmitting && (
            <div className="py-12 flex flex-col items-center text-center text-neutral-500 gap-4">
              <Star className="h-12 w-12 opacity-20" />
              <p>Fill out the STAR framework<br/>on the left to get actionable feedback.</p>
            </div>
          )}

          {isSubmitting && (
            <div className="py-12 flex flex-col items-center text-center text-primary gap-4">
              <Loader2 className="h-8 w-8 animate-spin" />
              <p className="animate-pulse">Analyzing your response...</p>
            </div>
          )}

          {feedback && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-neutral-400 font-medium">Impact Score</span>
                <span className="text-2xl font-bold text-white">{feedback.score}</span>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Overall Review</h4>
                <p className="text-sm text-neutral-300 leading-relaxed">{feedback.comments}</p>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-primary mb-3">How to Improve</h4>
                <ul className="space-y-2">
                  {feedback.improvements.map((imp: string, i: number) => (
                    <li key={i} className="text-sm text-neutral-200 flex items-start gap-2">
                      <span className="text-primary mt-1 text-xs">◆</span>
                      {imp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
