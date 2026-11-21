import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/challenges/")({
  head: () => ({
    meta: [
      { title: "Manage Challenges — SkillProof" },
      { name: "description", content: "Your published hiring challenges." },
      { property: "og:title", content: "Manage Challenges — SkillProof" },
      { property: "og:description", content: "Your published hiring challenges." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Manage Challenges" description="Your published hiring challenges." />;
}
