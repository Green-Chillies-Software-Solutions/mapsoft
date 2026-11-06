import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";


function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 640 ? 1.25 : 1.8);

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const count = reduceMotion ? 180 : window.innerWidth < 640 ? 280 : 900;
    const pts = Array.from({ length: count }, () => {
      const r = 1.6 + Math.random() * 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      return {
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
      };
    });

    const start = performance.now();
    const draw = () => {
      const t = (performance.now() - start) / 1000;
      const ry = t * 0.35;
      const rx = Math.sin(t * 0.3) * 0.2;
      const scale = (1 + Math.sin(t * 1.6) * 0.05) * Math.min(w, h) * 0.18;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      for (const p of pts) {
        let { x, y, z } = p;
        const cy = Math.cos(ry);
        const sy = Math.sin(ry);
        [x, z] = [x * cy + z * sy, -x * sy + z * cy];
        const cx = Math.cos(rx);
        const sx = Math.sin(rx);
        [y, z] = [y * cx - z * sx, y * sx + z * cx];

        const persp = 5 / (5 - z);
        const px = w / 2 + x * scale * persp;
        const py = h / 2 + y * scale * persp;
        const alpha = Math.max(0.05, Math.min(0.9, persp - 0.6));
        ctx.fillStyle = `rgba(4, 127, 161, ${alpha * 0.5})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.1 * persp, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    if (reduceMotion) draw();
    else raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduceMotion]);

  return <canvas ref={ref} className="h-full w-full" />;
}

export function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setProgress(100);
      setDone(true);
      return;
    }

    let raf = 0;
    let timeout = 0;
    const start = performance.now();
    const total = 1500;
    const tick = () => {
      const p = Math.min(1, (performance.now() - start) / total);
      setProgress(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else timeout = window.setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-200 grid place-items-center bg-background"
        >
          <div className="absolute inset-0">
            <ParticleCanvas />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-7">
            <motion.img
              src={logo}
              alt="Mapsoft Technologies"
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="h-12 w-auto sm:h-14"
            />
            <div className="h-px w-56 overflow-hidden bg-border">
              <motion.div
                className="h-full bg-brand-solid"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="font-mono text-[0.65rem] tracking-[0.42em] text-muted-foreground">
              {String(progress).padStart(3, "0")}
            </p>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
