import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunity Match — SkillProof" },
      { name: "description", content: "Find opportunities that match your verified skills." },
      { property: "og:title", content: "Opportunity Match — SkillProof" },
      { property: "og:description", content: "Find opportunities that match your verified skills." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Opportunity Match" description="Find opportunities that match your verified skills." />;
}
