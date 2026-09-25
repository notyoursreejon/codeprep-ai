"use client";

import React from "react";
import BentoDashboard from "@/components/ui/bento-dashboard";
import { MarketingDashboard } from "@/components/ui/dashboard-1";
import { StatsCard } from "@/components/ui/stats-card-1";
import Feature from "@/components/ui/block-feature";
import Link from "next/link";

export default function AnalyticsPage() {
  const sampleTeamActivities = {
    totalHours: 42.8,
    stats: [
      { label: "DSA Drills", value: 50, color: "bg-emerald-400" },
      { label: "System Design", value: 30, color: "bg-indigo-400" },
      { label: "Mock Interviews", value: 20, color: "bg-purple-400" },
    ],
  };

  const sampleTeam = {
    memberCount: 148,
    members: [
      { id: "1", name: "Alex Chen", avatarUrl: "/avatar.png" },
      { id: "2", name: "Sarah Lin", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
      { id: "3", name: "David Kim", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
      { id: "4", name: "Elena Rostova", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    ],
  };

  const sampleCta = {
    text: "Targeting Meta E6 & Google L6 interview loops",
    buttonText: "Join Cohort",
    onButtonClick: () => alert("Enrolled in Staff Prep Cohort!"),
  };

  const velocityChartData = [
    { name: "W1", value: 45 },
    { name: "W2", value: 70 },
    { name: "W3", value: 55 },
    { name: "W4", value: 85, color: "bg-primary" },
    { name: "W5", value: 95, color: "bg-emerald-400" },
    { name: "W6", value: 80 },
  ];

  const accuracyChartData = [
    { name: "Easy", value: 96, color: "bg-emerald-400" },
    { name: "Med", value: 82, color: "bg-indigo-400" },
    { name: "Hard", value: 68, color: "bg-purple-400" },
    { name: "Arch", value: 88, color: "bg-amber-400" },
  ];

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-surface-container-low/90 backdrop-blur-xl z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-r border-outline-variant/20">
        <div className="flex flex-col">
          <div className="h-14 px-gutter flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-space-sm">
              <img alt="CodePrep AI Logo" className="h-8 w-auto object-contain" src="/logo.svg" />
              <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">CodePrep AI</span>
            </Link>
            <span className="font-label-caps text-label-caps px-space-xs py-0.5 rounded-lg bg-secondary-container text-on-secondary-container uppercase">PRO</span>
          </div>
          <div className="px-gutter py-space-sm">
            <nav className="flex flex-col gap-space-xs">
              <Link className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="/dashboard">
                <span className="material-symbols-outlined text-[18px]">grid_view</span>
                <span className="font-body-md text-body-md">Dashboard</span>
              </Link>
              <Link className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="/ide-and-ai-solver">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                <span className="font-body-md text-body-md">IDE &amp; AI Solver</span>
              </Link>
              <Link className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="/system-design">
                <span className="material-symbols-outlined text-[18px]">hub</span>
                <span className="font-body-md text-body-md">System Design</span>
              </Link>
              <Link aria-current="page" className="flex items-center gap-space-md px-space-md py-space-sm bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-inner transition-colors" href="/analytics">
                <span className="material-symbols-outlined text-[18px]">monitoring</span>
                <span className="font-body-md text-body-md">Analytics &amp; Metrics</span>
              </Link>
              <Link className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="/star-method">
                <span className="material-symbols-outlined text-[18px]">psychology</span>
                <span className="font-body-md text-body-md">Behavioral STAR</span>
              </Link>
              <Link className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="/resume">
                <span className="material-symbols-outlined text-[18px]">description</span>
                <span className="font-body-md text-body-md">Resume ATS</span>
              </Link>
              <Link className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="/fundamentals">
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                <span className="font-body-md text-body-md">CS Fundamentals</span>
              </Link>
              <Link className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="/settings">
                <span className="material-symbols-outlined text-[18px]">settings</span>
                <span className="font-body-md text-body-md">Settings</span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="p-gutter flex flex-col gap-space-sm">
          <div className="flex items-center justify-between px-space-md py-space-sm rounded-lg bg-surface-container">
            <div className="flex items-center gap-space-xs">
              <span className="text-[14px]">🔥</span>
              <span className="font-code-sm text-code-sm text-on-surface">14-day streak</span>
            </div>
            <span className="font-label-caps text-label-caps text-tertiary">Active</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="pl-64 flex flex-col min-h-screen">
        <header className="fixed top-0 left-64 right-0 h-14 bg-surface-container-lowest/80 backdrop-blur-xl z-40 flex items-center justify-between px-gutter-lg border-b border-outline-variant/20 shadow-sm">
          <div className="flex items-center gap-space-sm">
            <span className="font-code-sm text-code-sm text-on-surface-variant">Platform</span>
            <span className="text-outline text-xs">/</span>
            <span className="font-code-sm text-code-sm text-on-surface font-medium">Performance &amp; System Analytics</span>
          </div>
          <div className="flex items-center gap-space-md">
            <Link href="/dashboard" className="px-3 py-1.5 rounded-lg bg-surface-container text-xs font-mono hover:bg-surface-container-high transition-colors">
              Back to Overview
            </Link>
            <div className="flex items-center gap-space-sm pl-space-sm">
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/avatar.png" />
              <div className="hidden md:flex flex-col">
                <span className="font-body-sm text-body-sm font-semibold text-on-surface leading-tight">Alex Chen</span>
                <span className="font-label-caps text-label-caps text-primary leading-tight">Staff Tier</span>
              </div>
            </div>
          </div>
        </header>

        <main className="w-full pt-16 p-6 lg:p-10 space-y-10">
          {/* Header Banner */}
          <section className="relative overflow-hidden rounded-2xl bg-surface-container-low p-8 border border-outline-variant/20 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div>
                <span className="px-2.5 py-1 rounded-md bg-primary-container/20 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                  Interactive shadcn &amp; Brutalist Telemetry
                </span>
                <h1 className="text-3xl lg:text-4xl font-black mt-3 text-on-surface tracking-tight">
                  System Diagnostics &amp; Candidate Performance
                </h1>
                <p className="text-on-surface-variant mt-2 max-w-2xl text-sm leading-relaxed">
                  Real-time telemetry measuring algorithmic problem solving throughput, interview sprint consistency, and distributed engine compute load.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link href="/ide-and-ai-solver" className="px-4 py-2 rounded-xl bg-primary text-on-primary font-semibold text-sm hover:opacity-90 transition-opacity shadow-md">
                  Resume Drills
                </Link>
              </div>
            </div>
          </section>

          {/* Section 1: StatsCard & Team Activity Grid */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">analytics</span>
                Quantitative Progress Cards
              </h2>
              <span className="text-xs font-mono text-on-surface-variant">Framer Motion Powered</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              <StatsCard
                title="Weekly Solve Velocity"
                currentValue={42}
                valuePostfix=" problems"
                description={<span>+18% higher than median L6 candidates</span>}
                chartData={velocityChartData}
                defaultBarColor="bg-primary/30"
                highlightedBarColor="bg-primary"
                onActionClick={() => alert("Velocity details viewed")}
                className="bg-surface-container-low border-outline-variant/30"
              />
              <StatsCard
                title="Topic Mastery Index"
                currentValue={89}
                valuePostfix="%"
                description={<span>System design and DP modules completed</span>}
                chartData={accuracyChartData}
                defaultBarColor="bg-indigo-500/30"
                highlightedBarColor="bg-emerald-400"
                onActionClick={() => alert("Mastery index viewed")}
                className="bg-surface-container-low border-outline-variant/30"
              />
              <div className="lg:col-span-1 md:col-span-2">
                <MarketingDashboard
                  title="Sprint Cohort Activity"
                  teamActivities={sampleTeamActivities}
                  team={sampleTeam}
                  cta={sampleCta}
                  className="w-full bg-surface-container-low border-outline-variant/30 max-w-none h-full flex flex-col justify-between"
                  onFilterClick={() => alert("Cohort filter toggled")}
                />
              </div>
            </div>
          </section>

          {/* Section 2: Bento Dashboard (Brutalist Bar, Radar, Donut) */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-[20px]">speed</span>
                Platform Health &amp; Resource Consumption
              </h2>
              <span className="text-xs font-mono text-on-surface-variant">Bento Grid Component</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-outline-variant/30 shadow-2xl">
              <BentoDashboard />
            </div>
          </section>

          {/* Section 3: Feature Block Primitives */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">layers</span>
                Architecture Stack &amp; Tooling Primitives
              </h2>
              <span className="text-xs font-mono text-on-surface-variant">Block Feature Component</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-outline-variant/30 shadow-2xl bg-surface-container-low">
              <Feature />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
