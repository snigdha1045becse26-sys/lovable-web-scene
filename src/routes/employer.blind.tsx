import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/blind")({
  head: () => ({
    meta: [
      { title: "Blind Verification — SkillProof" },
      { name: "description", content: "Evaluate candidates on evidence with identity hidden." },
      { property: "og:title", content: "Blind Verification — SkillProof" },
      { property: "og:description", content: "Evaluate candidates on evidence with identity hidden." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Blind Verification" description="Evaluate candidates on evidence with identity hidden." />;
}
