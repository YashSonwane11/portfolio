import { Github, ExternalLink, Star, GitFork, Code2, BarChart3, Server, Brain } from "lucide-react";

/* ── Featured repos from GitHub README ── */
const featuredRepos = [
  {
    name: "Automated Business Metric Engine",
    description:
      "Architected a robust backend metric engine on Spring Boot + PostgreSQL to handle large-scale business data ingestion, optimized SQL query execution, and Power BI integration for live executive dashboards.",
    stars: null,
    forks: null,
    language: "Java",
    languageColor: "#b07219",
    topics: ["Spring Boot", "PostgreSQL", "SQL", "Power BI", "ETL"],
    url: null,
    liveUrl: "https://automated-business-metric-engine.vercel.app/dashboard",
    icon: Server,
    iconColor: "text-orange-400",
    gradient: "from-orange-500/10 to-amber-500/5",
    border: "hover:border-orange-500/30",
  },
  {
    name: "Airbnb Performance Dashboard",
    description:
      "Comprehensive Power BI tracking dashboard with complex DAX calculations, geographic heatmaps, interactive filtering, and Pareto analysis across 2,79,712 listings and 5,373K reviews.",
    stars: null,
    forks: null,
    language: "Power BI / DAX",
    languageColor: "#F2C811",
    topics: ["Power BI", "DAX", "ETL", "Power Query", "Data Analytics"],
    url: "https://github.com/YashSonwane11/Airbnb-Performance-Dashboard",
    liveUrl: null,
    icon: BarChart3,
    iconColor: "text-cyan-400",
    gradient: "from-cyan-500/10 to-blue-500/5",
    border: "hover:border-cyan-500/30",
  },
  {
    name: "MindPulse AI",
    description:
      "Full-stack AI mental wellness platform with FastAPI + React frontend, PyTorch sentiment analysis, crisis detection that triggers emergency helplines, and Firebase session management.",
    stars: null,
    forks: null,
    language: "Python / React",
    languageColor: "#3572A5",
    topics: ["FastAPI", "React", "PyTorch", "Firebase", "NLP"],
    url: null,
    liveUrl: "https://mindpulse-ai.vercel.app",
    icon: Brain,
    iconColor: "text-violet-400",
    gradient: "from-violet-500/10 to-purple-500/5",
    border: "hover:border-violet-500/30",
  },
  {
    name: "Sahyadri PG",
    description:
      "Premium responsive frontend website for a student PG accommodation near MIT-ADT University, Pune. Features room explorer, amenities showcase, virtual tour, and booking CTA with modern dark UI.",
    stars: null,
    forks: null,
    language: "React / JavaScript",
    languageColor: "#f1e05a",
    topics: ["React", "Vite", "HTML5", "CSS3", "Responsive"],
    url: "https://github.com/YashSonwane11/Sahyadri-Pg",
    liveUrl: "https://sahyadri-pg.vercel.app",
    icon: Code2,
    iconColor: "text-emerald-400",
    gradient: "from-emerald-500/10 to-teal-500/5",
    border: "hover:border-emerald-500/30",
  },
  {
    name: "Pizza Sales Analysis",
    description:
      "End-to-end SQL + Power BI project analyzing pizza sales data. Identified top sellers, peak order times, seasonal trends, and key KPIs through interactive dashboards and advanced DAX measures.",
    stars: null,
    forks: null,
    language: "SQL / Power BI",
    languageColor: "#336791",
    topics: ["SQL", "Power BI", "DAX", "Data Visualization"],
    url: "https://github.com/YashSonwane11/Pizza-Sales-Analysis",
    liveUrl: null,
    icon: BarChart3,
    iconColor: "text-pink-400",
    gradient: "from-pink-500/10 to-rose-500/5",
    border: "hover:border-pink-500/30",
  },
  {
    name: "Mobile Sales Dashboard",
    description:
      "Interactive Power BI dashboard analyzing mobile phone sales across India — brand performance (Apple, Samsung, Xiaomi), city-wise insights, and payment method trends using Excel as a data source.",
    stars: null,
    forks: null,
    language: "Power BI / Excel",
    languageColor: "#217346",
    topics: ["Power BI", "Excel", "Data Analysis", "DAX"],
    url: "https://github.com/YashSonwane11/Mobile-Sales-Dashboard",
    liveUrl: null,
    icon: BarChart3,
    iconColor: "text-blue-400",
    gradient: "from-blue-500/10 to-indigo-500/5",
    border: "hover:border-blue-500/30",
  },
];

/* ── Tech category pills ── */
const techGroups = [
  {
    label: "Languages",
    items: ["Java", "Python", "C++", "JavaScript", "SQL"],
    color: "bg-blue-500/15 text-blue-300 border-blue-500/25",
  },
  {
    label: "Backend",
    items: ["Spring Boot", "FastAPI", "JDBC", "REST APIs"],
    color: "bg-orange-500/15 text-orange-300 border-orange-500/25",
  },
  {
    label: "Data & BI",
    items: ["Power BI", "DAX", "Power Query", "Excel", "Tableau"],
    color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "SQL Server", "MySQL", "SQLite", "Firebase"],
    color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  },
  {
    label: "AI / ML",
    items: ["PyTorch", "Hugging Face", "NLP", "LLM APIs"],
    color: "bg-violet-500/15 text-violet-300 border-violet-500/25",
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Postman", "Linux", "Docker basics"],
    color: "bg-slate-500/15 text-slate-300 border-slate-500/25",
  },
];

const GitHubSection = () => {
  return (
    <section id="github" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(220_80%_50%/0.06),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(280_85%_65%/0.06),transparent_55%)]" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Github className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">github.com/YashSonwane11</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Code{" "}
              <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Engineering robust backends, translating data into insights, and building intelligent applications
            </p>
            <a
              href="https://github.com/YashSonwane11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full
                         bg-white/5 border border-white/10 text-sm text-muted-foreground
                         hover:bg-primary/10 hover:text-primary hover:border-primary/30
                         transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              View Full GitHub Profile
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* ── GitHub Stat Cards ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { value: "550+", label: "Total Contributions", sub: "Feb 2022 – Present", color: "text-cyan-400", bg: "from-cyan-500/10 to-cyan-500/5" },
              { value: "162",  label: "Commits in 2026",     sub: "Active this year",   color: "text-violet-400", bg: "from-violet-500/10 to-violet-500/5" },
              { value: "21",   label: "Longest Streak",      sub: "Jun 15 – Jul 5",     color: "text-orange-400", bg: "from-orange-500/10 to-orange-500/5" },
              { value: "6+",   label: "Repos Built",         sub: "Public projects",    color: "text-emerald-400", bg: "from-emerald-500/10 to-emerald-500/5" },
            ].map((s) => (
              <div key={s.label} className={`glass-card rounded-2xl p-5 text-center bg-gradient-to-br ${s.bg} hover:-translate-y-1 transition-all duration-300`}>
                <div className={`text-3xl sm:text-4xl font-bold mb-1 ${s.color}`}>{s.value}</div>
                <div className="text-xs font-semibold text-white mb-1">{s.label}</div>
                <div className="text-[10px] text-muted-foreground">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* ── Currently Building / Activity Feed ── */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 mb-10">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Currently Active
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: "⚙️", status: "Building",
                  title: "Automated Business Metric Engine",
                  desc: "Spring Boot + PostgreSQL backend with Power BI integration and scheduled ETL pipelines.",
                  tag: "Java & Backend", tagColor: "bg-orange-500/15 text-orange-400",
                },
                {
                  icon: "🧠", status: "Deployed",
                  title: "MindPulse AI",
                  desc: "Full-stack AI mental wellness platform with FastAPI, PyTorch sentiment analysis, and Firebase.",
                  tag: "Full-Stack & AI", tagColor: "bg-violet-500/15 text-violet-400",
                },
                {
                  icon: "📊", status: "Deployed",
                  title: "Airbnb Performance Dashboard",
                  desc: "Power BI dashboard analyzing 2.79L+ listings across 10 cities using DAX & Power Query.",
                  tag: "Data & BI", tagColor: "bg-cyan-500/15 text-cyan-400",
                },
                {
                  icon: "🏠", status: "Live",
                  title: "Rivana Villa & Sahyadri PG",
                  desc: "Two premium React frontends — a luxury farmstay and a student PG website — deployed on Vercel.",
                  tag: "Frontend", tagColor: "bg-emerald-500/15 text-emerald-400",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-primary/20 transition-all duration-300">
                  <div className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold text-sm text-white">{item.title}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${item.tagColor}`}>{item.tag}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 font-medium">{item.status}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Tech Stack ── */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 mb-10">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              Tech Stack
            </h3>
            <div className="space-y-4">
              {techGroups.map((group) => (
                <div key={group.label} className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-muted-foreground w-20 flex-shrink-0">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`text-xs px-2.5 py-1 rounded-md border font-medium ${group.color}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Featured Repos Grid ── */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Featured Repositories
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredRepos.map((repo) => (
                <div
                  key={repo.name}
                  className={`glass-card rounded-xl p-5 border border-border/40 ${repo.border}
                             transition-all duration-300 hover:-translate-y-0.5
                             bg-gradient-to-br ${repo.gradient} flex flex-col`}
                >
                  {/* Repo header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <repo.icon className={`w-4 h-4 flex-shrink-0 ${repo.iconColor}`} />
                      <span className="font-semibold text-sm text-white leading-snug">
                        {repo.name}
                      </span>
                    </div>
                    <div className="flex gap-1.5 flex-shrink-0">
                      {repo.liveUrl && (
                        <a
                          href={repo.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md text-muted-foreground hover:text-primary
                                     hover:bg-primary/10 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {repo.url && (
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md text-muted-foreground hover:text-primary
                                     hover:bg-primary/10 transition-colors"
                          title="View Code"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                    {repo.description}
                  </p>

                  {/* Footer */}
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-border/30">
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      {repo.language}
                    </span>
                    <div className="flex flex-wrap gap-1 ml-auto">
                      {repo.topics.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Contribution Snake ── */}
          <div className="glass-card rounded-2xl overflow-hidden p-4 sm:p-6">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
              <span className="text-green-400">●</span> Contribution Activity
            </h3>
            <div className="overflow-x-auto">
              <img
                src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake-dark.svg"
                alt="GitHub contribution snake"
                className="w-full min-w-[500px] rounded-xl"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
