import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create your account — SkillProof" },
      { name: "description", content: "Join SkillProof as a student or employer." },
      { property: "og:title", content: "Create your account — SkillProof" },
      { property: "og:description", content: "Join SkillProof as a student or employer." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Create your account" description="Join SkillProof as a student or employer." />;
}
