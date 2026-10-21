import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/database-development-management")!;

export const Route = createFileRoute("/database-development-management")({
  head: () => ({
    meta: [
      { title: "Database Development & Management — Mapsoft Technologies" },
      { name: "description", content: "Your data is your most valuable asset. We design, tune and manage databases that stay fast, secure and reliable as your transaction volumes grow." },
      { property: "og:title", content: "Database Development & Management — Mapsoft Technologies" },
      { property: "og:description", content: "Your data is your most valuable asset. We design, tune and manage databases that stay fast, secure and reliable as your transaction volumes grow." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/database-development-management" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/database-development-management" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
