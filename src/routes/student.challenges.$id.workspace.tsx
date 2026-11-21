import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/challenges/$id/workspace")({
  head: () => ({
    meta: [
      { title: "Challenge Workspace — SkillProof" },
      { name: "description", content: "Solve the challenge and submit your work." },
      { property: "og:title", content: "Challenge Workspace — SkillProof" },
      { property: "og:description", content: "Solve the challenge and submit your work." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Challenge Workspace" description="Solve the challenge and submit your work." />;
}
