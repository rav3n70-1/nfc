import { profile } from "@/config/profile";

/**
 * Generates a vCard 3.0 string and triggers a download on the client.
 * Uses only the social keys that are present in the profile config.
 */
export function downloadVCard() {
  const { name, phone, email, website, organization, title, socials } = profile;

  // Build social profile lines for whatever keys are configured
  const socialLines = (Object.entries(socials) as [string, string][])
    .filter(([k, v]) => v && k !== "email" && k !== "phone")
    .map(([k, v]) => `X-SOCIALPROFILE;type=${k}:${v}`);

  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${name}`,
    `N:${name.split(" ").slice(1).join(" ")};${name.split(" ")[0]};;;`,
    `TITLE:${title}`,
    `ORG:${organization}`,
    phone ? `TEL;TYPE=CELL:${phone}` : "",
    email ? `EMAIL;TYPE=INTERNET:${email}` : "",
    website ? `URL:${website}` : "",
    ...socialLines,
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");

  const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name.replace(/\s+/g, "_")}.vcf`;
  a.click();
  URL.revokeObjectURL(url);
}
