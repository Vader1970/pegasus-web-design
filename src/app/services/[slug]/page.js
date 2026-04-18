import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import ServicePage from "@/components/sections/services/ServicePage/ServicePage";

/* -----------------------------------------------------------------
   Static paths — one per service slug.
   Keeps the route fully static and SEO-friendly.
------------------------------------------------------------------ */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

/* -----------------------------------------------------------------
   Per-page metadata — pulls title / description from the same data
   object as the page content, so copy and SEO stay in sync.
------------------------------------------------------------------ */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service not found | Pegasus Web Design",
    };
  }

  return {
    title: `${service.title} | Pegasus Web Design`,
    description: service.subtitle,
  };
}

export const dynamicParams = false;

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServicePage service={service} />
    </main>
  );
}
