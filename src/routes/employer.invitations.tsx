import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/invitations")({
  head: () => ({
    meta: [
      { title: "Interview Invitations — SkillProof" },
      { name: "description", content: "Track interview invitations." },
      { property: "og:title", content: "Interview Invitations — SkillProof" },
      { property: "og:description", content: "Track interview invitations." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Interview Invitations" description="Track interview invitations." />;
}
