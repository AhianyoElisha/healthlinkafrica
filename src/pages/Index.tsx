import { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Droplets, MessageCircle, Users, ChevronDown } from "lucide-react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Activity className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                Health Link Africa
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#problem" onClick={(e) => scrollToSection(e, "problem")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                The Problem
              </a>
              <a href="#platform" onClick={(e) => scrollToSection(e, "platform")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                Our Platform
              </a>
              <a href="#impact" onClick={(e) => scrollToSection(e, "impact")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                Impact
              </a>
              <a href="#team" onClick={(e) => scrollToSection(e, "team")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                Team
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Get Involved
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <img
            src="/images/hero-health-worker.jpg"
            alt="Community health worker consulting with a patient in rural Ghana"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase mb-6">
              Founded 2024 · Ashanti Region, Ghana
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6">
              Connecting communities to faster, smarter care.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-xl">
              AI-powered diagnostics, multilingual health guidance, and emergency blood coordination — built for the communities that need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#platform"
                onClick={(e) => scrollToSection(e, "platform")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore the Platform
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#problem"
                onClick={(e) => scrollToSection(e, "problem")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                See the Problem
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-6 h-6 text-primary-foreground/50 animate-bounce" />
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 lg:py-28 bg-card overflow-hidden">
        <div data-animate className="opacity-0 translate-y-8 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-12 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-medium italic text-foreground leading-relaxed">
            "When a woman in a rural community is referred for imaging, the scan exists, but no one analyses it, follows up, or connects her to a specialist. Health Link Africa closes that gap."
          </blockquote>
          <p className="mt-6 text-muted-foreground text-sm">
            — Community health worker, Ashanti Region, Ghana
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div data-animate className="opacity-0 translate-y-8 max-w-2xl mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">The Crisis</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              A healthcare system stretched beyond breaking point
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every year, thousands of women in rural Ghana die from breast cancer and fibroid complications that could have been detected months earlier — not because treatment is unavailable, but because the diagnostic pathway never reached them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "75%", label: "of breast cancer cases in Ghana diagnosed at Stage III or IV" },
              { stat: "47hr", label: "average delay between emergency blood request and transfusion" },
              { stat: "<20%", label: "of rural blood transfusion needs met due to supply chain failures" },
              { stat: "1:10,000", label: "doctor-to-patient ratio in rural Ghana (WHO recommends 1:1,000)" },
            ].map((item, i) => (
              <div
                key={i}
                data-animate
                className="opacity-0 translate-y-8 p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-3">{item.stat}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Sources: Ghana Health Service Annual Report 2023 · National Blood Service Ghana · WHO Africa Health Statistics 2023
          </p>
        </div>
      </section>

      {/* Problem Breakdown */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/images/rural-community.jpg"
                alt="Aerial view of a rural community in Ghana"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>
            <div>
              <div data-animate className="opacity-0 translate-y-8 space-y-8">
                {[
                  {
                    title: "The Diagnostic Gap",
                    desc: "Rural women have access to imaging equipment, but captured images go largely unanalysed. Radiologists are scarce, turnaround stretches to weeks, and results rarely reach the patient."
                  },
                  {
                    title: "The Blood Supply Crisis",
                    desc: "Ghana's blood bank system is centralised and uncoordinated. Rural hospitals face recurring stockouts with no real-time visibility across facilities."
                  },
                  {
                    title: "The Care Coordination Void",
                    desc: "Community health workers operate without shared records, referral tracking, or follow-up reminders. Patients fall through the gaps — often permanently."
                  },
                  {
                    title: "The Information Gap",
                    desc: "Over 60% of rural Ghanaians are not fluent in English. Health education delivered only in English effectively excludes the majority from understanding their own care."
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Platform */}
      <section id="platform" className="py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div data-animate className="opacity-0 translate-y-8 text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">The Solution</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Four modules. One integrated platform.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Health Link Africa isn't another health app. It's the connective tissue that ties professional-grade diagnostics, multilingual care, and emergency logistics into a single system — purpose-built for Sub-Saharan Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Activity,
                title: "CancerScan + FibroidTrack",
                subtitle: "AI-Assisted Diagnostic Analysis",
                features: [
                  "Breast cancer risk stratification from ultrasound and mammography images",
                  "Fibroid size, location, and volume tracking with U-Net segmentation",
                  "AI-generated structured diagnostic reports within seconds",
                  "Works on low-bandwidth — images compressed and queued for upload",
                ],
                color: "bg-primary/10 text-primary",
              },
              {
                icon: Droplets,
                title: "BloodLink",
                subtitle: "Real-Time Blood Supply Coordination",
                features: [
                  "Live inventory visibility across blood banks and hospitals",
                  "Emergency routing to the nearest compatible blood supply",
                  "Donor registry with compatibility matching and SMS mobilisation",
                  "Predictive demand modelling — flagging shortages 72 hours in advance",
                ],
                color: "bg-accent/10 text-accent",
              },
              {
                icon: MessageCircle,
                title: "AI Health Assistant",
                subtitle: "Multilingual Care Guidance",
                features: [
                  "Voice-first interface supporting Twi, Hausa, and English",
                  "Symptom triage trained on Ghana Health Service clinical guidelines",
                  "Post-diagnosis counselling — explains AI findings in the patient's language",
                  "24/7 availability, works offline and on 2G connectivity",
                ],
                color: "bg-secondary/10 text-secondary",
              },
              {
                icon: Users,
                title: "Care Coordination",
                subtitle: "CHW Dashboard & Patient Registry",
                features: [
                  "Shared patient records with referral tracking across facilities",
                  "Follow-up reminders via SMS to patients and health workers",
                  "Antenatal care module with appointment and danger-sign alerts",
                  "District-level analytics dashboard for disease burden mapping",
                ],
                color: "bg-primary/10 text-primary",
              },
            ].map((module, i) => (
              <div
                key={i}
                data-animate
                className="opacity-0 translate-y-8 p-8 lg:p-10 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${module.color} flex items-center justify-center mb-6`}>
                  <module.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">{module.title}</h3>
                <p className="text-primary text-sm font-medium mb-5">{module.subtitle}</p>
                <ul className="space-y-3">
                  {module.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Image Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-animate className="opacity-0 translate-y-8">
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Built for the Field</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Technology designed around real workflows
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Every screen is voice-navigable, works offline, and is available in Twi, Hausa, and English. The platform is mobile-first, built on Flutter with offline sync — because connectivity is a luxury, not a given.
              </p>
              <div className="space-y-4">
                {[
                  "Flutter (iOS/Android/PWA) with CouchDB offline sync",
                  "TensorFlow Lite for on-device AI inference",
                  "USSD + SMS fallback for feature phones",
                  "Google Cloud Ghana region hosting",
                ].map((tech, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-animate className="opacity-0 translate-y-8">
              <img
                src="/images/app-hands.jpg"
                alt="Health worker using the Health Link Africa mobile app"
                className="w-full rounded-2xl object-cover aspect-[3/2]"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div data-animate className="opacity-0 translate-y-8 text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Impact</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Real outcomes from real communities
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Operational since 2024 with pilot deployments in the Ashanti Region. Here's what we're projecting for the next phase.
            </p>
          </div>

          <div data-animate className="opacity-0 translate-y-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-4 pr-6 text-sm font-semibold text-foreground">Metric</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-muted-foreground">2024 (Pilot)</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-muted-foreground">2025 (Growth)</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-primary">2026 (Target)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { metric: "Women screened (breast cancer + fibroid)", y1: "38", y2: "120", y3: "300+" },
                  { metric: "Early-stage detections flagged by AI", y1: "22", y2: "53", y3: "210+" },
                  { metric: "Blood requests coordinated", y1: "—", y2: "—", y3: "100+" },
                  { metric: "CHWs onboarded and active", y1: "12", y2: "20", y3: "50" },
                  { metric: "Districts covered", y1: "1", y2: "3", y3: "5" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-4 pr-6 text-sm text-foreground">{row.metric}</td>
                    <td className="py-4 px-6 text-center text-sm text-muted-foreground">{row.y1}</td>
                    <td className="py-4 px-6 text-center text-sm text-muted-foreground">{row.y2}</td>
                    <td className="py-4 px-6 text-center text-sm font-semibold text-primary">{row.y3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div data-animate className="opacity-0 translate-y-8">
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Sustainability</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Free for patients. Sustainable by design.
              </h2>
              <div className="space-y-5">
                {[
                  { label: "Free at point of use", desc: "Patients and community health workers pay nothing." },
                  { label: "B2G subscriptions", desc: "District health authorities subscribe for the analytics dashboard." },
                  { label: "B2B licensing", desc: "BloodLink licensing to blood banks and regional health authorities." },
                  { label: "Diagnostic API", desc: "Licensed to private diagnostic centres and insurance providers." },
                ].map((item, i) => (
                  <div key={i} className="bg-background rounded-xl p-5 border border-border">
                    <h4 className="font-medium text-foreground mb-1">{item.label}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-animate className="opacity-0 translate-y-8">
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Inclusion by Design</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built with and for the communities we serve
              </h2>
              <div className="space-y-5">
                {[
                  "Voice-first interface for low-literacy users — no typing required",
                  "Available in Twi, Hausa, and English — expanding to Ga, Dagbani, and Ewe",
                  "Designed through participatory research with rural women and CHWs",
                  "Feature-phone fallback via USSD and SMS for communities without smartphones",
                  "Works with existing professional imaging infrastructure — no new hardware needed",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div data-animate className="opacity-0 translate-y-8 text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Our Team</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              A team that lives inside the problem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Lakyiere Alice B.",
                role: "Chief Executive Officer",
                desc: "Over 10 years of experience in business operations and digital consulting.",
                initials: "LA",
              },
              {
                name: "Abbey Anertey C.",
                role: "Chief Technology Officer",
                desc: "Expert in scalable computer architecture and mobile-first development.",
                initials: "AA",
              },
              {
                name: "Reuben Shamo A.",
                role: "Head of Product Design",
                desc: "Specialises in user-centered design, UX strategy, and cross-functional collaboration.",
                initials: "RS",
              },
            ].map((member, i) => (
              <div
                key={i}
                data-animate
                className="opacity-0 translate-y-8 text-center p-8 rounded-2xl bg-card border border-border"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-2xl font-bold text-primary">{member.initials}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to build the future of rural health in Africa?
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            We have the architecture, the clinical partnerships, and the team. We're looking for partners, funders, and collaborators who believe healthcare should reach everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <Activity className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="font-display text-sm font-semibold text-foreground">Health Link Africa</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024–2026 Health Link Africa. Accra, Ghana.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
