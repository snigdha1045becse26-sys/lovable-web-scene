import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowLeftRight, Bell, Menu, Search, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";
import type { NavGroup } from "./nav";

interface AppShellProps {
  nav: NavGroup[];
  home: "/student" | "/employer";
  user: { name: string; initials: string; subtitle: string };
  switchTo: { to: "/student" | "/employer"; label: string };
  children: ReactNode;
}

/** Shared application frame for the student and employer experiences. */
export function AppShell({ nav, home, user, switchTo, children }: AppShellProps) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r bg-sidebar lg:flex">
        <SidebarContent nav={nav} home={home} user={user} pathname={pathname} />
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="Close menu" />
          <aside className="absolute inset-y-0 left-0 flex w-72 flex-col border-r bg-sidebar shadow-float animate-in slide-in-from-left duration-200">
            <button className="absolute right-3 top-4 grid size-8 place-items-center rounded-lg hover:bg-muted" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="size-4" />
            </button>
            <SidebarContent nav={nav} home={home} user={user} pathname={pathname} />
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <button className="grid size-9 place-items-center rounded-lg border bg-card lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="size-4" />
          </button>
          <div className="relative hidden max-w-md flex-1 sm:block">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search skills, challenges, evidence…"
              className="h-9 w-full rounded-lg border bg-card pl-9 pr-12 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
            <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">⌘K</kbd>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Link
              to={switchTo.to}
              className="hidden items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:text-foreground md:flex"
            >
              <ArrowLeftRight className="size-3.5" /> {switchTo.label}
            </Link>
            <button className="relative grid size-9 place-items-center rounded-lg border bg-card text-muted-foreground hover:text-foreground" aria-label="Notifications">
              <Bell className="size-4" />
              <span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary" />
            </button>
            <div className="grid size-9 place-items-center rounded-full bg-brand-gradient text-xs font-semibold text-primary-foreground">
              {user.initials}
            </div>
          </div>
        </header>
        <main className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}

function SidebarContent({ nav, home, user, pathname }: Omit<AppShellProps, "children" | "switchTo"> & { pathname: string }) {
  return (
    <>
      <div className="flex h-16 items-center border-b px-5">
        <Logo to={home} />
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {nav.map((group) => (
          <div key={group.label} className="mb-5">
            <p className="px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80">{group.label}</p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = item.exact ? pathname === item.to || pathname === `${item.to}/` : pathname === item.to || pathname.startsWith(`${item.to}/`);
                const Icon = item.icon;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      <Icon className={cn("size-4", active && "text-primary")} />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div className="border-t p-3">
        <div className="flex items-center gap-3 rounded-lg p-2">
          <div className="grid size-9 place-items-center rounded-full bg-brand-gradient text-xs font-semibold text-primary-foreground">{user.initials}</div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{user.name}</p>
            <p className="truncate text-xs text-muted-foreground">{user.subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}
