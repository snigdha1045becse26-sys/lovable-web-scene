/**
 * Shared UI kit for the SkillProof student + employer apps.
 * Use these instead of re-inventing headers, stat cards, rings and status pills.
 */
import type { LucideIcon } from "lucide-react";
import { Info } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import type { EvidenceLevel, VerificationStatus } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: ReactNode; description?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>}
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h1>
        {description && <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function SectionCard({ title, description, action, children, className, bodyClassName }: { title?: ReactNode; description?: ReactNode; action?: ReactNode; children: ReactNode; className?: string; bodyClassName?: string }) {
  return (
    <section className={cn("surface overflow-hidden", className)}>
      {(title || action) && (
        <div className="flex items-start justify-between gap-4 border-b px-5 py-4">
          <div>
            {title && <h3 className="text-sm font-semibold text-foreground">{title}</h3>}
            {description && <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>}
          </div>
          {action}
        </div>
      )}
      <div className={cn("p-5", bodyClassName)}>{children}</div>
    </section>
  );
}

export function StatCard({ label, value, suffix, icon: Icon, trend, tone = "primary" }: { label: string; value: ReactNode; suffix?: string; icon: LucideIcon; trend?: string; tone?: "primary" | "success" | "warning" | "danger" }) {
  const toneClass = {
    primary: "bg-primary-soft text-primary",
    success: "bg-success-soft text-success",
    warning: "bg-warning-soft text-warning-foreground",
    danger: "bg-destructive-soft text-destructive",
  }[tone];
  return (
    <div className="surface p-5 transition hover:-translate-y-0.5 hover:shadow-float">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <span className={cn("grid size-9 place-items-center rounded-lg", toneClass)}>
          <Icon className="size-4" />
        </span>
      </div>
      <p className="mt-3 text-3xl font-bold tracking-tight text-foreground">
        {value}
        {suffix && <span className="text-base font-medium text-muted-foreground">{suffix}</span>}
      </p>
      {trend && <p className="mt-1 text-xs font-medium text-success">{trend}</p>}
    </div>
  );
}

/** Circular score ring (0–100). */
export function ScoreRing({ value, size = 72, stroke = 7, label, className }: { value: number; size?: number; stroke?: number; label?: ReactNode; className?: string }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(100, Math.max(0, value)) / 100) * c;
  return (
    <div className={cn("relative inline-grid place-items-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} className="fill-none stroke-muted" />
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset} className="fill-none stroke-primary transition-[stroke-dashoffset] duration-700" />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        {label ?? <span className="text-sm font-bold text-foreground">{value}</span>}
      </div>
    </div>
  );
}

export function Meter({ value, tone = "primary", className }: { value: number; tone?: "primary" | "success" | "warning" | "danger"; className?: string }) {
  const bar = { primary: "bg-primary", success: "bg-success", warning: "bg-warning", danger: "bg-destructive" }[tone];
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-muted", className)}>
      <div className={cn("h-full rounded-full transition-all duration-700", bar)} style={{ width: `${Math.min(100, value)}%` }} />
    </div>
  );
}

export function scoreTone(score: number): "success" | "primary" | "warning" | "danger" {
  if (score >= 75) return "success";
  if (score >= 55) return "primary";
  if (score >= 35) return "warning";
  return "danger";
}

export function StatusBadge({ status }: { status: VerificationStatus | "Not Started" | "Reviewed" }) {
  const variant = {
    Verified: "success",
    Reviewed: "success",
    "Under Review": "warning",
    Submitted: "soft",
    "Needs Improvement": "danger",
    "Not Started": "muted",
  } as const;
  return (
    <Badge variant={variant[status]}>
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </Badge>
  );
}

export function EvidenceBadge({ level }: { level: EvidenceLevel }) {
  const variant = { "Strong Evidence": "success", "Good Evidence": "soft", "Limited Evidence": "warning", "Evidence Needed": "danger" } as const;
  return <Badge variant={variant[level]}>{level}</Badge>;
}

/** Honest label for sample content. */
export function DemoNote({ children = "Demonstration data — for hackathon preview only." }: { children?: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-1.5 rounded-full border border-dashed bg-card px-3 py-1 text-xs text-muted-foreground">
      <Info className="size-3.5" /> {children}
    </p>
  );
}

export function Avatar({ initials, className }: { initials: string; className?: string }) {
  return (
    <div className={cn("grid size-10 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm font-semibold text-primary-foreground", className)}>
      {initials}
    </div>
  );
}

export function EmptyState({ icon: Icon, title, description, action }: { icon: LucideIcon; title: string; description: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-card px-6 py-14 text-center">
      <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-4 text-base font-semibold">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
