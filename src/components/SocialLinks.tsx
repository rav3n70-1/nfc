"use client";

import { Mail, Phone } from "lucide-react";
import { profile } from "@/config/profile";

type SocialKey = keyof typeof profile.socials;

// ─── Brand SVG icons (inline, no external dependency) ───────────────
const BrandIcons: Partial<Record<string, React.ReactNode>> = {
  linkedin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.238-.244-.588-.493-.509-.678-.518-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.802.376s-1.054 1.03-1.054 2.511c0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.719.31 1.28.496 1.718.636.722.23 1.378.197 1.898.12.578-.087 1.782-.728 2.032-1.431.251-.703.251-1.306.176-1.431-.076-.126-.276-.201-.577-.352zM12.04 21.785h-.002a9.78 9.78 0 01-4.99-1.365l-.358-.212-3.71.973.99-3.618-.233-.371A9.774 9.774 0 012.25 12.04a9.79 9.79 0 019.79-9.79 9.79 9.79 0 019.79 9.79c0 5.408-4.398 9.745-9.79 9.745zm8.331-18.12A11.72 11.72 0 0012.04.25C5.54.25.25 5.54.25 12.04c0 2.077.542 4.106 1.572 5.894L0 24l6.236-1.636a11.745 11.745 0 005.804 1.517h.005c6.5 0 11.79-5.29 11.79-11.79 0-3.149-1.226-6.11-3.454-8.336z"/>
    </svg>
  ),
};

const LABELS: Record<string, string> = {
  linkedin:  "LinkedIn",
  github:    "GitHub",
  instagram: "Instagram",
  facebook:  "Facebook",
  twitter:   "X / Twitter",
  youtube:   "YouTube",
  whatsapp:  "WhatsApp",
  email:     "Email",
  phone:     "Phone",
};

function getIcon(key: string): React.ReactNode {
  if (key === "email") return <Mail size={20} aria-hidden="true" />;
  if (key === "phone") return <Phone size={20} aria-hidden="true" />;
  return BrandIcons[key] ?? (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
    </svg>
  );
}

function buildHref(key: string, value: string): string {
  if (key === "email") return `mailto:${value}`;
  if (key === "phone") return `tel:${value.replace(/\s/g, "")}`;
  if (key === "whatsapp") {
    if (value.startsWith("http")) return value;
    let digits = value.replace(/[^0-9]/g, "");
    if (digits.startsWith("01")) {
      digits = "880" + digits.substring(1);
    }
    return `https://wa.me/${digits}`;
  }
  return value;
}

export default function SocialLinks() {
  const entries = (Object.entries(profile.socials) as [SocialKey, string][]).filter(
    ([, v]) => Boolean(v)
  );

  if (entries.length === 0) return null;

  return (
    <section
      id="socials"
      className="px-5 py-16 max-w-xl mx-auto w-full"
      aria-label="Social profiles"
    >
      <div className="reveal text-center mb-10">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          Connect
        </p>
        <h2
          className="text-2xl xs:text-3xl font-bold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Find me online
        </h2>
        <div
          className="mx-auto mt-4 w-10 h-px"
          style={{ background: "var(--border)" }}
          aria-hidden="true"
        />
      </div>

      <ul className="reveal flex flex-col gap-3">
        {entries.map(([key, value]) => (
          <li key={key}>
            <a
              href={buildHref(key, value)}
              target={key !== "email" && key !== "phone" ? "_blank" : undefined}
              rel={key !== "email" && key !== "phone" ? "noopener noreferrer" : undefined}
              className="glass-card flex items-center gap-4 px-5 py-4 group cursor-pointer no-underline"
              aria-label={`${LABELS[key] ?? key}: ${value}`}
            >
              {/* Icon */}
              <span
                className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-colors duration-200"
                style={{
                  background: "rgba(79,142,247,0.1)",
                  color: "var(--accent)",
                  border: "1px solid rgba(79,142,247,0.2)",
                }}
              >
                {getIcon(key)}
              </span>

              {/* Label + value */}
              <div className="flex flex-col min-w-0">
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {LABELS[key] ?? key}
                </span>
                <span
                  className="text-xs truncate"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {value}
                </span>
              </div>

              {/* Arrow */}
              <svg
                className="ml-auto shrink-0 opacity-30 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all duration-200"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
