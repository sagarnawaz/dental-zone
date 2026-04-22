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
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
