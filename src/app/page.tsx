"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Terminal, Code2, BrainCircuit, LayoutDashboard, ChevronRight, Zap } from "lucide-react";

export default function LandingPage() {
  const [typedText, setTypedText] = useState("");
  const fullText = "function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n}";
  
  useEffect(() => {
    let currentText = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        currentText += fullText[i];
        setTypedText(currentText);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="px-6 lg:px-14 h-16 flex items-center border-b border-white/5 sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <Link className="flex items-center justify-center gap-2" href="#">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
            <Terminal className="h-5 w-5" />
          </div>
          <span className="font-bold tracking-tight text-lg">CodePrep AI</span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#practice">
            Practice
          </Link>
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#pricing">
            Pricing
          </Link>
        </nav>
        <div className="ml-8 flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
            Sign In
          </Link>
          <Button asChild size="sm" className="rounded-full px-6">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 lg:py-32 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col justify-center space-y-8 relative z-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur-sm">
                    <Zap className="mr-2 h-3.5 w-3.5 text-yellow-500" />
                    AI FOR TECHNICAL INTERVIEWS
                  </div>
                  <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    Code smarter. <br />
                    Interview better.
                  </h1>
                  <p className="max-w-[500px] text-lg text-neutral-400 md:text-xl leading-relaxed">
                    Practice coding, DSA, debugging, and technical interviews with an AI built specifically for developers.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full h-12 px-8 text-base group" asChild>
                    <Link href="/dashboard">
                      Start Practicing
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base border-white/10 bg-white/5 hover:bg-white/10" asChild>
                    <Link href="/solver">Try AI Solver</Link>
                  </Button>
                </div>
              </div>
              
              {/* Interactive Demo Graphic */}
              <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none rounded-xl border border-white/10 bg-[#0c0c0e] shadow-2xl overflow-hidden z-10">
                <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#121214]">
                  <div className="flex space-x-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto flex h-6 items-center rounded-md bg-white/5 px-3 text-xs text-neutral-400">
                    twoSum.ts
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5 min-h-[350px]">
                  <div className="p-4 bg-[#0a0a0c] font-mono text-sm leading-relaxed overflow-hidden relative">
                    <div className="text-neutral-500 mb-2">// Find the first duplicate element</div>
                    <div className="text-neutral-300">
                      <pre className="whitespace-pre-wrap font-mono">
                        <span className="text-blue-400">function</span> <span className="text-yellow-200">twoSum</span>(nums, target) {"{"}<br/>
                        <span className="text-blue-400">  const</span> map = <span className="text-blue-400">new</span> <span className="text-green-300">Map</span>();<br/>
                        <span className="text-blue-400">  for</span> (<span className="text-blue-400">let</span> i = <span className="text-orange-300">0</span>; i {"<"} nums.<span className="text-blue-200">length</span>; i++) {"{"}<br/>
                        <span className="text-blue-400">    const</span> complement = target - nums[i];<br/>
                        <span className="text-blue-400">    if</span> (map.<span className="text-yellow-200">has</span>(complement)) {"{"}<br/>
                        <span className="text-purple-400">      return</span> [map.<span className="text-yellow-200">get</span>(complement), i];<br/>
                        <span className="text-neutral-300">    {"}"}</span><br/>
                        <span className="text-neutral-300">    map.<span className="text-yellow-200">set</span>(nums[i], i);</span><br/>
                        <span className="text-neutral-300">  {"}"}</span><br/>
                        <span className="text-neutral-300">{"}"}</span>
                      </pre>
                    </div>
                  </div>
                  <div className="p-5 bg-gradient-to-b from-[#121214] to-[#0a0a0c] flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <BrainCircuit className="h-5 w-5 text-indigo-400" />
                      <span className="font-medium text-sm text-neutral-200">AI Analysis</span>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                        <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">Approach</div>
                        <div className="text-sm text-neutral-300">One-pass Hash Map. We store the complement of each number as we iterate.</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex-1">
                          <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">Time</div>
                          <div className="text-sm font-mono text-green-400">O(n)</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex-1">
                          <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">Space</div>
                          <div className="text-sm font-mono text-orange-400">O(n)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Strip */}
        <section className="border-y border-white/5 bg-white/[0.02] py-8">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-center text-sm text-neutral-500 font-medium mb-6 uppercase tracking-widest">Supported Languages & Topics</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale">
              {['Python', 'C++', 'Java', 'JavaScript', 'Go', 'Data Structures', 'System Design'].map((tech) => (
                <div key={tech} className="text-lg font-bold text-neutral-400 flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section id="features" className="w-full py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Everything you need to ace the interview</h2>
              <p className="max-w-[700px] text-neutral-400 md:text-xl">
                A unified platform combining learning, solving, and realistic mock interviews.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="col-span-1 md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Terminal className="h-32 w-32" />
                </div>
                <div className="space-y-4 relative z-10">
                  <h3 className="text-2xl font-bold">AI Coding Solver</h3>
                  <p className="text-neutral-400 max-w-[400px]">
                    Paste any coding problem. Get step-by-step explanations, time complexities, and optimal code in multiple languages.
                  </p>
                </div>
              </div>
              
              <div className="col-span-1 rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <LayoutDashboard className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-bold">CS Fundamentals</h3>
                  <p className="text-sm text-neutral-400">
                    Modules for OS, DBMS, Networks, and System Design with flashcards and quick revision.
                  </p>
                </div>
              </div>

              <div className="col-span-1 rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <BrainCircuit className="h-8 w-8 text-purple-400" />
                  <h3 className="text-xl font-bold">Mock Interviews</h3>
                  <p className="text-sm text-neutral-400">
                    Conversational AI interviewer that evaluates your technical knowledge and communication.
                  </p>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Code2 className="h-32 w-32" />
                </div>
                <div className="space-y-4 relative z-10">
                  <h3 className="text-2xl font-bold">Code Debugger</h3>
                  <p className="text-neutral-400 max-w-[400px]">
                    Stuck on a bug? Paste your broken code and let the AI find the logical or syntax error instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-neutral-400" />
            <span className="font-semibold text-neutral-300">CodePrep AI</span>
          </div>
          <p className="text-sm text-neutral-500">
            Designed for developers. Built with AI.
          </p>
        </div>
      </footer>
    </div>
  );
}
