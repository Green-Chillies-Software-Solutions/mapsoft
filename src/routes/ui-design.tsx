import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/ui-design")!;

export const Route = createFileRoute("/ui-design")({
  head: () => ({
    meta: [
      { title: "UI/UX Design — Mapsoft Technologies" },
      { name: "description", content: "Design that makes complex software feel obvious. We research, prototype and craft interfaces that reduce training time, cut support tickets and make your p" },
      { property: "og:title", content: "UI/UX Design — Mapsoft Technologies" },
      { property: "og:description", content: "Design that makes complex software feel obvious. We research, prototype and craft interfaces that reduce training time, cut support tickets and make your p" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ui-design" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ui-design" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
