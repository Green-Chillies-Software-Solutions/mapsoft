import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Globe2, GraduationCap, HeartHandshake, Rocket } from "lucide-react";
import {
  ContactCTA,
  PageHero,
  Section,
  SectionHeader,
} from "@/components/sections/Common";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/Bits";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join Mapsoft Technologies" },
      {
        name: "description",
        content:
          "Build cloud, web and mobile products with Mapsoft Technologies in Pune. See our culture, benefits and open roles.",
      },
      { property: "og:title", content: "Careers — Join Mapsoft Technologies" },
      {
        property: "og:description",
        content: "Engineering, QA, design and support roles at Mapsoft Technologies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/careers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const culture = [
  { icon: Rocket, title: "Real Ownership", text: "Small teams, meaningful products and the freedom to shape how they are built." },
  { icon: GraduationCap, title: "Always Learning", text: "Certification support, internal tech sessions and time set aside for deep work." },
  { icon: Globe2, title: "Global Exposure", text: "Work with clients across India and the United States on business-critical systems." },
  { icon: HeartHandshake, title: "People First", text: "Flexible schedules, honest feedback and a culture that respects your time." },
];

const roles = [
  { title: "Full Stack Developer (.NET Core / Angular)", location: "Pune, India", type: "Full time" },
  { title: "Flutter Mobile Engineer", location: "Pune, India", type: "Full time" },
  { title: "QA Automation Engineer", location: "Pune / Remote", type: "Full time" },
  { title: "UI/UX Designer", location: "Pune, India", type: "Full time" },
];

function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Join Our Team"
        text="We are always looking for curious engineers, designers and consultants who care about building software that businesses genuinely rely on."
      />

      <Section className="pt-0">
        <SectionHeader kicker="Culture" title="Why Work With Us" />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {culture.map((c) => (
            <StaggerItem key={c.title}>
              <TiltCard className="h-full rounded-3xl">
                <div className="glass-card h-full rounded-3xl p-7">
                  <c.icon className="mb-4 size-8 text-brand-2" />
                  <h3 className="mb-2 font-display text-lg">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-card/30">
        <SectionHeader kicker="Open Positions" title="Current Openings" />
        <div className="mx-auto grid max-w-4xl gap-4">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <div className="glass-card flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <Briefcase className="size-5 text-brand-2" />
                  <div>
                    <h3 className="font-display">{r.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {r.location} · {r.type}
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:info@maptechsoft.com?subject=Application"
                  className="rounded-full border border-border/70 px-5 py-2 text-sm font-semibold transition-colors hover:border-brand-2 hover:text-brand-2"
                >
                  Apply
                </a>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <p className="text-center text-sm text-muted-foreground">
              Don't see your role? Send your CV to{" "}
              <a href="mailto:info@maptechsoft.com" className="text-brand-2">
                info@maptechsoft.com
              </a>{" "}
              — we review every application.
            </p>
          </Reveal>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
