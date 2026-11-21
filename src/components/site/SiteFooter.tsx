import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-6 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Prove what you can do, not just what you studied. Beyond resumes, certificates and test scores.
          </p>
          <div className="mt-5 flex gap-2">
            {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
              <span key={i} className="grid size-9 place-items-center rounded-lg border text-muted-foreground transition-colors hover:text-primary">
                <Icon className="size-4" />
              </span>
            ))}
          </div>
        </div>
        <FooterCol title="Product">
          <Link to="/features">Features</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/students">For Students</Link>
          <Link to="/employers">For Employers</Link>
        </FooterCol>
        <FooterCol title="Company">
          <Link to="/about">About</Link>
          <Link to="/about">Team Teekhe Terminals</Link>
          <Link to="/register">Get Started</Link>
        </FooterCol>
        <FooterCol title="Resources">
          <Link to="/student">Student Demo</Link>
          <Link to="/employer">Employer Demo</Link>
          <Link to="/student/passport">Sample Passport</Link>
        </FooterCol>
        <FooterCol title="Contact">
          <a href="mailto:hello@skillproof.dev">hello@skillproof.dev</a>
          <Link to="/about">Privacy</Link>
          <Link to="/about">Terms</Link>
        </FooterCol>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 SkillProof. Built by Team Teekhe Terminals.</p>
          <p>Hackathon prototype · All data shown is demonstration data.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <div className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground [&_a:hover]:text-foreground [&_a]:transition-colors">
        {children}
      </div>
    </div>
  );
}
