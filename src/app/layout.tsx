import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "ResumeGenie Pro",
  description: "Resume builder, ATS review & mentor consultation marketplace",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/builder", label: "Builder" },
  { href: "/review", label: "Review" },
  { href: "/consultants", label: "Consultation" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* sticky top nav */}
        <header className="border-b border-theme sticky top-0 z-30 bg-black/70 backdrop-blur">
          <div className="container flex items-center justify-between py-3">
            {/* logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight">
                ResumeGenie
                <span style={{ color: "var(--brand)" }}>Pro</span>
              </span>
            </Link>

            {/* nav + toggle */}
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6 text-sm">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="link">
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* mobile nav simple (sirf 3 main) */}
              <nav className="flex md:hidden items-center gap-4 text-sm">
                <Link href="/" className="link">
                  Home
                </Link>
                <Link href="/builder" className="link">
                  Builder
                </Link>
                <Link href="/consultants" className="link">
                  Consult
                </Link>
              </nav>

              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="container py-10">{children}</main>

        <footer className="border-t border-theme mt-16">
          <div className="container py-6 text-sm text-muted flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <span>
              © {new Date().getFullYear()} ResumeGenie Pro • Built from Delhi, India
            </span>
            <span className="text-xs">
              Designed for high-intent job seekers • Not just another “CV maker”
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
