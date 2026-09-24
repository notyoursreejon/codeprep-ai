"use client";

import Link from "next/link";
import { BookOpen, Server, Shield, Database, Network, Code, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = [
  { id: "operating-systems", title: "Operating Systems", icon: Server, description: "Processes, Threads, Memory Management, Concurrency", progress: 45 },
  { id: "database-management", title: "Database Management", icon: Database, description: "SQL, Normalization, ACID, Indexing, Transactions", progress: 80 },
  { id: "computer-networks", title: "Computer Networks", icon: Network, description: "OSI Model, TCP/IP, HTTP, DNS, Routing", progress: 20 },
  { id: "object-oriented-prog", title: "Object Oriented Prog.", icon: Code, description: "Polymorphism, Inheritance, Encapsulation", progress: 100 },
  { id: "computer-architecture", title: "Computer Architecture", icon: Cpu, description: "CPU, Caching, Pipelining, Instruction Sets", progress: 0 },
  { id: "computer-security", title: "Computer Security", icon: Shield, description: "Cryptography, Web Security, Network Security", progress: 10 },
];

export default function FundamentalsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">CS Fundamentals</h2>
        <p className="text-neutral-400">Master core computer science concepts frequently asked in interviews.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, i) => (
          <div key={i} className="border border-white/10 rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-colors flex flex-col group relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-4 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <mod.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-white">{mod.title}</h3>
            </div>
            
            <p className="text-sm text-neutral-400 mb-6 flex-1">{mod.description}</p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-neutral-400">Progress</span>
                  <span className="text-white font-medium">{mod.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${mod.progress}%` }}
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Link href={`/fundamentals/${mod.id}`} className="w-full">
                  <Button size="sm" className="w-full text-xs" variant={mod.progress === 100 ? "secondary" : "default"}>
                    {mod.progress === 0 ? "Start" : mod.progress === 100 ? "Review" : "Continue"}
                  </Button>
                </Link>
                <Button size="sm" variant="outline" className="w-full text-xs border-white/10">Flashcards</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
