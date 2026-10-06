"use client";

import NFCIndicator from "./NFCIndicator";
import { profile } from "@/config/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-5 pb-10 pt-6 flex flex-col items-center gap-5 text-center"
      style={{
        paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom))",
        borderTop: "1px solid var(--border)",
      }}
    >
      <NFCIndicator />

      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
