import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "For Employers — SkillProof" },
      { name: "description", content: "Discover and compare candidates on real, traceable skill evidence." },
      { property: "og:title", content: "For Employers — SkillProof" },
      { property: "og:description", content: "Discover and compare candidates on real, traceable skill evidence." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="For Employers" description="Discover and compare candidates on real, traceable skill evidence." />;
}
