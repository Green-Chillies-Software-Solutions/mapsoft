import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/cost-effective-solutions")!;

export const Route = createFileRoute("/cost-effective-solutions")({
  head: () => ({
    meta: [
      { title: "Cost-effective Solutions — Mapsoft Technologies" },
      { name: "description", content: "Mapsoft offers cost-effective solutions compared to in-house development teams by leveraging lower labor costs in different regions — without compromising " },
      { property: "og:title", content: "Cost-effective Solutions — Mapsoft Technologies" },
      { property: "og:description", content: "Mapsoft offers cost-effective solutions compared to in-house development teams by leveraging lower labor costs in different regions — without compromising " },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cost-effective-solutions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cost-effective-solutions" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
