import { useState, useRef, useEffect } from "react";
import {
  Github,
  ExternalLink,
  BarChart3,
  TrendingUp,
  Clock,
  PieChart,
  Smartphone,
  Map,
  CreditCard,
  Server,
  Brain,
  Database,
  Globe,
  Zap,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Filter,
  Home,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ===================================================================
   PROJECT DATA
=================================================================== */

const projects = [
  {
    id: "pizza-sales",
    title: "Pizza Sales Analysis Dashboard",
    subtitle: "SQL + Power BI Project",
    date: "Nov 2025",
    image: "/Pizza_Dashbord.webp",
    liveLink: null,
    githubLink: "https://github.com/YashSonwane11/Pizza-Sales-Analysis",
    description:
      "Analyzed pizza sales data using advanced SQL queries and visualized insights in an interactive Power BI dashboard to improve business performance and optimize menu strategy.",
    techStack: ["SQL", "Power BI", "DAX", "Data Visualization", "Excel"],
    categories: ["data-analytics"],
    featured: true,
    outcomes: [
      { icon: TrendingUp, title: "Top Seller",       desc: "Thai Chicken Pizza #1" },
      { icon: Clock,      title: "Peak Times",        desc: "Fri & Sat evenings" },
      { icon: BarChart3,  title: "Seasonal Trends",   desc: "July & Jan peaks" },
    ],
    kpis: ["Total Revenue", "Avg Order Value", "Pizzas Sold", "Total Orders", "Avg Pizzas/Order"],
  },
  {
    id: "mobile-sales",
    title: "Mobile Sales Dashboard",
    subtitle: "Power BI | Excel Project",
    date: "Dec 2025",
    image: "/DashboardImage.webp",
    liveLink: null,
    githubLink: "https://github.com/YashSonwane11/Mobile-Sales-Dashboard",
    description:
      "Built an interactive Power BI dashboard to analyze mobile phone sales across India, uncovering brand performance, city insights, and payment preferences.",
    techStack: ["Power BI", "Microsoft Excel", "Data Analysis", "DAX"],
    categories: ["data-analytics"],
    featured: false,
    outcomes: [
      { icon: Smartphone, title: "Brand Perf.",    desc: "Apple, Samsung, Xiaomi" },
      { icon: Map,        title: "City Insights",  desc: "Top cities in India" },
      { icon: CreditCard, title: "Payment Trends", desc: "UPI & Card dominated" },
    ],
    kpis: ["Total Sales", "Qty Sold", "Transactions", "Avg Price", "Customer Ratings"],
  },
  {
    id: "airbnb-analytics",
    title: "Airbnb Performance Dashboard",
    subtitle: "Power BI | DAX | Power Query | ETL",
    date: "Jan 2026",
    image: "/Airbnb Dashboard.png",
    liveLink: null,
    githubLink: "https://github.com/YashSonwane11/Airbnb-Performance-Dashboard",
    description:
      "Analyzed large-scale Airbnb datasets (2,79,712 listings · 10 cities · 5,373K reviews). Applied Pareto analysis to identify key market trends and ETL pipelines to improve data quality.",
    techStack: ["Power BI", "DAX", "Power Query", "ETL", "SQL"],
    categories: ["data-analytics"],
    featured: false,
    outcomes: [
      { icon: BarChart3,  title: "2.79L+ Listings", desc: "10 cities analyzed" },
      { icon: TrendingUp, title: "5,373K Reviews",  desc: "Full market coverage" },
      { icon: PieChart,   title: "Pareto Analysis", desc: "Top city trends" },
    ],
    kpis: ["Listings Volume", "Host Count", "Review Metrics", "City Performance"],
  },
  {
    id: "business-metric-engine",
    title: "Automated Business Metric Engine",
    subtitle: "Spring Boot | PostgreSQL | SQL | Power BI",
    date: "Apr – May 2026",
    image: "/Metric Engine.png",
    liveLink: "https://automated-business-metric-engine.vercel.app/dashboard",
    githubLink: null,
    description:
      "Automated backend metric engine using Spring Boot and PostgreSQL. Features real-time KPI dashboards, CSV ingestion, scheduled reporting, ETL workflows, and Power BI integration.",
    techStack: ["Spring Boot", "PostgreSQL", "SQL", "Power BI", "ETL", "REST APIs"],
    categories: ["java-backend", "data-analytics"],
    featured: false,
    outcomes: [
      { icon: Server,    title: "Auto Reporting",  desc: "Scheduled pipeline" },
      { icon: Database,  title: "Optimized SQL",   desc: "ETL & analytics views" },
      { icon: BarChart3, title: "Power BI",        desc: "Live exec dashboard" },
    ],
    kpis: ["Total Revenue", "Net Revenue", "Total Orders", "Rolling Revenue"],
  },
  {
    id: "bank-account-system",
    title: "Bank Account Management System",
    subtitle: "Java | Core Java | SQLite | JDBC",
    date: "2025",
    image: null,
    liveLink: null,
    githubLink: null,
    description:
      "Banking application using Core Java & OOP for account management, deposits, and withdrawals. JDBC + SQLite for secure data storage, transaction logs, and automated balance updates.",
    techStack: ["Java", "Core Java", "OOP", "SQLite", "JDBC"],
    categories: ["java-backend"],
    featured: false,
    outcomes: [
      { icon: Database, title: "JDBC + SQLite",  desc: "Secure persistence" },
      { icon: Zap,      title: "Transfers",      desc: "Auto balance updates" },
      { icon: Server,   title: "Error Safety",   desc: "Robust exceptions" },
    ],
    kpis: ["Account Ops", "Transaction Logs", "Timestamped Records"],
  },
  {
    id: "sahyadri-pg",
    title: "Sahyadri PG – Premium Student Living",
    subtitle: "React | Vite | Frontend Web Project",
    date: "2025",
    image: "/Sahyadri PG.png",
    liveLink: "https://sahyadri-pg.vercel.app",
    githubLink: "https://github.com/YashSonwane11/Sahyadri-Pg",
    description:
      "Premium responsive website for a student PG near MIT-ADT University, Loni Kalbhor, Pune. Features room exploration, amenities showcase, virtual tour, pricing, and booking — built with a modern dark UI.",
    techStack: ["React", "Vite", "HTML5", "CSS3", "JavaScript"],
    categories: ["fullstack-ai"],
    featured: false,
    outcomes: [
      { icon: Home,  title: "Premium UI",      desc: "Modern dark aesthetic" },
      { icon: Users, title: "Student-Focused", desc: "Near MIT-ADT Univ." },
      { icon: Star,  title: "4.8/5 Rating",    desc: "432 reviews shown" },
    ],
    kpis: ["Room Listings", "Booking CTA", "Amenities", "Mobile Ready"],
  },
  {
    id: "rivana-villa",
    title: "Rivana Villa – Monsoon Wilderness",
    subtitle: "React | Vite | Frontend Web Project",
    date: "2025",
    image: "/Rivana Villa.png",
    liveLink: "https://rivana-villa.vercel.app",
    githubLink: null,
    description:
      "Luxury farmstay website for Rivana Villa Amboli — a 3BHK private retreat in the misty landscapes of Amboli, Maharashtra. Rustic wood & stone aesthetics, gallery, booking flow, and full responsiveness.",
    techStack: ["React", "Vite", "HTML5", "CSS3", "JavaScript"],
    categories: ["fullstack-ai"],
    featured: false,
    outcomes: [
      { icon: Globe, title: "Luxury UI",    desc: "Royal-natural farmstay" },
      { icon: Map,   title: "Amboli, MH",   desc: "Premium location" },
      { icon: Star,  title: "Booking Flow", desc: "Seamless guest UX" },
    ],
    kpis: ["Villa Gallery", "Booking CTA", "Nature Story", "Mobile Ready"],
  },
  {
    id: "mindpulse-ai",
    title: "MindPulse AI – Mental Wellness",
    subtitle: "React | FastAPI | PyTorch | Firebase",
    date: "May 2026",
    image: "/MindPulse AI.png",
    liveLink: "https://mindpulse-ai.vercel.app",
    githubLink: null,
    description:
      "Full-stack AI mental wellness platform with 24/7 AI chat, real-time sentiment analysis, crisis detection with emergency helpline routing, mood logging, and Firebase session tracking — stigma-free and private.",
    techStack: ["React", "FastAPI", "PyTorch", "Firebase", "NLP"],
    categories: ["fullstack-ai"],
    featured: false,
    outcomes: [
      { icon: Brain, title: "AI Sentiment",    desc: "Deep-learning model" },
      { icon: Zap,   title: "Crisis Detect",   desc: "Emergency routing" },
      { icon: Globe, title: "Firebase",        desc: "Anonymous sessions" },
    ],
    kpis: ["Real-Time Inference", "Crisis Accuracy", "Session Anonymity"],
  },
];

/* ===================================================================
   FILTER CONFIG
=================================================================== */

const filters = [
  { id: "all",            label: "All" },
  { id: "data-analytics", label: "Data & BI" },
  { id: "java-backend",   label: "Java & Backend" },
  { id: "fullstack-ai",   label: "Full-Stack" },
];

const catColors: Record<string, string> = {
  "data-analytics": "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
  "java-backend":   "bg-orange-500/15 text-orange-400 border-orange-500/25",
  "fullstack-ai":   "bg-violet-500/15 text-violet-400 border-violet-500/25",
};
const catLabels: Record<string, string> = {
  "data-analytics": "Data & BI",
  "java-backend":   "Java & Backend",
  "fullstack-ai":   "Full-Stack",
};

/* ===================================================================
   CARD
=================================================================== */

function ProjectCard({
  project,
  cardWidth,
}: {
  project: (typeof projects)[0];
  cardWidth: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError]   = useState(false);

  return (
    <div
      className="snap-start flex-shrink-0 glass-card rounded-2xl overflow-hidden
                 hover:border-primary/30 transition-all duration-500 flex flex-col"
      style={{ width: cardWidth }}
    >
      {/* ── Header ── */}
      <div className="bg-gradient-to-r from-primary/10 to-chart-5/10 p-4 sm:p-5 border-b border-border/50">
        <div className="flex flex-col gap-3">
          {/* title row */}
          <div>
            {project.featured && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium mb-2">
                <PieChart className="w-3 h-3" /> Featured
              </div>
            )}
            <h3 className="font-bold text-sm sm:text-base leading-snug mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-2">{project.subtitle}</p>

            {/* badges */}
            <div className="flex flex-wrap gap-1.5 items-center">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${catColors[cat]}`}
                >
                  {catLabels[cat]}
                </span>
              ))}
              <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                {project.date}
              </span>
            </div>
          </div>

          {/* action buttons row — always below title on mobile */}
          {(project.liveLink || project.githubLink) && (
            <div className="flex gap-2">
              {project.liveLink && (
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="h-8 px-3 text-xs flex-1 sm:flex-none"
                >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubLink && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="h-8 px-3 text-xs flex-1 sm:flex-none"
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Preview Image ── */}
      {project.image && !imgError && (
        <div
          className="relative overflow-hidden border-b border-border/50 bg-black/20"
          style={{ height: 175 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15 blur-xl scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <img
            src={project.image}
            alt={`${project.title} preview`}
            onError={() => setImgError(true)}
            className="relative w-full h-full object-cover object-top"
          />
        </div>
      )}

      {/* ── Body ── */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 bg-secondary rounded text-xs font-medium
                         hover:bg-primary/20 hover:text-primary transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full py-2 text-xs text-primary
                     hover:text-primary/80 border-t border-border/50 mt-auto transition-colors"
        >
          <span>{expanded ? "Hide Details" : "View Outcomes & KPIs"}</span>
          {expanded ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>

        {expanded && (
          <div className="mt-4 space-y-4 animate-fade-in">
            <div className="grid grid-cols-3 gap-2">
              {project.outcomes.map((o) => (
                <div
                  key={o.title}
                  className="p-2 rounded-xl bg-secondary/30 border border-border/50
                             hover:border-primary/30 transition-all text-center"
                >
                  <o.icon className="w-4 h-4 text-primary mb-1 mx-auto" />
                  <h5 className="font-semibold text-[10px] leading-tight mb-0.5">
                    {o.title}
                  </h5>
                  <p className="text-[10px] text-muted-foreground leading-snug">{o.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.kpis.map((k) => (
                <span
                  key={k}
                  className="px-2.5 py-0.5 text-[10px] bg-primary/10 text-primary
                             rounded-full border border-primary/20"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ===================================================================
   MAIN SECTION
=================================================================== */

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const sliderRef  = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [slideIdx,  setSlideIdx]  = useState(0);
  const [cardWidth, setCardWidth] = useState(390);

  /* Compute card width from container width */
  useEffect(() => {
    const update = () => {
      if (sectionRef.current) {
        // subtract horizontal padding (24px each side) + a tiny peek gap
        const w = Math.min(390, sectionRef.current.clientWidth - 32);
        setCardWidth(w);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const filtered = projects.filter(
    (p) => activeFilter === "all" || p.categories.includes(activeFilter)
  );

  const GAP = 16;

  const slide = (dir: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const maxIdx = filtered.length - 1;
    const next =
      dir === "right"
        ? Math.min(slideIdx + 1, maxIdx)
        : Math.max(slideIdx - 1, 0);
    setSlideIdx(next);
    el.scrollTo({ left: next * (cardWidth + GAP), behavior: "smooth" });
  };

  const handleFilter = (id: string) => {
    setActiveFilter(id);
    setSlideIdx(0);
    setTimeout(() => {
      sliderRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    }, 10);
  };

  const goTo = (i: number) => {
    setSlideIdx(i);
    sliderRef.current?.scrollTo({
      left: i * (cardWidth + GAP),
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(262_83%_58%/0.05),transparent_60%)]" />

      <div ref={sectionRef} className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <div className="text-center mb-8">
            <p className="text-primary font-mono text-sm mb-2">FEATURED WORK</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Projects &{" "}
              <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Real-world projects across Data Analytics, Java Backend, and Full-Stack
            </p>
          </div>

          {/* ── Filter Tabs — horizontal scroll on mobile ── */}
          <div className="mb-6 -mx-4 sm:mx-0">
            <div
              className="flex gap-2 overflow-x-auto px-4 sm:px-0 sm:flex-wrap sm:justify-center
                         [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-1"
            >
              <span className="hidden sm:flex items-center">
                <Filter className="w-4 h-4 text-muted-foreground mr-1" />
              </span>
              {filters.map((f) => {
                const count =
                  f.id === "all"
                    ? projects.length
                    : projects.filter((p) => p.categories.includes(f.id)).length;
                return (
                  <button
                    key={f.id}
                    onClick={() => handleFilter(f.id)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === f.id
                        ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                        : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50"
                    }`}
                  >
                    {f.label}
                    <span className="ml-1 text-xs opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Slider Track ── */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-3
                       [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                       snap-x snap-mandatory"
          >
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                cardWidth={cardWidth}
              />
            ))}
          </div>

          {/* ── Navigation row (arrows + dots) ── */}
          <div className="flex items-center justify-center gap-4 mt-5">
            {/* Left arrow */}
            <button
              onClick={() => slide("left")}
              disabled={slideIdx === 0}
              aria-label="Previous project"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-white/10 border border-white/15 text-white
                         hover:bg-primary/30 hover:border-primary/50
                         disabled:opacity-25 disabled:cursor-not-allowed
                         transition-all duration-200 flex-shrink-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Project ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === slideIdx
                      ? "w-5 h-2 bg-primary"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => slide("right")}
              disabled={slideIdx >= filtered.length - 1}
              aria-label="Next project"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-white/10 border border-white/15 text-white
                         hover:bg-primary/30 hover:border-primary/50
                         disabled:opacity-25 disabled:cursor-not-allowed
                         transition-all duration-200 flex-shrink-0"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-2 tracking-wide">
            {slideIdx + 1} / {filtered.length}&nbsp; projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
