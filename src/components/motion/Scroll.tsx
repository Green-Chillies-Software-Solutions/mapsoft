import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const SPRING = { stiffness: 110, damping: 26, mass: 0.45, restDelta: 0.0005 };

/* ── Parallax image inside a fixed-ratio frame ────────────────── */
export function ParallaxImage({
  src,
  alt,
  className,
  amount = 12,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  amount?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, SPRING);
  const y = useTransform(smooth, [0, 1], [`-${amount}%`, `${amount}%`]);
  const scale = useTransform(smooth, [0, 0.5, 1], [1.16, 1.24, 1.16]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-muted", className)}>
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        style={reduce ? {} : { y, scale }}
        className="absolute inset-0 size-full scale-115 object-cover"
      />
      <span className="pointer-events-none absolute inset-0 ring-1 ring-black/5 ring-inset" />
    </div>
  );
}

/* ── Image that unmasks + scales as it scrolls into view ─────── */
export function RevealImage({
  src,
  alt,
  className,
  from = "bottom",
}: {
  src: string;
  alt: string;
  className?: string;
  from?: "bottom" | "left";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "end 45%"],
  });
  const p = useSpring(scrollYProgress, SPRING);
  const clip = useTransform(
    p,
    [0, 1],
    from === "bottom"
      ? ["inset(0 0 100% 0 round 0px)", "inset(0 0 0% 0 round 0px)"]
      : ["inset(0 100% 0 0 round 0px)", "inset(0 0% 0 0 round 0px)"],
  );
  const scale = useTransform(p, [0, 1], [1.22, 1]);
  const blurPx = useTransform(p, [0, 0.7, 1], [10, 1, 0]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-muted", className)}>
      <motion.div style={reduce ? {} : { clipPath: clip }} className="absolute inset-0">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={reduce ? {} : { scale, filter }}
          className="size-full object-cover"
        />
      </motion.div>
      <span className="pointer-events-none absolute inset-0 ring-1 ring-black/5 ring-inset" />
    </div>
  );
}

/* ── Cinematic frame: image widens + un-rounds as you scroll ──── */
export function CinemaFrame({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p = useSpring(scrollYProgress, SPRING);
  const width = useTransform(p, [0, 0.45, 1], ["68%", "100%", "100%"]);
  const radius = useTransform(p, [0, 0.45], ["2.5rem", "0.25rem"]);
  const y = useTransform(p, [0, 1], ["-8%", "8%"]);
  const opacity = useTransform(p, [0, 0.2, 0.85, 1], [0, 1, 1, 0.85]);

  return (
    <div ref={ref} className={cn("relative py-16", className)}>
      <motion.div
        style={reduce ? {} : { width, borderRadius: radius, opacity }}
        className="relative mx-auto aspect-[21/9] w-full overflow-hidden bg-muted"
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={reduce ? {} : { y }}
          className="absolute inset-0 size-full scale-120 object-cover"
        />
        {caption && (
          <span className="hairline absolute bottom-5 left-6 rounded-full bg-card/90 px-4 py-1.5 font-mono text-[0.6rem] tracking-[0.32em] text-foreground uppercase backdrop-blur">
            {caption}
          </span>
        )}
      </motion.div>
    </div>
  );
}

/* ── Endless scrolling headline band ──────────────────────────── */
export function TextMarquee({
  text,
  duration = 34,
  reverse = false,
  className,
}: {
  text: string;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  const items = Array.from({ length: 6 });
  return (
    <div
      className={cn(
        "relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className="flex w-max items-center gap-10"
        style={{
          animation: `marquee-x ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10" aria-hidden={half === 1}>
            {items.map((_, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                {/* Changed from text-4xl sm:text-6xl to text-sm sm:text-lg */}
                <span className="font-display text-sm sm:text-2xl leading-none">{text}</span>
                <span className="size-1.5 rounded-full bg-brand-1" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Words that light up line-by-line as you scroll ───────────── */
export function ScrollText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={cn("font-display text-3xl leading-[1.15] sm:text-5xl", className)}>
      {words.map((w, i) => (
        <ScrollWord
          key={`${w}-${i}`}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        >
          {w}
        </ScrollWord>
      ))}
    </p>
  );
}

function ScrollWord({
  children,
  progress,
  range,
}: {
  children: ReactNode;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

/* ── Line-by-line curtain reveal (video-title feel) ───────────── */
export function CurtainLines({
  lines,
  className,
  as: Tag = "h2",
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag className={cn("font-display", className)}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.85, delay: i * 0.09, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ── Horizontal scroll rail driven by vertical scroll ─────────── */
export function HorizontalRail({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref });
  const raw = useTransform(scrollYProgress, [0, 1], [0, -travel]);
  const x = useSpring(raw, { stiffness: 80, damping: 26, mass: 0.5, restDelta: 0.001 });

  useEffect(() => {
    const container = ref.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const measure = () => setTravel(Math.max(0, track.scrollWidth - container.clientWidth));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(track);
    return () => observer.disconnect();
  }, [children]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative h-[280vh]",
        reduce && "h-auto",
        className,
      )}
    >
      <div
        className={cn(
          "sticky top-0 flex h-screen items-center overflow-hidden",
          reduce && "relative top-auto block h-auto overflow-x-auto overscroll-x-contain py-4",
        )}
      >
        <motion.div
          ref={trackRef}
          style={reduce ? undefined : { x }}
          className="flex w-max items-stretch gap-6 px-6 lg:px-12"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

/* ── Scroll-scaled sticky media ───────────────────────────────── */
export function ZoomMedia({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p = useSpring(scrollYProgress, SPRING);
  const scale = useTransform(p, [0, 0.5, 1], [0.88, 1, 0.95]);
  const radius = useTransform(p, [0, 0.5], ["3rem", "1.25rem"]);
  const imgY = useTransform(p, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className="relative py-10">
      <motion.div
        style={reduce ? {} : { scale, borderRadius: radius }}
        className="relative mx-auto aspect-[16/9] w-full max-w-6xl overflow-hidden bg-muted"
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={reduce ? {} : { y: imgY }}
          className="absolute inset-0 size-full scale-115 object-cover"
        />
        {children}
      </motion.div>
    </div>
  );
}

/* ── Sticky number/label counter strip ────────────────────────── */
export function ProgressRule() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 60%"] });
  const scaleX = useSpring(scrollYProgress, SPRING);
  return (
    <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
      <motion.div style={{ scaleX }} className="h-px origin-left bg-brand-1/60" />
    </div>
  );
}
