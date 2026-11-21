import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title: "For Students — SkillProof" },
      { name: "description", content: "Turn real work into verified proof and get discovered for what you can do." },
      { property: "og:title", content: "For Students — SkillProof" },
      { property: "og:description", content: "Turn real work into verified proof and get discovered for what you can do." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="For Students" description="Turn real work into verified proof and get discovered for what you can do." />;
}
