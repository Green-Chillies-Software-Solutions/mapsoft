import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/mobile-app-development")!;

export const Route = createFileRoute("/mobile-app-development")({
  head: () => ({
    meta: [
      { title: "Mobile App Development — Mapsoft Technologies" },
      { name: "description", content: "Specialized in creating mobile apps for various platforms like iOS and Android, catering to both consumer-facing and enterprise applications." },
      { property: "og:title", content: "Mobile App Development — Mapsoft Technologies" },
      { property: "og:description", content: "Specialized in creating mobile apps for various platforms like iOS and Android, catering to both consumer-facing and enterprise applications." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mobile-app-development" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/mobile-app-development" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
