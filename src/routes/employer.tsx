import { Outlet, createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { employerNav } from "@/components/app/nav";
import { employer } from "@/lib/demo-data";

export const Route = createFileRoute("/employer")({
  component: EmployerLayout,
});

function EmployerLayout() {
  return (
    <AppShell
      nav={employerNav}
      home="/employer"
      user={{ name: employer.name, initials: employer.initials, subtitle: employer.company }}
      switchTo={{ to: "/student", label: "Student view" }}
    >
      <Outlet />
    </AppShell>
  );
}
