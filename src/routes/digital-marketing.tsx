import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/digital-marketing")!;

export const Route = createFileRoute("/digital-marketing")({
  head: () => ({
    meta: [
      { title: "AI and Digital Marketing — Mapsoft Technologies" },
      { name: "description", content: "Leverage the power of AI to optimize your digital marketing strategies—from predictive analytics and customer segmentation to automated campaigns and real-" },
      { property: "og:title", content: "AI and Digital Marketing — Mapsoft Technologies" },
      { property: "og:description", content: "Leverage the power of AI to optimize your digital marketing strategies—from predictive analytics and customer segmentation to automated campaigns and real-" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/digital-marketing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/digital-marketing" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
