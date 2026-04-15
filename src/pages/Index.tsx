import { useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  Droplets,
  MessageCircle,
  Users,
  Heart,
  Stethoscope,
  Globe,
  HandCoins,
} from "lucide-react";
import logoSvg from "@/assets/healthlinkafrica.svg";

import { GlowyWavesHero } from "@/components/ui/glowy-waves-hero";
import DotPattern from "@/components/ui/dot-pattern";
import { FeatureGrid, type Feature } from "@/components/ui/feature-grid";
import RuixenSection, { Highlight } from "@/components/ui/ruixen-feature-section";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";
import { Features } from "@/components/ui/features-5";
import { FeatureShowcase, type TabMedia } from "@/components/ui/feature-showcase";
import { Features10 } from "@/components/ui/features-10";
import { MinimalFooter } from "@/components/ui/minimal-footer";

// ─── Problem Section Data ─────────────────────
const problemFeatures: Feature[] = [
  {
    imageSrc: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=200&h=200&fit=crop&auto=format",
    imageAlt: "Diagnostic equipment",
    title: "The Diagnostic Gap",
    description:
      "Rural women have access to imaging equipment, but captured images go largely unanalysed. Radiologists are scarce, turnaround stretches to weeks, and results rarely reach the patient.",
    href: "#platform",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=200&h=200&fit=crop&auto=format",
    imageAlt: "Blood donation",
    title: "The Blood Supply Crisis",
    description:
      "Ghana's blood bank system is centralised and uncoordinated. Rural hospitals face recurring stockouts with no real-time visibility across facilities.",
    href: "#platform",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop&auto=format",
    imageAlt: "Healthcare coordination",
    title: "The Care Coordination Void",
    description:
      "Community health workers operate without shared records, referral tracking, or follow-up reminders. Patients fall through the gaps — often permanently.",
    href: "#platform",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=200&fit=crop&auto=format",
    imageAlt: "Language barrier",
    title: "The Information Gap",
    description:
      "Over 60% of rural Ghanaians are not fluent in English. Health education delivered only in English effectively excludes the majority from understanding their own care.",
    href: "#platform",
  },
];

// ─── Problem Breakdown (RuixenSection) Data ───
const testimonialCards = [
  {
    id: 0,
    name: "Ama K.",
    designation: "Community Health Worker, Kumasi",
    content: (
      <p>
        <Highlight>Health Link Africa</Highlight> has transformed how we follow up
        with patients. The referral tracking means{" "}
        <Highlight>no one falls through the gaps</Highlight> anymore.
      </p>
    ),
  },
  {
    id: 1,
    name: "Dr. Mensah O.",
    designation: "District Medical Officer",
    content: (
      <p>
        The <Highlight>AI diagnostic reports</Highlight> arrive in seconds — what
        used to take weeks. This is the future of{" "}
        <Highlight>rural healthcare delivery</Highlight>.
      </p>
    ),
  },
  {
    id: 2,
    name: "Kwame A.",
    designation: "Blood Bank Coordinator",
    content: (
      <p>
        <Highlight>BloodLink</Highlight> gives us real-time visibility we never had.
        We can now predict shortages{" "}
        <Highlight>72 hours in advance</Highlight> and mobilise donors via SMS.
      </p>
    ),
  },
];

const ecosystemIntegrations = [
  {
    name: "Ghana Health Service",
    desc: "Clinical guidelines integration and reporting alignment",
    icon: "🏥",
  },
  {
    name: "National Blood Service",
    desc: "Real-time inventory sync across blood banks",
    icon: "🩸",
  },
];

// ─── Platform Section Data ────────────────────
const PLATFORM_MODULES = [
  {
    id: "module-1",
    title: "CancerScan + FibroidTrack",
    subtitle: "AI-Assisted Diagnostic Analysis",
    features: [
      "Breast cancer risk stratification from ultrasound and mammography images",
      "Fibroid size, location, and volume tracking with U-Net segmentation",
      "AI-generated structured diagnostic reports within seconds",
      "Works on low-bandwidth — images compressed and queued for upload",
    ],
    icon: Activity,
    color: "bg-primary/10 text-primary",
  },
  {
    id: "module-2",
    title: "BloodLink",
    subtitle: "Real-Time Blood Supply Coordination",
    features: [
      "Live inventory visibility across blood banks and hospitals",
      "Emergency routing to the nearest compatible blood supply",
      "Donor registry with compatibility matching and SMS mobilisation",
      "Predictive demand modelling — flagging shortages 72 hours in advance",
    ],
    icon: Droplets,
    color: "bg-accent/10 text-accent",
  },
  {
    id: "module-3",
    title: "AI Health Assistant",
    subtitle: "Multilingual Care Guidance",
    features: [
      "Voice-first interface supporting Twi, Hausa, and English",
      "Symptom triage trained on Ghana Health Service clinical guidelines",
      "Post-diagnosis counselling — explains AI findings in the patient's language",
      "24/7 availability, works offline and on 2G connectivity",
    ],
    icon: MessageCircle,
    color: "bg-secondary/10 text-secondary",
  },
  {
    id: "module-4",
    title: "Care Coordination",
    subtitle: "CHW Dashboard & Patient Registry",
    features: [
      "Shared patient records with referral tracking across facilities",
      "Follow-up reminders via SMS to patients and health workers",
      "Antenatal care module with appointment and danger-sign alerts",
      "District-level analytics dashboard for disease burden mapping",
    ],
    icon: Users,
    color: "bg-primary/10 text-primary",
  },
];

// ─── Technology Section Data ──────────────────
const techTabs: TabMedia[] = [
  {
    value: "mobile",
    label: "Mobile App",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=1200&fit=crop&auto=format",
    alt: "Health worker using mobile app in the field",
  },
  {
    value: "dashboard",
    label: "Dashboard",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1200&fit=crop&auto=format",
    alt: "Analytics dashboard showing health data",
  },
  {
    value: "field",
    label: "Field Work",
    src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=1200&fit=crop&auto=format",
    alt: "Community health workers in rural Ghana",
  },
];

// ─── Team Section Data ────────────────────────
const teamTabs: TabMedia[] = [
  {
    value: "alice",
    label: "Alice",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1200&fit=crop&auto=format",
    alt: "CEO portrait",
  },
  {
    value: "abbey",
    label: "Abbey",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop&auto=format",
    alt: "CTO portrait",
  },
  {
    value: "reuben",
    label: "Reuben",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1200&fit=crop&auto=format",
    alt: "Head of Design portrait",
  },
];

// ─── CTA Section Data ─────────────────────────
const ctaTabs: TabMedia[] = [
  {
    value: "community",
    label: "Community",
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=1200&fit=crop&auto=format",
    alt: "Community impact in rural Ghana",
  },
  {
    value: "technology",
    label: "Technology",
    src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=1200&fit=crop&auto=format",
    alt: "Technology and healthcare",
  },
  {
    value: "partnership",
    label: "Partners",
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=1200&fit=crop&auto=format",
    alt: "Partnership handshake",
  },
];

const Index = () => {
  const scrollToSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* ── Navigation ─────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoSvg} alt="Health Link Africa" className="h-40 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {[
                { label: "The Problem", id: "problem" },
                { label: "Our Platform", id: "platform" },
                { label: "Impact", id: "impact" },
                { label: "Team", id: "team" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                >
                  {item.label}
                </button>
              ))}
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

      {/* ── Hero ────────────────────────────────── */}
      <GlowyWavesHero
        badge="Founded 2024 · Ashanti Region, Ghana"
        title={
          <>
            Connecting communities to{" "}
            <span className="bg-gradient-to-r from-primary via-primary/60 to-foreground/80 bg-clip-text text-transparent">
              faster, smarter care
            </span>
          </>
        }
        description="AI-powered diagnostics, multilingual health guidance, and emergency blood coordination — built for the communities that need it most."
        primaryCta={{
          label: "Explore Platform",
          onClick: () => scrollToSection("platform"),
        }}
        secondaryCta={{
          label: "See the Problem",
          onClick: () => scrollToSection("problem"),
        }}
        pills={["AI Diagnostics", "Multilingual", "Offline-First"]}
        stats={[
          { label: "Women screened", value: "300+" },
          { label: "CHWs active", value: "50" },
          { label: "Platform modules", value: "4" },
        ]}
      />

      {/* ── Quote ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-card overflow-hidden">
        <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
          <div className="relative flex flex-col items-center border border-primary">
            <DotPattern width={5} height={5} />

            <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-primary text-white" />
            <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-primary text-white" />
            <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-primary text-white" />
            <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-primary text-white" />

            <div className="relative z-20 mx-auto max-w-7xl rounded-[40px] py-6 md:p-10 xl:py-20">
              <p className="md:text-md text-xs text-primary lg:text-lg xl:text-2xl">
                From the field
              </p>
              <div className="text-2xl tracking-tighter md:text-5xl lg:text-7xl xl:text-8xl">
                <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <h2 className="font-semibold">&ldquo;When a woman</h2>
                  <p className="font-thin">is referred</p>
                </div>
                <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <p className="font-thin">for imaging,</p>
                  <h2 className="font-semibold">no one analyses</h2>
                </div>
                <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <p className="font-thin">it or</p>
                  <h2 className="font-semibold">connects her to</h2>
                </div>
                <h2 className="font-semibold">
                  a specialist.&rdquo;
                </h2>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                — Community health worker, Ashanti Region, Ghana
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ──────────────────────────── */}
      <section id="problem" className="py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              The Crisis
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A healthcare system stretched beyond breaking point
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Every year, thousands of women in rural Ghana die from breast
              cancer and fibroid complications that could have been detected
              months earlier — not because treatment is unavailable, but because
              the diagnostic pathway never reached them.
            </p>
          </div>

          <FeatureGrid features={problemFeatures} />

          <p className="mt-6 text-xs text-muted-foreground text-center">
            Sources: Ghana Health Service Annual Report 2023 · National Blood
            Service Ghana · WHO Africa Health Statistics 2023
          </p>
        </div>
      </section>

      {/* ── Problem Breakdown ────────────────────── */}
      <section className="bg-card">
        <RuixenSection
          cards={testimonialCards}
          integrations={ecosystemIntegrations}
          leftTitle={
            <>
              Voices from the field{" "}
              <span className="text-primary">Health Link Africa</span>
            </>
          }
          leftSubtitle="Hear directly from the health workers and coordinators transforming care delivery in the Ashanti Region."
          rightTitle={
            <>
              Seamless Integration{" "}
              <span className="text-primary">Health Link Africa</span>
            </>
          }
          rightSubtitle="Integrate with Ghana Health Service guidelines and the National Blood Service for unified care."
          stats={[
            { value: "38+", label: "Women screened (pilot)" },
            { value: "12", label: "CHWs onboarded" },
            { value: "1", label: "District covered" },
          ]}
          quote={{
            text: "When a woman in a rural community is referred for imaging, the scan exists, but no one analyses it, follows up, or connects her to a specialist. Health Link Africa closes that gap.",
            author: "Community Health Worker, Ashanti Region",
          }}
        />
      </section>

      {/* ── Platform (Sticky Scroll Cards) ───────── */}
      <section id="platform" className="py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              The Solution
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Four modules. One integrated platform.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Health Link Africa isn&rsquo;t another health app. It&rsquo;s the
              connective tissue that ties professional-grade diagnostics,
              multilingual care, and emergency logistics into a single system —
              purpose-built for Sub-Saharan Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="left-0 top-0 md:sticky md:h-[80vh] md:py-12 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Our modules
              </p>
              <h3 className="mb-6 mt-4 text-4xl font-bold tracking-tight">
                Planning your{" "}
                <span className="text-primary">healthcare delivery</span>{" "}
                journey
              </h3>
              <p className="max-w-prose text-sm text-muted-foreground">
                Each module addresses a critical failure point in rural
                healthcare. Together, they form a unified platform that connects
                diagnostic imaging, blood supply logistics, multilingual patient
                guidance, and care coordination.
              </p>
            </div>

            <ContainerScroll className="min-h-[300vh] space-y-8 py-12">
              {PLATFORM_MODULES.map((mod, index) => {
                const Icon = mod.icon;
                return (
                  <CardSticky
                    key={mod.id}
                    index={index + 2}
                    className="rounded-2xl border bg-card p-8"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl ${mod.color} flex items-center justify-center`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold tracking-tighter">
                          {mod.title}
                        </h3>
                      </div>
                      <span className="text-2xl font-bold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-primary text-sm font-medium mt-2 mb-4">
                      {mod.subtitle}
                    </p>
                    <ul className="space-y-3">
                      {mod.features.map((feat, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </CardSticky>
                );
              })}
            </ContainerScroll>
          </div>
        </div>
      </section>

      {/* ── Impact ───────────────────────────────── */}
      <section id="impact" className="scroll-mt-20">
        <Features
          title={
            <>
              Real outcomes from{" "}
              <span className="text-primary">real communities</span>
            </>
          }
          description="Operational since 2024 with pilot deployments in the Ashanti Region. Here's what we're building toward."
          listItems={[
            { icon: Heart, label: "300+ women screened for breast cancer & fibroids" },
            { icon: Stethoscope, label: "210+ early-stage detections flagged by AI" },
            { icon: Droplets, label: "100+ blood requests coordinated" },
            { icon: Users, label: "50 CHWs onboarded and active" },
          ]}
          imageLightSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=929&fit=crop&auto=format"
          imageAlt="Health data analytics dashboard"
        />
      </section>

      {/* ── Technology ───────────────────────────── */}
      <FeatureShowcase
        eyebrow="Built for the Field"
        title="Technology designed around real workflows"
        description="Every screen is voice-navigable, works offline, and is available in Twi, Hausa, and English. The platform is mobile-first, built on Flutter with offline sync — because connectivity is a luxury, not a given."
        stats={["Flutter + CouchDB", "TensorFlow Lite", "2G Compatible"]}
        steps={[
          {
            id: "tech-1",
            title: "Flutter (iOS/Android/PWA) with CouchDB offline sync",
            text: "The entire app works offline-first. Patient data, diagnostic images, and reports sync automatically when connectivity returns.",
          },
          {
            id: "tech-2",
            title: "TensorFlow Lite for on-device AI inference",
            text: "AI models run directly on the health worker's phone — no internet required for diagnostic analysis.",
          },
          {
            id: "tech-3",
            title: "USSD + SMS fallback for feature phones",
            text: "Communities without smartphones can still access health guidance, appointment reminders, and blood donor alerts.",
          },
          {
            id: "tech-4",
            title: "Google Cloud Ghana region hosting",
            text: "Data stays in-country for GDPR/Data Protection Act compliance, with low-latency access across West Africa.",
          },
        ]}
        tabs={techTabs}
        defaultTab="mobile"
        panelMinHeight={600}
      />

      {/* ── Sustainability ───────────────────────── */}
      <Features10
        cards={[
          {
            icon: HandCoins,
            title: "Free for Patients",
            description:
              "Sustainable by design — free at point of use, funded through B2G subscriptions and diagnostic API licensing.",
            imageLightSrc:
              "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=929&fit=crop&auto=format",
            imageAlt: "Sustainable healthcare funding",
          },
          {
            icon: Globe,
            title: "Inclusion by Design",
            description:
              "Voice-first interface for low-literacy users. Available in Twi, Hausa, and English — expanding to Ga, Dagbani, and Ewe.",
            imageLightSrc:
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=929&fit=crop&auto=format",
            imageAlt: "Inclusive design workshop",
          },
        ]}
        bottomText="Smart partnerships connecting communities, health systems, and technology for sustainable impact."
        bottomItems={[
          [
            { label: "Patients", pattern: "border" },
            { label: "CHWs", pattern: "border" },
          ],
          [
            { label: "Free", pattern: "none" },
            { label: "B2G", pattern: "primary" },
          ],
          [
            { label: "API", pattern: "blue" },
            { label: "Partners", pattern: "none" },
          ],
          [
            { label: "Licensing", pattern: "primary" },
            { label: "Impact", pattern: "none" },
          ],
        ]}
      />

      {/* ── Team ─────────────────────────────────── */}
      <section id="team" className="scroll-mt-20">
        <FeatureShowcase
          eyebrow="Our Team"
          title="A team that lives inside the problem"
          description="Health Link Africa is led by a multidisciplinary team with deep roots in Ghanaian communities and expertise across healthcare, technology, and design."
          stats={["Accra, Ghana", "Founded 2024", "3 Co-founders"]}
          steps={[
            {
              id: "team-1",
              title: "Lakyiere Alice B. — Chief Executive Officer",
              text: "Over 10 years of experience in business operations and digital consulting. Alice leads the company's vision and strategic partnerships.",
            },
            {
              id: "team-2",
              title: "Abbey Anertey C. — Chief Technology Officer",
              text: "Expert in scalable computer architecture and mobile-first development. Abbey architects the platform and leads the engineering team.",
            },
            {
              id: "team-3",
              title: "Reuben Shamo A. — Head of Product Design",
              text: "Specialises in user-centered design, UX strategy, and cross-functional collaboration. Reuben ensures the platform serves its users through participatory research.",
            },
          ]}
          tabs={teamTabs}
          defaultTab="alice"
          panelMinHeight={600}
        />
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="bg-card">
        <FeatureShowcase
          eyebrow="Get Involved"
          title="Ready to build the future of rural health in Africa?"
          description="We have the architecture, the clinical partnerships, and the team. We're looking for partners, funders, and collaborators who believe healthcare should reach everyone."
          stats={["Open to funders", "Clinical partners", "Tech collaborators"]}
          steps={[
            {
              id: "cta-1",
              title: "Funders & Grant Partners",
              text: "Support pilot expansion to new districts. Your funding directly enables AI-powered diagnostics for rural women who currently have no access.",
            },
            {
              id: "cta-2",
              title: "Clinical & Health System Partners",
              text: "Integrate Health Link Africa into your facility. We work with district health authorities and NGOs for seamless deployment.",
            },
            {
              id: "cta-3",
              title: "Technology Collaborators",
              text: "Contribute to our open-source diagnostic models, help improve our multilingual NLP, or support our offline-first infrastructure.",
            },
          ]}
          tabs={ctaTabs}
          defaultTab="community"
          panelMinHeight={600}
          ctaPrimary={{ label: "Partner With Us", to: "/contact" }}
          ctaSecondary={{ label: "Learn More", to: "#impact" }}
        />
      </section>

      {/* ── Footer ───────────────────────────────── */}
      <MinimalFooter />
    </div>
  );
};

export default Index;
