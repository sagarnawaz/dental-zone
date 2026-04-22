import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/site";

export default function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Patient and trainee confidence shaped by clarity and professionalism."
          description="Testimonials are positioned as trust markers across both clinic branches and the FCPS training pathway."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
