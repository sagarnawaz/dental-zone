import Card from "@/components/ui/Card";
import type { Profile } from "@/data/site";
import { toInitials } from "@/lib/utils";

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Card className="flex h-full flex-col gap-5 p-6">
      <div className="flex items-start gap-4">
        <div className="grid size-14 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#0a2540,#0d5e6e)] font-semibold text-white shadow-[0_16px_35px_rgba(10,37,64,0.18)]">
          {toInitials(profile.name)}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]/50">
            {profile.role}
          </p>
          <h3 className="mt-2 font-heading text-3xl leading-tight text-[var(--color-primary)]">
            {profile.name}
          </h3>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {profile.qualifications.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]/75"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="text-sm leading-7 text-[var(--color-text-soft)]">{profile.summary}</p>

      <div className="grid gap-3 rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface-muted)] p-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]/45">
            Specialties
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-text)]/75">{profile.specialties.join(" • ")}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]/45">
            Availability
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-text)]/75">{profile.availability}</p>
        </div>
      </div>
    </Card>
  );
}
