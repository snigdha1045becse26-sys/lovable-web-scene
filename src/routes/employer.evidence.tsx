import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/evidence")({
  head: () => ({
    meta: [
      { title: "Evidence Explorer — SkillProof" },
      { name: "description", content: "Inspect submissions, journeys and explanations." },
      { property: "og:title", content: "Evidence Explorer — SkillProof" },
      { property: "og:description", content: "Inspect submissions, journeys and explanations." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Evidence Explorer" description="Inspect submissions, journeys and explanations." />;
}
