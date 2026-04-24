import Card from "@/components/ui/Card";

type Testimonial = {
  author: string;
  rating: number;
  text: string;
  href?: string;
};

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <a href={testimonial.href} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="flex h-full flex-col gap-4 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] sm:gap-5 sm:p-6">
      <div className="text-4xl leading-none text-[var(--color-accent)]">&ldquo;</div>
      <p className="break-words text-sm leading-7 text-[var(--color-text)]/82 sm:text-base sm:leading-8">{testimonial.text}</p>
      <div className="mt-auto border-t border-[var(--border-soft)] pt-4">
        <p className="break-words font-semibold text-[var(--color-primary)]">{testimonial.author}</p>
        <p className="mt-1 text-sm text-[var(--color-text-soft)]">{`${testimonial.rating}/5 Google review`}</p>
      </div>
      </Card>
    </a>
  );
}
