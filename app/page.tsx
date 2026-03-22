import Image from "next/image";

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
        <div className="mb-10">
          <Image
            src="/logo_ARC_01.png"
            alt="ARC — Art Reach Cambodia logo"
            width={120}
            height={120}
            style={{ mixBlendMode: "multiply" }}
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
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "#2A2A3E", fontFamily: "var(--font-dm-sans)" }}
          >
            It is an Emmy Award winner crafting visual effects in Hollywood. A
            Paralympic chess player defying every boundary placed before her. A
            novelist putting the Khmer imagination on the page. An Olympic
            swimmer cutting through water with quiet ferocity. These stories
            exist. They are happening right now. ARC is here to document them.
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
            className="text-base sm:text-lg leading-relaxed mb-14"
            style={{ color: "#2A2A3E", fontFamily: "var(--font-dm-sans)" }}
          >
            ARC is a multi-modal documentary storytelling project dedicated to
            capturing the diverse, living, evolving voices that make up Khmer
            culture and identity. We believe in the danger of a single story.
            When a culture is reduced to one narrative — especially one defined
            by tragedy and the past — its living, breathing present becomes
            invisible. ARC makes it visible.
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
            className="text-3xl sm:text-4xl font-semibold mb-12"
            style={{
              color: "#1A1A2E",
              fontFamily: "var(--font-kantumruy)",
            }}
          >
            13 voices. 13 stories.
          </h2>
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
          <p
            className="mt-10 text-sm italic"
            style={{ color: "#7B6FA0", fontFamily: "var(--font-dm-sans)" }}
          >
            Each subject tells their own story, in their own words.
          </p>
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
            photographers, and creators who bring these stories to life —
            supported by Laura Fernández as general consultant.
          </p>
          <div className="flex flex-wrap gap-3">
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
        <p
          className="text-xs tracking-wide"
          style={{ color: "#5A5470", fontFamily: "var(--font-dm-sans)" }}
        >
          © 2025 Art Reach Cambodia
        </p>
      </footer>
    </div>
  );
}
