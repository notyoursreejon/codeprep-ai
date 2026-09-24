"use client";

import React, { useState } from 'react';

export default function ResumeATSPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setScore(null);
    }
  };

  const handleScan = () => {
    if (!file) return;
    setIsScanning(true);
    // Simulate ATS scanning
    setTimeout(() => {
      setIsScanning(false);
      setScore(85);
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full min-h-full">
      <div className="p-gutter-lg space-y-gutter-lg max-w-[1200px] mx-auto w-full">
        {/* Header Section */}
        <section className="relative overflow-hidden rounded-xl bg-surface-container-low p-margin-lg shadow-xl">
          <div className="absolute -top-24 -right-16 w-[500px] h-[300px] bg-secondary-container/10 blur-[90px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col justify-center gap-space-sm">
            <h1 className="font-headline-lg text-headline-lg font-semibold text-on-surface tracking-tight">
              ATS Resume Scanner
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Upload your resume to get instant, AI-driven feedback calibrated against FAANG applicant tracking systems. Find missing keywords and formatting red flags.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* Left Column: Upload & Scan */}
          <div className="rounded-xl bg-surface-container-low p-space-lg shadow-md flex flex-col items-center justify-center border border-dashed border-outline-variant hover:border-primary transition-colors min-h-[400px]">
            <span className="material-symbols-outlined text-[48px] text-tertiary mb-space-md">
              upload_file
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-sm">
              Upload Resume (PDF, DOCX)
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg text-center">
              Drag and drop your file here or click to browse. Max size 5MB.
            </p>
            
            <input 
              type="file" 
              accept=".pdf,.doc,.docx" 
              onChange={handleUpload}
              className="hidden" 
              id="resume-upload" 
            />
            <label 
              htmlFor="resume-upload" 
              className="px-space-xl py-space-sm rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-body-md text-body-md font-medium transition-all shadow-md cursor-pointer mb-space-md"
            >
              Browse Files
            </label>

            {file && (
              <div className="flex flex-col items-center gap-space-sm w-full">
                <div className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-highest w-full max-w-sm">
                  <span className="material-symbols-outlined text-[20px] text-primary">description</span>
                  <span className="font-code-sm text-code-sm text-on-surface truncate flex-1">{file.name}</span>
                  <button onClick={() => { setFile(null); setScore(null); }} className="text-on-surface-variant hover:text-error transition-colors">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                </div>
                
                <button 
                  onClick={handleScan}
                  disabled={isScanning}
                  className="px-space-xl py-space-sm rounded-lg bg-secondary-container hover:opacity-90 text-on-secondary-container font-body-md text-body-md font-medium transition-all shadow-md mt-space-sm flex items-center gap-space-xs"
                >
                  {isScanning ? (
                    <>
                      <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
                      Scanning against Meta/Google ATS...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px]">psychology</span>
                      Run AI Analysis
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Results */}
          <div className="rounded-xl bg-surface-container-low p-space-lg shadow-md min-h-[400px]">
            {score === null ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                <span className="material-symbols-outlined text-[48px] text-outline mb-space-sm">
                  analytics
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">No Data Yet</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-space-xs">
                  Upload and scan your resume to see your ATS match score and detailed feedback.
                </p>
              </div>
            ) : (
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-space-lg">
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Scan Results</h3>
                  <div className="flex items-center gap-space-sm">
                    <span className="font-label-caps text-label-caps text-tertiary">MATCH SCORE</span>
                    <span className="font-headline-lg text-headline-lg font-bold text-tertiary">{score}/100</span>
                  </div>
                </div>

                <div className="space-y-space-md flex-1">
                  <div className="p-space-md rounded-lg bg-error-container/20 border border-error/30">
                    <div className="flex items-center gap-space-xs mb-space-xs">
                      <span className="material-symbols-outlined text-[18px] text-error">warning</span>
                      <span className="font-code-sm text-code-sm font-semibold text-error">Missing Keywords</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Your resume lacks strong signals for <span className="text-on-surface font-medium">Distributed Systems</span> and <span className="text-on-surface font-medium">System Architecture</span>. Consider adding metrics around scaling or throughput.
                    </p>
                  </div>
                  
                  <div className="p-space-md rounded-lg bg-surface-container-highest">
                    <div className="flex items-center gap-space-xs mb-space-xs">
                      <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                      <span className="font-code-sm text-code-sm font-semibold text-primary">Strong Action Verbs</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Excellent use of impact-driven verbs like "Architected", "Spearheaded", and "Optimized".
                    </p>
                  </div>

                  <div className="p-space-md rounded-lg bg-surface-container-highest">
                    <div className="flex items-center gap-space-xs mb-space-xs">
                      <span className="material-symbols-outlined text-[18px] text-tertiary">insights</span>
                      <span className="font-code-sm text-code-sm font-semibold text-tertiary">Formatting & Readability</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      PDF parsing was 100% successful. No hidden tables or columns that break ATS parsers.
                    </p>
                  </div>
                </div>

                <button className="w-full mt-space-lg px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-md text-body-md font-medium transition-all border border-outline-variant flex items-center justify-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Download Full Report
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
