import Link from "next/link";
import { Search, Filter, Code2, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

const categories = [
  "Array", "String", "Linked List", "Stack", "Queue", "Tree", "Graph", "Dynamic Programming"
];

export default async function PracticePage() {
  // Fetch problems from the actual SQLite database
  const problems = await prisma.problem.findMany({
    orderBy: { createdAt: 'asc' }
  });

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 mb-2">DSA Practice</h2>
          <p className="text-neutral-400 text-lg">Master data structures and algorithms with AI-guided solutions.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
            <input 
              type="text" 
              placeholder="Search problems..." 
              className="bg-white/[0.02] border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-white/20 w-full md:w-64 transition-colors"
            />
          </div>
          <Button variant="outline" className="border-border bg-white/[0.02] rounded-xl">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <Button variant="secondary" size="sm" className="rounded-full shrink-0">All Topics</Button>
        {categories.map(cat => (
          <Button key={cat} variant="ghost" size="sm" className="rounded-full border border-white/5 hover:bg-white/10 shrink-0">
            {cat}
          </Button>
        ))}
      </div>

      <div className="border border-border rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-md">
        <table className="w-full text-sm text-left">
          <thead className="bg-background/50 text-neutral-400 border-b border-border">
            <tr>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Title</th>
              <th className="px-6 py-4 font-medium">Difficulty</th>
              <th className="px-6 py-4 font-medium">Topic</th>
              <th className="px-6 py-4 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.05]">
            {problems.map((problem) => (
              <tr key={problem.id} className="hover:bg-white/[0.04] transition-colors group">
                <td className="px-6 py-4">
                  <div className="h-4 w-4 rounded-full border border-neutral-600" />
                </td>
                <td className="px-6 py-4 font-medium text-neutral-200">{problem.title}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase ${
                    problem.difficulty === "Easy" ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                    problem.difficulty === "Medium" ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" :
                    "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}>
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 text-neutral-400">{problem.topic}</td>
                <td className="px-6 py-4 text-right">
                  <Button size="sm" className="rounded-full font-medium" asChild>
                    <Link href={`/solver?problemId=${problem.id}`}>
                      Solve
                    </Link>
                  </Button>
                </td>
              </tr>
            ))}
            {problems.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-neutral-500">
                  No problems found in database. Did you run the seed script?
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
