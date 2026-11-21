import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/challenges/")({
  head: () => ({
    meta: [
      { title: "Job Task Simulator — SkillProof" },
      { name: "description", content: "Real-world challenges that turn practice into proof." },
      { property: "og:title", content: "Job Task Simulator — SkillProof" },
      { property: "og:description", content: "Real-world challenges that turn practice into proof." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Job Task Simulator" description="Real-world challenges that turn practice into proof." />;
}
