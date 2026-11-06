import { img } from "@/lib/images";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useState } from "react";
import { ContactCTA, PageHero, Section } from "@/components/sections/Common";
import { portfolio, type PortfolioItem } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Web & Mobile Projects | Mapsoft" },
      {
        name: "description",
        content:
          "Selected web platforms, enterprise web portals and mobile applications delivered by Mapsoft Technologies.",
      },
      { property: "og:title", content: "Portfolio — Mapsoft Technologies" },
      {
        property: "og:description",
        content: "Web and mobile work delivered for growing businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const filters = ["All", "Mobile", "Web"] as const;

const workImages: Record<string, string> = {
  "Mobile App Development": img.mobile,
  "Modern Web Design": img.webdesign,
  "Enterprise Web Portal": img.security,
  "Custom Web Applications": img.developer,
  "Cloud Operations Platform": img.cloud,
  "E-Commerce Mobile App": img.ecommerce,
};

export function PortfolioGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<PortfolioItem | null>(null);
  const items = portfolio.filter((p) => active === "All" || p.category === active);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-all",
              active === f
                ? "border-transparent bg-ink text-primary-foreground"
                : "border-border/70 text-muted-foreground hover:border-brand-2",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.button
              key={item.title}
              layout
              type="button"
              onClick={() => setOpen(item)}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="glass-card group overflow-hidden rounded-3xl text-left"
            >
              <div className="relative h-52 overflow-hidden bg-secondary">
                <img
                  src={workImages[item.title]}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <span className="absolute bottom-3 left-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-100 grid place-items-center overflow-y-auto bg-background/85 p-4 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card relative max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-3xl"
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 z-10 grid size-9 place-items-center rounded-full bg-background/70"
              >
                <X className="size-4" />
              </button>
              <div className="h-40 bg-ink sm:h-52" />
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.24em] text-brand-2 uppercase">
                  {open.category}
                </p>
                <h3 className="mt-2 font-display text-2xl">{open.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{open.text}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PortfolioPage() {
  return (
    <>
      <PageHero
        kicker="Portfolio"
        title="Work We're Proud Of"
        text="A selection of web platforms, portals and mobile applications built by the Mapsoft team."
      />
      <Section className="pt-0">
        <PortfolioGrid />
      </Section>
      <ContactCTA />
    </>
  );
}
