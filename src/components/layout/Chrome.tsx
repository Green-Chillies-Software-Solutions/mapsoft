import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/data/site";

/* ── Top scroll progress bar ──────────────────────────────────── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-100 h-0.5 origin-left bg-brand-1"
      aria-hidden
    />
  );
}

/* ── Lenis smooth scroll ──────────────────────────────────────── */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({ duration: 1.1, smoothWheel: true });
      lenis = instance;
      const loop = (time: number) => {
        instance.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
  return null;
}

/* ── Floating WhatsApp button ─────────────────────────────────── */
export function WhatsAppButton() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-90 grid size-14 place-items-center rounded-full bg-brand-solid shadow-xl transition-transform hover:scale-110"
      style={{ animation: "pulse-ring 2.4s infinite" }}
    >
      <MessageCircle className="size-6" />
    </a>
  );
}

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 320);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          title="Scroll to top"
          initial={{ opacity: 0, y: 12, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.9 }}
          whileHover={{ y: -3, scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 380, damping: 25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
          className="fixed right-5 bottom-[5.5rem] z-90 grid size-12 place-items-center rounded-full border border-brand-2/40 bg-background/90 text-brand-2 shadow-xl shadow-black/10 backdrop-blur-xl transition-colors hover:border-brand-2 hover:bg-ink hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowUp className="size-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ── Desktop custom cursor ────────────────────────────────────── */
export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [big, setBig] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement | null;
      setBig(!!el?.closest("a,button,[role='button']"));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-100 hidden rounded-full border border-ink/40 md:block"
      animate={{
        x: pos.x - (big ? 22 : 10),
        y: pos.y - (big ? 22 : 10),
        width: big ? 44 : 20,
        height: big ? 44 : 20,
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 450, damping: 32, mass: 0.3 }}
    />
  );
}
