import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Award, BadgeCheck, Briefcase, Clock, Code2, FileStack, GitBranch, Target, TrendingUp, Zap,
} from "lucide-react";
import { Area, AreaChart, CartesianGrid, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DemoNote, EvidenceBadge, Meter, PageHeader, ScoreRing, SectionCard, StatCard, scoreTone } from "@/components/app/kit";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { challenges, growthByMonth, opportunities, proofJourney, recentActivity, skills, student } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/student/")({
  head: () => ({
    meta: [
      { title: "Student Dashboard — SkillProof" },
      { name: "description", content: "Your skills, evidence and opportunities at a glance." },
      { property: "og:title", content: "Student Dashboard — SkillProof" },
      { property: "og:description", content: "Your skills, evidence and opportunities at a glance." },
    ],
  }),
  component: StudentDashboard,
});

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
}

function StudentDashboard() {
  const strongest = [...skills].sort((a, b) => b.score - a.score)[0];
  const needsEvidence = skills.filter((s) => s.evidenceLevel === "Limited Evidence" || s.evidenceLevel === "Evidence Needed");
  const recommended = challenges.filter((c) => c.skills.some((s) => needsEvidence.some((n) => n.name === s))).slice(0, 3);
  const radarData = skills.map((s) => ({ skill: s.name.replace(" Programming", ""), score: s.score }));

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Overview"
        title={<span suppressHydrationWarning>{greeting()}, {student.firstName}!</span>}
        description="Your skills are growing. Keep turning your work into proof."
        actions={
          <>
            <Button variant="outline" asChild>
              <Link to="/student/passport"><Award /> View passport</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/student/challenges"><Zap /> Start a challenge</Link>
            </Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Overall Skill Score" value={student.overallScore} suffix="/100" icon={TrendingUp} trend="+8 since last month" />
        <StatCard label="Verified Skills" value={student.verifiedSkills} icon={BadgeCheck} tone="success" trend="+1 this week" />
        <StatCard label="Completed Challenges" value={student.completedChallenges} icon={Code2} tone="primary" trend="3 this month" />
        <StatCard label="Evidence Submitted" value={student.evidenceSubmitted} icon={FileStack} tone="warning" trend="5 pending review" />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <SectionCard
          className="xl:col-span-2"
          title="Skill Overview"
          description="Overall score across all verified skills, last 6 months"
          action={<Badge variant="success"><TrendingUp className="size-3" /> +36 pts</Badge>}
        >
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthByMonth} margin={{ left: -20, right: 8, top: 8 }}>
                  <defs>
                    <linearGradient id="overallFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" />
                  <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--muted-foreground)" domain={[0, 100]} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} />
                  <Area type="monotone" dataKey="overall" name="Overall" stroke="var(--primary)" strokeWidth={2.5} fill="url(#overallFill)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} outerRadius="72%">
                  <PolarGrid stroke="var(--border)" />
                  <PolarAngleAxis dataKey="skill" fontSize={10} stroke="var(--muted-foreground)" />
                  <Radar dataKey="score" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.2} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Career Readiness" description="Frontend Developer target">
          <div className="flex flex-col items-center text-center">
            <ScoreRing value={student.careerReadiness} size={140} stroke={12} label={<div><p className="text-3xl font-bold">{student.careerReadiness}%</p><p className="text-xs text-muted-foreground">ready</p></div>} />
            <div className="mt-6 w-full space-y-3 text-left">
              {[{ n: "HTML", c: 85, r: 80 }, { n: "CSS", c: 70, r: 80 }, { n: "JavaScript", c: 35, r: 75 }].map((s) => (
                <div key={s.n}>
                  <div className="mb-1 flex justify-between text-xs"><span className="font-medium">{s.n}</span><span className="text-muted-foreground">{s.c} / {s.r}</span></div>
                  <Meter value={(s.c / s.r) * 100} tone={s.c >= s.r ? "success" : "warning"} />
                </div>
              ))}
            </div>
            <Button variant="soft" className="mt-6 w-full" asChild>
              <Link to="/student/roadmap">Open roadmap <ArrowRight /></Link>
            </Button>
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {strongest && (
          <div className="relative overflow-hidden rounded-xl bg-brand-gradient p-6 text-primary-foreground shadow-float">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">Strongest verified skill</p>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{strongest.name}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/80">{strongest.level} · {strongest.evidence} pieces of evidence</p>
                </div>
                <p className="text-5xl font-extrabold tabular-nums">{strongest.score}</p>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary-foreground/20">
                <div className="h-full rounded-full bg-primary-foreground" style={{ width: `${strongest.score}%` }} />
              </div>
              <p className="mt-3 text-xs text-primary-foreground/80">Verified {strongest.verifiedOn} · {strongest.evidenceLevel}</p>
            </div>
          </div>
        )}

        <SectionCard title="Skills Needing More Evidence" description="Add proof to strengthen these" className="lg:col-span-2">
          <div className="grid gap-3 sm:grid-cols-2">
            {needsEvidence.map((s) => (
              <div key={s.name} className="rounded-xl border bg-background p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{s.name}</p>
                  <EvidenceBadge level={s.evidenceLevel} />
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <Meter value={s.score} tone={scoreTone(s.score)} />
                  <span className="text-sm font-semibold tabular-nums">{s.score}</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{s.submissions} reviewed submission{s.submissions === 1 ? "" : "s"} · needs 2+ more</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <SectionCard title="Recommended Challenges" description="Picked to close your evidence gaps" className="lg:col-span-2" action={<Link to="/student/challenges" className="text-xs font-medium text-primary hover:underline">View all</Link>}>
          <div className="grid gap-3 md:grid-cols-3">
            {recommended.map((c) => (
              <Link key={c.id} to="/student/challenges/$id" params={{ id: c.id }} className="group flex flex-col rounded-xl border bg-background p-4 transition hover:border-primary/40 hover:shadow-card">
                <div className="flex items-center justify-between">
                  <Badge variant={c.difficulty === "Hard" ? "danger" : c.difficulty === "Medium" ? "warning" : "success"}>{c.difficulty}</Badge>
                  <span className="text-xs font-semibold text-primary">+{c.points} pts</span>
                </div>
                <h4 className="mt-3 text-sm font-semibold leading-snug">{c.title}</h4>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{c.description}</p>
                <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="size-3" /> {c.minutes} min</span>
                  <ArrowUpRight className="size-4 transition group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Recent Activity">
          <ol className="relative space-y-5 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-border">
            {recentActivity.map((a) => (
              <li key={a.title} className="relative pl-6">
                <span className={cn("absolute left-0 top-1.5 size-[11px] rounded-full border-2 border-card", a.tone === "success" ? "bg-success" : a.tone === "warning" ? "bg-warning" : "bg-primary")} />
                <p className="text-sm font-medium">{a.title}</p>
                <p className="text-xs text-muted-foreground">{a.detail} · {a.time}</p>
              </li>
            ))}
          </ol>
        </SectionCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Proof Journey Updates" description="Debug a C Program" action={<Link to="/student/journey" className="text-xs font-medium text-primary hover:underline">Open journey</Link>}>
          <div className="space-y-3">
            {proofJourney.slice(-4).map((s) => (
              <div key={s.id} className="flex items-start gap-3 rounded-lg border bg-background p-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary"><GitBranch className="size-4" /></span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium">{s.title}</p>
                    <span className="shrink-0 font-mono text-[11px] text-muted-foreground">{s.commit}</span>
                  </div>
                  <p className="line-clamp-1 text-xs text-muted-foreground">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Opportunity Matches" action={<DemoNote>Sample roles</DemoNote>}>
          <div className="space-y-3">
            {opportunities.slice(0, 3).map((o) => (
              <Link key={o.id} to="/student/opportunities" className="flex items-center gap-4 rounded-lg border bg-background p-3 transition hover:border-primary/40">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground"><Briefcase className="size-4" /></span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{o.role}</p>
                  <p className="truncate text-xs text-muted-foreground">{o.company} · {o.location}</p>
                </div>
                <ScoreRing value={o.match} size={44} stroke={4} label={<span className="text-[11px] font-bold">{o.match}%</span>} />
              </Link>
            ))}
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link to="/student/opportunities"><Target /> See all matches</Link>
            </Button>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
