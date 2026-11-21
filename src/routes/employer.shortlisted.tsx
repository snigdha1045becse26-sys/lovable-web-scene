import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/shortlisted")({
  head: () => ({
    meta: [
      { title: "Shortlisted Candidates — SkillProof" },
      { name: "description", content: "Candidates you've shortlisted." },
      { property: "og:title", content: "Shortlisted Candidates — SkillProof" },
      { property: "og:description", content: "Candidates you've shortlisted." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Shortlisted Candidates" description="Candidates you've shortlisted." />;
}
