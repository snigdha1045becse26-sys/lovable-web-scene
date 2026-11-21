import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/ai-transparency")({
  head: () => ({
    meta: [
      { title: "AI Transparency — SkillProof" },
      { name: "description", content: "Disclose how you collaborated with AI and what you owned." },
      { property: "og:title", content: "AI Transparency — SkillProof" },
      { property: "og:description", content: "Disclose how you collaborated with AI and what you owned." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="AI Transparency" description="Disclose how you collaborated with AI and what you owned." />;
}
