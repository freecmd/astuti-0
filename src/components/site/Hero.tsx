import { ArrowRight, Download, ShieldCheck, HeartPulse, BarChart3 } from "lucide-react";
import portrait from "@/assets/astuti-portrait.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden gradient-hero text-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      />
      <div className="container-pro grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center relative">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-soft animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
            Astuti <span className="gradient-text">Gupta</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 font-medium tracking-wide">
            Compliance Executive  &nbsp;·&nbsp;  Healthcare Professional  &nbsp;·&nbsp;  Business Consultant
          </p>

          <p className="mt-6 max-w-xl text-white/75 leading-relaxed">
            Experienced professional with expertise in compliance management, risk assessment,
            fraud analysis, business consulting, AI applications, and healthcare operations.
            Passionate about improving organizational processes, ensuring regulatory
            compliance, and driving business excellence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/Astuti-Gupta-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy-deep hover:bg-white/90 transition shadow-elegant"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
            {[
              { icon: ShieldCheck, label: "Compliance" },
              { icon: BarChart3, label: "Risk & Analytics" },
              { icon: HeartPulse, label: "Healthcare" },
            ].map((b) => (
              <div key={b.label} className="rounded-lg border border-white/15 bg-white/[0.04] p-3 text-center backdrop-blur-sm">
                <b.icon className="mx-auto h-5 w-5 text-teal-soft" />
                <div className="mt-1.5 text-xs font-medium text-white/80">{b.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-teal/40 to-transparent blur-2xl" />
          <div className="relative w-64 h-80 sm:w-80 sm:h-[26rem] rounded-2xl overflow-hidden border border-white/20 shadow-elegant">
            <img
              src={portrait}
              alt="Portrait of Astuti Gupta"
              width={1024}
              height={1536}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-xl bg-card text-card-foreground px-4 py-3 shadow-elegant border border-border">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Currently</div>
            <div className="text-sm font-semibold">Compliance Executive · Coforge</div>
          </div>
        </div>
      </div>
    </section>
  );
}
