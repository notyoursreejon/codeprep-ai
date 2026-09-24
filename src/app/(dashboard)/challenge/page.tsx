"use client";

import Link from "next/link";
import { Trophy, Calendar, CheckCircle2, ChevronRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const weekDays = [
  { day: "Mon", date: 15, status: "completed" },
  { day: "Tue", date: 16, status: "completed" },
  { day: "Wed", date: 17, status: "active" },
  { day: "Thu", date: 18, status: "locked" },
  { day: "Fri", date: 19, status: "locked" },
  { day: "Sat", date: 20, status: "locked" },
  { day: "Sun", date: 21, status: "locked" },
];

export default function ChallengePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            Daily Challenge
          </h2>
          <p className="text-neutral-400">Solve the problem of the day to maintain your streak.</p>
        </div>
        <div className="bg-white/5 border border-border rounded-lg px-4 py-2 flex items-center gap-3">
          <div className="text-sm text-neutral-400">Current Streak</div>
          <div className="flex items-center gap-1.5 font-bold text-orange-500">
            <span className="text-xl">12</span>
            <span>🔥</span>
          </div>
        </div>
      </div>

      <div className="bg-background border border-border rounded-xl overflow-hidden">
        <div className="p-6 border-b border-border bg-gradient-to-r from-primary/10 via-[#09090b] to-[#09090b]">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 text-primary font-medium">
              <Calendar className="h-4 w-4" />
              <span>Wednesday, Sept 17</span>
            </div>
            <div className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-neutral-300">
              Hard
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4">Merge k Sorted Lists</h3>
          <p className="text-neutral-400 max-w-2xl leading-relaxed mb-6">
            You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.
          </p>
          
          <div className="flex gap-4">
            <Link href="/solver?problemId=merge-intervals">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Solve Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="p-6 bg-white/5">
          <h4 className="text-sm font-medium text-neutral-300 mb-4">This Week</h4>
          <div className="flex justify-between gap-2">
            {weekDays.map((d, i) => (
              <div 
                key={i} 
                className={`flex-1 flex flex-col items-center justify-center py-3 rounded-lg border ${
                  d.status === "completed" 
                    ? "bg-green-500/10 border-green-500/20 text-green-400" 
                    : d.status === "active"
                      ? "bg-primary/20 border-primary/50 text-white shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                      : "bg-background border-white/5 text-neutral-500"
                }`}
              >
                <span className="text-xs mb-1">{d.day}</span>
                <span className="font-bold text-lg mb-2">{d.date}</span>
                {d.status === "completed" && <CheckCircle2 className="h-4 w-4" />}
                {d.status === "active" && <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />}
                {d.status === "locked" && <Lock className="h-3 w-3 opacity-50" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
