import { BadgeCheck, Briefcase, FileCheck2, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const previewSkills = [
  { name: "C Programming", score: 78 },
  { name: "HTML", score: 85 },
  { name: "Problem Solving", score: 80 },
  { name: "CSS", score: 70 },
];

/** Deterministic pseudo-QR pattern (visual preview only). */
export function PseudoQR({ seed = "SP-2027-AN-4821", size = 21, className }: { seed?: string; size?: number; className?: string }) {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const cells: boolean[] = [];
  for (let i = 0; i < size * size; i++) {
    h = (h * 1664525 + 1013904223) >>> 0;
    cells.push((h >>> 16) % 2 === 0);
  }
  const finder = (x: number, y: number) => {
    const inBox = (ox: number, oy: number) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7;
    for (const [ox, oy] of [[0, 0], [size - 7, 0], [0, size - 7]] as const) {
      if (inBox(ox, oy)) {
        const dx = x - ox, dy = y - oy;
        const ring = dx === 0 || dy === 0 || dx === 6 || dy === 6;
        const core = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
        return ring || core ? 1 : 0;
      }
    }
    return -1;
  };
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={cn("text-foreground", className)} shapeRendering="crispEdges" aria-label="QR preview">
      {cells.map((on, i) => {
        const x = i % size, y = Math.floor(i / size);
        const f = finder(x, y);
        const fill = f === -1 ? on : f === 1;
        return fill ? <rect key={i} x={x} y={y} width={1} height={1} fill="currentColor" /> : null;
      })}
    </svg>
  );
}

export function PassportPreview() {
  const [active, setActive] = useState(0);
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* glow */}
      <div className="absolute -inset-8 rounded-[40px] bg-primary/15 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border bg-card shadow-float">
        {/* header band */}
        <div className="relative bg-brand-gradient px-6 pb-14 pt-5 text-primary-foreground">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="relative flex items-center justify-between text-xs font-medium">
            <span className="inline-flex items-center gap-1.5 opacity-90">
              <Sparkles className="size-3.5" /> SKILL PASSPORT
            </span>
            <span className="font-mono opacity-80">SP-2027-AN-4821</span>
          </div>
        </div>

        <div className="relative -mt-10 px-6">
          <div className="flex items-end justify-between">
            <div className="grid size-20 place-items-center rounded-2xl border-4 border-card bg-ink text-2xl font-bold text-ink-foreground shadow-card">AS</div>
            <div className="rounded-xl border bg-card p-1.5 shadow-soft">
              <PseudoQR className="size-14" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <h3 className="text-lg font-semibold">Ananya Sharma</h3>
            <BadgeCheck className="size-5 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">B.Tech CSE · Class of 2027</p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { k: "Skill score", v: "78" },
              { k: "Verified", v: "8" },
              { k: "Evidence", v: "32" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border bg-background px-3 py-2.5">
                <p className="text-lg font-bold leading-none">{s.v}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{s.k}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2.5 px-6 py-5">
          {previewSkills.map((s, i) => (
            <button
              key={s.name}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-left transition",
                active === i ? "bg-primary-soft" : "hover:bg-muted",
              )}
            >
              <span className="w-28 shrink-0 text-xs font-medium sm:w-32">{s.name}</span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                <span className="block h-full rounded-full bg-brand-gradient transition-all duration-700" style={{ width: `${s.score}%` }} />
              </span>
              <span className="w-7 text-right text-xs font-semibold tabular-nums">{s.score}</span>
            </button>
          ))}
        </div>

        <div className="mx-6 mb-6 flex items-center gap-3 rounded-xl border bg-background p-3">
          <span className="grid size-9 place-items-center rounded-lg bg-success-soft text-success">
            <FileCheck2 className="size-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">Debug a C Program · v2.0</p>
            <p className="text-xs text-muted-foreground">8 journey stages · reviewer approved</p>
          </div>
          <span className="rounded-full bg-success-soft px-2 py-0.5 text-[11px] font-semibold text-success">Verified</span>
        </div>
      </div>

      {/* floating chips */}
      <FloatChip className="-left-4 top-24 animate-float sm:-left-14" icon={<BadgeCheck className="size-4" />} tone="success" title="Skill Verified" sub="C Programming · 78" />
      <FloatChip className="-right-3 top-1/2 animate-float-delayed sm:-right-12" icon={<FileCheck2 className="size-4" />} tone="primary" title="Project Reviewed" sub="Portfolio Website" />
      <FloatChip className="-bottom-5 left-6 animate-float sm:left-10" icon={<Briefcase className="size-4" />} tone="warning" title="New Opportunity Match" sub="Kernel Systems · 82%" />
    </div>
  );
}

function FloatChip({ className, icon, title, sub, tone }: { className: string; icon: React.ReactNode; title: string; sub: string; tone: "success" | "primary" | "warning" }) {
  const toneClass = { success: "bg-success-soft text-success", primary: "bg-primary-soft text-primary", warning: "bg-warning-soft text-warning-foreground" }[tone];
  return (
    <div className={cn("absolute z-10 flex items-center gap-2.5 rounded-xl border bg-card/95 py-2 pl-2 pr-4 shadow-float backdrop-blur", className)}>
      <span className={cn("grid size-8 place-items-center rounded-lg", toneClass)}>{icon}</span>
      <div>
        <p className="text-xs font-semibold leading-tight">{title}</p>
        <p className="text-[11px] text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}
