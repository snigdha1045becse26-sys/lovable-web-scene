import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — SkillProof" },
      { name: "description", content: "Skill Passport, Proof Journey, AI Transparency, Interview Intelligence and more." },
      { property: "og:title", content: "Features — SkillProof" },
      { property: "og:description", content: "Skill Passport, Proof Journey, AI Transparency, Interview Intelligence and more." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Features" description="Skill Passport, Proof Journey, AI Transparency, Interview Intelligence and more." />;
}
