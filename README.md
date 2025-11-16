# ResumeGenie Pro v2

- Black/White premium theme with dark-mode toggle
- Pages: Home, About, Services, Contact, Builder, Review, Consultants (+ detail), Chat placeholder
- Resume Builder with localStorage caching
- Review: paste OR upload PDF/TXT, ATS scoring
- Consultation marketplace + Razorpay Payment Link (simple redirect flow)
- Prisma (SQLite) schema fixed (no enums); easy to port to Postgres

## Quick Start
```bash
npm i
cp .env.example .env
npx prisma migrate dev --name init
npm run dev
```
