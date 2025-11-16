"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  Sparkles,
  FileCheck,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-[#020617] text-white py-28">
      
      {/* HERO */}
      <div className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Services Designed for
          <span className="text-sky-400"> High-Intent Job Seekers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-muted text-sm max-w-xl mx-auto"
        >
          Everything you need to build a polished resume, get ATS-verified scores,
          and talk 1:1 with mentors from top companies.
        </motion.p>
      </div>

      {/* GRID - SERVICE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

        {/* CARD 1 — Resume Builder */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/40 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-sky-500/10 hover:border-sky-400/40 transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-6 w-6 text-sky-400" />
            <h3 className="text-xl font-semibold">Resume Builder</h3>
          </div>

          <p className="text-muted text-sm mb-6 leading-relaxed">
            Create clean, modern resumes with live preview, smart templates,
            section-based editing, and export-ready formats.
          </p>

          <Link href="/builder" className="inline-flex items-center text-sky-400 text-sm font-medium hover:underline">
            Start building <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </motion.div>

        {/* CARD 2 — ATS Review */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/40 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-400/40 transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileCheck className="h-6 w-6 text-emerald-400" />
            <h3 className="text-xl font-semibold">ATS Review</h3>
          </div>

          <p className="text-muted text-sm mb-6 leading-relaxed">
            Upload your resume and instantly receive ATS-style scoring,
            keyword checks, formatting analysis, and improvement suggestions.
          </p>

          <Link href="/ats" className="inline-flex items-center text-emerald-400 text-sm font-medium hover:underline">
            Scan resume <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </motion.div>

        {/* CARD 3 — Consultation */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/40 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-amber-500/10 hover:border-amber-400/40 transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="h-6 w-6 text-amber-400" />
            <h3 className="text-xl font-semibold">Consultation</h3>
          </div>

          <p className="text-muted text-sm mb-6 leading-relaxed">
            Book per-minute calls with mentors who’ve cracked roles in FAANG,
            top startups, and product companies. Get personalised guidance.
          </p>

          <Link href="/consultants" className="inline-flex items-center text-amber-400 text-sm font-medium hover:underline">
            Explore mentors <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </motion.div>

      </div>

      {/* CTA SECTION */}
      <div className="text-center mt-28">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Unsure where to start?
        </h2>
        <p className="text-muted text-sm max-w-lg mx-auto mb-8">
          Begin with the free builder or upload your resume for an ATS score.
          Upgrade anytime for deeper insights and mentor access.
        </p>

        <Link
          href="/ats"
          className="btn px-6 py-3 rounded-xl text-lg"
        >
          Try ATS Scanner Free
        </Link>
      </div>
    </div>
  );
}
