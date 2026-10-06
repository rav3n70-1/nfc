import React from "react";
import { profile } from "@/config/profile";

type Props = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export default function ProjectCard({ title, description, tech, link }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10">
      <h3 className="mb-1 text-base font-semibold text-white">{title}</h3>
      <p className="mb-3 text-sm text-white/60">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tech.map((t: string) => (
          <span
            key={t}
            className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/80"
          >
            {t}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-xs text-blue-400 hover:underline"
        >
          View project →
        </a>
      )}
    </div>
  );
}

// Re-export profile type for convenience
export type { Profile } from "@/config/profile";
