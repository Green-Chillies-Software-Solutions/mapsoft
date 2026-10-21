import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/templates/Templates";
import { services } from "@/data/site";

const service = services.find((s) => s.slug === "/web-application-development")!;

export const Route = createFileRoute("/web-application-development")({
  head: () => ({
    meta: [
      { title: "Web Development — Mapsoft Technologies" },
      { name: "description", content: "We can build and maintain websites, e-commerce platforms, content management systems (CMS), and web applications using a variety of technologies and progra" },
      { property: "og:title", content: "Web Development — Mapsoft Technologies" },
      { property: "og:description", content: "We can build and maintain websites, e-commerce platforms, content management systems (CMS), and web applications using a variety of technologies and progra" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/web-application-development" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/web-application-development" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  return <ServiceTemplate service={service} />;
}
