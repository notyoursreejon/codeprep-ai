"use client";

import { use } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Send, Mic, Video } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InterviewRolePage({ params }: { params: Promise<{ roleId: string }> }) {
  const resolvedParams = use(params);
  const roleName = resolvedParams.roleId.replace("-", " ").toUpperCase();
  
  const [messages, setMessages] = useState([
    { role: "assistant", content: `Hello! I'm your AI interviewer. We'll be conducting a technical interview focusing on ${roleName}. Are you ready to begin?` }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { role: "assistant", content: "Great. Let's start with a foundational concept. Can you explain the difference between client-side rendering (CSR) and server-side rendering (SSR), and when you might choose one over the other?" }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-4xl mx-auto border border-border rounded-xl bg-background overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border bg-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <BrainCircuit className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{roleName} Interview</h3>
            <p className="text-xs text-neutral-400">AI Interviewer • Technical Round</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs bg-red-500/10 text-red-400 px-2 py-1 rounded border border-red-500/20 flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Recording
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, i) => (
          <div key={i} className={cn("flex gap-4 max-w-[80%]", msg.role === "user" ? "ml-auto flex-row-reverse" : "")}>
             <div className={cn("h-8 w-8 rounded-full flex items-center justify-center shrink-0", msg.role === "user" ? "bg-white/10" : "bg-primary/20")}>
               {msg.role === "user" ? "U" : <BrainCircuit className="h-4 w-4 text-primary" />}
             </div>
             <div className={cn("p-4 rounded-2xl text-sm leading-relaxed", msg.role === "user" ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-white/5 border border-border text-neutral-200 rounded-tl-sm")}>
                {msg.content}
             </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-4 max-w-[80%]">
             <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
               <BrainCircuit className="h-4 w-4 text-primary" />
             </div>
             <div className="p-4 rounded-2xl bg-white/5 border border-border text-neutral-400 rounded-tl-sm flex gap-1 items-center">
                <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border bg-white/5">
        <div className="relative flex items-center">
          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type your answer..."
            className="w-full bg-background border border-border rounded-xl pl-4 pr-12 py-3 text-sm text-neutral-200 resize-none focus:outline-none focus:border-primary/50"
            rows={2}
          />
          <Button 
            size="icon" 
            className="absolute right-2 bottom-2 rounded-lg"
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-center text-[10px] text-neutral-500 mt-2">
          CodePrep AI will evaluate your technical correctness, communication, and completeness.
        </p>
      </div>
    </div>
  );
}
