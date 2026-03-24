import Image from "next/image";
import DragonFly from "@/components/DragonFly";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-8 py-4"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "#E8E0F0", fontFamily: "var(--font-dm-sans)" }}
        >
          ARC
        </span>
        <div className="flex gap-8">
          {["About", "Series 1", "Team", "Get Involved"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
              style={{ color: "#C9B8E8", fontFamily: "var(--font-dm-sans)" }}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        className="flex flex-col items-center justify-center py-32 px-6 text-center"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <DragonFly width={140} />
        <div
          className="my-8"
          style={{ width: 48, height: 1, backgroundColor: "#2A2A4E" }}
        />
        <div className="mb-8">
          <Image
            src="/logo_ARC_01.png"
            alt="ARC — Art Reach Cambodia logo"
            width={200}
            height={200}
            style={{ mixBlendMode: "screen", background: "transparent" }}
            priority
          />
        </div>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6"
          style={{
            color: "#E8E0F0",
            fontFamily: "var(--font-kantumruy)",
          }}
        >
          ARC — Art Reach Cambodia
        </h1>
        <p
          className="text-sm sm:text-base tracking-[0.18em]"
          style={{ color: "#C9B8E8", fontFamily: "var(--font-dm-sans)" }}
        >
          រឿងរ៉ាវខ្មែរ — Khmer Stories, Living and Breathing
        </p>
      </section>

      {/* OPENING SECTION */}
      <section
        id="about"
        className="py-24 px-6"
        style={{ backgroundColor: "#D8EAD3" }}
      >
        <div className="max-w-[700px] mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-semibold leading-snug mb-8"
            style={{
              color: "#1A1A2E",
              fontFamily: "var(--font-kantumruy)",
            }}
          >
            Cambodia is not a single story.
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed mb-6"
            style={{ color: "#2A2A3E", fontFamily: "var(--font-dm-sans)" }}
          >
            And it is not only the ones we keep telling. It is not forever
            synonymous with the Khmer Rouge, or Angkor Wat, or Apsara dancers,
            or de-mining operations, or the killing fields, or pagodas, or
            ancient lore. It is not only a third-world country, an agriculture
            economy, a Buddhist nation. I am not saying it isn&apos;t any of
            that. I am saying it is not only that.
          </p>
          <p
            className="text-base sm:text-lg leading-relaxed mb-6"
            style={{ color: "#2A2A3E", fontFamily: "var(--font-dm-sans)" }}
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
            style={{ color: "#2A2A3E", fontFamily: "var(--font-dm-sans)" }}
          >
            These stories exist too. They are evolving. They bridge the past
            with the present, and they are building something more inclusive
            for all of us to thrive in.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section
        id="series-1"
        className="py-24 px-6"
        style={{ backgroundColor: "#E8E0F0" }}
      >
        <div className="max-w-[700px] mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "#7B6FA0", fontFamily: "var(--font-dm-sans)" }}
          >
            Our Mission
          </p>
          <p
            className="text-base sm:text-lg leading-relaxed mb-8"
            style={{ color: "#2A2A3E", fontFamily: "var(--font-dm-sans)" }}
          >
            ARC is a multi-modal documentary storytelling project dedicated to
            capturing the diverse, living, and evolving voices that make up
            Khmer culture and identity. For too long, Cambodia&apos;s story has
            been told through two lenses — the glory of Angkor Wat and the
            tragedy of the Khmer Rouge. Both are real. Neither is the whole
            picture. The living, breathing present of Cambodian culture
            deserves to be documented with the same care and attention. That is
            what ARC is here to do.
          </p>
          <p
            className="text-xl sm:text-2xl leading-snug italic mb-14"
            style={{ color: "#1A1A2E", fontFamily: "var(--font-dm-sans)" }}
          >
            Khmer culture — past, present, and future — is a tapestry still
            being woven, and every thread matters.
          </p>
          <p
            className="text-3xl sm:text-4xl leading-snug mb-4"
            style={{
              color: "#1A1A2E",
              fontFamily: "var(--font-kantumruy)",
            }}
          >
            យើងមិនជាប់គាំងនៅក្នុងអតីតកាលទេ។
          </p>
          <p
            className="text-sm tracking-wide italic"
            style={{ color: "#7B6FA0", fontFamily: "var(--font-dm-sans)" }}
          >
            We are not stuck in the past.
          </p>
        </div>
      </section>

      {/* SERIES 1 SECTION */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "#D8EAD3" }}
      >
        <div className="max-w-[700px] mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "#7B6FA0", fontFamily: "var(--font-dm-sans)" }}
          >
            Series 1 — In Progress
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold mb-6"
            style={{
              color: "#1A1A2E",
              fontFamily: "var(--font-kantumruy)",
            }}
          >
            13 voices. 13 stories.
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed mb-12"
            style={{ color: "#2A2A3E", fontFamily: "var(--font-dm-sans)" }}
          >
            Our first documentary video series features 13 Cambodian
            individuals across two chapters — each telling their own story, in
            their own words.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Column 1 */}
            <div>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-5 pb-2 border-b"
                style={{
                  color: "#7B6FA0",
                  borderColor: "#C9B8E8",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Creatives &amp; Artists
              </p>
              <ul className="space-y-3">
                {[
                  "Sina Sans — Emmy Award winning VFX artist",
                  "Koeurm Kolab — Visual artist and teacher",
                  "Kim Dyna — Novelist and writer",
                  "Monysovanya Fia — Visual artist, arts & mental health",
                  "Keo Chandalin — Singer",
                  "Moy Hou — Animator and visual artist",
                  "Suong Rota — Movie director",
                  "Choulay Mech — Photographer",
                ].map((name) => (
                  <li
                    key={name}
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#2A2A3E",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-5 pb-2 border-b"
                style={{
                  color: "#7B6FA0",
                  borderColor: "#C9B8E8",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Athletes
              </p>
              <ul className="space-y-3">
                {[
                  "Tharoth Sam — Actress and martial artist",
                  "Muyngim Eng — Long-distance runner, SheRuns founder",
                  "Hem Thon Vitiny — Olympic swimmer",
                  "Sokhen Thai — Paralympic chess player",
                  "Seang Sokchan — Paralympic basketball player & coach",
                ].map((name) => (
                  <li
                    key={name}
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#2A2A3E",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section
        id="team"
        className="py-24 px-6"
        style={{ backgroundColor: "#FAFAF8" }}
      >
        <div className="max-w-[700px] mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "#7B6FA0", fontFamily: "var(--font-dm-sans)" }}
          >
            Who We Are
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold leading-snug mb-8"
            style={{
              color: "#1A1A2E",
              fontFamily: "var(--font-kantumruy)",
            }}
          >
            A passionately treasured Khmer-led project, rooted in Battambang.
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed mb-10"
            style={{ color: "#2A2A3E", fontFamily: "var(--font-dm-sans)" }}
          >
            ARC was founded by Lucklita Theng, a Khmer storyteller and
            technologist, in partnership with SafeSpaceBTB — a grassroots,
            community-based, youth-led organization in Battambang, Cambodia.
            Our team comprises Khmer youth coordinators, animators,
            photographers, and creators who bring these stories to life.
          </p>

          {/* Team cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {[
              { name: "Lucklita Theng", role: "Founder & Storyteller" },
              { name: "Ee Siev", role: "Music Producer" },
              { name: "Phorn Panmai (Chi)", role: "Animator & Artist" },
              { name: "Soeurt Roeurt", role: "Mentor Animator" },
              { name: "Morn Chhuonh (Mori)", role: "Animator" },
              { name: "Roy Vichheka (Kitt)", role: "Graphic Designer" },
              { name: "Sreyvong Phen", role: "Animator" },
              { name: "Kann Seraktepy", role: "Animator" },
              { name: "Phirun Bobunleapmonytithya (Mony)", role: "Youth Coordinator" },
              { name: "Phoeurt", role: "Animator & Video Editor" },
              { name: "Morn Sreysros", role: "Youth Assistant" },
              { name: "Laura Fernández", role: "General Consultant, Fundraising & Comms" },
            ].map(({ name, role }) => (
              <div key={name} className="flex flex-col items-center text-center">
                <div
                  className="mb-4 flex items-center justify-center"
                  style={{ width: 80, height: 80, borderRadius: "50%", backgroundColor: "#E8E0F0" }}
                >
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                    <circle cx="40" cy="29" r="13" fill="#C9B8E8" />
                    <ellipse cx="40" cy="62" rx="20" ry="16" fill="#C9B8E8" />
                  </svg>
                </div>
                <p
                  className="text-sm font-medium leading-snug mb-1"
                  style={{ color: "#1A1A2E", fontFamily: "var(--font-kantumruy)" }}
                >
                  {name}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#7B6FA0", fontFamily: "var(--font-dm-sans)" }}
                >
                  {role}
                </p>
              </div>
            ))}
          </div>

          <blockquote
            className="border-l-2 pl-6"
            style={{ borderColor: "#C9B8E8" }}
          >
            <p
              className="text-base sm:text-lg leading-relaxed mb-6 italic"
              style={{ color: "#5A4E78", fontFamily: "var(--font-dm-sans)" }}
            >
              &ldquo;ARC started from something personal. As a Khmer person
              who has grown up living between worlds, I found myself wanting
              to learn more — not just about Cambodia&apos;s past, but about
              the full, breathing spectrum of who Khmer people are, have been,
              and are becoming. In a world growing more cross-cultural and
              interconnected, many of us find ourselves navigating multiple
              identities at once. The more I looked, the more I found.
              Artists, athletes, writers, dreamers, and creators of all kinds
              — each one a color, a weave, a pattern in something far more
              beautiful than any single story could contain.
            </p>
            <p
              className="text-base sm:text-lg leading-relaxed italic"
              style={{ color: "#5A4E78", fontFamily: "var(--font-dm-sans)" }}
            >
              ARC is my way of continuing that discovery, and contributing to
              it. Not to make a point, but because these stories are worth
              knowing, worth preserving, and worth celebrating. Because I am
              Khmer too, and this is my way of falling more in love with where
              I come from — and sharing that love with anyone who wants to
              look.&rdquo;
            </p>
          </blockquote>
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              "Davis Peace Project — $10,000",
              "Raising $25,000 for Series 2",
              "SafeSpaceBTB Partner",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "#E8E0F0",
                  color: "#3C3489",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="get-involved"
        className="py-28 px-6 text-center"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <div className="max-w-[600px] mx-auto">
          <p
            className="text-3xl sm:text-4xl mb-4 leading-snug"
            style={{
              color: "#E8E0F0",
              fontFamily: "var(--font-kantumruy)",
            }}
          >
            រាល់រឿងរ៉ាវមានតម្លៃ។
          </p>
          <p
            className="text-sm tracking-[0.2em] mb-10"
            style={{ color: "#C9B8E8", fontFamily: "var(--font-dm-sans)" }}
          >
            Every story matters.
          </p>
          <p
            className="text-base sm:text-lg leading-relaxed mb-12"
            style={{ color: "#A89DC0", fontFamily: "var(--font-dm-sans)" }}
          >
            If you believe in the power of untold stories — as a funder,
            partner, collaborator, or champion — we would love to hear from
            you.
          </p>
          <a
            href="mailto:lucklitatheng@proton.me"
            className="inline-block px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "#7B6FA0",
              color: "#E8E0F0",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 text-center"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <div className="flex items-center justify-center gap-3">
          <DragonFly width={24} />
          <p
            className="text-xs tracking-wide"
            style={{ color: "#5A5470", fontFamily: "var(--font-dm-sans)" }}
          >
            © 2026 Art Reach Cambodia
          </p>
        </div>
      </footer>
    </div>
  );
}
