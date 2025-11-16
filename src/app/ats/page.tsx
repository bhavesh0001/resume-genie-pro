"use client";


import { useState } from "react";

export default function ATSPage() {
  const [file, setFile] = useState<File | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const handleUpload = (e: any) => {
    const uploaded = e.target.files[0];
    setFile(uploaded);

    // Fake ATS scoring for now
    setScore(86);
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0c10] text-white px-6 py-24 flex flex-col items-center">

      {/* GREETING */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          ATS Resume Scanner
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          Upload your resume (PDF/DOCX) to get an initial ATS-style score +
          improvement summary. For the full breakdown, upgrade to Pro+.
        </p>
      </div>

      {/* UPLOAD BUTTON */}
      <label className="cursor-pointer border border-white/20 px-10 py-6 rounded-2xl bg-white/5 hover:bg-white/10 transition mb-12">
        <span className="text-lg">📄 Upload your resume</span>
        <input type="file" className="hidden" onChange={handleUpload} />
      </label>

      {/* AFTER UPLOAD SECTION */}
      {file && (
        <div className="w-full max-w-4xl mx-auto space-y-10">

          {/* SUCCESS MESSAGE */}
          <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-6 py-4 rounded-xl">
            ✅ Your resume has been successfully uploaded.  
            <span className="text-white font-semibold"> Here’s your preliminary ATS report.</span>
          </div>

          {/* SCORE BOX */}
          <div className="bg-black/20 border border-white/10 rounded-2xl p-8">
            <p className="text-sm text-muted mb-2">{file.name}</p>

            <h2 className="text-5xl font-bold mb-3">
              <span className="text-sky-400">{score}</span>
              <span className="text-2xl text-white/60"> / 100</span>
            </h2>

            <p className="text-muted">
              This is your **initial ATS compatibility score** based on keywords,
              formatting, readability and experience structure.
            </p>
          </div>

          {/* BREAKDOWN */}
          <div className="bg-black/30 border border-white/10 rounded-2xl p-8 space-y-6">
            <h3 className="text-xl font-semibold">Summary of Findings</h3>

            <ul className="space-y-3 text-sm text-muted">
              <li>⚡ Strong technical stack mentioned (Node.js, SQL, Docker).</li>
              <li>⚠ Summary section lacks measurable impact statements.</li>
              <li>⚠ Projects missing quantified achievements (e.g., performance, users, speed).</li>
              <li>⚠ Internship experience missing — reduces ATS depth score.</li>
              <li>✔ Formatting & readability are clean and ATS-friendly.</li>
            </ul>
          </div>

          {/* CTA - SUBSCRIBE */}
          <div className="bg-gradient-to-r from-amber-400/20 to-amber-200/10 border border-amber-300/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-amber-200 mb-3">
              Unlock Full Detailed Report
            </h3>
            <p className="text-sm text-muted max-w-xl mx-auto mb-6">
              Get actionable score breakdowns (Keywords, Experience Mapping, 
              Summary Strength, Formatting), recruiter feedback and JD-based 
              optimization.
            </p>

            <button className="px-6 py-3 bg-amber-400 text-black font-semibold rounded-xl hover:bg-amber-300 transition">
              Upgrade to Pro+ (₹499/month)
            </button>
          </div>

          {/* CTA - MENTOR CONSULTATION */}
          <div className="border border-white/10 rounded-2xl p-8 text-center bg-black/20">
            <h3 className="text-xl font-semibold mb-3">
              Talk to a Hiring Manager / HR Reviewer
            </h3>
            <p className="text-muted text-sm max-w-xl mx-auto mb-6">
              Get your resume reviewed live by engineers, PMs & HR professionals
              from top tech companies.
            </p>

            <button className="px-5 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
              Book a 1:1 Review Session
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
