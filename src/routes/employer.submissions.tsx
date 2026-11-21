import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/submissions")({
  head: () => ({
    meta: [
      { title: "Review Submissions — SkillProof" },
      { name: "description", content: "Review candidate work with full context." },
      { property: "og:title", content: "Review Submissions — SkillProof" },
      { property: "og:description", content: "Review candidate work with full context." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Review Submissions" description="Review candidate work with full context." />;
}
