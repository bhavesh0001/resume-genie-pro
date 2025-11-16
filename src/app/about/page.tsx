"use client";

import { Sparkles, Users, Briefcase, FileText, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-black text-white py-20">
      <div className="max-w-[1300px] mx-auto px-5 space-y-16">

        {/* HEADER */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            About <span className="text-sky-400">ResumeGenie Pro</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto text-sm">
            Built in Delhi — used across India. A modern resume engine crafted for
            serious job seekers who want clarity, structure and real hiring insights,
            not random templates from the internet.
          </p>
        </div>

        {/* SECTION 1 – STORY */}
        <section className="card bg-black/50 border border-white/10 p-8 md:p-10 space-y-5">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-400" />
            Why we built ResumeGenie Pro
          </h2>

          <p className="text-muted text-sm leading-relaxed">
            Most students and professionals don't fail interviews because of skills —
            they fail because their resume does not communicate their value.  
            80% of resumes we reviewed were either copied templates, poorly structured,
            keyword–less, or simply not “industry ready”.
          </p>

          <p className="text-muted text-sm leading-relaxed">
            That’s why ResumeGenie Pro was created: a clean, powerful system that
            helps you build, improve and <span className="text-white">actually understand</span> what a strong
            resume looks like — with ATS scanning, deep reviews and expert mentorship.
          </p>
        </section>

        {/* SECTION 2 – FEATURES */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">What we offer</h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">

            {/* CARD 1 */}
            <div className="card bg-black/40 border border-white/10 p-6 space-y-3">
              <Briefcase className="h-6 w-6 text-sky-400" />
              <h3 className="text-lg font-semibold">ATS Resume Builder</h3>
              <p className="text-muted">
                Smart, minimal builder with live preview, metrics-focused prompts, and
                clean export-friendly formatting.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="card bg-black/40 border border-white/10 p-6 space-y-3">
              <FileText className="h-6 w-6 text-emerald-400" />
              <h3 className="text-lg font-semibold">Instant ATS Review</h3>
              <p className="text-muted">
                Get a realistic score based on structure, relevance, action verbs,
                achievements and JD-match depth.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="card bg-black/40 border border-white/10 p-6 space-y-3">
              <Users className="h-6 w-6 text-amber-400" />
              <h3 className="text-lg font-semibold">1:1 Mentor Consultations</h3>
              <p className="text-muted">
                Talk directly to professionals from top tech & product companies.
                Ask questions and get clear actionable direction.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 – APPROACH */}
        <section className="card bg-black/50 border border-white/10 p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            Our Approach
          </h2>

          <ul className="text-muted text-sm space-y-3">
            <li>• Focus on measurable achievements — not filler text.</li>
            <li>• Prioritize ATS compatibility & recruiter readability.</li>
            <li>• Break down complex feedback into step-by-step edits.</li>
            <li>• Use research from 50M+ recruiter interactions & real hiring patterns.</li>
          </ul>
        </section>

        {/* SECTION 4 – SMALL CTA */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Building resumes that actually get noticed.
          </h2>
          <p className="text-muted text-sm max-w-xl mx-auto">
            Start free. Upgrade to deeper reviews or 1:1 calls when you're ready.
          </p>
        </section>
      </div>
    </div>
  );
}
