import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  ContactCTA,
  PageHero,
  Section,
  SectionHeader,
} from "@/components/sections/Common";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/Bits";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IT Services — Mapsoft Technologies" },
      {
        name: "description",
        content:
          "Custom software, web and mobile development, AI digital marketing, QA, DevOps, dedicated teams and 24/7 support from Mapsoft Technologies.",
      },
      { property: "og:title", content: "IT Services — Mapsoft Technologies" },
      {
        property: "og:description",
        content:
          "Seventeen engineering and consulting services covering the full software lifecycle.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="End-To-End Technology Services"
        text="From first architecture sketch to round-the-clock support, Mapsoft Technologies covers every stage of the software lifecycle."
      />
      <Section className="pt-0">
        <SectionHeader kicker="What We Do" title="All Services" />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <TiltCard className="h-full rounded-3xl">
                <Link
                  to={s.slug}
                  className="glass-card flex h-full flex-col rounded-3xl p-7"
                >
                  <h3 className="font-display text-lg">{s.label}</h3>
                  <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.intro}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-2">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      <ContactCTA />
    </>
  );
}
