import Link from "next/link";
import DragonFly from "@/components/DragonFly";
import HeroType from "@/components/HeroType";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroType />

      {/* OPENING STATEMENT */}
      <section className="py-24 px-6" style={{ backgroundColor: "#D8EAD3" }}>
        <div className="max-w-[700px] mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-semibold leading-snug mb-8"
            style={{
              color: "#1A1A2E",
              fontFamily: "var(--font-lora)",
            }}
          >
            Cambodia is not a single story.
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed mb-6"
            style={{ color: "#2A2A3E", fontFamily: "var(--font-kantumruy)" }}
          >
            And it is not only the ones we keep telling. It is not forever
            synonymous with the Khmer Rouge, or Angkor Wat, or Apsara dancers,
            or de-mining operations, or the killing fields, or pagodas, or
            ancient lore. It is not only a third-world country, an agriculture
            economy, a Buddhist nation. This is not a rejection of any of that.
            It is a reminder that it is not only that.
          </p>
          <p
            className="text-base sm:text-lg leading-relaxed mb-6"
            style={{ color: "#2A2A3E", fontFamily: "var(--font-kantumruy)" }}
          >
            It is also an Emmy Award winner crafting visual effects in
            Hollywood. A Paralympic chess player who has redefined what is
            possible. A novelist giving the Khmer imagination a home on the
            page. An Olympic swimmer who trains with quiet, relentless
            dedication. A runner who founded a club so other women could move
            through the world with confidence. A photographer documenting
            beauty that most people never get to see.
          </p>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "#2A2A3E", fontFamily: "var(--font-kantumruy)" }}
          >
            These stories exist too. They exist alongside all the other stories,
            not in place of them. ARC believes in amplifying their role in
            shaping how Khmer identity and culture is understood, both within
            Cambodia and around the world. These diverse stories bridge the past
            with the present, and expand the perception of Cambodia to be more
            inclusive, more complete, and more empowering for everyone who
            carries that identity.
          </p>
        </div>
      </section>

      {/* CTA BANNERS */}
      <Link
        href="/series"
        className="block group"
        style={{ backgroundColor: "#E8E0F0" }}
      >
        <div className="max-w-[900px] mx-auto py-14 px-8 flex items-center justify-between">
          <div>
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-2"
              style={{ color: "#7B6FA0", fontFamily: "var(--font-kantumruy)" }}
            >
              Series 1
            </p>
            <p
              className="text-2xl sm:text-3xl font-semibold transition-opacity group-hover:opacity-70"
              style={{ color: "#1A1A2E", fontFamily: "var(--font-lora)" }}
            >
              Explore Series 1 →
            </p>
            <p
              className="text-sm leading-relaxed mt-3"
              style={{ color: "#5A4E78", fontFamily: "var(--font-kantumruy)" }}
            >
              Our first documentary video series highlights 13+ Cambodian
              individuals across several creative fields — their life, their craft, their
              words. Together, one living portrait of a culture in motion.
            </p>
          </div>
        </div>
      </Link>

      <Link
        href="/team"
        className="block group"
        style={{ backgroundColor: "#D8EAD3" }}
      >
        <div className="max-w-[900px] mx-auto py-14 px-8 flex items-center justify-between">
          <div>
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-2"
              style={{ color: "#7B6FA0", fontFamily: "var(--font-kantumruy)" }}
            >
              Team
            </p>
            <p
              className="text-2xl sm:text-3xl font-semibold transition-opacity group-hover:opacity-70"
              style={{ color: "#1A1A2E", fontFamily: "var(--font-lora)" }}
            >
              Meet the Team →
            </p>
            <p
              className="text-sm leading-relaxed mt-3"
              style={{ color: "#2A2A3E", fontFamily: "var(--font-kantumruy)" }}
            >
              A passionately treasured Khmer-led project, rooted in Battambang.
              ARC was founded by Lucklita Theng in partnership with SafeSpaceBTB
              — a grassroots, community-based, youth-led organization in
              Battambang, Cambodia.
            </p>
          </div>
        </div>
      </Link>

      <section className="py-20 px-8 text-center" style={{ backgroundColor: "#1A1A2E" }}>
        <div className="max-w-[600px] mx-auto">
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-6"
            style={{ color: "#7B6FA0", fontFamily: "var(--font-kantumruy)" }}
          >
            Get Involved
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold leading-tight mb-6"
            style={{ color: "#E8E0F0", fontFamily: "var(--font-lora)" }}
          >
            Every story matters.
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed mb-10"
            style={{ color: "#A89DC0", fontFamily: "var(--font-kantumruy)" }}
          >
            If you believe in the power of untold stories — as a funder,
            partner, collaborator, or champion — we would love to hear from you.
          </p>
          <a
            href="mailto:lucklitatheng@proton.me"
            className="inline-block px-10 py-4 rounded-full text-sm font-medium tracking-wide transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "#7B6FA0",
              color: "#E8E0F0",
              fontFamily: "var(--font-kantumruy)",
            }}
          >
            Get in Touch
          </a>
          <div className="mt-16 flex justify-center">
            <DragonFly width={80} />
          </div>
        </div>
      </section>
    </div>
  );
}
