import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — SkillProof" },
      { name: "description", content: "Log in to your SkillProof account." },
      { property: "og:title", content: "Log in — SkillProof" },
      { property: "og:description", content: "Log in to your SkillProof account." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Log in" description="Log in to your SkillProof account." />;
}
