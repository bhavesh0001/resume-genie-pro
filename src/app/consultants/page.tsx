// src/app/consultants/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CalendarClock,
  PhoneCall,
  UserCheck,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function ConsultantsPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-black text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 space-y-14">
        {/* HERO */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200 mb-4">
              <Sparkles className="h-3 w-3" />
              <span>1:1 resume + career consultations</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Talk to people who{" "}
              <span className="text-sky-400">already cracked the roles</span>{" "}
              you want.
            </h1>

            <p className="text-sm md:text-base text-muted max-w-xl">
              Get your resume ripped apart (in a good way), rehearse answers, and
              understand how hiring managers actually think. Every call ends with
              a clear action-plan & updated resume to ship.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/ats" className="btn">
                Get a free ATS score first
              </Link>
              <Link
                href="#mentors"
                className="btn-outline inline-flex items-center gap-2"
              >
                Browse mentors
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-8 text-xs text-muted">
              <div>
                <p className="text-lg font-semibold text-white">4.9★</p>
                <p>Average call rating</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">1k+</p>
                <p>Resumes reviewed</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">40–90 min</p>
                <p>Typical call length</p>
              </div>
            </div>
          </div>

          {/* FEATURED MENTOR CARD */}
          <div className="card bg-black/60 border border-white/10 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-muted mb-1">Featured mentor</p>
                <p className="font-semibold text-lg">Ananya Verma</p>
                <p className="text-xs text-muted">
                  Senior Product Engineer · 7+ yrs · B2B SaaS
                </p>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs">
                  <Star className="h-3 w-3 text-emerald-300" />
                  <span>4.9</span>
                </div>
                <p className="text-[11px] text-muted mt-1">
                  210+ calls • 38 offers closed
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3 text-xs text-muted">
              <p className="font-medium text-white text-sm">
                What you can cover in a 45–60 min session:
              </p>
              <ul className="space-y-1">
                <li>• Deep review of your current resume + LinkedIn</li>
                <li>• Mapping your profile to target JD / career path</li>
                <li>• Mock interview round or portfolio walkthrough</li>
                <li>• End-of-call action plan & follow-up checklist</li>
              </ul>
            </div>

            <div className="mt-5 flex items-center justify-between text-sm">
              <div>
                <p className="text-xs text-muted mb-1">Starts at</p>
                <p className="text-lg font-semibold">
                  ₹49<span className="text-xs text-muted"> / minute</span>
                </p>
              </div>
              <Link
                href="#mentors"
                className="btn-outline inline-flex items-center gap-2 text-xs"
              >
                View all mentors
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* HOW IT WORKS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 md:grid-cols-3"
        >
          <div className="card bg-black/40">
            <CalendarClock className="h-6 w-6 mb-3 text-sky-400" />
            <h3 className="font-semibold mb-1 text-sm">1. Pick a slot</h3>
            <p className="text-xs text-muted">
              Choose your mentor, preferred date & call duration. Pay securely
              via Razorpay – per minute, no packages or lock-ins.
            </p>
          </div>
          <div className="card bg-black/40">
            <PhoneCall className="h-6 w-6 mb-3 text-emerald-400" />
            <h3 className="font-semibold mb-1 text-sm">
              2. Join private call room
            </h3>
            <p className="text-xs text-muted">
              Get a private video + shared-notes space. Upload your resume,
              JD and portfolio links so your mentor can annotate live.
            </p>
          </div>
          <div className="card bg-black/40">
            <UserCheck className="h-6 w-6 mb-3 text-amber-300" />
            <h3 className="font-semibold mb-1 text-sm">
              3. Leave with a gameplan
            </h3>
            <p className="text-xs text-muted">
              End the session with a revised resume, priority list of changes,
              and a concrete plan for the next 7–14 days.
            </p>
          </div>
        </motion.section>

        {/* MENTOR GRID */}
        <motion.section
          id="mentors"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h2 className="section-title mb-0">Pick your consultant</h2>
            <p className="text-xs text-muted">
              These are sample profiles to show how the marketplace will feel.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Mentor 1 */}
            <div className="card bg-black/50 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm">Karan Gupta</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-amber-200 bg-amber-500/10 px-2 py-1 rounded-full">
                    <Star className="h-3 w-3" />
                    4.9
                  </span>
                </div>
                <p className="text-xs text-muted">
                  SDE-II · High-growth product startup
                </p>
                <p className="text-[11px] text-muted">
                  Ex-service to product, strong in DSA + system design rounds.
                </p>
                <ul className="text-[11px] text-muted space-y-1 mt-2">
                  <li>• Role changes: Support → SDE / Backend</li>
                  <li>• Early career roadmap (0–3 yrs)</li>
                  <li>• Tech resume re-write + projects</li>
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-muted">₹39 / min · 100+ calls</span>
                <button className="btn-outline px-3 py-1 text-[11px]">
                  Book a slot
                </button>
              </div>
            </div>

            {/* Mentor 2 */}
            <div className="card bg-black/60 flex flex-col justify-between border border-emerald-400/40">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm">Riya Menon</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-200 bg-emerald-500/10 px-2 py-1 rounded-full">
                    <Star className="h-3 w-3" />
                    5.0
                  </span>
                </div>
                <p className="text-xs text-muted">
                  Product Manager · Fintech · 6+ yrs
                </p>
                <p className="text-[11px] text-muted">
                  Perfect for people moving into PM / APM from tech or ops.
                </p>
                <ul className="text-[11px] text-muted space-y-1 mt-2">
                  <li>• PM-style resume & case prep</li>
                  <li>• Storytelling & “impact bullets”</li>
                  <li>• Interview frameworks & cheat sheets</li>
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-muted">₹59 / min · 80+ calls</span>
                <button className="btn px-3 py-1 text-[11px]">
                  Book premium slot
                </button>
              </div>
            </div>

            {/* Mentor 3 */}
            <div className="card bg-black/50 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm">Aditya Rao</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-sky-200 bg-sky-500/10 px-2 py-1 rounded-full">
                    <Star className="h-3 w-3" />
                    4.8
                  </span>
                </div>
                <p className="text-xs text-muted">
                  Talent Partner · Tech hiring · 9+ yrs
                </p>
                <p className="text-[11px] text-muted">
                  Recruiter POV on what actually gets shortlisted.
                </p>
                <ul className="text-[11px] text-muted space-y-1 mt-2">
                  <li>• Live shortlist review of your resume</li>
                  <li>• Keyword + ATS optimisation</li>
                  <li>• “Red flag” clean-up before applying</li>
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-muted">₹49 / min · 120+ calls</span>
                <button className="btn-outline px-3 py-1 text-[11px]">
                  Talk to a recruiter
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* REVIEWS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          <h2 className="section-title mb-1">What people say after a call</h2>
          <p className="text-xs text-muted max-w-xl">
            These are anonymised examples of the kind of feedback you can expect.
          </p>

          <div className="grid gap-4 md:grid-cols-3 text-xs">
            <div className="card bg-black/50">
              <div className="flex items-center gap-1 mb-2 text-amber-300">
                <Star className="h-3 w-3" />
                <Star className="h-3 w-3" />
                <Star className="h-3 w-3" />
                <Star className="h-3 w-3" />
                <Star className="h-3 w-3" />
              </div>
              <p className="font-medium mb-1">“From confused to clear in 60 mins.”</p>
              <p className="text-muted">
                Final-year CS student, got a complete rewrite of resume + project
                section. Booked a second call after first two interviews.
              </p>
            </div>

            <div className="card bg-black/50">
              <div className="flex items-center gap-1 mb-2 text-amber-300">
                <Star className="h-3 w-3" />
                <Star className="h-3 w-3" />
                <Star className="h-3 w-3" />
                <Star className="h-3 w-3" />
                <Star className="h-3 w-3" />
              </div>
              <p className="font-medium mb-1">“Exactly the feedback my HR never gave.”</p>
              <p className="text-muted">
                3 YOE support engineer, switched to backend dev role with 35% hike
                after two focused sessions and mock rounds.
              </p>
            </div>

            <div className="card bg-black/50">
              <div className="flex items-center gap-1 mb-2 text-amber-300">
                <Star className="h-3 w-3" />
                <Star className="h-3 w-3" />
                <Star className="h-3 w-3" />
                <Star className="h-3 w-3" />
                <Star className="h-3 w-3" />
              </div>
              <p className="font-medium mb-1">“Best use of 800 rupees this month.”</p>
              <p className="text-muted">
                Non-tech professional preparing for first product role. Got a
                roadmap, resources, and draft resume in one session.
              </p>
            </div>
          </div>
        </motion.section>

        {/* FINAL CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="card bg-black/70 md:flex md:items-center md:justify-between gap-6 text-center md:text-left"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Ready for a brutally honest review of your resume?
            </h3>
            <p className="text-xs text-muted">
              Start with a free ATS check, shortlist a mentor, and book a short
              30–45 minute call to fix the biggest gaps fast.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 mt-4 md:mt-0">
            <Link href="/ats" className="btn text-sm">
              Run free ATS scan
            </Link>
            <Link href="#mentors" className="btn-outline text-sm">
              See mentor list
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
