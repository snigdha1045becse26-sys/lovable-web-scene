import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/confidence")({
  head: () => ({
    meta: [
      { title: "Skill Confidence Index — SkillProof" },
      { name: "description", content: "How strong the evidence behind each skill is." },
      { property: "og:title", content: "Skill Confidence Index — SkillProof" },
      { property: "og:description", content: "How strong the evidence behind each skill is." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Skill Confidence Index" description="How strong the evidence behind each skill is." />;
}
