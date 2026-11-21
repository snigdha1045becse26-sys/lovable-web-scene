import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/compare")({
  head: () => ({
    meta: [
      { title: "Compare Candidates — SkillProof" },
      { name: "description", content: "Side-by-side, evidence-based candidate comparison." },
      { property: "og:title", content: "Compare Candidates — SkillProof" },
      { property: "og:description", content: "Side-by-side, evidence-based candidate comparison." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Compare Candidates" description="Side-by-side, evidence-based candidate comparison." />;
}
