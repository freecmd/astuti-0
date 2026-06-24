import { Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-pro py-14">
        <div className="grid md:grid-cols-[1.4fr_1fr_auto] gap-10 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-white text-navy-deep font-display font-bold">AG</span>
              <span className="font-display text-lg font-semibold">Astuti Gupta</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-white/70 leading-relaxed">
              Committed to excellence in Compliance, Healthcare, Risk Management,
              and Business Consulting.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/60">Navigate</div>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              {[
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Education", "#education"],
                ["Expertise", "#competencies"],
                ["Achievements", "#achievements"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}><a href={h} className="text-white/80 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/astuti-gupta/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-md border border-white/20 hover:bg-white/10 transition">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:astutigupta04@gmail.com" aria-label="Email" className="grid h-10 w-10 place-items-center rounded-md border border-white/20 hover:bg-white/10 transition">
              <Mail className="h-4 w-4" />
            </a>
            <a href="#top" aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-md border border-white/20 hover:bg-white/10 transition">
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-pro py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Astuti Gupta. All rights reserved.</div>
          <div>Designed for executives, recruiters and consulting partners.</div>
        </div>
      </div>
    </footer>
  );
}
