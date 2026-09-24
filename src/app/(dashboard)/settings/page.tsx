"use client";

import { useState } from "react";
import { Key, User, Bell, Shield, Save, CheckCircle2, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Settings</h2>
        <p className="text-neutral-400">Manage your profile, preferences, and API integrations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Nav */}
        <div className="flex flex-col gap-2">
          <Button variant="secondary" className="justify-start bg-white/10 text-white">
            <Key className="mr-2 h-4 w-4" /> API Keys
          </Button>
          <Button variant="ghost" className="justify-start text-neutral-400 hover:text-white">
            <User className="mr-2 h-4 w-4" /> Account Profile
          </Button>
          <Button variant="ghost" className="justify-start text-neutral-400 hover:text-white">
            <Bell className="mr-2 h-4 w-4" /> Notifications
          </Button>
          <Button variant="ghost" className="justify-start text-neutral-400 hover:text-white">
            <Shield className="mr-2 h-4 w-4" /> Privacy & Data
          </Button>
        </div>

        {/* Content Area */}
        <div className="md:col-span-3 space-y-6">
          <div className="border border-border rounded-xl bg-background overflow-hidden">
            <div className="p-6 border-b border-border bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-1">AI Provider Configuration</h3>
              <p className="text-sm text-neutral-400">
                CodePrep AI runs on simulated endpoints by default. Add your own API key to unlock real-time, live AI responses using the latest models.
              </p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <Cloud className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white">OpenAI API Key</h4>
                    <p className="text-xs text-neutral-500">Used for GPT-4o powered coding solutions.</p>
                  </div>
                </div>
                <input 
                  type="password" 
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="sk-..."
                  className="w-full bg-white/5 border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50"
                />
              </div>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-orange-500/10 flex items-center justify-center shrink-0">
                      <Cloud className="h-4 w-4 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-neutral-300">Anthropic API Key (Claude)</h4>
                      <p className="text-xs text-neutral-500">Coming soon</p>
                    </div>
                  </div>
                  <Button disabled variant="outline" size="sm">Locked</Button>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-green-500/10 flex items-center justify-center shrink-0">
                      <Cloud className="h-4 w-4 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-neutral-300">Google Gemini API Key</h4>
                      <p className="text-xs text-neutral-500">Coming soon</p>
                    </div>
                  </div>
                  <Button disabled variant="outline" size="sm">Locked</Button>
                </div>
              </div>

              <div className="pt-6 flex justify-end">
                <Button onClick={handleSave} disabled={saved}>
                  {saved ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-400" />
                      Saved Successfully
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Preferences
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
