import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/submissions")({
  head: () => ({
    meta: [
      { title: "My Submissions — SkillProof" },
      { name: "description", content: "Track every submission, score and reviewer note." },
      { property: "og:title", content: "My Submissions — SkillProof" },
      { property: "og:description", content: "Track every submission, score and reviewer note." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="My Submissions" description="Track every submission, score and reviewer note." />;
}
