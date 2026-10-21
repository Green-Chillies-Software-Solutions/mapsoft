import { createFileRoute } from "@tanstack/react-router";
import { AboutBlock, StrengthBlock } from "@/components/sections/About";
import { ContactCTA, PageHero, Section, SectionHeader } from "@/components/sections/Common";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Bits";
import { clients, technologies } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mapsoft Technologies — Software & IT Company" },
      {
        name: "description",
        content:
          "Mapsoft Technologies builds web, mobile and cloud software for growing businesses, with teams in Pune, India and Dallas, USA.",
      },
      { property: "og:title", content: "About Mapsoft Technologies" },
      {
        property: "og:description",
        content: "Our vision, mission, technical strength and the clients we serve.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Us"
        title="Software Partners, Not Just Vendors"
        text="We combine hands-on technology expertise with modern engineering to deliver systems businesses run on every day."
      />
      <AboutBlock />
      <StrengthBlock />

      <Section>
        <SectionHeader
          kicker="Technologies"
          title="Tools We Build With"
          text="A pragmatic stack chosen for reliability, performance and long-term maintainability."
        />
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {technologies.map((t) => (
            <StaggerItem key={t}>
              <div className="glass-card grid h-24 place-items-center rounded-2xl px-3 text-center text-sm font-medium">
                {t}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-card/30">
        <SectionHeader kicker="Clients" title="Businesses That Trust Us" />
        <Reveal>
          <Marquee items={clients} />
        </Reveal>
      </Section>

      <ContactCTA />
    </>
  );
}
