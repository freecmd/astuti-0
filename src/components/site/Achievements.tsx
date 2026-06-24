import { BookOpen, Star, Stethoscope, Trophy } from "lucide-react";

const items = [
  { icon: BookOpen, title: "Co-Author", text: "Anthology for Unvoiced Heart — published contributor." },
  { icon: Star, title: "IIT Delhi Campus Ambassador", text: "Selected representative across two consecutive programs." },
  { icon: Stethoscope, title: "Healthcare & Compliance Professional", text: "Combined clinical and corporate compliance expertise." },
  { icon: Trophy, title: "Certified Product Management Professional", text: "Aha! Product Management Professional Certificate." },
];

export function Achievements() {
  return (
    <section id="achievements" className="section-pad bg-background">
      <div className="container-pro">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Achievements</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Recognition that reflects breadth and commitment.</h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-6 shadow-card-pro hover:shadow-hover-pro transition-shadow">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold leading-snug">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
