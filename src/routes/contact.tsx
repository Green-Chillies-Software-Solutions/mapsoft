import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MapEmbed, PageHero, Section, SectionHeader } from "@/components/sections/Common";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mapsoft Technologies — Pune & Dallas" },
      {
        name: "description",
        content:
          "Talk to Mapsoft Technologies about cloud solutions, custom software or support. Offices in Kharadi, Pune (India) and Dallas, Texas (USA).",
      },
      { property: "og:title", content: "Contact Mapsoft Technologies" },
      {
        property: "og:description",
        content: "Reach our Pune and Dallas teams by phone, email or WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  subject: z.string().min(3, "Add a short subject"),
  message: z.string().min(10, "Tell us a little more (10+ characters)"),
});

type FormValues = z.infer<typeof schema>;

const field =
  "w-full rounded-xl border border-border/70 bg-card/60 px-4 py-3 text-sm outline-none backdrop-blur transition-colors focus:border-brand-2";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    try {
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyrGRKyzLc-WYEUTe3kAediipPlls1fP-qSl5aonxtQ-_IuwjJV4mBO1Be1KkYGTYMWQA/exec";

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // <-- This tells the browser to skip CORS checks
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      // With no-cors, the response is "opaque" so we can't check response.ok.
      // If the fetch doesn't throw a network error, it succeeded!
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 6000);

    } catch (error) {
      console.error("Error submitting form:", error);
      // Optional: Add some error state UI here if needed
    }
  };

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let's Build Something Together"
        text="Share your requirements and our team in Pune or Dallas will get back to you with next steps."
      />

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-4">
            {company.offices.map((o) => (
              <div key={o.label} className="glass-card rounded-3xl p-7">
                <h3 className="mb-3 font-display text-lg">
                  {o.label} Office
                </h3>
                <p className="flex gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-2" />
                  <span>{o.lines.join(" ")}</span>
                </p>
                <p className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="size-4 text-brand-2" />
                  <a href={`tel:${o.tel}`} className="hover:text-brand-2">
                    {o.phone}
                  </a>
                </p>
              </div>
            ))}
            <div className="glass-card rounded-3xl p-7">
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="size-4 text-brand-2" />
                <a href={`mailto:${company.email}`} className="hover:text-brand-2">
                  {company.email}
                </a>
              </p>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="size-4" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card space-y-4 rounded-3xl p-7 sm:p-9"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input id="name" className={field} {...register("name")} />
                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input id="email" type="email" className={field} {...register("email")} />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                    Phone
                  </label>
                  <input id="phone" className={field} {...register("phone")} />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                    Subject
                  </label>
                  <input id="subject" className={field} {...register("subject")} />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea id="message" rows={5} className={field} {...register("message")} />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
                className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg disabled:opacity-70"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </motion.button>

              <AnimatePresence>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-xl border border-brand-2/40 bg-card/70 px-4 py-3 text-sm text-brand-2"
                  >
                    <CheckCircle2 className="size-4" />
                    Thanks! Your message has been received — we'll be in touch shortly.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeader kicker="Find Us" title="Our Pune Office" />
        <MapEmbed />
      </Section>
    </>
  );
}
