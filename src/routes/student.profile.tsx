import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/profile")({
  head: () => ({
    meta: [
      { title: "Profile — SkillProof" },
      { name: "description", content: "Your SkillProof profile details." },
      { property: "og:title", content: "Profile — SkillProof" },
      { property: "og:description", content: "Your SkillProof profile details." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Profile" description="Your SkillProof profile details." />;
}
