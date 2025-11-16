"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

// Rotating banner messages
const bannerMessages = [
  "🎉 Launch offer: Get 25% OFF on your first Pro+ resume consultation — Limited slots.",
  "⚡ Paste your resume & get an ATS-style score + feedback summary in 30 seconds.",
  "👨‍🏫 Talk 1:1 with mentors who cracked top tech & product companies.",
];

export default function Home() {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setBannerIndex((i) => (i + 1) % bannerMessages.length),
      2500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative space-y-14 md:space-y-16">
      {/* background texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, rgba(14,165,233,0.16), transparent 55%), radial-gradient(circle at bottom right, rgba(250,204,21,0.12), transparent 55%)",
        }}
      />

    
      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-br from-[#020617] via-[#020617] to-black pt-28 pb-24">
        {/* ⬇️ yahan se .max-w-[1400px] mx-auto hata diya, full width + padding */}
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            {/* LEFT SIDE */}
            <div className="text-left">
              <span className="inline-flex items-center gap-2 bg-white/5 text-brand px-3 py-1 text-sm rounded-full border border-white/10 mb-4">
                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                ResumeGenie Pro · for serious job seekers
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white max-w-xl">
                Turn a normal CV into an
                <span className="text-sky-400 block">industry-grade resume.</span>
              </h1>

              <p className="text-muted mt-4 max-w-lg leading-relaxed">
                Builder + ATS review + live mentors. One platform where you can
                write, rate, optimise and repair your resume till it's “offer-ready”.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link href="/ats" className="btn px-6 py-3 text-lg rounded-xl">
                  Start free
                </Link>

                <Link
                  href="/ats#paste"
                  className="btn-outline px-6 py-3 text-lg rounded-xl"
                >
                  Paste resume → Get score
                </Link>
              </div>

              <div className="flex gap-12 mt-10 text-sm text-muted">
                <div>
                  <p className="text-2xl font-semibold text-white">10,000+</p>
                  Resumes analysed
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">50M+</p>
                  Recruiter views studied
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">4.8★</p>
                  Mentor sessions
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full flex justify-center lg:justify-end">
              <div className="w-[380px] lg:w-[420px] xl:w-[460px] bg-[#0b0d12] p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Live ATS Preview • Fresher
                </h3>

                <div className="bg-white text-black rounded-xl p-5 shadow-md mb-6">
                  <p className="font-semibold text-lg">Bhavesh Sharma</p>
                  <p className="text-sm text-gray-700">
                    Backend Engineer • Fresher
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Delhi · bhavesh@xyz.com · +91-98XXXXXX
                  </p>

                  <div className="mt-4">
                    <p className="font-semibold">Summary</p>
                    <p className="text-sm text-gray-700">
                      Built and shipped projects in Node.js & Next.js…
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div>
                      <p className="font-semibold">Skills</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>Node.js</li>
                        <li>SQL</li>
                        <li>Docker</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">Projects</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>Job board 3k+ users</li>
                        <li>Chat app WebSockets</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-5 border border-white/10">
                  <p className="text-muted text-sm mb-2">ATS Score (Pro+)</p>
                  <p className="text-4xl font-bold text-sky-400">
                    86<span className="text-lg text-white/60"> / 100</span>
                  </p>

                  <ul className="space-y-2 text-sm text-muted mt-4">
                    <li>✔ Clear sections: Summary, Skills, Projects</li>
                    <li>✔ Strong action verbs</li>
                    <li>⚠ Add internship experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS: Free / Pro / Pro+ */}
      <motion.section
        className="space-y-5"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h2 className="section-title mb-1">Plans for every stage</h2>
            <p className="text-muted text-sm">
              Start free. Upgrade only when you want more depth – like ATS insights,
              live review, and per-minute mentor calls.
            </p>
          </div>
          <div className="text-xs text-muted">
            All plans include secure login and unlimited edits.
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Free */}
          <div className="card flex flex-col justify-between bg-black/30">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold text-lg">Starter (Free)</div>
                <span className="badge text-[10px]">For students</span>
              </div>
              <div className="text-2xl font-bold mb-2">₹0</div>
              <ul className="text-sm text-muted space-y-1">
                <li>• Smart resume builder</li>
                <li>• Live preview & autosave</li>
                <li>• 1 basic ATS score / day</li>
              </ul>
            </div>
            <Link href="/builder" className="btn-outline mt-4 text-xs">
              Start with free builder
            </Link>
          </div>

          {/* Pro */}
          <div className="card flex flex-col justify-between border-2 border-emerald-400/70 bg-black/50 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold text-lg">Pro</div>
                <span className="badge text-[10px] bg-emerald-400/10 border-emerald-400/60 text-emerald-200">
                  Most popular
                </span>
              </div>
              <div className="text-2xl font-bold mb-2">
                ₹<span className="text-emerald-400">499</span> / month
              </div>
              <ul className="text-sm text-muted space-y-1">
                <li>• Unlimited ATS scores & deep checks</li>
                <li>• JD-based keyword suggestions</li>
                <li>• Export ready-to-send PDF</li>
                <li>• Priority email support</li>
              </ul>
            </div>
            <button className="btn mt-4 text-xs">Unlock Pro features</button>
          </div>

          {/* Pro Plus */}
          <div className="card flex flex-col justify-between bg-gradient-to-b from-black/40 to-black/10 border-theme">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold text-lg">Pro Plus</div>
                <span className="badge text-[10px] bg-amber-400/10 border-amber-400/50 text-amber-200">
                  Mentor access
                </span>
              </div>
              <div className="text-2xl font-bold mb-2">
                Per minute via Razorpay
              </div>
              <ul className="text-sm text-muted space-y-1">
                <li>• Everything in Pro</li>
                <li>• 1:1 calls with mentors</li>
                <li>• Chat room + shared notes</li>
                <li>• “Before/After” resume diff saved</li>
              </ul>
            </div>
            <Link href="/consultants" className="btn-outline mt-4 text-xs">
              Browse mentors
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CASE STUDIES / PROJECT STYLE SECTION */}
      <motion.section
        className="card"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-title">From raw CV to offer letter</h2>
        <p className="text-sm text-muted mb-4">
          These are sample stories showing what happens when a resume is edited the
          “industry way”.
        </p>

        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <div className="bg-black/40 border border-theme rounded-2xl p-4">
            <div className="text-xs text-muted mb-1">Case Study • Fresher</div>
            <div className="font-semibold mb-1">
              BCA → SDE Intern (product startup)
            </div>
            <ul className="text-muted text-xs space-y-1">
              <li>• Cleaned 3-page CV into 1-page impact resume</li>
              <li>• Added 2 strong projects with metrics</li>
              <li>• Highlighted GitHub + live links</li>
              <li className="text-emerald-400">→ 3 interview calls in 2 weeks</li>
            </ul>
          </div>

          <div className="bg-black/40 border border-theme rounded-2xl p-4">
            <div className="text-xs text-muted mb-1">Case Study • 2 YOE</div>
            <div className="font-semibold mb-1">
              Support Engineer → Backend Dev
            </div>
            <ul className="text-muted text-xs space-y-1">
              <li>• Converted “tasks” into achievements</li>
              <li>• Mapped skills to backend JD keywords</li>
              <li>• Storylined “why backend” in summary</li>
              <li className="text-emerald-400">→ Switched role with 40% hike</li>
            </ul>
          </div>

          <div className="bg-black/40 border border-theme rounded-2xl p-4">
            <div className="text-xs text-muted mb-1">Case Study • Final Year</div>
            <div className="font-semibold mb-1">
              Tier-3 college → Remote role
            </div>
            <ul className="text-muted text-xs space-y-1">
              <li>• Built project section like mini case studies</li>
              <li>• Focus on internships + freelance work</li>
              <li>• Played with layout for remote-first vibe</li>
              <li className="text-emerald-400">
                → First remote job before graduation
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* FAQ / ABOUT VIBE */}
      <motion.section
        className="grid gap-6 md:grid-cols-[1.2fr,1fr]"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="card">
          <h2 className="section-title mb-2">Why we built ResumeGenie Pro</h2>
          <p className="text-sm text-muted mb-3">
            Most Indian students & early professionals either copy random templates
            from Google or send the same CV to every company. Recruiters can spot
            it in 5 seconds.
          </p>
          <p className="text-sm text-muted mb-3">
            We’ve studied how hiring managers scan resumes, what ATS actually checks,
            and what changes increase replies. ResumeGenie Pro bakes that knowledge
            into your flow: builder, ATS check and finally human mentors.
          </p>
          <p className="text-sm text-muted">
            Think of it as{" "}
            <span className="font-semibold text-white">
              “AstroTalk, but for careers”
            </span>{" "}
            – instead of astrologers, you get people who’ve already done the role
            you want.
          </p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Quick questions</h3>
          <div className="space-y-3 text-sm">
            <div>
              <div className="font-medium">Is the builder free?</div>
              <p className="text-muted text-xs">
                Yes. You can create and export a clean resume without paying.
              </p>
            </div>
            <div>
              <div className="font-medium">What’s paid in Pro / Pro+?</div>
              <p className="text-muted text-xs">
                Deeper ATS checks, JD keyword mapping, and mentor marketplace are Pro
                / Pro+ features.
              </p>
            </div>
            <div>
              <div className="font-medium">How does per-minute payment work?</div>
              <p className="text-muted text-xs">
                You pay through Razorpay before the call. A private chat room link is
                generated instantly.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        className="card text-center md:text-left md:flex md:items-center md:justify-between gap-6 bg-black/70"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Ready to move from “college CV” to “industry resume”?
          </h2>
          <p className="text-sm text-muted">
            Start with the free tools today. When you feel stuck, call in the Pro &
            Pro+ features to push you over the line.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-4 md:mt-0 justify-center md:justify-end">
          <Link href="/builder" className="btn">
            Build now
          </Link>
          <Link href="/consultants" className="btn-outline">
            Explore mentors
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
