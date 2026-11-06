import { motion } from "motion/react";
import { serviceImages } from "@/lib/images";
import { ParallaxImage } from "@/components/motion/Scroll";
import { ArrowDown } from "lucide-react";
import {
  ContactCTA,
  PageHero,
  Section,
  SectionHeader,
} from "@/components/sections/Common";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/Bits";
import type { Service } from "@/data/site";

export function ServiceTemplate({ service }: { service: Service }) {
  const image = serviceImages[service.slug];
  return (
    <>
      <PageHero
        kicker={service.label}
        title={`Check Our ${service.label}`}
        text={service.intro}
      />
      {image && (
        <div className="mx-auto mb-20 max-w-7xl px-4 sm:px-6">
          <ParallaxImage src={image} alt={service.label} className="aspect-[21/9] rounded-[2rem]" />
        </div>
      )}

      <Section className="pt-0">
        <SectionHeader kicker="Our Process" title="How We Deliver" />
        <Stagger className="relative grid gap-6 lg:grid-cols-4">
          {service.steps.map((s, i) => (
            <StaggerItem key={s.title} className="relative">
              <TiltCard className="h-full rounded-3xl">
                <div className="glass-card h-full rounded-3xl p-7">
                  <span className="font-display text-3xl text-accent-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 mb-2 font-display text-lg">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </TiltCard>
              {i < service.steps.length - 1 && (
                <motion.div
                  aria-hidden
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mx-auto my-2 grid place-items-center text-brand-2 lg:hidden"
                >
                  <ArrowDown className="size-5" />
                </motion.div>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-card/30">
        <SectionHeader
          kicker="Why Mapsoft"
          title={`Why Choose Our ${service.label} Services?`}
          text="Mapsoft Technologies brings unmatched technical excellence and business understanding to craft solutions that transform your operations."
        />
        <div className="mx-auto grid max-w-4xl gap-4">
          {service.why.map((w, i) => (
            <Reveal key={w} delay={i * 0.06}>
              <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{w}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
