import { Briefcase, HeartPulse, Lightbulb, ShieldCheck, FlaskConical, LineChart } from "lucide-react";

const expertise = [
  "Compliance Management",
  "Regulatory Affairs",
  "Risk Assessment",
  "Fraud Analysis",
  "Business Consulting",
  "Clinical Research",
  "Healthcare Operations",
];

const highlights = [
  { icon: Briefcase, title: "Corporate Experience", text: "Hands-on compliance and process leadership at global enterprises." },
  { icon: HeartPulse, title: "Healthcare Background", text: "Pharmacy and clinical research foundation with hospital exposure." },
  { icon: Lightbulb, title: "Consulting Experience", text: "AI-driven strategy and process optimization for growth-stage firms." },
  { icon: ShieldCheck, title: "Compliance & Risk", text: "Regulatory adherence, governance, and fraud-prevention expertise." },
  { icon: FlaskConical, title: "Research Acumen", text: "Pharmaceutics, drug delivery, and pre-clinical study experience." },
  { icon: LineChart, title: "Analytical Skills", text: "Data-driven thinking applied across audits and business decisions." },
];

export function About() {
  return (
    <section id="about" className="section-pad bg-background">
      <div className="container-pro">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">About</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">A professional profile built on rigor, research and results.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              I bring together a healthcare and pharmacy foundation with corporate compliance
              and consulting experience to deliver pragmatic, regulation-ready solutions.
              From fraud analysis at Genpact to AI-led consulting at Tayana Solutions and
              compliance leadership at Coforge — every engagement is grounded in clarity,
              accuracy, and stakeholder trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {expertise.map((e) => (
                <span key={e} className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                  {e}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group rounded-xl border border-border bg-card p-5 shadow-card-pro hover:shadow-hover-pro hover:-translate-y-0.5 transition-all"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-card-foreground">{h.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
