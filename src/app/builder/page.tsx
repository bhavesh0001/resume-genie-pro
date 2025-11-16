// src/app/builder/page.tsx
"use client";

import { useState } from "react";
import { FileText, Sparkles, Gauge } from "lucide-react";

type BuilderState = {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  skills: string;
  experience: string;
  education: string;
};

export default function BuilderPage() {
  const [data, setData] = useState<BuilderState>({
    name: "",
    title: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    experience: "",
    education: "",
  });

  const handleChange =
    (field: keyof BuilderState) => (e: any) => {
      setData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  // Simple “strength” score based on how many sections filled
  const filledSections = [
    data.name,
    data.title,
    data.summary,
    data.skills,
    data.experience,
    data.education,
  ].filter((v) => v.trim().length > 0).length;

  const strength = Math.round((filledSections / 6) * 100);
  const strengthLabel =
    strength < 40 ? "Needs work" : strength < 70 ? "Getting there" : "Interview-ready";

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-black text-white py-16">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 space-y-10">
        {/* Header / intro */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs mb-3">
              <FileText className="h-3.5 w-3.5" />
              <span>Resume Builder · Live preview</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
              Build a clean, industry-grade resume layout.
            </h1>
            <p className="text-sm text-muted max-w-2xl">
              Fill the left panel and watch your resume take shape on the right. You can
              export this layout or use it as a base before upgrading to ATS review &
              mentor feedback.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted">
            <Sparkles className="h-4 w-4 text-sky-400" />
            <span>Autosave & export can be wired later – this is your visual skeleton.</span>
          </div>
        </header>

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* LEFT: Form */}
          <div className="card bg-black/50 border border-white/10 shadow-xl">
            <h2 className="text-lg font-semibold mb-1">Resume Builder</h2>
            <p className="text-xs text-muted mb-6">
              Start with the basics. Keep sentences short, impact-driven and metric-focused.
            </p>

            <div className="space-y-6">
              {/* Basic details */}
              <section className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  Basic details
                </p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-muted block mb-1.5">Name</label>
                    <input
                      className="input"
                      value={data.name}
                      onChange={handleChange("name")}
                      placeholder="Bhavesh Bhat"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted block mb-1.5">Title / Role</label>
                    <input
                      className="input"
                      value={data.title}
                      onChange={handleChange("title")}
                      placeholder="Backend Engineer · Node.js | Next.js"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-muted block mb-1.5">Email</label>
                      <input
                        className="input"
                        value={data.email}
                        onChange={handleChange("email")}
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted block mb-1.5">Phone</label>
                      <input
                        className="input"
                        value={data.phone}
                        onChange={handleChange("phone")}
                        placeholder="+91-98XXXXXXX"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Summary */}
              <section className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                    Summary
                  </p>
                  <span className="text-[10px] text-muted">
                    2–3 lines about impact, not responsibilities
                  </span>
                </div>
                <textarea
                  className="input min-h-[80px]"
                  value={data.summary}
                  onChange={handleChange("summary")}
                  placeholder="Backend engineer who has built and shipped Node.js & Next.js projects with focus on performance, clean APIs and strong monitoring."
                />
              </section>

              {/* Skills */}
              <section className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                    Skills (comma separated)
                  </p>
                  <span className="text-[10px] text-muted">Group by backend / tools / cloud</span>
                </div>
                <textarea
                  className="input min-h-[70px]"
                  value={data.skills}
                  onChange={handleChange("skills")}
                  placeholder="Node.js, TypeScript, SQL, MongoDB, Redis, Docker, AWS, System Design basics"
                />
              </section>

              {/* Experience */}
              <section className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                    Experience / Projects
                  </p>
                  <span className="text-[10px] text-muted">
                    Use bullet points with numbers – 10%+, 3x, 20ms…
                  </span>
                </div>
                <textarea
                  className="input min-h-[110px]"
                  value={data.experience}
                  onChange={handleChange("experience")}
                  placeholder={`• Built job-board platform used by 3k+ users; improved API latency by 35%.\n• Designed chat app with WebSockets & Redis pub/sub for realtime messaging.\n• Automated deployment pipeline using Docker & GitHub Actions.`}
                />
              </section>

              {/* Education */}
              <section className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  Education
                </p>
                <textarea
                  className="input min-h-[70px]"
                  value={data.education}
                  onChange={handleChange("education")}
                  placeholder="B.Tech CSE – GGSIPU · 2022–2026 · 8.3 CGPA (till 6th sem)"
                />
              </section>
            </div>
          </div>

          {/* RIGHT: Live preview */}
          <div className="space-y-4">
            {/* strength meter */}
            <div className="card bg-black/60 border border-white/10 mb-2">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-sky-400" />
                  <div>
                    <p className="text-xs text-muted leading-tight">Resume strength</p>
                    <p className="text-sm font-medium">{strengthLabel}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-semibold">
                    {strength}
                    <span className="text-sm text-muted"> / 100</span>
                  </p>
                  <p className="text-[10px] text-muted">
                    Auto-estimation based on filled sections
                  </p>
                </div>
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-300"
                  style={{ width: `${Math.max(8, strength)}%` }}
                />
              </div>
            </div>

            {/* preview paper */}
            <div className="paper">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {data.name || "Your Name"}
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {data.title || "Role / Title"}
                  </p>
                </div>
                <div className="text-[10px] text-gray-500 text-right space-y-0.5">
                  <p>{data.email || "you@example.com"}</p>
                  <p>{data.phone || "+91-98XXXXXXX"}</p>
                </div>
              </div>

              <div className="mt-4 border-t border-gray-200 pt-3 space-y-3 text-xs leading-relaxed">
                {/* Summary */}
                <section>
                  <p className="font-semibold text-gray-800 mb-0.5">Summary</p>
                  <p className="text-gray-700">
                    {data.summary ||
                      "Backend-leaning engineer comfortable with Node.js, APIs and databases. Enjoys taking scrappy college-level projects to a stable, production-style version with monitoring & basic observability."}
                  </p>
                </section>

                {/* Skills */}
                <section>
                  <p className="font-semibold text-gray-800 mb-0.5">Skills</p>
                  <p className="text-gray-700">
                    {data.skills ||
                      "Node.js · TypeScript · SQL · MongoDB · Redis · Docker · Git · Basic System Design"}
                  </p>
                </section>

                {/* Experience / projects */}
                <section>
                  <p className="font-semibold text-gray-800 mb-0.5">
                    Experience & Projects
                  </p>
                  <p className="text-gray-700 whitespace-pre-line">
                    {data.experience ||
                      "• Built a job-board with 3k+ listings and multi-filter search using Node.js & PostgreSQL.\n• Shipped a chat app using WebSockets; handled 500+ concurrent connections in testing.\n• Optimised existing APIs and cut average response time from 400ms → 220ms."}
                  </p>
                </section>

                {/* Education */}
                <section>
                  <p className="font-semibold text-gray-800 mb-0.5">Education</p>
                  <p className="text-gray-700 whitespace-pre-line">
                    {data.education ||
                      "B.Tech CSE – GGSIPU (USICT)\n2022–2026 · Expected · Current CGPA 8.3/10"}
                  </p>
                </section>
              </div>

              <p className="mt-4 text-[10px] text-gray-400 text-right">
                This is a visual preview. Detailed ATS checks & mentor notes unlock in Pro / Pro+.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
