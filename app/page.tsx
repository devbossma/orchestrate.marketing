import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimateIn } from "@/components/animate-in"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  DollarCircleIcon,
  Clock01Icon,
  ChartDecreaseIcon,
  Recycle01Icon,
  Search01Icon,
  Brain01Icon,
  BrushIcon,
  FlowCircleIcon,
  AnalyticsUpIcon,
  Shield01Icon,
  CheckmarkCircle01Icon,
  Copy01Icon,
} from "@hugeicons/core-free-icons"

// ─── Data ─────────────────────────────────────────────────────────────────────

const problems = [
  {
    id: "01",
    Icon: DollarCircleIcon,
    title: "Expensive Scaling",
    copy: "Each new client requires 3–5 new hires. That's $200K–300K in annual salary before a single dollar of new revenue lands.",
  },
  {
    id: "02",
    Icon: Clock01Icon,
    title: "Slow Onboarding",
    copy: "2–3 months training per hire. Each new client delays your revenue by a full quarter while your team gets up to speed.",
  },
  {
    id: "03",
    Icon: ChartDecreaseIcon,
    title: "Quality Variance",
    copy: "Results depend on who you hired. Senior vs. junior means different outcomes. Your clients shouldn't get inconsistent work.",
  },
  {
    id: "04",
    Icon: Recycle01Icon,
    title: "No Institutional Learning",
    copy: "Each new hire starts from scratch. No compounding improvement. Year-3 campaigns perform no better than year-1.",
  },
]

const agentRoles = [
  {
    id: "01",
    Icon: Search01Icon,
    role: "Researcher",
    copy: "Tracks your client's market, competitors, and audience in real time. Every campaign starts with fresh, specific intelligence — not recycled assumptions.",
  },
  {
    id: "02",
    Icon: Brain01Icon,
    role: "Strategist",
    copy: "Builds and refines campaign strategy based on what works across 500+ agencies. Gets smarter every week. Never plateaus.",
  },
  {
    id: "03",
    Icon: BrushIcon,
    role: "Creative Director",
    copy: "Produces and directs content assets aligned to your client's brand and voice. Consistent quality every time — no junior vs. senior variance.",
  },
  {
    id: "04",
    Icon: FlowCircleIcon,
    role: "Execution Agent",
    copy: "Coordinates campaign launch, distribution, and real-time optimization. Works 24/7 — not just during business hours.",
  },
  {
    id: "05",
    Icon: AnalyticsUpIcon,
    role: "Analyst",
    copy: "Measures results, extracts insights, and feeds learnings back to every other agent. Month 6 is always better than month 1.",
  },
]

const steps = [
  {
    id: "01",
    title: "Brief",
    description: "You create a campaign brief — exactly as you always have. No new workflow. No retraining your team.",
  },
  {
    id: "02",
    title: "Duplicate",
    description: "Your 5 agents are activated for that client: researcher, strategist, creative director, execution agent, and analyst — all working in parallel.",
  },
  {
    id: "03",
    title: "Execute",
    description: "Campaigns launch automatically. Agents monitor, optimize, and learn 24/7 as the campaign runs. No back-and-forth. No meetings.",
  },
  {
    id: "04",
    title: "Improve",
    description: "Campaign metrics surface ROI. Agents extract the signal. Every lesson is shared across your entire duplicated team. Your next campaign starts smarter.",
  },
]

const demoFeatures = [
  {
    label: "Configuration",
    title: "Duplicate in 30 Minutes",
    Icon: Copy01Icon,
    capability: "Assign your 5 agents to a new client, configure their context, and launch your first campaign — all from a single interface.",
    benefit: "New client fully onboarded in 30 minutes. Not 3 months.",
  },
  {
    label: "Intelligence",
    title: "Learning Dashboard",
    Icon: AnalyticsUpIcon,
    capability: "Track exactly how each duplicated agent improved across every client account this month.",
    benefit: "Show clients their results are compounding — not just anecdotes. Data.",
  },
  {
    label: "Community",
    title: "Benchmarking Engine",
    Icon: Shield01Icon,
    capability: "Compare your duplicated team's performance against 500+ anonymized SaaS agency datasets.",
    benefit: "Know what's working in SaaS marketing right now — before your competitors do.",
  },
]

const faqs = [
  {
    question: "Is this just marketing automation?",
    answer:
      "No. Automation handles isolated tasks. Team duplication means each client gets their own dedicated researcher, strategist, creative director, execution agent, and analyst — all working together. That's a full team, not a few automated tasks.",
  },
  {
    question: "How long does duplication take to show results?",
    answer:
      "Agents need 4 weeks to calibrate to your style and each client's context. By week 5, campaign metrics show measurable improvement. Our benchmarking data from 500+ agencies validates this timeline consistently.",
  },
  {
    question: "Do we need to restructure our team?",
    answer:
      "No. Your same 5 people can now manage 15 clients instead of 3. You don't replace anyone — you multiply what each person can do. Most agencies keep their full team and take on more clients.",
  },
  {
    question: "What about data security and compliance?",
    answer:
      "Enterprise-grade encryption at rest and in transit. GDPR compliant. SOC 2 Type II certified. All benchmarking data is fully anonymized — no agency ever sees another's client data.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. Month-to-month billing with no lock-in. We don't rely on contracts — agencies that duplicate their team don't go back to hiring.",
  },
  {
    question: "What does it cost at scale?",
    answer:
      "Starter: $500/month (3 clients) + $300/additional. Pro: $1,500/month (10 clients) + $250/additional. At 10 clients that's $3,500/month versus $200K+ in annual salary costs. Average year-one ROI: 10x.",
  },
]

const pricingTiers = [
  {
    name: "Starter",
    price: "$500",
    period: "/month",
    tagline: "3–5 client agencies",
    included: "3 clients included",
    extra: "$300 / mo per additional client",
    features: [
      "All 5 duplicated agent roles",
      "Agent learning dashboard",
      "Community benchmarking",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$1,500",
    period: "/month",
    tagline: "5–15 client agencies",
    included: "10 clients included",
    extra: "$250 / mo per additional client",
    features: [
      "All 5 duplicated agent roles",
      "Advanced learning dashboard",
      "Private benchmarking group",
      "Dedicated account manager",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "20+ client agencies",
    included: "Unlimited clients",
    extra: "Custom SLA & integrations",
    features: [
      "Custom agent training",
      "Private benchmarking group",
      "Dedicated success team",
      "Custom reporting & SSO",
      "Enterprise security review",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main className="min-h-svh overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[160px] opacity-30"
          style={{ backgroundColor: "var(--brand-orb)" }}
        />
        {/* Animated shimmer line */}
        <div className="accent-line pointer-events-none absolute inset-x-0 top-0" />

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

          {/* Nav */}
          <header className="flex items-center justify-between gap-4 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-brand-surface shadow-brand">
                <div className="h-4 w-4 rotate-45 rounded-[3px] border-[1.5px] border-primary border-t-accent" />
              </div>
              <div>
                <p className="font-heading text-[15px] font-semibold tracking-tight text-foreground">
                  Orchestrate
                </p>
                <p className="text-[11px] text-muted-foreground">orchestrate.marketing</p>
              </div>
            </div>

            <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
              <a href="#duplication" className="transition-colors hover:text-foreground">How It Works</a>
              <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
              <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
            </nav>

            <div className="flex items-center gap-2.5">
              <div className="hidden md:block"><ThemeToggle /></div>
              <Button
                variant="outline"
                className="hidden rounded-full border-border/70 bg-brand-surface px-5 text-sm text-foreground hover:bg-brand-surface-strong sm:inline-flex"
              >
                Watch Demo
              </Button>
              <Button className="rounded-full px-5 text-sm shadow-brand">
                Start Free Trial
              </Button>
            </div>
          </header>

          {/* Hero body — one focus, centered */}
          <div className="flex flex-col items-center pb-20 pt-12 text-center lg:pb-28 lg:pt-16">

            {/* Badge */}
            <AnimateIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-brand-surface px-4 py-1.5 text-[13px] text-muted-foreground shadow-brand">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
                Team duplication for SaaS marketing agencies
              </div>
            </AnimateIn>

            {/* Headline */}
            <AnimateIn delay={80}>
              <h1 className="mt-6 max-w-4xl font-heading text-5xl font-semibold leading-[1.04] tracking-[-0.02em] text-balance text-foreground md:text-6xl lg:text-[72px]">
                Stop hiring for every client.{" "}
                <span className="text-accent">Duplicate your team instead.</span>
              </h1>
            </AnimateIn>

            {/* Sub — one sentence */}
            <AnimateIn delay={160}>
              <p className="mt-5 max-w-[50ch] text-[17px] leading-7 text-muted-foreground">
                Your 5-person team runs every client. Same salary cost. Zero new hires.
              </p>
            </AnimateIn>

            {/* Single CTA */}
            <AnimateIn delay={220}>
              <div className="mt-8 flex flex-col items-center gap-3">
                <Button className="h-12 rounded-full bg-accent px-9 text-[14px] font-semibold text-accent-foreground shadow-brand-strong hover:bg-accent/90">
                  Start Duplicating Free
                </Button>
                <p className="text-[12px] text-muted-foreground">
                  500+ agencies · No credit card required
                </p>
              </div>
            </AnimateIn>

            {/* The Equation — the single visual hook */}
            <AnimateIn delay={320}>
              <div className="mt-16 flex items-end justify-center gap-5 md:gap-9">
                <div className="flex flex-col items-center gap-3">
                  <p className="font-heading text-[76px] font-semibold leading-none tracking-[-0.025em] text-foreground md:text-[100px]">
                    5
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    Your team
                  </p>
                </div>

                <p className="mb-12 font-heading text-[56px] font-light leading-none text-muted-foreground/20 md:text-[72px]">×</p>

                <div className="flex flex-col items-center gap-3">
                  <p className="font-heading text-[76px] font-semibold leading-none tracking-[-0.025em] text-accent md:text-[100px]">
                    <span className="animate-count" style={{ animationDelay: "0.35s" }}>12</span>
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    Clients
                  </p>
                </div>

                <p className="mb-12 font-heading text-[56px] font-light leading-none text-muted-foreground/20 md:text-[72px]">=</p>

                <div className="flex flex-col items-center gap-3">
                  <p className="font-heading text-[76px] font-semibold leading-none tracking-[-0.025em] text-foreground md:text-[100px]">
                    <span className="animate-count" style={{ animationDelay: "0.5s" }}>60</span>
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    Active agents
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-border/60" />
                <p className="text-[12px] text-muted-foreground/60">Same 5 people. Zero new hires.</p>
                <span className="h-px w-10 bg-border/60" />
              </div>
            </AnimateIn>

            <AnimateIn delay={280}>
              <div className="mt-8 md:hidden"><ThemeToggle /></div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── PRODUCT PREVIEW ──────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-20 md:px-10 lg:px-12">
        <AnimateIn>
          <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
            Live Dashboard
          </p>
          <div className="rounded-[1.75rem] border border-border/70 bg-brand-panel p-5 shadow-brand-strong backdrop-blur">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Team Duplication Dashboard
                </p>
                <h2 className="mt-1 font-heading text-xl font-semibold text-foreground">
                  12 clients. 60 active agents.
                </h2>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-border/60 bg-brand-surface px-3 py-1 text-[12px] text-muted-foreground">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
                Live
              </span>
            </div>

            {/* Primary metric */}
            <div className="mt-4 rounded-2xl bg-primary p-5 text-primary-foreground">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[12px] text-primary-foreground/90">Active dedicated agents</p>
                  <p className="mt-2 font-heading text-[40px] font-semibold leading-none">60</p>
                  <p className="mt-1 text-[11px] text-primary-foreground/70">5 agents × 12 clients</p>
                </div>
                <div className="rounded-xl bg-white/10 px-3 py-2 text-right text-[12px]">
                  <p className="text-primary-foreground/90">Your team size</p>
                  <p className="mt-1 font-medium text-accent">Still 5 people</p>
                </div>
              </div>
              <div className="mt-5 h-1.5 rounded-full bg-white/10">
                <div
                  className="animate-bar h-1.5 rounded-full bg-accent"
                  style={{ "--bar-to": "100%" } as React.CSSProperties}
                />
              </div>
            </div>

            {/* 2-col grid */}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-brand-surface p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Duplicated Roles
                </p>
                <div className="mt-3 space-y-2.5">
                  {["Researcher", "Strategist", "Creative Dir.", "Execution", "Analyst"].map((role) => (
                    <div key={role} className="flex items-center justify-between">
                      <span className="text-[13px] font-medium text-foreground">{role}</span>
                      <span className="rounded-full border border-border/60 bg-brand-surface-strong px-2 py-0.5 text-[11px] font-medium text-accent">
                        ×12
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-brand-surface p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Learning Progress
                </p>
                <div className="mt-3 space-y-3">
                  {[
                    { label: "Campaign quality", pct: "94%", to: "94%" },
                    { label: "Margin vs. month 1", pct: "+47%", to: "78%" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="mb-1.5 flex items-center justify-between text-[12px]">
                        <span className="text-foreground/80">{item.label}</span>
                        <span className="font-semibold text-foreground">{item.pct}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted">
                        <div
                          className="animate-bar h-1.5 rounded-full bg-accent/60"
                          style={{ "--bar-to": item.to } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Month summary */}
            <div className="mt-3 rounded-2xl border border-border/60 bg-brand-surface p-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                This Month
              </p>
              <p className="mt-1.5 text-[13px] font-medium text-foreground">
                3 new clients added. 0 new hires. Margin up 12%.
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["3 new clients", "0 new hires", "+12% margin"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-secondary px-3 py-2 text-center text-[11px] text-secondary-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── THE HIRING TRAP ───────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
        <AnimateIn className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
            The Hiring Trap
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.015em] text-balance text-foreground md:text-5xl">
            You can&rsquo;t scale without hiring.
            <span className="block text-muted-foreground font-normal">Until now.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Every new client triggers another expensive, slow hiring cycle. The traditional model breaks margins at scale.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <AnimateIn key={p.id} delay={i * 80}>
              <article className="group card-hover flex h-full flex-col rounded-[1.5rem] border border-border/70 bg-brand-surface p-6 shadow-brand">
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background text-foreground">
                    <HugeiconsIcon icon={p.Icon} size={20} strokeWidth={1.5} />
                  </div>
                  <span className="font-heading text-4xl font-semibold tracking-tight text-foreground/8">
                    {p.id}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2.5 flex-1 text-[13px] leading-6 text-muted-foreground">{p.copy}</p>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={360} className="mt-14 text-center">
          <p className="mx-auto max-w-lg font-heading text-xl font-semibold text-foreground">
            You need a different model.{" "}
            <span className="font-normal text-muted-foreground">Not better tools — a fundamentally different model.</span>
          </p>
        </AnimateIn>
      </section>

      {/* ── TEAM DUPLICATION MODEL ────────────────────────────────── */}
      <section id="duplication" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
        <AnimateIn className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
            Team Duplication
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.015em] text-balance text-foreground md:text-5xl">
            Clone your best people for every client.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Instead of one team stretched across all clients, each client gets their own dedicated team of 5. All learning together across 500+ agencies.
          </p>
        </AnimateIn>

        {/* 5 agent role cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {agentRoles.map((a, i) => (
            <AnimateIn key={a.id} delay={i * 80}>
              <article className="card-hover flex h-full flex-col rounded-[1.5rem] border border-border/70 bg-brand-surface p-6 shadow-brand">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background text-foreground">
                    <HugeiconsIcon icon={a.Icon} size={20} strokeWidth={1.5} />
                  </div>
                  <span className="font-heading text-4xl font-semibold tracking-tight text-foreground/8">
                    {a.id}
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">{a.role}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Duplicated for every client
                </p>
                <p className="mt-3 flex-1 text-[13px] leading-6 text-muted-foreground">{a.copy}</p>
              </article>
            </AnimateIn>
          ))}
        </div>

        {/* The math — navy callout */}
        <AnimateIn delay={440}>
          <div className="mt-8 rounded-[1.5rem] bg-primary px-8 py-10 text-primary-foreground shadow-brand-strong">
            <div className="grid items-center gap-6 text-center md:grid-cols-3 md:gap-0">
              <div>
                <p className="font-heading text-6xl font-semibold leading-none">5</p>
                <p className="mt-3 text-[14px] text-primary-foreground/80">people on your team</p>
              </div>
              <div className="hidden items-center justify-center md:flex">
                <div className="flex flex-col items-center gap-2">
                  <span className="font-heading text-5xl font-semibold text-accent">×12</span>
                  <p className="text-[13px] text-primary-foreground/70">clients you serve</p>
                </div>
              </div>
              <div className="md:hidden">
                <p className="font-heading text-5xl font-semibold text-accent">×12 clients</p>
              </div>
              <div>
                <p className="font-heading text-6xl font-semibold leading-none">60</p>
                <p className="mt-3 text-[14px] text-primary-foreground/80">dedicated team members active</p>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6 text-center">
              <p className="text-[16px] font-semibold text-primary-foreground/90">
                Same 5 people. Same salary cost.{" "}
                <span className="text-accent">Zero new hires.</span>{" "}
                Margin up 35% → 55%+.
              </p>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── HOW DUPLICATION WORKS ─────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <AnimateIn className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
              How It Works
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.015em] text-balance text-foreground md:text-5xl">
              Campaign brief to results. Four steps.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              No new workflows. No retraining. The same briefing process your team already uses — with a full duplicated team running underneath.
            </p>
            <div className="mt-8">
              <Button className="h-12 rounded-full px-7 text-base shadow-brand-strong">
                Start Duplicating Free
              </Button>
            </div>
          </AnimateIn>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <AnimateIn key={step.id} delay={i * 90}>
                <div className="card-hover rounded-[1.5rem] border border-border/70 bg-brand-surface p-6 shadow-brand">
                  <div className="flex gap-5">
                    <div className="shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[12px] font-semibold tracking-[0.1em] text-primary-foreground">
                        {step.id}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-2.5 text-[13px] leading-6 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM OVERVIEW ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
        <AnimateIn className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
            Platform Overview
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.015em] text-balance text-foreground md:text-5xl">
            Everything your duplicated team needs.
          </h2>
        </AnimateIn>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {demoFeatures.map((d, i) => (
            <AnimateIn key={d.title} delay={i * 90}>
              <article className="card-hover flex h-full flex-col rounded-[1.5rem] border border-border/70 bg-brand-surface shadow-brand overflow-hidden">
                {/* Video placeholder */}
                <div className="relative flex h-44 items-center justify-center border-b border-border/60 bg-secondary/40">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-background shadow-brand">
                    <svg className="ml-0.5 h-5 w-5 text-foreground" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full border border-border/60 bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {d.label}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background text-foreground">
                    <HugeiconsIcon icon={d.Icon} size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-2.5 flex-1 text-[13px] leading-6 text-muted-foreground">{d.capability}</p>
                  <div className="mt-5 border-t border-border/50 pt-4">
                    <p className="text-[13px] text-foreground/80">
                      <span className="font-semibold text-accent">Outcome — </span>
                      {d.benefit}
                    </p>
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── SOCIAL PROOF ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
        <AnimateIn className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
            Agency Wins
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.015em] text-balance text-foreground md:text-5xl">
            Duplicate your team. Proven results.
          </h2>
        </AnimateIn>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Case study */}
          <AnimateIn delay={80}>
            <div className="card-hover h-full rounded-[1.5rem] border border-border/70 bg-brand-surface p-8 shadow-brand">
              <span className="rounded-full border border-border/70 bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Case Study
              </span>

              <h3 className="mt-6 font-heading text-3xl font-semibold text-foreground">
                3 → 10 clients.
              </h3>
              <p className="mt-1 font-heading text-xl font-normal text-muted-foreground">
                Same 5-person team. Zero new hires.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  { label: "Revenue", before: "$500K", after: "$1.5M" },
                  { label: "Margin", before: "35%", after: "52%" },
                  { label: "Clients", before: "3", after: "10" },
                  { label: "Team size", before: "5", after: "5" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-border/60 bg-background/60 p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{m.label}</p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-[12px] text-muted-foreground line-through">{m.before}</span>
                      <span className="font-heading text-xl font-semibold text-foreground">{m.after}</span>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="mt-8 border-l-2 border-accent pl-5">
                <p className="text-[15px] leading-7 text-foreground">
                  &ldquo;We went from 3 to 10 clients without hiring anyone. Same 5-person team. Revenue went from $500K to $1.5M. Margin from 35% to 52%. That&rsquo;s the power of duplication.&rdquo;
                </p>
                <cite className="mt-3 block text-[13px] not-italic text-muted-foreground">
                  — Sarah, Founder · GrowthLab Agency
                </cite>
              </blockquote>

              <div className="mt-7">
                <Button
                  variant="outline"
                  className="rounded-full border-border/70 bg-background text-[13px] text-foreground hover:bg-brand-surface-strong"
                >
                  Read Full Case Study
                </Button>
              </div>
            </div>
          </AnimateIn>

          {/* Community stats */}
          <AnimateIn delay={160}>
            <div className="card-hover flex h-full flex-col rounded-[1.5rem] bg-primary p-8 text-primary-foreground shadow-brand-strong">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
                Community Results
              </p>
              <h3 className="mt-4 font-heading text-3xl font-semibold">
                500+ agencies duplicating their teams. Proven.
              </h3>

              <div className="mt-8 flex-1 space-y-3">
                {[
                  { stat: "7 → 15", label: "Average client growth per agency" },
                  { stat: "40%", label: "Average margin improvement" },
                  { stat: "$2B+", label: "Total budget managed by duplicated teams" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 rounded-xl bg-white/8 px-5 py-4">
                    <span className="font-heading text-2xl font-semibold text-accent">{item.stat}</span>
                    <span className="text-[13px] text-primary-foreground/80">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/12 pt-7">
                <Button className="h-12 w-full rounded-full bg-accent text-[13px] font-semibold text-accent-foreground hover:bg-accent/90">
                  Download Benchmarking Report
                </Button>
                <p className="mt-3 text-center text-[12px] text-primary-foreground/80">
                  Free. Anonymized data from 500+ agencies.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Testimonial row */}
        <AnimateIn delay={240} className="mt-5">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "Each client now has their own researcher, strategist, and creative director. We didn't hire anyone. We just duplicated.",
                name: "Marcus T.",
                title: "Founder · Focal Agency",
              },
              {
                quote: "Revenue went from $1.5M to $7.5M. Our salary costs stayed the same. Month 6 results are nothing like month 1.",
                name: "Priya K.",
                title: "CEO · Demand Works",
              },
              {
                quote: "The magic moment is when you realize your researcher is now researching for 12 clients at once. All learning together.",
                name: "James L.",
                title: "Partner · SaaS Campaigns Co.",
              },
            ].map((t) => (
              <blockquote
                key={t.name}
                className="card-hover rounded-[1.5rem] border border-border/70 bg-brand-surface p-6 shadow-brand"
              >
                <p className="text-[14px] leading-7 text-foreground">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4">
                  <p className="text-[13px] font-semibold text-foreground">{t.name}</p>
                  <p className="mt-0.5 text-[12px] text-muted-foreground">{t.title}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </AnimateIn>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-20 md:px-10 lg:px-0 lg:py-28">
        <AnimateIn className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
            Common Questions
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.015em] text-foreground md:text-5xl">
            No reason to wait.
          </h2>
        </AnimateIn>

        <div className="mt-12 divide-y divide-border/50">
          {faqs.map((faq, i) => (
            <AnimateIn key={i} delay={i * 50}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-foreground">
                  <span className="font-heading text-[17px] font-semibold">{faq.question}</span>
                  <span className="ml-4 shrink-0 rounded-full border border-border/60 p-1.5 text-muted-foreground transition-transform duration-300 group-open:rotate-180">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────── */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
        <AnimateIn className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
            Pricing
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.015em] text-balance text-foreground md:text-5xl">
            Simple. Based on clients you duplicate for.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Not seats. Not users. You pay for what drives your revenue.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <AnimateIn key={tier.name} delay={i * 90}>
              <article
                className={`relative flex h-full flex-col rounded-[1.5rem] p-7 ${
                  tier.highlight
                    ? "bg-primary text-primary-foreground shadow-brand-strong ring-1 ring-accent/30"
                    : "border border-border/70 bg-brand-surface shadow-brand card-hover"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-accent px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-accent-foreground shadow">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                  {tier.name}
                </p>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-semibold">{tier.price}</span>
                  <span className={`text-sm ${tier.highlight ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                    {tier.period}
                  </span>
                </div>

                <p className={`mt-1 text-[13px] ${tier.highlight ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                  {tier.tagline}
                </p>

                <div className={`mt-5 rounded-xl px-4 py-3 text-[13px] ${tier.highlight ? "bg-white/10" : "bg-secondary"}`}>
                  <p className={`font-medium ${tier.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {tier.included}
                  </p>
                  <p className={`mt-0.5 text-[12px] ${tier.highlight ? "text-primary-foreground/80" : "text-foreground/70"}`}>
                    {tier.extra}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[13px]">
                      <HugeiconsIcon
                        icon={CheckmarkCircle01Icon}
                        size={16}
                        strokeWidth={1.5}
                        className="mt-0.5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span className={tier.highlight ? "text-primary-foreground/85" : "text-muted-foreground"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    className={`h-11 w-full rounded-full text-[13px] font-semibold ${
                      tier.highlight
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "shadow-brand"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        {/* ROI comparison */}
        <AnimateIn delay={280}>
          <div className="mt-8 rounded-[1.5rem] border border-border/70 bg-brand-surface p-8 shadow-brand">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
              <div className="text-center md:text-left">
                <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">At 10 clients — Orchestrate</p>
                <p className="mt-2 font-heading text-4xl font-semibold text-foreground">$3,500<span className="text-lg font-normal text-muted-foreground">/mo</span></p>
              </div>
              <div className="hidden items-center justify-center md:flex">
                <div className="rounded-full border border-border/60 bg-background px-4 py-2 text-sm font-medium text-muted-foreground">vs</div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Equivalent hiring cost</p>
                <p className="mt-2 font-heading text-4xl font-semibold text-foreground">$200K+<span className="text-lg font-normal text-muted-foreground">/yr</span></p>
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-border/60 bg-background/60 p-4 text-center">
              <p className="text-[15px] font-semibold text-foreground">
                Average ROI:{" "}
                <span className="text-accent">10x in year one</span>
                {" "}— saving $2.5M in hiring costs.
              </p>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="px-6 pb-20 md:px-10 lg:px-12 lg:pb-28">
        <AnimateIn>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-primary px-8 py-16 text-primary-foreground shadow-brand-strong md:px-14 md:py-20">
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full blur-[100px] opacity-25"
              style={{ backgroundColor: "var(--brand-orb)" }}
            />
            {/* Accent shimmer line */}
            <div className="accent-line pointer-events-none absolute inset-x-0 top-0" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
                  Ready to stop hiring?
                </p>
                <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-[-0.02em] text-balance md:text-5xl">
                  Duplicate your team. Serve every client at full strength.
                  <span className="mt-2 block text-3xl font-normal text-primary-foreground/75">Free for 30 days.</span>
                </h2>
                <p className="mt-5 max-w-2xl text-[17px] leading-8 text-primary-foreground/80">
                  500+ agencies went from 7 to 15 clients with the same 5-person team. Same salary cost. Better margins. Better results.
                </p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {[
                    "30-day free trial",
                    "No credit card required",
                    "All 5 agent roles included",
                    "Personal onboarding",
                    "Benchmarking data",
                  ].map((t) => (
                    <span key={t} className="flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-1.5 text-[12px] text-primary-foreground/80">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                <Button className="h-12 rounded-full bg-accent px-7 text-[14px] font-semibold text-accent-foreground hover:bg-accent/90">
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-full border-white/15 bg-white/5 px-7 text-[14px] text-white hover:bg-white/10 hover:text-white"
                >
                  Book a 15-Minute Call
                </Button>
                <p className="text-center text-[12px] text-primary-foreground/50">
                  or{" "}
                  <a href="mailto:hello@orchestrate.marketing" className="text-primary-foreground/70 underline hover:text-primary-foreground/90 transition-colors">
                    hello@orchestrate.marketing
                  </a>
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-brand-surface shadow-brand">
                  <div className="h-3.5 w-3.5 rotate-45 rounded-[2px] border-[1.5px] border-primary border-t-accent" />
                </div>
                <div>
                  <p className="font-heading text-[15px] font-semibold text-foreground">Orchestrate</p>
                  <p className="text-[11px] text-muted-foreground">orchestrate.marketing</p>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-[13px] leading-6 text-muted-foreground">
                Team duplication for SaaS marketing agencies. Same 5 people. Unlimited clients. No new hires.
              </p>
              <div className="mt-5 flex gap-2">
                {["Twitter / X", "LinkedIn"].map((p) => (
                  <a
                    key={p}
                    href="#"
                    className="rounded-full border border-border/60 bg-brand-surface px-3 py-1.5 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>

            {[
              { heading: "Product", links: ["How It Works", "Team Duplication", "Pricing", "Demo"] },
              { heading: "Company", links: ["About", "Blog", "Careers", "Press"] },
              { heading: "Support", links: ["Docs", "FAQ", "Contact", "Status"] },
            ].map((col) => (
              <div key={col.heading}>
                <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-foreground">
                  {col.heading}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/40 pt-6 sm:flex-row sm:items-center">
            <p className="text-[12px] text-muted-foreground">
              © 2026 Orchestrate.marketing. All rights reserved.
            </p>
            <div className="flex gap-5 text-[12px] text-muted-foreground">
              {["Privacy", "Terms", "Cookie Policy"].map((l) => (
                <a key={l} href="#" className="transition-colors hover:text-foreground">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
