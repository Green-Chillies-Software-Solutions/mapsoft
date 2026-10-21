import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ContactCTA, PageHero, Section, SectionHeader } from "@/components/sections/Common";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CurtainLines, RevealImage, TextMarquee } from "@/components/motion/Scroll";
import { techFaqs, techPillars, techProcess, techStack } from "@/data/tech";
import { img } from "@/lib/images";
const pillarImgs = [img.itSupport, img.cloud, img.security, img.ai, img.webdesign, img.iot];


const URL = "https://animated-tech-forge.lovable.app/tech-solutions";
const TITLE = "IT Support, Cloud, AI & Software Solutions — Mapsoft Technologies";
const DESC =
  "Managed IT support, cloud migration, cybersecurity, AI automation, IoT and custom software development from Mapsoft Technologies in Pune and Dallas.";

export const Route = createFileRoute("/tech-solutions")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "IT services and software development",
          provider: { "@type": "Organization", name: "Mapsoft Technologies" },
          areaServed: ["India", "United States"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Technology services",
            itemListElement: techPillars.map((p) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: p.title },
            })),
          },
        }),
      },
    ],
  }),
  component: TechSolutions,
});

function TechSolutions() {
  return (
    <>
      <PageHero
        kicker="Tech Solutions"
        title="Technology Support, Cloud & AI For Modern Business"
        text="One technology partner for IT support, cloud infrastructure, cybersecurity, AI automation and custom software — engineered for reliability and built to scale."
      />

      <div className="border-y border-border py-6">
        <TextMarquee text="IT Support · Cloud · Cybersecurity · AI · IoT · SaaS" />
      </div>

      <Section>
        <SectionHeader
          kicker="What We Deliver"
          title="End-to-End Technology Services"
          text="From the help desk to the data center to the product roadmap, our engineers cover every layer of your technology."
        />
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techPillars.map((p, i) => (
            <StaggerItem key={p.title} className="h-full">
              <article className="group card-elevated sheen flex h-full flex-col overflow-hidden p-8">
                <div className="-mx-8 -mt-8 mb-6 h-48 overflow-hidden">
                <img src={pillarImgs[i]} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
              </div>
                <span className="font-mono text-[0.65rem] tracking-[0.3em] text-brand-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-3xl leading-tight">{p.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <ul className="mt-6 space-y-2 border-t border-border pt-5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-sm">
                      <Check className="size-3.5 shrink-0 text-brand-1" /> {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-secondary/60">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="kicker mb-4">How We Work</p>
            <CurtainLines lines={["Built Right,", "Supported Always"]} className="text-4xl leading-[1.05] sm:text-5xl" />
            <div className="mt-10 space-y-6">
              {techProcess.map((s, i) => (
                <Reveal key={s.step} delay={i * 0.06}>
                  <div className="flex gap-5 border-b border-border pb-6">
                    <span className="font-mono text-xs tracking-[0.3em] text-brand-2">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-2xl">{s.step}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <RevealImage src={img.itSupport} alt="IT support engineer monitoring network systems" className="aspect-[4/5] rounded-[2rem]" />
        </div>
      </Section>

      <Section>
        <SectionHeader kicker="Technology Stack" title="Tools We Master" />
        <Stagger className="flex flex-wrap justify-center gap-3">
          {techStack.map((t) => (
            <StaggerItem key={t}>
              <span className="hairline inline-block rounded-full bg-card px-5 py-2.5 text-sm transition-colors hover:border-brand-1 hover:text-brand-2">
                {t}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-secondary/60">
        <SectionHeader kicker="FAQ" title="Technology Questions, Answered" />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {techFaqs.map((f) => (
            <Reveal key={f.q}>
              <div className="card-elevated h-full p-7">
                <h3 className="font-display text-xl">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
