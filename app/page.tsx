import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const metrics = [
  { value: "24", label: "active client programs" },
  { value: "92%", label: "pipeline efficiency visibility" },
  { value: "3x", label: "faster campaign coordination" },
]

const capabilities = [
  {
    title: "Unified command center",
    description:
      "Strategy, execution, reporting, and client context live in one system so every team and agent works from the same score.",
  },
  {
    title: "Specialized AI roles",
    description:
      "Coordinate strategist, content, demand generation, and analyst agents without losing human direction or quality control.",
  },
  {
    title: "Agency-ready operating rhythm",
    description:
      "Move from planning to launch with repeatable orchestration built for SaaS agencies managing multiple accounts.",
  },
]

const steps = [
  {
    id: "01",
    title: "Compose the strategy",
    description:
      "Turn client goals, benchmarks, and channel priorities into a shared operating plan.",
  },
  {
    id: "02",
    title: "Conduct execution",
    description:
      "Direct the right AI agents at the right time while your team stays focused on judgment and creativity.",
  },
  {
    id: "03",
    title: "Close the loop",
    description:
      "Feed performance insight back into the system so every campaign gets sharper over time.",
  },
]

export default function Page() {
  return (
    <main className="min-h-svh">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--brand-orb)" }}
        />

        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-8 md:px-10 lg:px-12 lg:py-10">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/80 bg-brand-surface shadow-brand">
                <div className="h-5 w-5 rotate-45 rounded-sm border-2 border-primary border-t-accent border-r-chart-3" />
              </div>
              <div>
                <p className="font-heading text-xl font-semibold tracking-tight text-foreground">
                  Orchestrate
                </p>
                <p className="text-sm text-muted-foreground">
                  orchestrate.marketing
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <Button className="rounded-full px-5 shadow-brand">Book a demo</Button>
            </div>
          </header>

          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-brand-surface px-4 py-2 text-sm text-muted-foreground shadow-brand">
                <span className="h-2 w-2 rounded-full bg-chart-4" />
                The operating system for B2B SaaS marketing agencies
              </div>

              <h1 className="mt-6 max-w-4xl font-heading text-5xl leading-[1.02] font-semibold tracking-tight text-balance text-foreground md:text-6xl lg:text-7xl">
                Stop managing chaos.
                <span className="block text-primary">
                  Start orchestrating harmony.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Orchestrate helps agency teams coordinate AI agents, client work,
                and performance operations through one clear system designed for
                scale.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="h-12 rounded-full px-7 text-base shadow-brand-strong">
                  Orchestrate your pipeline
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-full border-border/80 bg-brand-surface px-7 text-base text-foreground shadow-brand hover:bg-brand-surface-strong"
                >
                  Explore the platform
                </Button>
              </div>

              <div className="mt-8 md:hidden">
                <ThemeToggle />
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-border/80 bg-brand-surface p-5 shadow-brand"
                  >
                    <p className="text-3xl font-semibold tracking-tight text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/80 bg-brand-panel p-6 shadow-brand-strong backdrop-blur">
              <div className="flex items-center justify-between border-b border-border/80 pb-5">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-chart-3">
                    Control room
                  </p>
                  <h2 className="mt-2 font-heading text-2xl font-semibold text-foreground">
                    Agency harmony in motion
                  </h2>
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Live system
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-3xl bg-primary p-5 text-primary-foreground shadow-brand">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-primary-foreground/70">
                        Client programs orchestrated
                      </p>
                      <p className="mt-2 text-4xl font-semibold">24</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 px-3 py-2 text-right text-sm">
                      <p className="text-primary-foreground/70">Velocity</p>
                      <p className="mt-1 font-medium text-accent">
                        +38% faster launches
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[78%] rounded-full bg-accent" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-border/80 bg-brand-surface p-5">
                    <p className="text-sm text-muted-foreground">Active ensemble</p>
                    <div className="mt-4 space-y-3">
                      {[
                        "Strategist",
                        "Demand Gen",
                        "Content Lead",
                        "Analyst",
                      ].map((role) => (
                        <div
                          key={role}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="font-medium text-foreground">{role}</span>
                          <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                            Synchronized
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border/80 bg-brand-surface p-5">
                    <p className="text-sm text-muted-foreground">Benchmark pulse</p>
                    <div className="mt-4 space-y-4">
                      {[
                        { label: "Pipeline efficiency", value: "92%", width: "92%" },
                        {
                          label: "Reporting consistency",
                          value: "96%",
                          width: "96%",
                        },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="text-foreground">{item.label}</span>
                            <span className="font-medium text-primary">
                              {item.value}
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div
                              className="h-2 rounded-full bg-chart-3"
                              style={{ width: item.width }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-border/80 bg-brand-surface p-5">
                  <p className="text-sm text-muted-foreground">
                    This week&apos;s orchestration loop
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    Strategy, assets, and reporting aligned in one rhythm
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      "Briefs composed",
                      "Assets approved",
                      "Insights returned",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-secondary p-4 text-sm text-secondary-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:px-10 lg:grid-cols-3 lg:px-12 lg:py-14">
        {capabilities.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-border/80 bg-brand-surface p-6 shadow-brand"
          >
            <div className="mb-5 h-12 w-12 rounded-2xl bg-primary/10 ring-1 ring-primary/10" />
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-20">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-chart-3">
            How it works
          </p>
          <h2 className="mt-4 max-w-xl font-heading text-4xl font-semibold tracking-tight text-balance text-foreground md:text-5xl">
            One operating system for the full agency performance loop
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
            The system design stays focused on clarity: fewer surfaces, stronger
            hierarchy, and shared context from planning through reporting.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="rounded-[1.75rem] border border-border/80 bg-brand-surface p-6 shadow-brand"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <div className="w-fit rounded-full bg-primary px-4 py-2 text-sm font-semibold tracking-[0.2em] text-primary-foreground">
                  {step.id}
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-border/80 bg-primary px-6 py-10 text-primary-foreground shadow-brand-strong md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
                Built for modern agencies
              </p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-balance md:text-5xl">
                From scattered workflows to synchronized delivery.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/75">
                Orchestrate gives B2B SaaS marketing teams a system that feels
                calm, coordinated, and ready to scale with AI.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button className="h-12 rounded-full bg-background px-7 text-base text-foreground hover:bg-background/90">
                Start the demo
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-white/5 px-7 text-base text-white hover:bg-white/10 hover:text-white"
              >
                See the system
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
