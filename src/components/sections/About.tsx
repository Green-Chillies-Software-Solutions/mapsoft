import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import {
  Atom, Boxes, Braces, Check, Cloud, CloudCog, Cloudy, Code2, Component,
  Container, Cpu, Database, FileCode2, HardDrive, LayoutGrid, Leaf, Network,
  Palette, Quote, Server, Ship, ShoppingBag, Smartphone, Terminal, Wind, Zap,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeader, Section } from "./Common";
import { aboutChecklist, aboutCopy, stats } from "@/data/site";

/* ------------------------------------------------------------------ */
/*  About block (unchanged)                                            */
/* ------------------------------------------------------------------ */

export function AboutBlock() {
  return (
    <Section>
      <SectionHeader
        kicker="About"
        title="Find Our About Us"
        text={aboutCopy.subheading}
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <Stagger className="grid gap-4">
          {aboutChecklist.map((c) => (
            <StaggerItem key={c.title}>
              <motion.div
                whileHover={{ x: 6 }}
                className="glass-card flex gap-4 rounded-2xl p-5"
              >
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-ink text-primary-foreground">
                  <Check className="size-4" />
                </span>
                <div>
                  <h3 className="font-display">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="space-y-6">
          <Reveal>
            <p className="leading-relaxed text-muted-foreground">{aboutCopy.body}</p>
          </Reveal>
          {[
            { title: "Vision", body: aboutCopy.vision, quote: aboutCopy.visionQuote },
            { title: "Mission", body: aboutCopy.mission, quote: aboutCopy.missionQuote },
          ].map((b, i) => (
            <Reveal key={b.title} delay={0.1 + i * 0.1}>
              <div className="glass-card rounded-3xl p-7">
                <h3 className="mb-3 font-display text-sm tracking-[0.24em] text-brand-2 uppercase">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                <p className="mt-4 flex gap-3 border-l-2 border-brand-2/60 pl-4 text-sm italic">
                  <Quote className="size-4 shrink-0 text-brand-2" />
                  {b.quote}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Technologies — grouped by ring                                     */
/* ------------------------------------------------------------------ */

const TECHNOLOGIES = [
  // ── Ring 0 · Frameworks & Runtimes ───────────────────────────────
  { name: "React", icon: Atom, ring: 0, color: "#61DAFB" },
  { name: "Node.js", icon: Server, ring: 0, color: "#68A063" },
  { name: ".NET", icon: Cpu, ring: 0, color: "#512BD4" },
  { name: "Python", icon: Terminal, ring: 0, color: "#3776AB" },
  { name: "Angular", icon: Component, ring: 0, color: "#DD0031" },
  { name: "Vue.js", icon: Boxes, ring: 0, color: "#42B883" },

  // ── Ring 1 · Languages & Data ────────────────────────────────────
  { name: "TypeScript", icon: FileCode2, ring: 1, color: "#3178C6" },
  { name: "JavaScript", icon: Braces, ring: 1, color: "#F7DF1E" },
  { name: "Flutter", icon: Smartphone, ring: 1, color: "#02569B" },
  { name: "Next.js", icon: Zap, ring: 1, color: "#A1A1AA" },
  { name: "SQL Server", icon: Database, ring: 1, color: "#CC2927" },
  { name: "PostgreSQL", icon: HardDrive, ring: 1, color: "#336791" },
  { name: "MongoDB", icon: Leaf, ring: 1, color: "#47A248" },
  { name: "GraphQL", icon: Network, ring: 1, color: "#E10098" },

  // ── Ring 2 · Cloud · DevOps · CMS · Styling ──────────────────────
  { name: "AWS", icon: Cloud, ring: 2, color: "#FF9900" },
  { name: "Azure", icon: Cloudy, ring: 2, color: "#0078D4" },
  { name: "Google Cloud", icon: CloudCog, ring: 2, color: "#4285F4" },
  { name: "Docker", icon: Container, ring: 2, color: "#2496ED" },
  { name: "Kubernetes", icon: Ship, ring: 2, color: "#326CE5" },
  { name: "WordPress", icon: LayoutGrid, ring: 2, color: "#21759B" },
  { name: "Shopify", icon: ShoppingBag, ring: 2, color: "#96BF48" },
  { name: "Tailwind", icon: Wind, ring: 2, color: "#06B6D4" },
  { name: "HTML5", icon: Code2, ring: 2, color: "#E34F26" },
  { name: "CSS3", icon: Palette, ring: 2, color: "#1572B6" },
] as const;

const RING_RADII = [110, 195, 280];
const ORBIT_SPEEDS = [30, 45, 65]; // seconds per revolution

/* ------------------------------------------------------------------ */
/*  Orbit node                                                         */
/* ------------------------------------------------------------------ */

function OrbitNode({
  tech,
  ringIndex,
  indexInRing,
  totalInRing,
  radius,
  time,
}: {
  tech: (typeof TECHNOLOGIES)[number];
  ringIndex: number;
  indexInRing: number;
  totalInRing: number;
  radius: number;
  time: ReturnType<typeof useMotionValue<number>>;
}) {
  const speed = ORBIT_SPEEDS[ringIndex];
  const baseAngle = (indexInRing / totalInRing) * 360;

  // Computed from time → x/y, so the node is never rotated.
  const angle = useTransform(
    time,
    (t) => baseAngle + (t / 1000) * (360 / speed)
  );
  const x = useTransform(angle, (a) => Math.cos((a * Math.PI) / 180) * radius);
  const y = useTransform(angle, (a) => Math.sin((a * Math.PI) / 180) * radius);

  const Icon = tech.icon;

  return (
    <motion.div
      role="img"
      aria-label={tech.name}
      style={{ x, y }}
      className="absolute left-1/2 top-1/2"
    >
      <div className="-translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
        <motion.div
          whileHover={{ scale: 1.18 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="glass-card flex size-9 items-center justify-center rounded-xl border border-ink/10 shadow-sm sm:size-11"
        >
          <Icon className="size-4 sm:size-5" style={{ color: tech.color }} strokeWidth={1.8} />
        </motion.div>
        <span className="hidden whitespace-nowrap rounded-full border border-ink/10 bg-card/85 px-2 py-0.5 text-[10px] font-medium text-foreground/80 backdrop-blur-sm sm:inline">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Orbit hub                                                          */
/* ------------------------------------------------------------------ */

function TechnologyOrbit() {
  const [paused, setPaused] = useState(false);
  const [diameter, setDiameter] = useState(288);
  const orbitRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const time = useMotionValue(0);

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    const measure = () => setDiameter(orbit.getBoundingClientRect().width);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(orbit);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;

    let frame = 0;
    let previous = performance.now();
    const tick = (now: number) => {
      time.set(time.get() + Math.min(now - previous, 64));
      previous = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, reduceMotion, time]);

  const outerRadius = Math.min(
    RING_RADII[2],
    Math.max(112, (diameter - (diameter >= 560 ? 88 : 64)) / 2),
  );
  const radii = [
    Math.max(70, outerRadius * (RING_RADII[0] / RING_RADII[2])),
    Math.max(90, outerRadius * (RING_RADII[1] / RING_RADII[2])),
    outerRadius,
  ];
  const rings = RING_RADII.map((_, ringIndex) =>
    TECHNOLOGIES.filter((t) => t.ring === ringIndex)
  );

  return (
    <div
      ref={orbitRef}
      className="relative mx-auto aspect-square w-full max-w-[720px] select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ambient glow */}
      <div className="absolute inset-[20%] rounded-full bg-brand-2/10 blur-3xl" />

      {/* orbit rings */}
      {radii.map((r, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/10"
          style={{ width: r * 2, height: r * 2 }}
        />
      ))}

      {/* centre hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="glass-card flex size-20 flex-col items-center justify-center rounded-full border border-brand-2/30 sm:size-28">
          <span className="font-display text-xs tracking-[0.2em] text-brand-2 uppercase">
            Mapsoft
          </span>
          <span className="mt-1 text-[10px] text-muted-foreground">Tech Stack</span>
        </div>
      </div>

      {/* nodes */}
      {rings.map((ringTechs, ringIndex) =>
        ringTechs.map((tech, i) => (
          <OrbitNode
            key={tech.name}
            tech={tech}
            ringIndex={ringIndex}
            indexInRing={i}
            totalInRing={ringTechs.length}
            radius={radii[ringIndex]!}
            time={time}
          />
        ))
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Technology grid (full-width reference below the orbit)             */
/* ------------------------------------------------------------------ */

function TechGrid() {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {TECHNOLOGIES.map((tech, i) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.02, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -2 }}
            className="glass-card flex items-center gap-2.5 rounded-xl px-3 py-2.5"
          >
            <span style={{ color: tech.color }}>
              <Icon className="size-4" strokeWidth={1.8} />
            </span>
            <span className="truncate text-xs text-muted-foreground">{tech.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stat cell                                                          */
/* ------------------------------------------------------------------ */

function StatCell({
  index,
  value,
  suffix,
  label,
}: {
  index: number;
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const spring = useSpring(0, { stiffness: 70, damping: 22 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, value, spring]);

  useMotionValueEvent(spring, "change", (v) => setN(Math.round(v)));

  return (
    <div
      ref={ref}
      className="glass-card group relative overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1"
    >
      <span className="font-mono text-[10px] tabular-nums text-muted-foreground/60">
        {String(index + 1).padStart(2, "0")}
      </span>

      <p className="mt-4 font-display text-4xl leading-none text-accent-ink tabular-nums">
        {n}
        {suffix}
      </p>

      <motion.span
        aria-hidden
        className="mt-4 block h-px w-full origin-left bg-brand-2/50"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.9, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      />

      <p className="mt-4 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Strength block                                                     */
/* ------------------------------------------------------------------ */

export function StrengthBlock() {
  return (
    <Section className="bg-card/30">
      <SectionHeader
        kicker="Strength"
        title="Our Technical Strength"
        text="The tools and platforms our engineers use every day to design, build and support business-critical software."
      />

      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <TechnologyOrbit />
        </Reveal>

        <Reveal delay={0.12} className="space-y-6">
          <p className="leading-relaxed text-muted-foreground">
            We work across the stack, not inside a single framework. Front-end
            experiences in <strong>React, Angular, Vue, and Flutter</strong>;
            back-end services in <strong>.NET, Node.js, Python, and Java</strong>;
            data on <strong>SQL Server, PostgreSQL, and MongoDB</strong>; and
            cloud-native deployments on <strong>AWS, Azure, and Google Cloud</strong>
            — our team picks the right tool for the job instead of forcing one.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            That breadth is why we ship production systems across
            <strong> SaaS platforms, mobile apps, e-commerce, CMS builds, and
              cloud migrations</strong> — with Docker and Kubernetes handling the
            DevOps lift so releases stay predictable.
          </p>
        </Reveal>
      </div>

      {/* Full-width reference grid */}
      <div className="mt-14">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-ink/10" />
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            Tools &amp; Platforms
          </span>
          <span className="h-px flex-1 bg-ink/10" />
        </div>
        <div className="mt-6">
          <TechGrid />
        </div>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StatCell
            key={s.label}
            index={i}
            value={s.value}
            suffix={s.suffix}
            label={s.label}
          />
        ))}
      </div>
    </Section>
  );
}
