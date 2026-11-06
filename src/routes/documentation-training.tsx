import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/documentation-training")!;

export const Route = createFileRoute("/documentation-training")({
  head: () => ({
    meta: [
      { title: "Documentation & Training — Mapsoft Technologies" },
      { name: "description", content: "Software only delivers value when people can use it. We produce clear documentation and hands-on training that shortens adoption and reduces dependency on " },
      { property: "og:title", content: "Documentation & Training — Mapsoft Technologies" },
      { property: "og:description", content: "Software only delivers value when people can use it. We produce clear documentation and hands-on training that shortens adoption and reduces dependency on " },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/documentation-training" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/documentation-training" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
