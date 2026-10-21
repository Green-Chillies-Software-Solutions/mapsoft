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

export function TeamGrid() {
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((m) => (
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
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`${m.name} social link`}
                  className="grid size-9 place-items-center rounded-full border border-border/70 text-muted-foreground hover:border-brand-2 hover:text-brand-2"
                >
                  <Icon className="size-4" />
                </a>
              ))}
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
      <Section className="bg-card/30">
        <SectionHeader
          kicker="Inside Mapsoft"
          title="Life At Mapsoft Technologies"
          text="A short look at how we work, collaborate and deliver for clients across India and the United States."
        />
        <div className="glass-card mx-auto grid aspect-video max-w-4xl place-items-center overflow-hidden rounded-3xl bg-ink/10">
          <p className="px-6 text-center text-sm text-muted-foreground">
            Team video coming soon — drop your video file in and it plays right here.
          </p>
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}
