import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Pharmacy (M.Pharm) – Pharmaceutics",
    institution: "IIMT Group of Colleges",
    period: "2023 – 2025",
    cgpa: "8.54",
    focus: ["Drug Delivery", "Pre-clinical Studies", "Pharmaceutical Research"],
  },
  {
    degree: "Bachelor of Pharmacy (B.Pharm)",
    institution: "Rajarshi Rananjay Sinh College of Pharmacy, Amethi",
    period: "2019 – 2023",
    cgpa: "8.65",
    focus: ["Clinical Research"],
  },
];

const certs = [
  { title: "Cybersecurity Certification", issuer: "Genpact" },
  { title: "Aha! Product Management Professional", issuer: "Aha!" },
  { title: "Pharmacovigilance Course", issuer: "GAADS Institute" },
];

export function Education() {
  return (
    <section id="education" className="section-pad bg-background">
      <div className="container-pro">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Education & Credentials</div>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold max-w-2xl">Academic foundation in pharmacy, research and applied sciences.</h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-5">
          {education.map((e) => (
            <article key={e.degree} className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-card-pro hover:shadow-hover-pro transition-shadow">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-accent/8 blur-2xl" />
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold leading-snug">{e.degree}</h3>
                  <div className="mt-1 text-sm text-accent font-medium">{e.institution}</div>
                  <div className="mt-1 text-xs text-muted-foreground tracking-wide uppercase">{e.period}</div>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">CGPA</div>
                  <div className="font-display text-2xl font-semibold text-primary">{e.cgpa}</div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {e.focus.map((f) => (
                    <span key={f} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">{f}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-display text-2xl font-semibold">Certifications</h3>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map((c) => (
              <div key={c.title} className="group rounded-xl border border-border bg-card p-5 shadow-card-pro hover:border-accent transition-colors">
                <Award className="h-6 w-6 text-accent" />
                <div className="mt-3 font-semibold text-card-foreground">{c.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.issuer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
