import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, ChevronDown, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { AboutBlock, StrengthBlock } from "@/components/sections/About";
import { CTAButton, ContactCTA, Section, SectionHeader } from "@/components/sections/Common";
import { Marquee, TiltCard } from "@/components/motion/Bits";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
  CinemaFrame,
  CurtainLines,
  HorizontalRail,
  ParallaxImage,
  ProgressRule,
  RevealImage,
  ScrollText,
  TextMarquee,
  ZoomMedia,
} from "@/components/motion/Scroll";
import { PortfolioGrid } from "./portfolio";
import { TeamGrid } from "./team";
import {
  clients,
  faqs,
  heroSlides,
  highlightCards,
  services,
  testimonials,
} from "@/data/site";
import { cn } from "@/lib/utils";
import { techPillars } from "@/data/tech";
import { img } from "@/lib/images";
const officeImg = img.developer;
const dashboardImg = img.analytics;
const abstractImg = img.cloud;
const meetingImg = img.teamStrategy;
const pillarImgs = [img.itSupport, img.cloud, img.security, img.ai, img.webdesign, img.iot];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mapsoft Technologies — Custom Software & IT Services" },
      {
        name: "description",
        content:
          "Mapsoft Technologies builds web, mobile and cloud software for growing businesses. Offices in Pune, India and Dallas, USA.",
      },
      { property: "og:title", content: "Mapsoft Technologies — Software & IT Solutions" },
      {
        property: "og:description",
        content:
          "Innovative IT solutions: cloud, cybersecurity, custom software, mobile apps, QA and digital marketing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://animated-tech-forge.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://animated-tech-forge.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mapsoft Technologies",
          url: "/",
          email: "info@maptechsoft.com",
        }),
      },
    ],
  }),
  component: Home,
});

/* ── Hero: editorial split with parallax media ─────────────────── */
function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 5600);
    return () => clearInterval(t);
  }, []);
  const slide = heroSlides[i]!;

  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-35 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hairline mb-7 inline-flex w-fit items-center gap-2.5 rounded-full bg-card px-4 py-1.5 text-[0.66rem] font-medium tracking-[0.28em] text-muted-foreground uppercase"
          >
            <span className="size-1.5 rounded-full bg-brand-1" />
            INDIA . USA . SINCE 2010
          </motion.p>

          <div className="mb-9 min-h-[18rem] sm:min-h-[19rem] lg:min-h-[19rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="font-display text-5xl leading-[1.02] text-balance sm:text-7xl lg:text-[5.2rem]">
                  {slide.title}
                </h1>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {slide.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <CTAButton to="/contact">Get in Touch</CTAButton>
            <CTAButton to="/tech-solutions" variant="ghost">
              Tech Solutions
            </CTAButton>
          </div>

          <div className="mt-12 flex items-center gap-2.5">
            {heroSlides.map((s, idx) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={cn(
                  "h-0.5 rounded-full transition-all duration-700",
                  idx === i ? "w-16 bg-brand-1" : "w-8 bg-border hover:bg-brand-1/50",
                )}
              />
            ))}
          </div>
        </div>

        <ParallaxImage
          src={officeImg}
          alt="Mapsoft developer writing code across multiple screens"
          priority
          className="aspect-[4/5] rounded-[2rem] lg:aspect-[4/5]"
        />
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.4 }}
        className="mt-16 flex justify-center text-muted-foreground"
      >
        <ChevronDown className="size-5" />
      </motion.div>
    </section>
  );
}

/* ── Bento grid — 12 column, aligned rows ──────────────────────── */
function Bento() {
  const [a, ...rest] = highlightCards;
  return (
    <Section className="pt-8">
      <Stagger className="grid gap-5 lg:grid-cols-12">
        <StaggerItem className="lg:col-span-7">
          <TiltCard className="h-full rounded-3xl">
            <article className="card-elevated flex h-full flex-col overflow-hidden">
              <RevealImage
                src={dashboardImg}
                alt="Business data analytics dashboard on a laptop"
                className="h-60 w-full sm:h-80"
              />
              <div className="flex flex-1 flex-col p-8">
                <span className="kicker">Flagship</span>
                <h3 className="mt-3 font-display text-3xl leading-tight">{a?.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a?.text}
                </p>
                <Link
                  to={(a?.to ?? "/") as "/"}
                  className="link-underline mt-7 inline-flex w-fit items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase"
                >
                  {a?.cta} <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </article>
          </TiltCard>
        </StaggerItem>

        <div className="grid gap-5 lg:col-span-5 lg:grid-rows-2">
          {rest.filter(Boolean).map((card, idx) => (
            <StaggerItem key={card!.title} className="h-full">
              <TiltCard className="h-full rounded-3xl">
                <article className="card-elevated sheen flex h-full flex-col justify-between p-7">
                  <div>
                    <span className="font-mono text-[0.65rem] tracking-[0.3em] text-brand-2">
                      {String(idx + 2).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2.5 font-display text-2xl leading-tight">{card!.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {card!.text}
                    </p>
                  </div>
                  <Link
                    to={card!.to as "/"}
                    className="link-underline mt-6 inline-flex w-fit items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase"
                  >
                    {card!.cta} <ArrowUpRight className="size-3.5" />
                  </Link>
                </article>
              </TiltCard>
            </StaggerItem>
          ))}
        </div>
      </Stagger>
    </Section>
  );
}

/* ── Scroll-lit statement ──────────────────────────────────────── */
const differentiators = [
  {
    title: "Customized Solutions for Your Business",
    description:
      "We develop software tailored to your specific business requirements, workflows, and operational goals, ensuring that technology works the way your business needs it to.",
  },
  {
    title: "Industry-Focused Expertise",
    description:
      "Our experience across manufacturing, distribution, healthcare, and other industries enables us to understand business challenges and deliver relevant, practical technology solutions.",
  },
  {
    title: "Skilled Technical Professionals",
    description:
      "Our team of software developers, designers, testers, and project managers works collaboratively to build reliable, high-quality applications using appropriate technologies and development practices.",
  },
  {
    title: "Cost-Effective Development",
    description:
      "Our flexible outsourcing models and dedicated development teams help businesses optimize development costs while accessing specialized technical expertise.",
  },
  {
    title: "Quality-Driven Approach",
    description:
      "We emphasize quality assurance, functional testing, performance, and reliability throughout the development lifecycle to deliver software that meets defined requirements.",
  },
  {
    title: "Scalable and Future-Ready Technology",
    description:
      "We build solutions with scalability and maintainability in mind, helping businesses adapt to changing requirements, growing workloads, and evolving technology trends.",
  },
  {
    title: "Transparent Communication and Project Management",
    description:
      "We believe in clear communication, collaborative planning, regular progress updates, and structured project management to keep projects aligned with client expectations.",
  },
  {
    title: "Reliable Support and Maintenance",
    description:
      "Our engagement does not end with deployment. We provide ongoing maintenance, troubleshooting, updates, and enhancements to help keep applications running smoothly.",
  },
  {
    title: "End-to-End Software Services",
    description:
      "From consultation and planning to design, development, testing, deployment, and maintenance, we provide comprehensive software services under one roof.",
  },
  {
    title: "Long-Term Technology Partnership",
    description:
      "We aim to build lasting relationships with our clients by understanding their business objectives, responding to changing needs, and continuously improving their digital capabilities.",
  },
];

function Statement() {
  return (
    <Section className="py-28">
      <div className="mx-auto max-w-5xl">
        <p className="kicker mb-8">Why Mapsoft</p>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Why Choose Mapsoft Technologies?
            </h1>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 lg:pt-2">
            <p>
              At Mapsoft Technologies, we combine technology, innovation, and
              industry expertise to deliver software solutions that help
              businesses grow, operate efficiently, and stay ahead in a
              competitive marketplace. We understand that every business has
              unique challenges, which is why we focus on developing customized,
              scalable, and reliable technology solutions aligned with your
              business goals.
            </p>
            <p>
              From custom software development and cloud-based ERP solutions to
              web and mobile applications, AI-enabled CRM systems, and dedicated
              development teams, we are committed to transforming your ideas
              into practical, result-oriented digital solutions.
            </p>
          </div>
        </div>

        <h2 className="mt-20 text-3xl font-semibold tracking-tight">
          What Makes Us Different?
        </h2>

        <div className="mt-10 space-y-8">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col gap-5 border-t border-slate-200 pt-7 dark:border-slate-800 md:flex-row md:items-start ${index % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 text-sm font-semibold dark:border-slate-700">
                {index + 1}
              </div>

              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Our Commitment
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
            At Mapsoft Technologies, your business goals are at the heart of
            everything we do. We strive to simplify complex processes, improve
            operational efficiency, enhance customer experiences, and create
            measurable business value through technology.
          </p>
          <p className="mt-8 text-lg font-semibold">
            Mapsoft Technologies — Your Trusted Partner for Innovative,
            Reliable, and Scalable Software Solutions.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <ProgressRule />
      </div>
    </Section>
  );
}

/* ── Tech pillars (SEO content) ───────────────────────────────── */
function TechPillars() {
  return (
    <Section>
      <SectionHeader
        kicker="Tech Support & Products"
        title="Technology That Keeps Business Moving"
        text="Managed IT support, cloud, cybersecurity, AI automation, IoT and custom SaaS products — engineered and supported by one team in Pune and Dallas."
      />
      <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {techPillars.map((p, i) => (
          <StaggerItem key={p.title} className="h-full">
            <article className="group card-elevated sheen flex h-full flex-col overflow-hidden p-7">
              <div className="-mx-7 -mt-7 mb-6 h-48 overflow-hidden">
                <img src={pillarImgs[i]} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
              </div>
              <span className="font-mono text-[0.65rem] tracking-[0.3em] text-brand-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2.5 font-display text-2xl leading-tight">{p.title}</h3>
              <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
      <div className="mt-12 flex justify-center">
        <CTAButton to="/tech-solutions" variant="ghost">Explore Tech Solutions</CTAButton>
      </div>
    </Section>
  );
}

/* ── Services rail (horizontal on scroll) ─────────────────────── */
function ServicesRail() {
  return (
    <div className="relative bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <SectionHeader
          kicker="Services"
          title="What We Do Best"
          text="From cloud solutions to custom engineering, testing and digital marketing — one partner across the whole lifecycle."
        />
      </div>
      <HorizontalRail className="hidden lg:block">
        {services.slice(0, 10).map((s, i) => (
          <Link key={s.slug} to={s.slug as "/"} className="group block w-[23rem] shrink-0">
            <article className="card-elevated sheen flex h-[23rem] flex-col justify-between p-8">
              <div>
                <span className="font-mono text-[0.65rem] tracking-[0.3em] text-brand-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-3xl leading-tight">{s.label}</h3>
                <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                  {s.intro}
                </p>
              </div>
              <span className="link-underline inline-flex w-fit items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase">
                Learn more <ArrowRight className="size-3.5" />
              </span>
            </article>
          </Link>
        ))}
      </HorizontalRail>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:hidden">
        <Stagger className="grid gap-5 sm:grid-cols-2">
          {services.slice(0, 8).map((s) => (
            <StaggerItem key={s.slug} className="h-full">
              <Link to={s.slug as "/"} className="block h-full">
                <article className="card-elevated h-full p-6">
                  <h3 className="font-display text-2xl leading-tight">{s.label}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {s.intro}
                  </p>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div className="flex justify-center pb-20">
        <CTAButton to="/services" variant="ghost">
          View All Services
        </CTAButton>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <Section>
      <SectionHeader kicker="Testimonials" title="What Our Clients Say" />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.name} className="h-full">
            <article className="card-elevated flex h-full flex-col p-8">
              <Quote className="mb-5 size-6 text-brand-2" />
              <p className="flex-1 font-display text-xl leading-relaxed">{t.quote}</p>
              <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-xs font-semibold">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto flex shrink-0 gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-brand-1 text-brand-1" />
                  ))}
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="bg-secondary/60">
      <SectionHeader kicker="FAQ" title="Frequently Asked Questions" />
      <div className="mx-auto max-w-3xl">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.04}>
            <div className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-xl">{f.q}</span>
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 text-brand-2 transition-transform duration-300",
                    open === i && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Home() {
  return (
    <>
      <Hero />

      <Bento />
      <Statement />

      <CinemaFrame
        src={abstractImg}
        alt="Cloud computing data center illustration"
        caption="Systems · Signals · Scale"
      />

      <AboutBlock />
      <TechPillars />

      <ZoomMedia src={meetingImg} alt="Mapsoft engineers mapping system architecture on a glass wall" />

      <ServicesRail />

      {/* --- UPDATED IMAGE SECTION --- */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 my-16 md:my-24">
        {/* Changed to aspect-[16/9] on mobile and aspect-[16/5] on desktop */}
        <div className="relative w-full aspect-[16/9] md:aspect-[16/5] overflow-hidden rounded-3xl bg-secondary/30">
          <ParallaxImage
            src={img.webdesign}
            alt="Responsive website shown on desktop, tablet and phone"
            className="h-full w-full object-cover"
            amount={16}
          />
        </div>
      </div>

      <StrengthBlock />

      <Section>
        <SectionHeader kicker="Portfolio" title="Selected Work" />
        <PortfolioGrid />
      </Section>

      <Testimonials />

      <Section className="py-10">
        <Marquee items={clients} />
      </Section>

      <Section>
        <SectionHeader kicker="Team" title="Meet Our Team" />
        <TeamGrid />
      </Section>

      <Faq />
      <ContactCTA />
    </>
  );
}
