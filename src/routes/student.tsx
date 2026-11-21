import { Outlet, createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { studentNav } from "@/components/app/nav";
import { student } from "@/lib/demo-data";

export const Route = createFileRoute("/student")({
  component: StudentLayout,
});

function StudentLayout() {
  return (
    <AppShell
      nav={studentNav}
      home="/student"
      user={{ name: student.name, initials: student.initials, subtitle: student.skillProofId }}
      switchTo={{ to: "/employer", label: "Employer view" }}
    >
      <Outlet />
    </AppShell>
  );
}
