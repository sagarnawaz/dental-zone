import Card from "@/components/ui/Card";
import type { Testimonial } from "@/data/site";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col gap-5 p-6">
      <div className="text-4xl leading-none text-[var(--color-accent)]">“</div>
      <p className="text-base leading-8 text-[var(--color-text)]/82">{testimonial.quote}</p>
      <div className="mt-auto border-t border-[var(--border-soft)] pt-4">
        <p className="font-semibold text-[var(--color-primary)]">{testimonial.author}</p>
        <p className="mt-1 text-sm text-[var(--color-text-soft)]">{testimonial.context}</p>
      </div>
    </Card>
  );
}
