import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { ContactCTA, PageHero, Section, SectionHeader } from "@/components/sections/Common";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { team } from "@/data/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Mapsoft Technologies Leadership" },
      {
        name: "description",
        content:
          "Meet the people behind Mapsoft Technologies: leadership and engineering talent delivering cloud solutions and custom software.",
      },
      { property: "og:title", content: "Our Team — Mapsoft Technologies" },
      {
        property: "og:description",
        content: "Leadership and engineering talent behind Mapsoft Technologies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

export function TeamGrid({ limit }: { limit?: number } = {}) {
  const members = typeof limit === "number" ? team.slice(0, limit) : team;
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((m) => (
        <StaggerItem key={m.name}>
          <motion.div
            whileHover={{ y: -8 }}
            className="glass-card group relative overflow-hidden rounded-3xl p-8 text-center"
          >
            <span className="mx-auto grid size-24 place-items-center rounded-full bg-ink font-display text-2xl text-primary-foreground">
              {m.initials}
            </span>
            <h3 className="mt-5 font-display text-lg">{m.name}</h3>
            <p className="text-sm text-brand-2">{m.role}</p>
            <p className="mt-1 text-sm text-muted-foreground">{m.detail}</p>
            <div className="mt-5 flex justify-center gap-3 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">

            </div>
          </motion.div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function TeamPage() {
  return (
    <>
      <PageHero
        kicker="Team"
        title="The People Behind Mapsoft"
        text="A close-knit team of engineers, consultants and designers committed to your success."
      />
      <Section className="pt-0">
        <TeamGrid />
      </Section>

      <ContactCTA />
    </>
  );
}
