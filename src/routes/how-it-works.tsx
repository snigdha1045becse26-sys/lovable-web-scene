import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/kit";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — SkillProof" },
      { name: "description", content: "From challenge to verified Skill Passport to interview invitation." },
      { property: "og:title", content: "How It Works — SkillProof" },
      { property: "og:description", content: "From challenge to verified Skill Passport to interview invitation." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageHeader title="How It Works" description="From challenge to verified Skill Passport to interview invitation." />;
}
