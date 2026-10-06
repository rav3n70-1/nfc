"use client";

import Image from "next/image";
import { MapPin, ChevronDown, ExternalLink } from "lucide-react";
import NFCIndicator from "./NFCIndicator";
import ContactButton from "./ContactButton";
import { profile } from "@/config/profile";

export default function ProfileHero() {
  const scrollToSocials = () => {
    document.getElementById("socials")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-5 pt-16 pb-12 min-h-dvh"
      aria-label="Profile hero"
    >
      {/* NFC indicator — top center */}
      <div className="mb-10">
        <NFCIndicator />
      </div>

      {/* Profile photo with animated gradient ring */}
      <div className="relative mb-7 w-28 h-28 xs:w-32 xs:h-32 shrink-0">
        {/* Spinning gradient ring */}
        <div
          className="profile-ring absolute -inset-1 rounded-full"
          style={{
            background: "var(--gradient-ring)",
            padding: "2px",
            zIndex: 0,
          }}
          aria-hidden="true"
        />
        {/* Mask inner */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: "var(--bg-base)", margin: "2px", zIndex: 1 }}
          aria-hidden="true"
        />
        {/* Ambient photo glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: "0 0 40px rgba(79,142,247,0.3)",
            zIndex: 2,
          }}
          aria-hidden="true"
        />
        <div className="relative w-full h-full rounded-full overflow-hidden" style={{ zIndex: 3 }}>
          <Image
            src={profile.photo}
            alt={`Photo of ${profile.name}`}
            fill
            priority
            sizes="(max-width: 640px) 112px, 128px"
            className="object-cover object-[50%_15%]"
            onError={() => {}} // graceful fallback
          />
        </div>
      </div>

      {/* Available indicator */}
      {profile.available && (
        <div className="flex items-center gap-1.5 mb-5">
          <span
            className="relative flex h-2 w-2"
            aria-hidden="true"
          >
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: "#22c55e" }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: "#22c55e" }}
            />
          </span>
          <span
            className="text-xs font-medium"
            style={{ color: "#22c55e" }}
          >
            Available
          </span>
        </div>
      )}

      {/* Name */}
      <h1
        className="text-3xl xs:text-4xl font-bold tracking-tight mb-2 leading-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {profile.name}
      </h1>

      {/* Title & Organization */}
      <div className="flex items-center gap-2 mb-4 flex-wrap justify-center">
        <p
          className="text-sm font-semibold tracking-widest uppercase"
          style={{ color: "var(--accent)" }}
        >
          {profile.title}
        </p>
        {profile.organization && (
          <>
            <span className="text-xs opacity-30 text-slate-400">•</span>
            <span
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              {profile.organization}
            </span>
          </>
        )}
      </div>

      {/* Tagline */}
      <p
        className="text-base xs:text-lg max-w-sm leading-relaxed mb-2 font-medium"
        style={{ color: "var(--text-primary)" }}
      >
        {profile.tagline}
      </p>

      {/* Bio */}
      {profile.bio && (
        <p
          className="text-xs xs:text-sm max-w-md leading-relaxed mb-4 px-2"
          style={{ color: "var(--text-secondary)" }}
        >
          {profile.bio}
        </p>
      )}

      {/* Location */}
      {profile.location && (
        <div
          className="flex items-center gap-1.5 mb-8 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          <MapPin size={13} aria-hidden="true" />
          <span>{profile.location}</span>
        </div>
      )}

      {/* Divider */}
      <div
        className="w-16 mb-8 h-px"
        style={{ background: "var(--border)" }}
        aria-hidden="true"
      />

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <ContactButton />
        <a
          href={profile.portfolioUrl || profile.website}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          aria-label="Visit portfolio website"
        >
          <ExternalLink size={17} aria-hidden="true" />
          Portfolio
        </a>
      </div>

      {/* Scroll hint */}
      <button
        onClick={scrollToSocials}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity"
        aria-label="Scroll down"
        tabIndex={-1}
      >
        <ChevronDown size={20} style={{ color: "var(--text-secondary)" }} />
      </button>
    </section>
  );
}
