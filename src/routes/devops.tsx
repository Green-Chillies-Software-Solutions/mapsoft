import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/devops")!;

export const Route = createFileRoute("/devops")({
  head: () => ({
    meta: [
      { title: "DevOps & Cloud Services — Mapsoft Technologies" },
      { name: "description", content: "Ship more often with less risk. We build automated pipelines, infrastructure as code and observable cloud environments so releases become routine rather th" },
      { property: "og:title", content: "DevOps & Cloud Services — Mapsoft Technologies" },
      { property: "og:description", content: "Ship more often with less risk. We build automated pipelines, infrastructure as code and observable cloud environments so releases become routine rather th" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/devops" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/devops" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
