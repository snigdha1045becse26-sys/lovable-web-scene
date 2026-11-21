import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employer/candidates/")({
  head: () => ({
    meta: [
      { title: "Discover Candidates — SkillProof" },
      { name: "description", content: "Find talent by verified skills and real evidence." },
      { property: "og:title", content: "Discover Candidates — SkillProof" },
      { property: "og:description", content: "Find talent by verified skills and real evidence." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="Discover Candidates" description="Find talent by verified skills and real evidence." />;
}
