"use client";

import { UserPlus } from "lucide-react";
import { downloadVCard } from "@/lib/vcard";

interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className = "" }: ContactButtonProps) {
  return (
    <button
      onClick={downloadVCard}
      className={`btn-primary ${className}`}
      aria-label="Save contact to phone"
    >
      <UserPlus size={17} aria-hidden="true" />
      Save Contact
    </button>
  );
}
