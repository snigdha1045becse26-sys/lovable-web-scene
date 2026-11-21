import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SkillProof" },
      { name: "description", content: "The mission and team behind SkillProof, the evidence-first career platform." },
      { property: "og:title", content: "About SkillProof" },
      { property: "og:description", content: "The mission and team behind SkillProof, the evidence-first career platform." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="About SkillProof" description="The mission and team behind SkillProof, the evidence-first career platform." />;
}
