/**
 * Demonstration data for the SkillProof hackathon prototype.
 * Everything here is sample content — nothing is fetched from a real backend.
 */

export type EvidenceLevel = "Strong Evidence" | "Good Evidence" | "Limited Evidence" | "Evidence Needed";
export type Proficiency = "Beginner" | "Intermediate" | "Advanced" | "Expert";
export type VerificationStatus = "Verified" | "Under Review" | "Submitted" | "Needs Improvement";
export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Skill {
  name: string;
  score: number;
  level: Proficiency;
  evidence: number;
  submissions: number;
  projects: number;
  status: VerificationStatus;
  evidenceLevel: EvidenceLevel;
  verifiedOn: string;
  consistency: number;
  recency: number;
  difficulty: number;
}

export interface Student {
  name: string;
  firstName: string;
  initials: string;
  college: string;
  course: string;
  graduationYear: number;
  skillProofId: string;
  location: string;
  overallScore: number;
  verifiedSkills: number;
  completedChallenges: number;
  evidenceSubmitted: number;
  careerReadiness: number;
}

export const student: Student = {
  name: "Ananya Sharma",
  firstName: "Ananya",
  initials: "AS",
  college: "Delhi Technological University",
  course: "B.Tech Computer Science",
  graduationYear: 2027,
  skillProofId: "SP-2027-AN-4821",
  location: "New Delhi, India",
  overallScore: 78,
  verifiedSkills: 8,
  completedChallenges: 24,
  evidenceSubmitted: 32,
  careerReadiness: 72,
};

export const skills: Skill[] = [
  { name: "C Programming", score: 78, level: "Advanced", evidence: 7, submissions: 6, projects: 3, status: "Verified", evidenceLevel: "Strong Evidence", verifiedOn: "Mar 18, 2026", consistency: 82, recency: 90, difficulty: 74 },
  { name: "HTML", score: 85, level: "Advanced", evidence: 9, submissions: 8, projects: 5, status: "Verified", evidenceLevel: "Strong Evidence", verifiedOn: "Mar 12, 2026", consistency: 88, recency: 76, difficulty: 62 },
  { name: "CSS", score: 70, level: "Intermediate", evidence: 6, submissions: 5, projects: 4, status: "Verified", evidenceLevel: "Good Evidence", verifiedOn: "Mar 04, 2026", consistency: 71, recency: 80, difficulty: 58 },
  { name: "JavaScript", score: 35, level: "Beginner", evidence: 2, submissions: 2, projects: 1, status: "Under Review", evidenceLevel: "Limited Evidence", verifiedOn: "—", consistency: 40, recency: 64, difficulty: 45 },
  { name: "Git", score: 20, level: "Beginner", evidence: 1, submissions: 1, projects: 1, status: "Needs Improvement", evidenceLevel: "Evidence Needed", verifiedOn: "—", consistency: 25, recency: 30, difficulty: 20 },
  { name: "Communication", score: 82, level: "Advanced", evidence: 5, submissions: 4, projects: 2, status: "Verified", evidenceLevel: "Good Evidence", verifiedOn: "Feb 26, 2026", consistency: 84, recency: 70, difficulty: 55 },
  { name: "Problem Solving", score: 80, level: "Advanced", evidence: 8, submissions: 7, projects: 3, status: "Verified", evidenceLevel: "Strong Evidence", verifiedOn: "Mar 20, 2026", consistency: 79, recency: 92, difficulty: 81 },
];

export const growthByMonth = [
  { month: "Oct", c: 18, html: 60, css: 42, js: 10, overall: 42 },
  { month: "Nov", c: 24, html: 66, css: 48, js: 14, overall: 48 },
  { month: "Dec", c: 28, html: 72, css: 55, js: 20, overall: 55 },
  { month: "Jan", c: 35, html: 76, css: 60, js: 24, overall: 61 },
  { month: "Feb", c: 55, html: 81, css: 66, js: 30, overall: 70 },
  { month: "Mar", c: 78, html: 85, css: 70, js: 35, overall: 78 },
];

export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: "Frontend" | "Backend" | "C Programming" | "Problem Solving" | "Communication" | "Customer Support";
  difficulty: Difficulty;
  minutes: number;
  skills: string[];
  points: number;
  kind: "code" | "written";
  company?: string;
}

export const challenges: Challenge[] = [
  { id: "fix-broken-website", title: "Fix a Broken Website", description: "A landing page has layout bugs, broken links and an inaccessible form. Find and fix every issue.", category: "Frontend", difficulty: "Medium", minutes: 60, skills: ["HTML", "CSS", "Debugging"], points: 150, kind: "code" },
  { id: "responsive-registration-form", title: "Build a Responsive Registration Form", description: "Create an accessible, validated sign-up form that works from 320px to desktop.", category: "Frontend", difficulty: "Easy", minutes: 45, skills: ["HTML", "CSS", "JavaScript"], points: 100, kind: "code" },
  { id: "debug-c-program", title: "Debug a C Program", description: "A student-records program crashes on certain inputs. Identify the memory bug and fix it.", category: "C Programming", difficulty: "Hard", minutes: 75, skills: ["C Programming", "Problem Solving"], points: 220, kind: "code" },
  { id: "portfolio-website", title: "Build a Portfolio Website", description: "Design and ship a personal portfolio with projects, about and contact sections.", category: "Frontend", difficulty: "Medium", minutes: 120, skills: ["HTML", "CSS", "Git"], points: 180, kind: "code" },
  { id: "customer-response", title: "Write a Professional Customer Response", description: "An upset customer was double-charged. Write a calm, clear and helpful reply.", category: "Customer Support", difficulty: "Easy", minutes: 30, skills: ["Communication"], points: 80, kind: "written" },
  { id: "rest-api-todo", title: "Design a REST API for Tasks", description: "Model endpoints, status codes and validation for a task-management service.", category: "Backend", difficulty: "Medium", minutes: 90, skills: ["API Design", "Problem Solving"], points: 160, kind: "code" },
  { id: "array-puzzles", title: "Array Rotation Puzzles", description: "Solve three array manipulation problems and explain the time complexity of each.", category: "Problem Solving", difficulty: "Medium", minutes: 50, skills: ["Problem Solving", "C Programming"], points: 140, kind: "code" },
  { id: "explain-to-stakeholder", title: "Explain a Bug to a Stakeholder", description: "Write a short update explaining a production bug to a non-technical manager.", category: "Communication", difficulty: "Easy", minutes: 25, skills: ["Communication"], points: 70, kind: "written" },
];

export interface Submission {
  id: string;
  challengeId: string;
  challenge: string;
  date: string;
  status: VerificationStatus;
  score: number | null;
  feedback: string;
  reviewer: string;
}

export const submissions: Submission[] = [
  { id: "SUB-1042", challengeId: "debug-c-program", challenge: "Debug a C Program", date: "Mar 18, 2026", status: "Verified", score: 88, feedback: "Clear root-cause analysis and a safe fix for the buffer overflow.", reviewer: "R. Mehta" },
  { id: "SUB-1038", challengeId: "fix-broken-website", challenge: "Fix a Broken Website", date: "Mar 12, 2026", status: "Verified", score: 84, feedback: "All layout bugs fixed. Accessibility improvements were a nice touch.", reviewer: "S. Iyer" },
  { id: "SUB-1051", challengeId: "responsive-registration-form", challenge: "Build a Responsive Registration Form", date: "Mar 21, 2026", status: "Under Review", score: null, feedback: "Awaiting reviewer.", reviewer: "—" },
  { id: "SUB-1027", challengeId: "customer-response", challenge: "Write a Professional Customer Response", date: "Feb 26, 2026", status: "Verified", score: 91, feedback: "Empathetic tone, concrete resolution steps.", reviewer: "K. Das" },
  { id: "SUB-1019", challengeId: "portfolio-website", challenge: "Build a Portfolio Website", date: "Feb 14, 2026", status: "Needs Improvement", score: 58, feedback: "Commit history is thin — split work into meaningful commits.", reviewer: "S. Iyer" },
  { id: "SUB-1055", challengeId: "array-puzzles", challenge: "Array Rotation Puzzles", date: "Mar 22, 2026", status: "Submitted", score: null, feedback: "Queued for review.", reviewer: "—" },
];

export interface JourneyStage {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  version: string;
  commit: string;
  attachment: string;
  note: string;
  kind: "start" | "attempt" | "submit" | "error" | "improve" | "feedback" | "verified";
  additions?: number;
  deletions?: number;
}

export const proofJourney: JourneyStage[] = [
  { id: "1", title: "Challenge Started", date: "Mar 14, 2026", time: "10:02 AM", description: "Opened “Debug a C Program” and read the problem brief and sample inputs.", version: "—", commit: "a1f3c09", attachment: "brief.pdf", note: "Program crashes when more than 10 students are entered.", kind: "start" },
  { id: "2", title: "First Attempt", date: "Mar 14, 2026", time: "11:40 AM", description: "Added print statements to trace the loop that reads student records.", version: "v0.1", commit: "b7e21aa", attachment: "records.c", note: "Suspect array bounds in read_records().", kind: "attempt", additions: 14, deletions: 2 },
  { id: "3", title: "Initial Submission", date: "Mar 15, 2026", time: "04:15 PM", description: "Increased array size from 10 to 100 to stop the crash.", version: "v1.0", commit: "c3d9f41", attachment: "records.c", note: "Works for test cases but feels like a patch.", kind: "submit", additions: 3, deletions: 3 },
  { id: "4", title: "Errors Identified", date: "Mar 16, 2026", time: "09:30 AM", description: "Automated tests showed a crash on 101 records and on names longer than 32 chars.", version: "v1.0", commit: "c3d9f41", attachment: "test-report.txt", note: "Root cause is unchecked input, not array size.", kind: "error" },
  { id: "5", title: "Improvements Made", date: "Mar 16, 2026", time: "06:10 PM", description: "Switched to dynamic allocation with realloc and bounded fgets for names.", version: "v1.1", commit: "d8a0b62", attachment: "records.c", note: "Also added free() calls — valgrind now reports zero leaks.", kind: "improve", additions: 41, deletions: 18 },
  { id: "6", title: "Final Submission", date: "Mar 17, 2026", time: "11:05 AM", description: "Submitted the fixed program with a README explaining the memory model.", version: "v2.0", commit: "e4c7710", attachment: "final.zip", note: "Included edge-case tests for empty and huge inputs.", kind: "submit", additions: 22, deletions: 5 },
  { id: "7", title: "Reviewer Feedback", date: "Mar 18, 2026", time: "02:20 PM", description: "Reviewer praised the root-cause analysis and suggested error codes instead of exit().", version: "v2.0", commit: "e4c7710", attachment: "review.md", note: "Will apply error codes in the next iteration.", kind: "feedback" },
  { id: "8", title: "Verified Result", date: "Mar 18, 2026", time: "05:45 PM", description: "C Programming skill verified at 78/100 with Strong Evidence.", version: "v2.0", commit: "e4c7710", attachment: "certificate.json", note: "Added to Skill Passport.", kind: "verified" },
];

export interface Opportunity {
  id: string;
  company: string;
  role: string;
  type: "Internship" | "Full-time";
  location: string;
  stipend: string;
  match: number;
  skills: { name: string; status: "Matched" | "Needs Improvement" | "Missing" }[];
  nextChallenge: string;
}

export const opportunities: Opportunity[] = [
  { id: "op-1", company: "Pixelcraft Labs", role: "Frontend Developer Internship", type: "Internship", location: "Bengaluru · Hybrid", stipend: "₹25,000 / month", match: 75, skills: [{ name: "HTML", status: "Matched" }, { name: "CSS", status: "Matched" }, { name: "JavaScript", status: "Needs Improvement" }, { name: "Git", status: "Needs Improvement" }], nextChallenge: "Build a Responsive Registration Form" },
  { id: "op-2", company: "Kernel Systems", role: "Embedded C Intern", type: "Internship", location: "Pune · On-site", stipend: "₹30,000 / month", match: 82, skills: [{ name: "C Programming", status: "Matched" }, { name: "Problem Solving", status: "Matched" }, { name: "Git", status: "Needs Improvement" }], nextChallenge: "Array Rotation Puzzles" },
  { id: "op-3", company: "HelpHub", role: "Customer Success Associate", type: "Full-time", location: "Remote", stipend: "₹6 LPA", match: 88, skills: [{ name: "Communication", status: "Matched" }, { name: "Problem Solving", status: "Matched" }, { name: "CRM Tools", status: "Missing" }], nextChallenge: "Explain a Bug to a Stakeholder" },
  { id: "op-4", company: "Northwind Analytics", role: "Junior Software Engineer", type: "Full-time", location: "Hyderabad · Hybrid", stipend: "₹9 LPA", match: 61, skills: [{ name: "Problem Solving", status: "Matched" }, { name: "JavaScript", status: "Needs Improvement" }, { name: "SQL", status: "Missing" }, { name: "Git", status: "Needs Improvement" }], nextChallenge: "Design a REST API for Tasks" },
];

export interface Candidate {
  id: string;
  name: string;
  anonId: string;
  initials: string;
  college: string;
  location: string;
  role: string;
  score: number;
  evidence: number;
  projects: number;
  challenges: number;
  status: VerificationStatus;
  topSkills: { name: string; score: number }[];
  explanationQuality: number;
  journeyDepth: number;
  evidenceStrength: number;
  reviewerRating: number;
  growth: number;
}

export const candidates: Candidate[] = [
  { id: "ananya-sharma", name: "Ananya Sharma", anonId: "Candidate A", initials: "AS", college: "Delhi Technological University", location: "New Delhi", role: "Frontend Developer", score: 78, evidence: 32, projects: 6, challenges: 24, status: "Verified", topSkills: [{ name: "HTML", score: 85 }, { name: "Problem Solving", score: 80 }, { name: "C Programming", score: 78 }], explanationQuality: 86, journeyDepth: 90, evidenceStrength: 84, reviewerRating: 4.6, growth: 36 },
  { id: "rohan-verma", name: "Rohan Verma", anonId: "Candidate B", initials: "RV", college: "Government Engineering College, Ajmer", location: "Jaipur", role: "Backend Developer", score: 81, evidence: 28, projects: 5, challenges: 19, status: "Verified", topSkills: [{ name: "API Design", score: 84 }, { name: "Problem Solving", score: 82 }, { name: "Git", score: 79 }], explanationQuality: 78, journeyDepth: 72, evidenceStrength: 80, reviewerRating: 4.4, growth: 22 },
  { id: "meera-nair", name: "Meera Nair", anonId: "Candidate C", initials: "MN", college: "Self-taught · Online", location: "Kochi", role: "Frontend Developer", score: 74, evidence: 21, projects: 7, challenges: 15, status: "Verified", topSkills: [{ name: "CSS", score: 88 }, { name: "JavaScript", score: 76 }, { name: "HTML", score: 82 }], explanationQuality: 91, journeyDepth: 84, evidenceStrength: 72, reviewerRating: 4.7, growth: 41 },
  { id: "arjun-patel", name: "Arjun Patel", anonId: "Candidate D", initials: "AP", college: "Nirma University", location: "Ahmedabad", role: "Software Engineer", score: 69, evidence: 17, projects: 3, challenges: 12, status: "Under Review", topSkills: [{ name: "C Programming", score: 72 }, { name: "Problem Solving", score: 70 }, { name: "Git", score: 61 }], explanationQuality: 64, journeyDepth: 58, evidenceStrength: 60, reviewerRating: 4.0, growth: 18 },
  { id: "sana-qureshi", name: "Sana Qureshi", anonId: "Candidate E", initials: "SQ", college: "Jamia Millia Islamia", location: "Lucknow", role: "Data Analyst", score: 76, evidence: 24, projects: 4, challenges: 18, status: "Verified", topSkills: [{ name: "SQL", score: 83 }, { name: "Python", score: 77 }, { name: "Communication", score: 80 }], explanationQuality: 82, journeyDepth: 76, evidenceStrength: 78, reviewerRating: 4.5, growth: 29 },
  { id: "dev-malhotra", name: "Dev Malhotra", anonId: "Candidate F", initials: "DM", college: "Chandigarh University", location: "Chandigarh", role: "UI/UX Designer", score: 72, evidence: 19, projects: 8, challenges: 11, status: "Verified", topSkills: [{ name: "Figma", score: 86 }, { name: "CSS", score: 74 }, { name: "Communication", score: 78 }], explanationQuality: 88, journeyDepth: 80, evidenceStrength: 70, reviewerRating: 4.3, growth: 25 },
];

export const careerRoles = [
  { role: "Frontend Developer", skills: [{ name: "HTML", current: 85, required: 80 }, { name: "CSS", current: 70, required: 80 }, { name: "JavaScript", current: 35, required: 75 }, { name: "Git", current: 20, required: 60 }] },
  { role: "Backend Developer", skills: [{ name: "Problem Solving", current: 80, required: 75 }, { name: "API Design", current: 30, required: 75 }, { name: "SQL", current: 15, required: 70 }, { name: "Git", current: 20, required: 65 }] },
  { role: "Software Engineer", skills: [{ name: "C Programming", current: 78, required: 70 }, { name: "Problem Solving", current: 80, required: 80 }, { name: "Git", current: 20, required: 70 }, { name: "JavaScript", current: 35, required: 60 }] },
  { role: "Data Analyst", skills: [{ name: "SQL", current: 15, required: 75 }, { name: "Python", current: 25, required: 70 }, { name: "Communication", current: 82, required: 70 }, { name: "Problem Solving", current: 80, required: 70 }] },
  { role: "UI/UX Designer", skills: [{ name: "Figma", current: 30, required: 75 }, { name: "CSS", current: 70, required: 65 }, { name: "Communication", current: 82, required: 75 }, { name: "HTML", current: 85, required: 55 }] },
];

export const recentActivity = [
  { title: "C Programming verified", detail: "Score 78 · Strong Evidence", time: "2h ago", tone: "success" as const },
  { title: "Submitted Array Rotation Puzzles", detail: "Queued for review", time: "Yesterday", tone: "primary" as const },
  { title: "Reviewer left feedback", detail: "Build a Portfolio Website", time: "2 days ago", tone: "warning" as const },
  { title: "New opportunity match", detail: "Kernel Systems · 82% match", time: "3 days ago", tone: "primary" as const },
];

export const teamProject = {
  name: "CampusCart — Student Marketplace",
  hackathon: "Smart India Hackathon 2025",
  duration: "6 weeks",
  members: [
    { name: "Ananya Sharma", initials: "AS", role: "Frontend Lead", share: 34, tasks: 18, you: true },
    { name: "Rohan Verma", initials: "RV", role: "Backend & API", share: 30, tasks: 15, you: false },
    { name: "Ishita Rao", initials: "IR", role: "UI/UX Design", share: 20, tasks: 11, you: false },
    { name: "Kabir Singh", initials: "KS", role: "Testing & DevOps", share: 16, tasks: 9, you: false },
  ],
};

export const employer = {
  name: "Priya Kapoor",
  initials: "PK",
  company: "Pixelcraft Labs",
  designation: "Talent Acquisition Lead",
  stats: { candidates: 1284, activeChallenges: 6, toReview: 23, shortlisted: 14 },
};
