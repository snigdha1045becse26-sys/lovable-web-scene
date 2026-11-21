import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/settings")({
  head: () => ({
    meta: [
      { title: "Employer Settings — SkillProof" },
      { name: "description", content: "Company, team and hiring preferences." },
      { property: "og:title", content: "Employer Settings — SkillProof" },
      { property: "og:description", content: "Company, team and hiring preferences." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Employer Settings" description="Company, team and hiring preferences." />;
}
