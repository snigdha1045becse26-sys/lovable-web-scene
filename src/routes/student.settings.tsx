import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/student/settings")({
  head: () => ({
    meta: [
      { title: "Settings — SkillProof" },
      { name: "description", content: "Account, privacy and notification settings." },
      { property: "og:title", content: "Settings — SkillProof" },
      { property: "og:description", content: "Account, privacy and notification settings." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Settings" description="Account, privacy and notification settings." />;
}
