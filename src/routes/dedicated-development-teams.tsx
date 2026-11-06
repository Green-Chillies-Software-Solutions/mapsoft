import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/dedicated-development-teams")!;

export const Route = createFileRoute("/dedicated-development-teams")({
  head: () => ({
    meta: [
      { title: "Dedicated Development Teams — Mapsoft Technologies" },
      { name: "description", content: "Extend your engineering capacity with a dedicated Mapsoft team that works as an integrated part of your organisation — your process, your tools, your prior" },
      { property: "og:title", content: "Dedicated Development Teams — Mapsoft Technologies" },
      { property: "og:description", content: "Extend your engineering capacity with a dedicated Mapsoft team that works as an integrated part of your organisation — your process, your tools, your prior" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/dedicated-development-teams" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/dedicated-development-teams" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
