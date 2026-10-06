"use client";

/**
 * NFCIndicator — subtle ambient badge shown at the top of the page.
 * Communicates "this is an NFC-powered card" without being the focus.
 */
export default function NFCIndicator() {
  return (
    <div
      className="flex items-center gap-2 px-3 py-1.5 rounded-full"
      style={{
        background: "rgba(79,142,247,0.08)",
        border: "1px solid rgba(79,142,247,0.2)",
      }}
      aria-label="NFC Connected"
    >
      {/* Pulse dot */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span
          className="nfc-pulse absolute inline-flex h-full w-full rounded-full"
          style={{ background: "var(--accent)", opacity: 0.6 }}
        />
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{ background: "var(--accent)" }}
        />
      </span>
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "var(--accent)" }}
      >
        NFC Connected
      </span>
    </div>
  );
}
