import SectionHeading from "@/components/ui/SectionHeading";
import ProfileCard from "@/components/ui/ProfileCard";
import { profiles } from "@/data/site";

export default function PeopleSpotlight() {
  const featured = profiles.slice(0, 4);

  return (
    <section className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow="Doctors & Mentors"
          title="A credible panel spanning clinical care and postgraduate mentorship."
          description="The site brings forward specialist credibility without overwhelming the visitor, helping both patients and trainees find the right expert quickly."
        />
        <div className="mt-10 grid grid-cols-2 items-stretch gap-4 sm:gap-5 lg:grid-cols-4">
          {featured.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
}
