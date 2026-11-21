import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/interview")({
  head: () => ({
    meta: [
      { title: "Interview Intelligence — SkillProof" },
      { name: "description", content: "Better evidence. Better questions. Better interviews." },
      { property: "og:title", content: "Interview Intelligence — SkillProof" },
      { property: "og:description", content: "Better evidence. Better questions. Better interviews." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Interview Intelligence" description="Better evidence. Better questions. Better interviews." />;
}
