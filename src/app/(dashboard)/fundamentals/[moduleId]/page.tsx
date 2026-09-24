"use client";

import { use } from "react";
import Link from "next/link";
import { ChevronLeft, BrainCircuit, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const moduleData: Record<string, { title: string, content: string[] }> = {
  "operating-systems": {
    title: "Operating Systems",
    content: [
      "1. Introduction to Operating Systems",
      "2. Process Management & Threads",
      "3. Memory Management & Virtual Memory",
      "4. Concurrency & Synchronization",
      "5. File Systems & I/O",
    ]
  },
  "database-management": {
    title: "Database Management",
    content: [
      "1. Relational Databases & SQL Basics",
      "2. Database Normalization",
      "3. ACID Properties",
      "4. Indexing & Query Optimization",
      "5. NoSQL & Distributed Databases",
    ]
  }
};

export default function ModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  const resolvedParams = use(params);
  const moduleId = resolvedParams.moduleId;
  
  const data = moduleData[moduleId] || {
    title: moduleId.replace("-", " ").toUpperCase(),
    content: [
      "1. Introduction",
      "2. Core Concepts",
      "3. Advanced Patterns",
      "4. Interview Questions",
    ]
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link href="/fundamentals" className="text-neutral-400 hover:text-white flex items-center text-sm mb-4">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Fundamentals
      </Link>

      <div className="border border-white/10 rounded-xl bg-white/5 p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
            <BrainCircuit className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{data.title}</h1>
            <p className="text-neutral-400">Master the theoretical concepts frequently asked in interviews.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white border-b border-white/10 pb-2">Curriculum</h3>
          {data.content.map((topic, i) => (
            <div key={i} className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-[#09090b] hover:bg-white/5 transition-colors cursor-pointer group">
              <span className="text-neutral-200 group-hover:text-white transition-colors">{topic}</span>
              {i === 0 ? (
                 <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                 <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/20 hover:text-primary">
                    Learn
                 </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
