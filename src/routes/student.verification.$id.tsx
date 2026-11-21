import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/verification/$id")({
  head: () => ({
    meta: [
      { title: "Verification Details — SkillProof" },
      { name: "description", content: "Step-by-step verification of a submission." },
      { property: "og:title", content: "Verification Details — SkillProof" },
      { property: "og:description", content: "Step-by-step verification of a submission." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Verification Details" description="Step-by-step verification of a submission." />;
}
