import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/growth")({
  head: () => ({
    meta: [
      { title: "Growth Tracker — SkillProof" },
      { name: "description", content: "See your progress and build your future." },
      { property: "og:title", content: "Growth Tracker — SkillProof" },
      { property: "og:description", content: "See your progress and build your future." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Growth Tracker" description="See your progress and build your future." />;
}
