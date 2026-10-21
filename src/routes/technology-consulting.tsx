import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/technology-consulting")!;

export const Route = createFileRoute("/technology-consulting")({
  head: () => ({
    meta: [
      { title: "Consulting & Advisory — Mapsoft Technologies" },
      { name: "description", content: "Straight answers to hard technology questions. Our consultants help you choose platforms, plan investments and align technology decisions with measurable b" },
      { property: "og:title", content: "Consulting & Advisory — Mapsoft Technologies" },
      { property: "og:description", content: "Straight answers to hard technology questions. Our consultants help you choose platforms, plan investments and align technology decisions with measurable b" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/technology-consulting" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/technology-consulting" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
