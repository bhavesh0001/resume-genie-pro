export type ScoreResult = {
  score: number;
  checks: string[];
  suggestions: string[];
};

const mustHave = ["education", "experience", "skills", "projects", "summary"];
const keywords = [
  "react","node","express","mongodb","typescript","next.js","sql","docker","kubernetes",
  "aws","gcp","python","java","rest","graphql","redis","kafka","testing","jest","ci/cd",
  "lead","mentored","optimized","delivered","scalable","performance","security"
];

export function scoreResume(text: string): ScoreResult {
  const t = text.toLowerCase();
  let score = 40;

  const checks: string[] = [];
  const suggestions: string[] = [];

  for (const sec of mustHave) {
    const ok = t.includes(sec);
    checks.push(`${sec}:${ok ? "ok" : "missing"}`);
    if (ok) score += 7; else suggestions.push(`Add a clear **${sec}** section.`);
  }

  const email = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(text);
  const phone = /\+?\d[\d\s\-()]{8,}\d/.test(text);
  if (email) score += 4; else suggestions.push("Include a professional email address.");
  if (phone) score += 3; else suggestions.push("Add a reachable phone number.");
  checks.push(`email:${email?"ok":"missing"}`, `phone:${phone?"ok":"missing"}`);

  const bullets = (text.match(/(?:^|\n)[•\-*]/g) || []).length;
  if (bullets >= 6) { score += 6; checks.push("bullets:ok"); }
  else { suggestions.push("Use bullet points for achievements and impact."); checks.push("bullets:low"); }

  const metrics = (text.match(/\b(\d+%|\d+\+|\d+x|\d+\s*(ms|s|hrs|users|req\/?s|rpm|rps))\b/gi) || []).length;
  if (metrics >= 3) { score += 7; checks.push("metrics:ok"); }
  else { suggestions.push("Quantify impact with metrics (%, time, users)."); checks.push("metrics:low"); }

  let kwHits = 0;
  for (const kw of keywords) if (t.includes(kw)) kwHits++;
  const kwScore = Math.min(kwHits, 10) * 2;
  score += kwScore;
  checks.push(`keywords:${kwHits}`);
  if (kwHits < 5) suggestions.push("Add relevant role/stack keywords (React, Node, SQL...).");

  const words = (text.trim().split(/\s+/).filter(Boolean)).length;
  if (words < 200) { suggestions.push("Resume looks short; add projects/experience details."); checks.push("length:short"); }
  else if (words > 900) { suggestions.push("Too long; compress to 1–2 pages."); checks.push("length:long"); }
  else { score += 3; checks.push("length:ok"); }

  score = Math.max(0, Math.min(100, score));
  return { score, checks, suggestions };
}
