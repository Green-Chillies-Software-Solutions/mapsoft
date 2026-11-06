import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { company, footerServices, usefulLinks } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="grain-overlay relative border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo />
          {company.offices.map((o) => (
            <div key={o.label} className="text-sm text-muted-foreground">
              <p className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-2" />
                <span>
                  {o.label === "India" ? `${company.name}, ` : ""}
                  {o.lines.join(" ")}
                </span>
              </p>
              <p className="mt-1 flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-brand-2" />
                <a href={`tel:${o.tel}`} className="hover:text-brand-2">
                  {o.phone}
                </a>
              </p>
            </div>
          ))}
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="size-4 text-brand-2" />
            <a href={`mailto:${company.email}`} className="hover:text-brand-2">
              {company.email}
            </a>
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base">Useful Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {usefulLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-brand-2">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base">Our Services</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {footerServices.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-brand-2">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base">Follow Us</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Stay connected with Mapsoft Technologies for product news and updates.
          </p>
          <div className="flex gap-3">
            {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid size-10 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-brand-2 hover:text-brand-2"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 py-5 text-center text-sm text-muted-foreground">
        Copyright © 2026 {company.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
