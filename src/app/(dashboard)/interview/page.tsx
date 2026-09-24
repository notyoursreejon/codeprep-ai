import Link from "next/link";
import { ArrowRight, UserCheck, Layers, Layout, Server, Database, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const interviewRoles = [
  { id: "frontend", title: "Frontend Engineer", icon: Layout, desc: "React, CSS, Browser APIs, Web Vitals" },
  { id: "backend", title: "Backend Engineer", icon: Server, desc: "Node.js, Databases, Caching, APIs" },
  { id: "fullstack", title: "Fullstack Engineer", icon: Layers, desc: "End-to-end architecture, UI, and APIs" },
  { id: "system-design", title: "System Design", icon: Database, desc: "Scalability, Microservices, Sharding" },
  { id: "dsa", title: "Data Structures & Algorithms", icon: Code, desc: "Trees, Graphs, Dynamic Programming" },
  { id: "hr", title: "Behavioral / HR", icon: Users, desc: "Leadership, Conflict, Culture Fit" },
];

export default function InterviewDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Mock Technical Interviews</h2>
        <p className="text-neutral-400">Select a role to start a simulated interview with CodePrep AI.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interviewRoles.map((role) => (
          <div key={role.id} className="border border-border rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <role.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white">{role.title}</h3>
            </div>
            
            <p className="text-sm text-neutral-400 mb-8 flex-1">{role.desc}</p>
            
            <Link href={`/interview/${role.id}`} className="w-full">
              <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                Start Interview
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
