import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/")({
  head: () => ({
    meta: [
      { title: "Employer Dashboard — SkillProof" },
      { name: "description", content: "Candidates, challenges and reviews at a glance." },
      { property: "og:title", content: "Employer Dashboard — SkillProof" },
      { property: "og:description", content: "Candidates, challenges and reviews at a glance." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Employer Dashboard" description="Candidates, challenges and reviews at a glance." />;
}
