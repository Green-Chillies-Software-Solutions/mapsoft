import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/offshore-nearshore-outsourcing")!;

export const Route = createFileRoute("/offshore-nearshore-outsourcing")({
  head: () => ({
    meta: [
      { title: "Offshore & Nearshore Outsourcing — Mapsoft Technologies" },
      { name: "description", content: "Access world-class engineering at a sustainable cost. Our India and US presence gives you overlapping working hours, strong communication and genuine deliv" },
      { property: "og:title", content: "Offshore & Nearshore Outsourcing — Mapsoft Technologies" },
      { property: "og:description", content: "Access world-class engineering at a sustainable cost. Our India and US presence gives you overlapping working hours, strong communication and genuine deliv" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/offshore-nearshore-outsourcing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/offshore-nearshore-outsourcing" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
