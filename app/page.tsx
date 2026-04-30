import Image from "next/image";
import DragonFly from "@/components/DragonFly";
import TeamCard from "@/components/TeamCard";
import SubjectCard from "@/components/SubjectCard";

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
            src="/logo_arc.png"
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
          Khmer Stories, Living and Breathing
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
            Our first documentary video series highlights 13 Cambodian
            individuals across two chapters — their life, their craft, their
            words. Together, one living portrait of a culture in motion.
          </p>
          {/* Creatives & Artists */}
          <p
            className="text-xs tracking-[0.25em] uppercase mb-5 pb-2 border-b"
            style={{ color: "#7B6FA0", borderColor: "#C9B8E8", fontFamily: "var(--font-dm-sans)" }}
          >
            Creatives &amp; Artists
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {[
              { name: "Sina Sans", descriptor: "Emmy Award winning VFX artist" },
              { name: "Koeurm Kolab", descriptor: "Visual artist and teacher" },
              { name: "Kim Dyna", descriptor: "Novelist and writer" },
              { name: "Monysovanya Fia", descriptor: "Visual artist & mental health advocate" },
              { name: "Keo Chandalin", descriptor: "Singer" },
              { name: "Moy Hou", descriptor: "Animator and visual artist" },
              { name: "Suong Rota", descriptor: "Movie director" },
              { name: "Choulay Mech", descriptor: "Photographer" },
            ].map(({ name, descriptor }) => (
              <SubjectCard key={name} name={name} descriptor={descriptor} accentColor="#C9B8E8" />
            ))}
          </div>

          {/* Athletes */}
          <p
            className="text-xs tracking-[0.25em] uppercase mb-5 pb-2 border-b"
            style={{ color: "#7B6FA0", borderColor: "#C9B8E8", fontFamily: "var(--font-dm-sans)" }}
          >
            Athletes
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { name: "Tharoth Sam", descriptor: "Actress and martial artist" },
              { name: "Muyngim Eng", descriptor: "Long-distance runner, SheRuns founder" },
              { name: "Hem Thon Vitiny", descriptor: "Olympic swimmer" },
              { name: "Sokhen Thai", descriptor: "Paralympic chess player" },
              { name: "Seang Sokchan", descriptor: "Paralympic basketball player & coach" },
            ].map(({ name, descriptor }) => (
              <SubjectCard key={name} name={name} descriptor={descriptor} accentColor="#B8D4C8" />
            ))}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {([
              { name: "Lucklita Theng", role: "Founder & Storyteller", photo: "/lucklita_theng.jpg" },
              { name: "Ee Siev", role: "Music Producer", photo: "/ee_siev.jpg" },
              { name: "Phorn Panmai (Chi)", role: "Animator & Artist", photo: "/phorn_phanmai.jpg" },
              { name: "Soeurt Roeurt", role: "Mentor Animator", photo: "/soeurt_roeurt.jpg", photoPosition: "top" },
              { name: "Morn Chhounh (Mori)", role: "Animator", photo: "/morn_chhounh.jpg" },
              { name: "Roy Vichheka (Kitt)", role: "Graphic Designer", photo: "/roy_vichheka.jpg" },
              { name: "Sreyvong Phen", role: "Animator", photo: "/sreyvong_phen.jpg" },
              { name: "Kann Seraktepy", role: "Animator", photo: null },
              { name: "Phirun Bobunleapmonytithya (Mony)", role: "Youth Coordinator", photo: "/phirun_titya.jpg" },
              { name: "Phoeurt", role: "Animator & Video Editor", photo: "/phoeurt.jpg" },
              { name: "Morn Sreysros", role: "Youth Assistant", photo: "/morn_sreysros.jpg", photoPosition: "center 20%" },
              { name: "Laura Fernández", role: "General Consultant, Fundraising & Comms", photo: "/laura_fernandez.jpg" },
            ] as { name: string; role: string; photo: string | null; photoPosition?: string }[]).map(({ name, role, photo, photoPosition }) => (
              <TeamCard key={name} name={name} role={role} photo={photo} photoPosition={photoPosition} />
            ))}
          </div>

          <blockquote
            className="border-l-2 pl-6"
            style={{ borderColor: "#C9B8E8" }}
          >
            <p
              className="text-sm sm:text-base leading-relaxed italic mb-5"
              style={{ color: "#5A4E78", fontFamily: "var(--font-dm-sans)" }}
            >
              &ldquo;Every person in this project carries a world inside them.
              They are Khmer. They are also so much more — and they have been,
              long before anyone thought to document it.&rdquo;
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed italic mb-5"
              style={{ color: "#5A4E78", fontFamily: "var(--font-dm-sans)" }}
            >
              &ldquo;This project started from a simple, persistent question:
              what does Cambodia look like when you look beyond the stories the
              world already knows? The more we looked, the more we found.
              Artists, athletes, writers, dreamers, and creators of all kinds
              — each one a color, a weave, a pattern in something far more
              beautiful than any single story could contain.&rdquo;
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed italic"
              style={{ color: "#5A4E78", fontFamily: "var(--font-dm-sans)" }}
            >
              &ldquo;These stories were already happening. We just wanted to
              make sure they didn&apos;t go unwitnessed. In a world growing
              more cross-cultural and interconnected, stories like these don&apos;t
              just belong to Cambodia. They belong to all of us navigating
              what it means to come from somewhere — and to be becoming
              something.&rdquo;
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
