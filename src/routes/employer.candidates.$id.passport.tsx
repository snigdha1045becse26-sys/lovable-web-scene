import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/candidates/$id/passport")({
  head: () => ({
    meta: [
      { title: "Skill Passport Viewer — SkillProof" },
      { name: "description", content: "View a candidate's Skill Passport." },
      { property: "og:title", content: "Skill Passport Viewer — SkillProof" },
      { property: "og:description", content: "View a candidate's Skill Passport." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Skill Passport Viewer" description="View a candidate's Skill Passport." />;
}
