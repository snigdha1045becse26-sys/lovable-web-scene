import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/challenges/new")({
  head: () => ({
    meta: [
      { title: "Create Challenge — SkillProof" },
      { name: "description", content: "Publish a real-world hiring challenge." },
      { property: "og:title", content: "Create Challenge — SkillProof" },
      { property: "og:description", content: "Publish a real-world hiring challenge." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Create Challenge" description="Publish a real-world hiring challenge." />;
}
