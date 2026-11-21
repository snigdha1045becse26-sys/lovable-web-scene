import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/candidates/$id/")({
  head: () => ({
    meta: [
      { title: "Candidate Profile — SkillProof" },
      { name: "description", content: "A candidate's verified skills, projects and evidence." },
      { property: "og:title", content: "Candidate Profile — SkillProof" },
      { property: "og:description", content: "A candidate's verified skills, projects and evidence." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Candidate Profile" description="A candidate's verified skills, projects and evidence." />;
}
