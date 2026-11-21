import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/** SkillProof mark: a shield-like tile with a check stroke forming a "proof" tick. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid size-8 place-items-center rounded-[10px] bg-brand-gradient shadow-glow",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-[18px] text-primary-foreground" fill="none" aria-hidden>
        <path d="M5 6.5 12 4l7 2.5v5.2c0 4.1-2.9 7.4-7 8.3-4.1-.9-7-4.2-7-8.3V6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m8.8 12.2 2.3 2.3 4.3-4.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Logo({ className, to = "/" }: { className?: string; to?: "/" | "/student" | "/employer" }) {
  return (
    <Link to={to} className={cn("flex items-center gap-2.5", className)} aria-label="SkillProof home">
      <LogoMark />
      <span className="text-[17px] font-semibold tracking-tight text-foreground">
        Skill<span className="text-primary">Proof</span>
      </span>
    </Link>
  );
}
