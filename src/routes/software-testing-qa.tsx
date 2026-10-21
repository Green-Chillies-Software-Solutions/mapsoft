import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/software-testing-qa")!;

export const Route = createFileRoute("/software-testing-qa")({
  head: () => ({
    meta: [
      { title: "Software Testing and Quality Assurance — Mapsoft Technologies" },
      { name: "description", content: "Mapsoft ensures the quality and reliability of software through various testing methods, including manual and automated testing, performance testing, secur" },
      { property: "og:title", content: "Software Testing and Quality Assurance — Mapsoft Technologies" },
      { property: "og:description", content: "Mapsoft ensures the quality and reliability of software through various testing methods, including manual and automated testing, performance testing, secur" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/software-testing-qa" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/software-testing-qa" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
