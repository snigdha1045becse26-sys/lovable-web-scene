import {
  Award, BarChart3, BookOpenCheck, Bot, Briefcase, ClipboardCheck, Code2, Compass, EyeOff, FileSearch,
  FolderGit2, Gauge, GitBranch, LayoutDashboard, ListChecks, Mail, MessageSquareText, PlusSquare,
  Scale, Search, Settings, ShieldCheck, Star, User, Users, type LucideIcon,
} from "lucide-react";

export interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
  exact?: boolean;
}
export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const studentNav: NavGroup[] = [
  {
    label: "Workspace",
    items: [
      { to: "/student", label: "Overview", icon: LayoutDashboard, exact: true },
      { to: "/student/passport", label: "Skill Passport", icon: Award },
      { to: "/student/journey", label: "Proof Journey", icon: GitBranch },
      { to: "/student/challenges", label: "Challenges", icon: Code2 },
      { to: "/student/submissions", label: "Submissions", icon: FolderGit2 },
    ],
  },
  {
    label: "Evidence",
    items: [
      { to: "/student/explain", label: "Explain Your Work", icon: MessageSquareText },
      { to: "/student/ai-transparency", label: "AI Transparency", icon: Bot },
      { to: "/student/verification", label: "Verification", icon: ShieldCheck },
      { to: "/student/confidence", label: "Confidence Index", icon: Gauge },
      { to: "/student/team", label: "Team Contributions", icon: Users },
    ],
  },
  {
    label: "Growth",
    items: [
      { to: "/student/growth", label: "Growth Tracker", icon: BarChart3 },
      { to: "/student/roadmap", label: "Career Roadmap", icon: Compass },
      { to: "/student/opportunities", label: "Opportunities", icon: Briefcase },
    ],
  },
  {
    label: "Account",
    items: [
      { to: "/student/profile", label: "Profile", icon: User },
      { to: "/student/settings", label: "Settings", icon: Settings },
    ],
  },
];

export const employerNav: NavGroup[] = [
  {
    label: "Recruiting",
    items: [
      { to: "/employer", label: "Overview", icon: LayoutDashboard, exact: true },
      { to: "/employer/candidates", label: "Discover Candidates", icon: Search },
      { to: "/employer/compare", label: "Compare Candidates", icon: Scale },
      { to: "/employer/blind", label: "Blind Verification", icon: EyeOff },
      { to: "/employer/evidence", label: "Evidence Explorer", icon: FileSearch },
    ],
  },
  {
    label: "Assess",
    items: [
      { to: "/employer/submissions", label: "Review Submissions", icon: ClipboardCheck },
      { to: "/employer/interview", label: "Interview Intelligence", icon: BookOpenCheck },
      { to: "/employer/challenges", label: "Employer Challenges", icon: ListChecks },
      { to: "/employer/challenges/new", label: "Create Challenge", icon: PlusSquare },
    ],
  },
  {
    label: "Pipeline",
    items: [
      { to: "/employer/shortlisted", label: "Shortlisted", icon: Star },
      { to: "/employer/invitations", label: "Invitations", icon: Mail },
      { to: "/employer/settings", label: "Settings", icon: Settings },
    ],
  },
];
