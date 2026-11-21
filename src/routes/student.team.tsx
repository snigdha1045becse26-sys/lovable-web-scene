import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/team")({
  head: () => ({
    meta: [
      { title: "Team Contribution Proof — SkillProof" },
      { name: "description", content: "Your team built it. Show what you built." },
      { property: "og:title", content: "Team Contribution Proof — SkillProof" },
      { property: "og:description", content: "Your team built it. Show what you built." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Team Contribution Proof" description="Your team built it. Show what you built." />;
}
