"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/config/profile";

export default function QRSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function drawQR() {
      try {
        const QRCode = (await import("qrcode")).default;
        if (cancelled || !canvasRef.current) return;

        await QRCode.toCanvas(canvasRef.current, profile.nfcUrl, {
          width: 180,
          margin: 1,
          color: {
            dark: "#f0f2f8",
            light: "#00000000", // transparent background
          },
          errorCorrectionLevel: "M",
        });
      } catch {
        if (!cancelled) setError(true);
      }
    }

    drawQR();
    return () => { cancelled = true; };
  }, []);

  return (
    <section
      className="px-5 py-12 flex flex-col items-center gap-4"
      aria-label="QR code fallback"
    >
      <p
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "var(--text-muted)" }}
      >
        No NFC? Scan this
      </p>

      <div
        className="glass-card p-4 inline-flex flex-col items-center gap-3"
        role="img"
        aria-label={`QR code linking to ${profile.nfcUrl}`}
      >
        {error ? (
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            QR unavailable
          </p>
        ) : (
          <canvas
            ref={canvasRef}
            className="rounded-lg"
            style={{ imageRendering: "pixelated" }}
          />
        )}
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          {profile.nfcUrl.replace(/^https?:\/\//, "")}
        </span>
      </div>
    </section>
  );
}
