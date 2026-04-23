import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/site";

export default function FeaturedServices() {
  return (
    <section className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow="Featured Services"
          title="Advanced dental care presented with clarity, polish, and patient confidence."
          description="Every service is positioned to feel premium yet approachable, with strong treatment hierarchy and clear next steps for appointments."
        />
        <div className="mt-10 grid grid-cols-2 items-stretch gap-4 sm:gap-5 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
