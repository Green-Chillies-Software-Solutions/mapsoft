import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/legacy-software-modernization")!;

export const Route = createFileRoute("/legacy-software-modernization")({
  head: () => ({
    meta: [
      { title: "Legacy Software Modernization — Mapsoft Technologies" },
      { name: "description", content: "Bring ageing business-critical systems into the modern era without disrupting operations. We modernise architecture, data and interfaces incrementally, pro" },
      { property: "og:title", content: "Legacy Software Modernization — Mapsoft Technologies" },
      { property: "og:description", content: "Bring ageing business-critical systems into the modern era without disrupting operations. We modernise architecture, data and interfaces incrementally, pro" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/legacy-software-modernization" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/legacy-software-modernization" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
