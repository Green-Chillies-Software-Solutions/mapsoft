import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/custom-software-development")!;

export const Route = createFileRoute("/custom-software-development")({
  head: () => ({
    meta: [
      { title: "Custom Software Development — Mapsoft Technologies" },
      { name: "description", content: "Mapsoft offers expertise in developing custom software applications tailored to meet the unique requirements of their clients. This may include web applica" },
      { property: "og:title", content: "Custom Software Development — Mapsoft Technologies" },
      { property: "og:description", content: "Mapsoft offers expertise in developing custom software applications tailored to meet the unique requirements of their clients. This may include web applica" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/custom-software-development" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/custom-software-development" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
