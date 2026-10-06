import Background from "@/components/Background";
import ProfileHero from "@/components/ProfileHero";
import SocialLinks from "@/components/SocialLinks";
import QRSection from "@/components/QRSection";
import Footer from "@/components/Footer";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

/**
 * Home page — the NFC landing experience.
 *
 * Structure:
 *   Background (fixed ambient layers)
 *   └─ ProfileHero    → identity + CTAs (Save Contact & Live Portfolio)
 *   └─ SocialLinks    → all social & communication platforms
 *   └─ QRSection      → QR code fallback
 *   └─ Footer         → minimal footer
 */
export default function Home() {
  return (
    <>
      <Background />

      <main
        className="relative flex flex-col items-center"
        style={{ zIndex: 1 }}
      >
        {/* Hero is above fold */}
        <ProfileHero />

        {/* Thin horizontal divider */}
        <div
          className="w-full max-w-xl px-5"
          aria-hidden="true"
        >
          <div className="h-px w-full" style={{ background: "var(--border)" }} />
        </div>

        {/* Below fold content with scroll reveal */}
        <ScrollRevealWrapper>
          <SocialLinks />

          <div
            className="w-full max-w-xl mx-auto px-5"
            aria-hidden="true"
          >
            <div className="h-px w-full" style={{ background: "var(--border)" }} />
          </div>

          <QRSection />
        </ScrollRevealWrapper>

        <Footer />
      </main>
    </>
  );
}
