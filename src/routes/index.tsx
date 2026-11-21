import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Award, BadgeCheck, Bot, Briefcase, Building2, CheckCircle2, ClipboardCheck, Code2, Eye,
  FileText, Gauge, GitBranch, GraduationCap, Mail, MessageSquareText, Search, ShieldCheck, Sparkles,
  Tag, Target, UserPlus, BookOpenCheck,
} from "lucide-react";
import { PassportPreview } from "@/components/landing/PassportPreview";
import { PublicPage } from "@/components/site/PublicPage";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkillProof — Prove what you can do, not just what you studied" },
      {
        name: "description",
        content:
          "Build your Skill Passport, prove your abilities through real-world challenges, and get discovered by employers who value what you can actually do.",
      },
      { property: "og:title", content: "SkillProof — The proof-of-skill career platform" },
      {
        property: "og:description",
        content: "Skills over certificates. Evidence over claims. Build a verified Skill Passport.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PublicPage>
      <Hero />
      <TrustStrip />
      <Problem />
      <Solution />
      <Differentiators />
      <Features />
      <HowItWorks />
      <DualCta />
    </PublicPage>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]" />
      <div className="absolute inset-0 bg-brand-glow" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 pb-24 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-32 lg:pt-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary shadow-soft">
            <span className="size-1.5 rounded-full bg-primary animate-pulse-ring" />
            The future of proof-based hiring
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[64px]">
            Your <span className="text-brand-gradient">Skills</span> Deserve More Than Just a Line on Your{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">Resume.</span>
              <span className="absolute inset-x-0 bottom-1.5 -z-0 h-3 rounded bg-primary/15" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Build your <strong className="font-semibold text-foreground">Skill Passport</strong>, prove your abilities through real-world challenges, and get discovered by employers who value what you can actually do.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <Link to="/register">
                Build Your Skill Passport <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/how-it-works">Explore How It Works</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {["Skills over certificates", "Evidence over claims", "Transparent AI use"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-success" /> {t}
              </span>
            ))}
          </div>
        </div>
        <div className="animate-fade-up [animation-delay:150ms]">
          <PassportPreview />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { v: "8-stage", k: "Proof Journey per project" },
    { v: "100%", k: "Scores traceable to evidence" },
    { v: "0", k: "Weight given to college name" },
    { v: "3", k: "Explain-your-work questions" },
  ];
  return (
    <section className="border-y bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y md:grid-cols-4 md:divide-y-0">
        {items.map((i) => (
          <div key={i.k} className="px-6 py-8 text-center">
            <p className="text-2xl font-bold tracking-tight text-foreground">{i.v}</p>
            <p className="mt-1 text-sm text-muted-foreground">{i.k}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    { icon: FileText, title: "Certificates Don't Prove Practical Ability.", text: "A course completion badge says you attended — not that you can debug a production issue or ship a working feature." },
    { icon: Eye, title: "Real Skills Remain Hidden.", text: "Side projects, late-night fixes and team contributions rarely make it onto a one-page resume." },
    { icon: Tag, title: "Talent Gets Judged by Labels.", text: "CGPA and college reputation become shortcuts, filtering out capable people before anyone sees their work." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="The problem" title={<>Resumes Tell Stories. <span className="text-primary">SkillProof Shows Evidence.</span></>} />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <div key={c.title} className="surface group relative p-7 transition hover:-translate-y-1 hover:shadow-float">
            <span className="absolute right-6 top-6 font-mono text-xs text-muted-foreground">0{i + 1}</span>
            <span className="grid size-11 place-items-center rounded-xl bg-destructive-soft text-destructive">
              <c.icon className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold leading-snug">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Solution() {
  const steps = [
    { icon: Code2, title: "Demonstrate", text: "Solve real job tasks — debug code, build pages, write customer replies — and document your journey." },
    { icon: ShieldCheck, title: "Verify", text: "Reviewers check your work, your explanation and your version history before a skill is verified." },
    { icon: Search, title: "Get Discovered", text: "Employers search verified evidence, not keywords — and invite you based on what you've proven." },
  ];
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="absolute -top-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-primary/40 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">The solution</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">From Skills to Proof. From Proof to Opportunity.</h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-ink-foreground/10 bg-ink-foreground/[0.04] p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                  <s.icon className="size-5 text-primary-foreground" />
                </span>
                <span className="font-mono text-sm text-ink-foreground/50">Step {i + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{s.title}.</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/65">{s.text}</p>
              {i < steps.length - 1 && <ArrowRight className="absolute -right-5 top-1/2 hidden size-5 -translate-y-1/2 text-primary md:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  const items = [
    { icon: GitBranch, title: "Proof Journey", text: "Every attempt, error and fix — a Git-style history that shows how you think, not just what you shipped.", to: "/student/journey" as const },
    { icon: MessageSquareText, title: "Explain Your Work", text: "Three questions after every challenge prove understanding over memorisation.", to: "/student/explain" as const },
    { icon: Bot, title: "AI Transparency", text: "Use AI openly. Disclose what it helped with and what you owned — never penalised, never hidden.", to: "/student/ai-transparency" as const },
    { icon: BookOpenCheck, title: "Interview Intelligence", text: "Recruiters get interview questions built from a candidate's real, verified evidence.", to: "/employer/interview" as const },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Why SkillProof" title="Not Just Another Assessment Platform." description="Tests measure a moment. SkillProof captures the full picture — process, understanding and honest collaboration." />
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {items.map((d) => (
          <Link key={d.title} to={d.to} className="surface group flex gap-5 p-7 transition hover:border-primary/40 hover:shadow-float">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition group-hover:bg-brand-gradient group-hover:text-primary-foreground">
              <d.icon className="size-5" />
            </span>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                {d.title} <ArrowRight className="size-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Award, title: "Skill Passport", text: "A living, shareable profile of verified skills, projects and evidence — with a QR code.", tag: "Signature" },
    { icon: Briefcase, title: "Real Job Task Simulator", text: "Practical challenges modelled on what teams actually ship: bugs, forms, APIs, replies." },
    { icon: GitBranch, title: "Proof Journey", text: "Versioned timeline of attempts, errors, improvements and reviewer feedback.", tag: "Signature" },
    { icon: Gauge, title: "Skill Confidence Index", text: "A transparent evidence-strength score — with the formula shown, not hidden." },
    { icon: Target, title: "Opportunity Match", text: "See which roles fit your verified skills — and the exact challenge that closes the gap." },
    { icon: BookOpenCheck, title: "Interview Intelligence", text: "Evidence-based question sets so interviews dig into real work, not trivia." },
  ];
  return (
    <section className="border-y bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Features" title="Everything needed to turn work into proof." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group bg-card p-8 transition hover:bg-background">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl border bg-background text-primary transition group-hover:border-primary/30 group-hover:shadow-glow">
                  <f.icon className="size-5" />
                </span>
                {f.tag && <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-[11px] font-semibold text-primary-deep">{f.tag}</span>}
              </div>
              <h3 className="mt-6 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <Link to="/features">
              See all features <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: UserPlus, label: "Student registers" },
    { icon: Code2, label: "Completes challenge" },
    { icon: ClipboardCheck, label: "Submits work" },
    { icon: MessageSquareText, label: "Explains approach" },
    { icon: ShieldCheck, label: "Verification" },
    { icon: Award, label: "Skill Passport" },
    { icon: Building2, label: "Employer discovery" },
    { icon: Mail, label: "Interview invitation" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="How it works" title="Eight steps from practice to interview." />
      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
        <ol className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-8">
          {steps.map((s, i) => (
            <li key={s.label} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 grid size-12 place-items-center rounded-full border bg-card text-primary shadow-card transition hover:bg-brand-gradient hover:text-primary-foreground">
                <s.icon className="size-5" />
              </span>
              <span className="mt-3 font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
              <span className="mt-1 text-sm font-medium leading-tight">{s.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function DualCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl bg-brand-gradient p-10 text-primary-foreground shadow-float">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="relative">
            <GraduationCap className="size-8" />
            <h3 className="mt-6 text-2xl font-bold sm:text-3xl">For students</h3>
            <p className="mt-3 max-w-md text-primary-foreground/80">Turn the work you already do into verified proof. Start with one challenge — your passport grows with you.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/register">Build your passport <ArrowRight /></Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <Link to="/student">View student demo</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="surface relative overflow-hidden p-10">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <Building2 className="size-8 text-primary" />
            <h3 className="mt-6 text-2xl font-bold sm:text-3xl">For employers</h3>
            <p className="mt-3 max-w-md text-muted-foreground">Discover candidates by verified evidence, compare them side by side, and run blind reviews that remove bias.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="ink" size="lg" asChild>
                <Link to="/register">Start hiring on proof <ArrowRight /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/employer">View employer demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center gap-3 text-center">
        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="size-4 text-primary" /> Beyond Resumes. Beyond Certificates. Beyond Test Scores.
        </span>
        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <BadgeCheck className="size-4 text-primary" /> Built by Team Teekhe Terminals
        </span>
      </div>
    </section>
  );
}
