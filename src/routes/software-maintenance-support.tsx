import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/software-maintenance-support")!;

export const Route = createFileRoute("/software-maintenance-support")({
  head: () => ({
    meta: [
      { title: "Software Maintenance and Support — Mapsoft Technologies" },
      { name: "description", content: "Ongoing support for software applications, including bug fixes, updates, enhancements, and troubleshooting to ensure that the software runs smoothly over t" },
      { property: "og:title", content: "Software Maintenance and Support — Mapsoft Technologies" },
      { property: "og:description", content: "Ongoing support for software applications, including bug fixes, updates, enhancements, and troubleshooting to ensure that the software runs smoothly over t" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/software-maintenance-support" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/software-maintenance-support" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
