"use client";

import Link from "next/link";
import { Sparkles, CheckCircle2, Clock, FileText, MessageCircle } from "lucide-react";

export default function ReviewPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-black text-white py-16">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 space-y-10">
        {/* HERO */}
        <header className="grid gap-8 lg:grid-cols-[1.3fr,1fr] items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs mb-4">
              <Sparkles className="h-3.5 w-3.5 text-sky-400" />
              <span>Human review · Not just a score</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              Get a detailed, line-by-line review of your resume.
            </h1>
            <p className="text-sm text-muted max-w-2xl">
              Upload your latest resume and receive a structured review from someone
              who has actually screened and hired candidates. You’ll get a clear
              score, specific edits, and a game-plan for your next version.
            </p>

            <div className="mt-6 grid gap-3 text-xs text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Section-wise feedback: Summary, Skills, Projects, Experience.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Highlight impact, not just responsibilities &amp; buzzwords.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Optional 1:1 call with mentor to walk through changes.</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <label className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-medium cursor-pointer hover:brightness-95 transition">
                <FileText className="h-4 w-4" />
                <span>Upload resume for review</span>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              </label>

              <Link
                href="/consultants"
                className="btn-outline text-xs md:text-sm"
              >
                Browse mentors for 1:1 call
              </Link>
            </div>

            <p className="mt-3 text-[11px] text-muted">
              Supported formats: <span className="font-medium text-white/80">PDF, DOCX</span>.
              You’ll see an instant intake summary. Final edits &amp; comments will
              be shared over a private link.
            </p>
          </div>

          {/* Right info card */}
          <div className="card bg-black/60 border border-white/10 shadow-xl">
            <p className="text-xs uppercase tracking-[0.16em] text-muted mb-3">
              What you’ll receive
            </p>
            <div className="space-y-4 text-sm text-muted">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-7 w-7 rounded-full bg-sky-500/10 flex items-center justify-center">
                  <Clock className="h-3.5 w-3.5 text-sky-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    ATS-style score + reviewer notes
                  </p>
                  <p className="text-xs text-muted">
                    A realistic score (not 99/100 drama) with rationale:
                    structure, keyword match, clarity, achievement focus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-7 w-7 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    Redline comments &amp; rewrites
                  </p>
                  <p className="text-xs text-muted">
                    Specific sentences to remove, re-write or re-order. You’ll
                    know exactly what to type, not just “improve this section”.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-7 w-7 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    Next-steps roadmap
                  </p>
                  <p className="text-xs text-muted">
                    Short checklist on how to move from “okay resume” to “shortlist
                    magnet” in the next 7–10 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Plans / tiers */}
        <section className="grid gap-4 md:grid-cols-3">
          <div className="card bg-black/40 border border-white/10 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">
                Tier 1
              </p>
              <h3 className="text-lg font-semibold mb-1">Quick Check</h3>
              <p className="text-xs text-muted mb-3">
                For students who want a fast sanity check before applying.
              </p>
              <p className="text-2xl font-bold mb-3">₹499</p>
              <ul className="text-xs text-muted space-y-1.5">
                <li>• One-page review</li>
                <li>• Overall score + 5–7 key comments</li>
                <li>• 2–3 suggested bullet rewrites</li>
              </ul>
            </div>
            <button className="btn-outline mt-4 text-xs">
              Book quick review
            </button>
          </div>

          <div className="card bg-gradient-to-b from-black via-black/70 to-black/40 border border-sky-500/60 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Tier 2
                </p>
                <span className="badge text-[10px] bg-sky-500/10 border-sky-500/60 text-sky-300">
                  Most booked
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Deep Review</h3>
              <p className="text-xs text-muted mb-3">
                Ideal if you are applying to product / top tech roles this season.
              </p>
              <p className="text-2xl font-bold mb-3">
                ₹1,199 <span className="text-xs text-muted">per resume</span>
              </p>
              <ul className="text-xs text-muted space-y-1.5">
                <li>• Section-wise score &amp; comments</li>
                <li>• 15–20 bullet-level suggestions</li>
                <li>• Recommended structure &amp; ordering</li>
                <li>• Email support for 7 days post-review</li>
              </ul>
            </div>
            <button className="btn mt-4 text-xs">
              Get deep review
            </button>
          </div>

          <div className="card bg-black/40 border border-amber-400/60 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">
                Tier 3
              </p>
              <h3 className="text-lg font-semibold mb-1">Review + Call</h3>
              <p className="text-xs text-muted mb-3">
                For serious candidates who want to discuss career direction,
                portfolio &amp; interview strategy along with the resume.
              </p>
              <p className="text-2xl font-bold mb-3">
                ₹1,999 <span className="text-xs text-muted">review + 30 min call</span>
              </p>
              <ul className="text-xs text-muted space-y-1.5">
                <li>• Everything in Deep Review</li>
                <li>• 30-minute 1:1 Google Meet / Zoom</li>
                <li>• Live editing of your resume doc</li>
                <li>• Quick Q&amp;A on roles, profiles, next steps</li>
              </ul>
            </div>
            <Link href="/consultants" className="btn-outline mt-4 text-xs">
              Pick a mentor
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
