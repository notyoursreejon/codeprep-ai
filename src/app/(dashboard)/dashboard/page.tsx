import { Trophy, CheckCircle2, Flame, BookX } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 mb-2">Welcome back, Developer</h2>
          <p className="text-neutral-400 text-lg">Here's your progress and daily tasks.</p>
        </div>
        <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 font-medium">
          <Link href="/solver">Solve a Problem</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md p-6 hover:bg-white/[0.04] transition-colors">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-neutral-400">Current Streak</h3>
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Flame className="h-5 w-5 text-orange-500" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mt-2">12 Days</div>
          <p className="text-sm text-neutral-500 mt-2">Keep it up!</p>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md p-6 hover:bg-white/[0.04] transition-colors">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-neutral-400">Problems Solved</h3>
            <div className="p-2 bg-green-500/10 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mt-2">148</div>
          <p className="text-sm text-neutral-500 mt-2">+4 this week</p>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md p-6 hover:bg-white/[0.04] transition-colors">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-neutral-400">Interviews</h3>
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Trophy className="h-5 w-5 text-yellow-500" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mt-2">5</div>
          <p className="text-sm text-neutral-500 mt-2">Avg Score: 82%</p>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md p-6 hover:bg-white/[0.04] transition-colors">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-neutral-400">Weak Topics</h3>
            <div className="p-2 bg-red-500/10 rounded-lg">
              <BookX className="h-5 w-5 text-red-500" />
            </div>
          </div>
          <div className="text-xl font-bold text-white mt-2">Dynamic Prog.</div>
          <p className="text-sm text-neutral-500 mt-2">Accuracy: 42%</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Daily Challenge</h3>
          <div className="rounded-xl border border-white/[0.08] bg-[#0c0c0e] p-6 flex justify-between items-center group hover:border-white/20 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">Merge Intervals</span>
                <span className="text-xs uppercase font-bold px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">Medium</span>
              </div>
              <p className="text-sm text-neutral-400">Array, Sorting</p>
            </div>
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/solver?problem=merge-intervals">Start Challenge</Link>
            </Button>
          </div>
        </div>

        <div className="col-span-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[
              { title: "Two Sum", status: "Solved", date: "2 hours ago" },
              { title: "Mock Interview: Frontend", status: "85%", date: "Yesterday" },
              { title: "Valid Parentheses", status: "Solved", date: "2 days ago" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <span className="text-neutral-200 font-medium text-base">{item.title}</span>
                <div className="text-right">
                  <div className="text-white font-medium">{item.status}</div>
                  <div className="text-xs text-neutral-500 mt-1">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
