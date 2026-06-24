import { MapPin } from "lucide-react";

const roles = [
  {
    title: "Compliance Executive",
    company: "Coforge",
    period: "Sep 2025 – Present",
    location: "Greater Noida",
    bullets: ["Compliance monitoring", "Regulatory adherence", "Risk mitigation", "Governance support"],
    current: true,
  },
  {
    title: "Process Associate",
    company: "Genpact",
    period: "Apr 2025 – Aug 2025",
    bullets: ["Risk assessment", "Fraud analysis", "Process improvement", "Information security awareness"],
  },
  {
    title: "Business Consultant",
    company: "Tayana Solutions",
    period: "Dec 2024 – Mar 2025",
    bullets: ["Business consulting", "Process optimization", "AI-driven business solutions", "Strategic analysis"],
  },
  {
    title: "Campus Ambassador",
    company: "IIT Delhi",
    period: "Sep 2024 – Oct 2024",
    bullets: ["Outreach & engagement", "Event coordination"],
  },
  {
    title: "Campus Ambassador",
    company: "IIT Delhi",
    period: "Sep 2023 – Oct 2023",
    bullets: ["Outreach & engagement", "Event coordination"],
  },
  {
    title: "Intern",
    company: "Malik Mohammad Jayasi Hospital",
    period: "Sep 2022 – Nov 2022",
    bullets: ["Clinical research support", "Hospital operations", "Documentation management"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-pad bg-secondary/40">
      <div className="container-pro">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Experience</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">A professional journey across compliance, consulting and care.</h2>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
          <ol className="space-y-10">
            {roles.map((r, i) => (
              <li key={i} className="relative grid sm:grid-cols-2 gap-6 sm:gap-12">
                <span className={`absolute left-4 sm:left-1/2 top-5 -translate-x-1/2 h-3 w-3 rounded-full ring-4 ring-background ${r.current ? "bg-accent" : "bg-primary"}`} />
                <div className={`pl-10 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-10" : "sm:col-start-2 sm:pl-10"}`}>
                  <div className="text-xs font-medium tracking-wider uppercase text-muted-foreground">{r.period}</div>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">{r.title}</h3>
                  <div className="mt-0.5 text-sm font-medium text-accent">{r.company}</div>
                  {r.location && (
                    <div className={`mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground ${i % 2 === 0 ? "sm:justify-end" : ""}`}>
                      <MapPin className="h-3 w-3" /> {r.location}
                    </div>
                  )}
                </div>
                <div className={`pl-10 sm:pl-0 ${i % 2 === 0 ? "sm:col-start-2 sm:pl-10" : "sm:row-start-1 sm:pr-10 sm:text-right"}`}>
                  <div className="rounded-xl border border-border bg-card p-5 shadow-card-pro">
                    <ul className={`space-y-1.5 text-sm text-muted-foreground ${i % 2 === 0 ? "" : "sm:text-right"}`}>
                      {r.bullets.map((b) => (
                        <li key={b} className="flex gap-2 sm:flex-row-reverse sm:justify-end items-start sm:items-center">
                          <span className="mt-1.5 sm:mt-0 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
