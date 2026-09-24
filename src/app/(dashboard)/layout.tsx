"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Terminal, 
  BrainCircuit, 
  Code2, 
  LayoutDashboard, 
  Settings, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Trophy,
  Bug
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "AI Solver", href: "/solver", icon: BrainCircuit },
  { name: "Code Debugger", href: "/debugger", icon: Bug },
  { name: "Code Explainer", href: "/explainer", icon: Code2 },
  { name: "System Design", href: "/system-design", icon: LayoutDashboard },
  { name: "DSA Practice", href: "/practice", icon: BookOpen },
  { name: "Mock Interview", href: "/interview", icon: Briefcase },
  { name: "STAR Method", href: "/star-method", icon: Briefcase },
  { name: "Resume Analyzer", href: "/resume", icon: Briefcase },
  { name: "CS Fundamentals", href: "/fundamentals", icon: BookOpen },
  { name: "Project Prep", href: "/project-prep", icon: GraduationCap },
  { name: "Daily Challenge", href: "/challenge", icon: Trophy },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#09090b] selection:bg-primary/30">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/[0.08] bg-[#09090b]/50 backdrop-blur-xl hidden md:flex flex-col z-20">
        <div className="h-20 flex items-center px-8 border-b border-white/[0.08]">
          <Link className="flex items-center gap-3 group" href="/">
            <div className="bg-white text-black p-1.5 rounded-lg group-hover:scale-105 transition-transform">
              <Terminal className="h-5 w-5" />
            </div>
            <span className="font-bold tracking-tight text-lg">CodePrep AI</span>
          </Link>
        </div>
        
        <nav className="flex-1 py-8 px-6 space-y-1.5 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200",
                  isActive 
                    ? "bg-white/10 text-white shadow-sm ring-1 ring-white/20" 
                    : "text-neutral-400 hover:text-white hover:bg-white/[0.06]"
                )}
              >
                <link.icon className={cn("h-5 w-5", isActive ? "text-white" : "text-neutral-500")} />
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-6 border-t border-white/[0.08]">
          <Link
            href="/settings"
            className="flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-all"
          >
            <Settings className="h-5 w-5 text-neutral-500" />
            Settings
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-[#0c0c0e]">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Navbar */}
        <header className="h-20 flex items-center justify-between px-10 border-b border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-xl z-10 relative">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-white tracking-tight">
              {sidebarLinks.find((l) => l.href === pathname)?.name || "CodePrep AI"}
            </h1>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search problems, topics, or interviews... (Ctrl+K)"
              className="w-full bg-[#121214] border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-neutral-300 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-0.5 shadow-lg shadow-blue-500/20 cursor-pointer hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0c0c0e] rounded-full flex items-center justify-center text-sm font-bold text-white">
                S
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-10 relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}
