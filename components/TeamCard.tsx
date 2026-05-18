"use client";

import Image from "next/image";
import { useState } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  photo: string | null;
  photoPosition?: string;
}

export default function TeamCard({ name, role, photo, photoPosition }: TeamCardProps) {
  const [hovered, setHovered] = useState(false);

  // const [flipped, setFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // onMouseEnter={() => setFlipped(true)}
      // onMouseLeave={() => setFlipped(false)}
      style={{
        // perspective: "1000px",
        cursor: "default",
        width: "100%",
        paddingTop: "62%",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        transform: hovered ? "scale(1.03)" : "scale(1)",
        borderRadius: 12,
        boxShadow: hovered
          ? "0 6px 20px rgba(0,0,0,0.13), 0 0 0 1px rgba(0,0,0,0.07)"
          : "0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)",
      }}
      className="relative"
    >
      {/* Card — front face only */}
      <div
        style={{
          // transformStyle: "preserve-3d",
          // transition: "transform 0.55s cubic-bezier(0.45, 0.05, 0.55, 0.95)",
          // transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          position: "absolute", inset: 0,
          borderRadius: 12, overflow: "hidden",
          backgroundColor: "#E8E0F0",
          display: "flex",
        }}
      >
        {/* Photo — left 45% */}
        <div style={{ position: "relative", width: "45%", flexShrink: 0 }}>
          {photo ? (
            <Image
              src={photo} alt={name} fill
              style={{ objectFit: "cover", objectPosition: photoPosition ?? "center top" }}
              sizes="(max-width: 640px) 25vw, 15vw"
            />
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#DDD0F0" }}>
              <svg width="55%" height="55%" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                <circle cx="40" cy="29" r="13" fill="#C9B8E8" />
                <ellipse cx="40" cy="62" rx="20" ry="16" fill="#C9B8E8" />
              </svg>
            </div>
          )}
        </div>

        {/* Name + role — right 55% */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "1rem 1rem 1rem 0.9rem", backgroundColor: "#FAFAF8" }}>
          <p style={{ color: "#1A1A2E", fontFamily: "var(--font-kantumruy)", fontSize: "0.85rem", fontWeight: 600, lineHeight: 1.3, marginBottom: "0.35rem" }}>
            {name}
          </p>
          <p style={{ color: "#7B6FA0", fontFamily: "var(--font-kantumruy)", fontSize: "0.7rem", lineHeight: 1.5 }}>
            {role}
          </p>
        </div>
      </div>

      {/* BACK — commented out until needed
      <div
        style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          borderRadius: 12,
          backgroundColor: "#D8EAD3",
          padding: "1.1rem 1.25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "0.55rem",
          overflow: "hidden",
        }}
      >
        <p style={{ color: "#1A1A2E", fontFamily: "var(--font-kantumruy)", fontSize: "0.78rem", fontWeight: 600, lineHeight: 1.2, margin: 0 }}>
          {name}
        </p>
        <p style={{ color: "#2A2A3E", fontFamily: "var(--font-kantumruy)", fontSize: "0.7rem", lineHeight: 1.5, fontWeight: 300, margin: 0 }}>
          Favourite artist: —
        </p>
        <p style={{ color: "#2A2A3E", fontFamily: "var(--font-kantumruy)", fontSize: "0.7rem", lineHeight: 1.5, fontWeight: 300, margin: 0 }}>
          Comfort food: —
        </p>
      </div>
      */}
    </div>
  );
}
