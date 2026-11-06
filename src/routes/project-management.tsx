import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/project-management")!;

export const Route = createFileRoute("/project-management")({
  head: () => ({
    meta: [
      { title: "Project Management — Mapsoft Technologies" },
      { name: "description", content: "Disciplined delivery management that keeps scope, budget and expectations under control from kick-off to handover." },
      { property: "og:title", content: "Project Management — Mapsoft Technologies" },
      { property: "og:description", content: "Disciplined delivery management that keeps scope, budget and expectations under control from kick-off to handover." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/project-management" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/project-management" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
