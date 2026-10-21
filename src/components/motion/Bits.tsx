import { animate, motion, useInView, useMotionValue, useReducedMotion } from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";
import { cn } from "@/lib/utils";

/* ── Animated counter ─────────────────────────────────────────── */
export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/* ── Animated skill bar ───────────────────────────────────────── */
export function SkillBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm font-medium">
        <span>{label}</span>
        <span className="text-muted-foreground">
          <Counter value={value} suffix="%" />
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-brand-1"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

/* ── 3D tilt card ─────────────────────────────────────────────── */
export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setStyle({
      rx: (0.5 - py) * 10,
      ry: (px - 0.5) * 12,
      gx: px * 100,
      gy: py * 100,
      active: true,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setStyle((s) => ({ ...s, rx: 0, ry: 0, active: false }))}
      style={{
        transform: `perspective(900px) rotateX(${style.rx}deg) rotateY(${style.ry}deg) translateZ(0)`,
        transition: "transform 250ms ease-out",
      }}
      className={cn("group relative", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at ${style.gx}% ${style.gy}%, color-mix(in oklab, var(--brand-1) 10%, transparent), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}

/* ── Magnetic button wrapper ──────────────────────────────────── */
export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      ref={ref}
      style={{ x, y, display: "inline-block" }}
      className={className}
      onMouseMove={(e) => {
        if (reduceMotion) return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        if (reduceMotion) {
          x.set(0);
          y.set(0);
          return;
        }
        animate(x, 0, { type: "spring", stiffness: 250, damping: 18 });
        animate(y, 0, { type: "spring", stiffness: 250, damping: 18 });
      }}
    >
      {children}
    </motion.span>
  );
}

/* ── Infinite marquee ─────────────────────────────────────────── */
export function Marquee({
  items,
  duration = 40,
  reverse = false,
}: {
  items: string[];
  duration?: number;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="flex w-max gap-4 group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-x ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="glass-card flex h-16 min-w-44 items-center justify-center rounded-xl px-6 text-sm font-semibold whitespace-nowrap text-muted-foreground"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Aurora background ────────────────────────────────────────── */
export function Aurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className="aurora-blob size-[38rem] -top-40 -left-32 opacity-15"
        style={{ background: "var(--brand-1)" }}
      />
      <div
        className="aurora-blob size-[32rem] top-20 right-0 opacity-12"
        style={{ background: "var(--brand-2)", animationDelay: "-7s" }}
      />
      <div
        className="aurora-blob size-[26rem] bottom-0 left-1/3 opacity-10"
        style={{ background: "var(--brand-1)", animationDelay: "-13s" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--foreground)_5%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--foreground)_5%,transparent)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    </div>
  );
}
