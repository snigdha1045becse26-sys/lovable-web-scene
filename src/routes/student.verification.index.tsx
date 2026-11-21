import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/verification/")({
  head: () => ({
    meta: [
      { title: "Verification History — SkillProof" },
      { name: "description", content: "Every verification step behind your skills." },
      { property: "og:title", content: "Verification History — SkillProof" },
      { property: "og:description", content: "Every verification step behind your skills." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Verification History" description="Every verification step behind your skills." />;
}
