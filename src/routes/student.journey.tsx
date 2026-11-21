import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/journey")({
  head: () => ({
    meta: [
      { title: "Proof Journey — SkillProof" },
      { name: "description", content: "The full history behind your work, from first attempt to verified result." },
      { property: "og:title", content: "Proof Journey — SkillProof" },
      { property: "og:description", content: "The full history behind your work, from first attempt to verified result." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Proof Journey" description="The full history behind your work, from first attempt to verified result." />;
}
