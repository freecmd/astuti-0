import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const details = [
  { icon: Mail, label: "Email", value: "astutigupta04@gmail.com", href: "mailto:astutigupta04@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 95657 16521", href: "tel:+919565716521" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/astutigupta", href: "https://www.linkedin.com/in/astuti-gupta/" },
  { icon: MapPin, label: "Location", value: "Greater Noida, India" },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you — your message has been recorded.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="section-pad bg-secondary/40">
      <div className="container-pro grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14">
        <div>
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Contact</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Let's start a professional conversation.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
            Open to roles, consulting engagements, and collaborations across
            compliance, healthcare and business strategy.
          </p>

          <ul className="mt-8 space-y-3">
            {details.map((d) => {
              const inner = (
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-card-pro hover:border-accent transition-colors">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/8 text-primary">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{d.label}</div>
                    <div className="truncate text-sm font-medium text-foreground">{d.value}</div>
                  </div>
                </div>
              );
              return (
                <li key={d.label}>
                  {d.href ? <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner}
                </li>
              );
            })}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-elegant">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Name" placeholder="Your full name" />
            <Field name="email" label="Email" type="email" placeholder="you@company.com" />
          </div>
          <Field name="subject" label="Subject" placeholder="How can I help?" className="mt-4" />
          <div className="mt-4">
            <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Share a short brief..."
              className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring transition resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-card-pro disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", placeholder, className = "" }: { name: string; label: string; type?: string; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring transition"
      />
    </div>
  );
}
