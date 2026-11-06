import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/support")!;

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "24/7 Support — Mapsoft Technologies" },
      { name: "description", content: "Around-the-clock support for business-critical systems. Whenever something breaks, a responsive Mapsoft engineer is available to get you running again." },
      { property: "og:title", content: "24/7 Support — Mapsoft Technologies" },
      { property: "og:description", content: "Around-the-clock support for business-critical systems. Whenever something breaks, a responsive Mapsoft engineer is available to get you running again." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/support" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
