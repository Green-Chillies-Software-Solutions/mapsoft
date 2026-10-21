import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Magnetic } from "@/components/motion/Bits";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setOpen(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-90 px-3 transition-all duration-300 sm:px-6",
        scrolled ? "pt-2" : "pt-3",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-2 rounded-2xl border px-3 py-2 shadow-lg shadow-black/5 backdrop-blur-2xl transition-all duration-300 sm:gap-4 sm:px-5",
          scrolled
            ? "border-border/70 bg-background/90"
            : "border-border/40 bg-background/70",
        )}
      >
        <Logo size="large" className="shrink-0" />

        <nav
          className="hidden items-center gap-0.5 rounded-full border border-border/50 bg-card/40 p-1 xl:flex"
          aria-label="Main"
        >
          {nav.slice(0, 9).map((item) => {
            const active =
              pathname === item.to || item.children?.some((child) => child.to === pathname);

            return (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setOpen(item.children ? item.to : null)}
                onMouseLeave={() => setOpen(null)}
              >
                <Link
                  to={item.to}
                  className={cn(
                    "group relative flex items-center gap-1 rounded-full px-3 py-2 text-[0.82rem] font-medium transition-colors hover:bg-muted/70 hover:text-brand-2",
                    active ? "text-brand-2" : "text-foreground/80",
                  )}
                  aria-current={active ? "page" : undefined}
                  onFocus={() => setOpen(item.children ? item.to : null)}
                >
                  {active && (
                    <motion.span
                      layoutId="main-nav-active-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      className="pointer-events-none absolute inset-0 rounded-full bg-brand-1/10 shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--brand-1)_22%,transparent)]"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    {item.label}
                    {item.children && (
                      <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </span>
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-brand-1 transition-transform duration-300 group-hover:scale-x-100"
                  />
                </Link>

                <AnimatePresence>
                  {item.children && open === item.to && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                      className="glass-card absolute top-full left-1/2 z-50 grid w-[34rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 grid-cols-2 gap-1 rounded-2xl border border-border/60 bg-background/95 p-3 shadow-2xl"
                    >
                      {item.children.map((child, i) => (
                        <motion.div
                          key={child.to}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.02 * i, duration: 0.2 }}
                        >
                          <Link
                            to={child.to}
                            className="block rounded-xl px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-brand-2"
                          >
                            {child.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Magnetic className="hidden sm:inline-block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-brand-1/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-2/30"
            >
              Contact Us <ArrowUpRight className="size-4" />
            </Link>
          </Magnetic>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobile(true)}
            aria-expanded={mobile}
            aria-controls="mobile-navigation"
            className="grid size-10 place-items-center rounded-full border border-border/70 bg-card/60 transition-colors hover:border-brand-2 hover:text-brand-2 xl:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 overflow-y-auto bg-background/95 backdrop-blur-2xl xl:hidden"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/50 bg-background/90 px-4 py-4 backdrop-blur-xl sm:px-6">
              <Logo size="large" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobile(false)}
                className="grid size-10 place-items-center rounded-full border border-border/70 bg-card/60 transition-colors hover:border-brand-2 hover:text-brand-2"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav id="mobile-navigation" className="mx-auto max-w-3xl px-5 pb-16 sm:px-8" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  className="border-b border-border/50 py-4"
                >
                  <Link to={item.to} className="inline-flex min-h-11 items-center font-display text-xl transition-colors hover:text-brand-2">
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
