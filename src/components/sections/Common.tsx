import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Magnetic, TiltCard } from "@/components/motion/Bits";
import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function CTAButton({
  to,
  children,
  variant = "solid",
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
}) {
  return (
    <Magnetic>
      <Link
        to={to}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all",
          variant === "solid"
            ? "bg-ink shadow-[0_10px_30px_-18px_var(--ink)] hover:opacity-90"
            : "hairline bg-card hover:border-ink",
        )}
      >
        {children}
        <ArrowRight className="size-4" />
      </Link>
    </Magnetic>
  );
}

export function PageHero({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="grain-overlay relative overflow-hidden pt-36 pb-20">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex max-w-full items-center gap-2 hairline rounded-full bg-card px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.14em] text-brand-2 uppercase sm:tracking-[0.24em]"
        >
          <Sparkles className="size-3.5" />
          {kicker}
        </motion.p>
        <SplitHeading
          as="h1"
          text={title}
          className="text-[clamp(2.5rem,10vw,3.75rem)] text-balance sm:text-6xl lg:text-7xl"
        />
        {text && (
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {text}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function SectionHeader({
  kicker,
  title,
  text,
  center = true,
}: {
  kicker?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-12", center && "mx-auto max-w-3xl text-center")}>
      {kicker && (
        <Reveal>
          <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.28em] text-brand-2 uppercase">
            {kicker}
          </p>
        </Reveal>
      )}
      <SplitHeading text={title} className="text-4xl text-balance sm:text-5xl" />
      {text && (
        <Reveal delay={0.12}>
          <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
        </Reveal>
      )}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <Stagger className="grid gap-3">
      {items.map((b) => (
        <StaggerItem key={b}>
          <div className="flex gap-3 rounded-2xl hairline bg-card p-4">
            <Check className="mt-0.5 size-5 shrink-0 text-brand-2" />
            <p className="text-sm leading-relaxed text-muted-foreground">{b}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function BenefitGrid({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((b, i) => (
        <StaggerItem key={b.title}>
          <TiltCard className="h-full rounded-3xl">
            <div className="glass-card h-full rounded-3xl p-7">
              <span className="mb-4 inline-grid size-11 place-items-center rounded-full bg-ink font-display text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 font-display text-lg">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          </TiltCard>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function ChipRow({ items }: { items: string[] }) {
  return (
    <Stagger className="flex flex-wrap justify-center gap-3">
      {items.map((c) => (
        <StaggerItem key={c}>
          <span className="hairline rounded-full bg-card px-5 py-2 text-sm">
            {c}
          </span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function ContactCTA() {
  return (
    <Section className="grain-overlay overflow-hidden">
      <div className="glass-card dot-grid relative overflow-hidden rounded-[2rem] p-10 text-center sm:p-16">
        <div className="relative">
          <SplitHeading
            text="Need Help? Contact Us"
            className="text-4xl sm:text-5xl"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Tell us about your project and our team will get back to you with a
              tailored plan — usually within one business day.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CTAButton to="/contact">Get in touch</CTAButton>
              <CTAButton to="/services" variant="ghost">
                Explore services
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function MapEmbed({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-border/60",
        className,
      )}
    >
      <iframe
        title="Mapsoft Technologies Pune office location"
        src="https://www.google.com/maps?q=Gera%20Imperium%20Alpha%2C%20Kharadi%2C%20Pune%20411014&output=embed"
        width="100%"
        height="360"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-72 border-0 sm:h-[360px]"
      />
    </div>
  );
}
