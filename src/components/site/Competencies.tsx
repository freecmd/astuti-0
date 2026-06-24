import { ShieldCheck, Activity, FlaskConical, Briefcase } from "lucide-react";

const groups = [
  {
    icon: ShieldCheck,
    title: "Compliance & Governance",
    items: ["Compliance Management", "Regulatory Compliance", "Policy Adherence", "Risk Monitoring"],
  },
  {
    icon: Activity,
    title: "Risk & Operations",
    items: ["Risk Assessment", "Fraud Analysis", "Process Improvement", "Quality Assurance"],
  },
  {
    icon: FlaskConical,
    title: "Healthcare & Research",
    items: ["Clinical Research", "Hospital Pharmacy", "Drug Delivery", "Pharmacovigilance"],
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    items: ["Strategic Analysis", "Process Optimization", "Stakeholder Management", "Business Transformation"],
  },
];

export function Competencies() {
  return (
    <section id="competencies" className="section-pad bg-secondary/40">
      <div className="container-pro">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Core Competencies</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Capabilities engineered for regulated, high-stakes environments.</h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <div key={g.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card-pro hover:shadow-hover-pro hover:-translate-y-1 transition-all">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <g.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{g.title}</h3>
              <ul className="mt-3 space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
