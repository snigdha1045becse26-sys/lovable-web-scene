import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/passport")({
  head: () => ({
    meta: [
      { title: "Skill Passport — SkillProof" },
      { name: "description", content: "A verified, shareable record of skills, projects and evidence." },
      { property: "og:title", content: "Skill Passport — SkillProof" },
      { property: "og:description", content: "A verified, shareable record of skills, projects and evidence." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Skill Passport" description="A verified, shareable record of skills, projects and evidence." />;
}
