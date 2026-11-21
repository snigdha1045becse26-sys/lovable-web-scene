import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/challenges/$id/")({
  head: () => ({
    meta: [
      { title: "Challenge Details — SkillProof" },
      { name: "description", content: "Brief, requirements and scoring for a SkillProof challenge." },
      { property: "og:title", content: "Challenge Details — SkillProof" },
      { property: "og:description", content: "Brief, requirements and scoring for a SkillProof challenge." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Challenge Details" description="Brief, requirements and scoring for a SkillProof challenge." />;
}
