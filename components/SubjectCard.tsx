"use client";

import { useState } from "react";

interface SubjectCardProps {
  name: string;
  descriptor: string;
  accentColor?: string;
}

export default function SubjectCard({ name, descriptor, accentColor = "#C9B8E8" }: SubjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        paddingTop: "130%",
        position: "relative",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        transform: hovered ? "scale(1.03)" : "scale(1)",
        borderRadius: 12,
        boxShadow: hovered
          ? "0 6px 20px rgba(0,0,0,0.13), 0 0 0 1px rgba(0,0,0,0.07)"
          : "0 2px 8px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.05)",
        cursor: "default",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 12,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Placeholder photo area */}
        <div
          style={{
            flex: 1,
            backgroundColor: accentColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered ? 0.92 : 1,
            transition: "opacity 0.25s ease",
          }}
        >
          <svg width="40%" height="40%" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="29" r="13" fill="rgba(255,255,255,0.45)" />
            <ellipse cx="40" cy="62" rx="20" ry="16" fill="rgba(255,255,255,0.45)" />
          </svg>
        </div>

        {/* Name + descriptor — fixed height bottom strip */}
        <div
          style={{
            flexShrink: 0,
            backgroundColor: "#FAFAF8",
            padding: "0.7rem 0.85rem 0.8rem",
          }}
        >
          <p
            style={{
              color: "#1A1A2E",
              fontFamily: "var(--font-kantumruy)",
              fontSize: "0.82rem",
              fontWeight: 600,
              lineHeight: 1.3,
              marginBottom: "0.2rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </p>
          <p
            style={{
              color: "#7B6FA0",
              fontFamily: "var(--font-kantumruy)",
              fontSize: "0.67rem",
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {descriptor}
          </p>
        </div>
      </div>
    </div>
  );
}
