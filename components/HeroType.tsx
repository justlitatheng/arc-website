"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    phrase: "“ an Emmy Award winner crafting visual effects in Hollywood. ”",
    name: "Sina Sans",
    role: "Emmy Award winning VFX artist",
    photo: null, // TODO: "/series-photos/sina_sans.jpg"
  },
  {
    phrase: "“ a Paralympic chess player who has redefined what is possible. ”",
    name: "Sokhen Thai",
    role: "Paralympic chess player",
    photo: null, // TODO: "/series-photos/sokhen_thai.jpg"
  },
  {
    phrase: "“ a novelist bringing the Khmer imagination to the page. ”",
    name: "Kim Dyna",
    role: "Novelist and writer",
    photo: null, // TODO: "/series-photos/kim_dyna.jpg"
  },
  {
    phrase: "“ an Olympic swimmer who trains with quiet, relentless dedication. ”",
    name: "Hem Thon Vitiny",
    role: "Olympic swimmer",
    photo: null, // TODO: "/series-photos/hem_thon_vitiny.jpg"
  },
  {
    phrase: "“ a runner who founded a club for women to move freely. ”",
    name: "Muyngim Eng",
    role: "Runner, SheRuns founder",
    photo: null, // TODO: "/series-photos/muyngim_eng.jpg"
  },
  {
    phrase: "“ a photographer documenting beauty most people never see. ”",
    name: "Choulay Mech",
    role: "Photographer",
    photo: null, // TODO: "/series-photos/choulay_mech.jpg"
  },
];

const TYPE_MS  = 50;
const ERASE_MS = 28;
const HOLD_MS  = 2200;
const PAUSE_MS = 320;

type CardPhase = "visible" | "exiting" | "entering";

function cardStyle(phase: CardPhase): React.CSSProperties {
  if (phase === "exiting")
    return { opacity: 0, transform: "translateY(-22px)", transition: "opacity 0.35s ease, transform 0.35s ease" };
  if (phase === "entering")
    return { opacity: 0, transform: "translateY(22px)", transition: "none" };
  return { opacity: 1, transform: "translateY(0)", transition: "opacity 0.4s ease, transform 0.4s ease" };
}

export default function HeroType() {
  const [displayed,  setDisplayed]  = useState("");
  const [index,      setIndex]      = useState(0);
  const [isTyping,   setIsTyping]   = useState(true);
  const [cardPhase,  setCardPhase]  = useState<CardPhase>("visible");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Typing / erasing loop
  useEffect(() => {
    const phrase = slides[index].phrase;

    if (isTyping) {
      if (displayed.length < phrase.length) {
        timer.current = setTimeout(
          () => setDisplayed(phrase.slice(0, displayed.length + 1)),
          TYPE_MS
        );
      } else {
        timer.current = setTimeout(() => {
          setIsTyping(false);
          setCardPhase("exiting");
        }, HOLD_MS);
      }
    } else {
      if (displayed.length > 0) {
        timer.current = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          ERASE_MS
        );
      } else {
        timer.current = setTimeout(() => {
          setIndex((i) => (i + 1) % slides.length);
          setIsTyping(true);
          setCardPhase("entering");
        }, PAUSE_MS);
      }
    }

    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [displayed, isTyping, index]);

  // entering → visible (double rAF so browser paints the start position first)
  useEffect(() => {
    if (cardPhase !== "entering") return;
    let r2: number;
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => setCardPhase("visible"));
    });
    return () => { cancelAnimationFrame(r1); cancelAnimationFrame(r2); };
  }, [cardPhase]);

  const current = slides[index];

  return (
    <section
      className="py-16 sm:py-24 px-6 sm:px-12"
      style={{ backgroundColor: "#1A1A2E" }}
    >
      <div className="max-w-[900px] mx-auto flex items-start gap-8 sm:gap-14">

        {/* LEFT — text animation */}
        <div className="flex-1 min-w-0">
          <p
            style={{
              fontFamily: "var(--font-kantumruy)",
              fontSize: "0.9rem",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E8E0F0",
              marginBottom: "0.75rem",
            }}
          >
            A Khmer story can be about...
          </p>
          <div style={{ height: "12rem", overflow: "hidden" }}>
            <h1
              style={{
                fontFamily: "var(--font-lora)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.35,
                color: "#C9B8E8",
              }}
            >
              {displayed}
              <span className="typing-cursor" />
            </h1>
          </div>
        </div>

        {/* RIGHT — profile card */}
        <div
          className="flex-shrink-0 flex flex-col items-center w-28 sm:w-40"
          style={cardStyle(cardPhase)}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "1",
              borderRadius: "50%",
              backgroundColor: "#E8E0F0",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.75rem",
              position: "relative",
            }}
          >
            {current.photo ? (
              <Image
                src={current.photo}
                alt={current.name}
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 640px) 112px, 160px"
              />
            ) : (
              <svg width="45%" height="45%" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                <circle cx="40" cy="29" r="13" fill="#C9B8E8" />
                <ellipse cx="40" cy="62" rx="20" ry="16" fill="#C9B8E8" />
              </svg>
            )}
          </div>
          <p
            style={{
              color: "#E8E0F0",
              fontFamily: "var(--font-kantumruy)",
              fontSize: "0.8rem",
              fontWeight: 600,
              textAlign: "center",
              lineHeight: 1.3,
              marginBottom: "0.2rem",
            }}
          >
            {current.name}
          </p>
          <p
            style={{
              color: "#7B6FA0",
              fontFamily: "var(--font-kantumruy)",
              fontSize: "0.65rem",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            {current.role}
          </p>
        </div>

      </div>
    </section>
  );
}
