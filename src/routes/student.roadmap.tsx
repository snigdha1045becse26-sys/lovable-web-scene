import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/roadmap")({
  head: () => ({
    meta: [
      { title: "Career Roadmap — SkillProof" },
      { name: "description", content: "Skill gaps and next steps for your target role." },
      { property: "og:title", content: "Career Roadmap — SkillProof" },
      { property: "og:description", content: "Skill gaps and next steps for your target role." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Career Roadmap" description="Skill gaps and next steps for your target role." />;
}
