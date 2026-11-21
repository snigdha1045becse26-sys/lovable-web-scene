import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/explain")({
  head: () => ({
    meta: [
      { title: "Explain Your Work — SkillProof" },
      { name: "description", content: "Explain your approach, challenges and improvements." },
      { property: "og:title", content: "Explain Your Work — SkillProof" },
      { property: "og:description", content: "Explain your approach, challenges and improvements." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Explain Your Work" description="Explain your approach, challenges and improvements." />;
}
