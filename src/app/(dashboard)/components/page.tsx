"use client";

import React from "react";
import BentoDashboard from "@/components/ui/bento-dashboard";
import Feature from "@/components/ui/block-feature";
import { MarketingDashboard } from "@/components/ui/dashboard-1";
import { StatsCard, StatsCardProps } from "@/components/ui/stats-card-1";

export default function ComponentsDemoPage() {
  const sampleTeamActivities = {
    totalHours: 16.5,
    stats: [
      { label: "Productive", value: 45, color: "bg-green-400" },
      { label: "Middle", value: 25, color: "bg-lime-300" },
      { label: "Break", value: 15, color: "bg-yellow-300" },
      { label: "Idle", value: 15, color: "bg-slate-800 dark:bg-slate-700" },
    ],
  };

  const sampleTeam = {
    memberCount: 235,
    members: [
      { id: "1", name: "Olivia Martin", avatarUrl: "https://cdn.21st.dev/assets/mirror/42/420c64d5e90b2ff05fc182e3d8c3df40076440cb684d927efed247855775ea9b.jpg" },
      { id: "2", name: "Jackson Lee", avatarUrl: "https://cdn.21st.dev/assets/mirror/ff/ff4b0fe2f7d11aff0d68f760e5fdcfeebf8b884c024ae24c9a6cf1d2edf76f49.jpg" },
    ],
  };

  const sampleCta = {
    text: "Manage your activities and team members",
    buttonText: "See All",
    onButtonClick: () => alert("'See All' button clicked!"),
  };

  const salesChartData: StatsCardProps['chartData'] = [
    { name: "Jan", value: 65 },
    { name: "Feb", value: 99, color: "bg-sky-500" }, 
    { name: "Mar", value: 40 },
    { name: "Apr", value: 50 },
    { name: "May", value: 65 },
    { name: "Jun", value: 60 }, 
    { name: "Jul", value: 50 },
    { name: "Aug", value: 50 },
  ];

  return (
    <div className="flex flex-col gap-12 p-8 w-full min-h-screen">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold font-headline-lg">Bento Dashboard</h2>
        <BentoDashboard />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold font-headline-lg">Feature Block</h2>
        <Feature />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold font-headline-lg">Marketing Dashboard</h2>
        <MarketingDashboard teamActivities={sampleTeamActivities} team={sampleTeam} cta={sampleCta} />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold font-headline-lg">Stats Card</h2>
        <StatsCard
          title="Sales Revenue"
          currentValue={5832}
          valuePrefix="$"
          chartData={salesChartData}
          description={<>Your revenue decreased this month by about <span className="font-semibold text-destructive">$421</span></>}
          onActionClick={() => alert("Action triggered!")}
          defaultBarColor="bg-primary/30"
          highlightedBarColor="bg-amber-500"
        />
      </div>
    </div>
  );
}
