import { useRef, useState, useEffect } from "react";
import {
  Database,
  BarChart3,
  Code2,
  Brain,
  Server,
  Layers,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const skillGroups = [
  {
    title: "Data Analytics & BI",
    icon: BarChart3,
    color: "from-cyan-400 to-blue-500",
    skills: [
      "Microsoft Power BI", "SQL", "DAX", "Power Query",
      "Tableau", "MS Excel", "KPI Analysis", "Reporting",
      "Data Visualization", "EDA",
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-violet-400 to-purple-500",
    skills: ["Python", "Java", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "from-orange-400 to-amber-500",
    skills: ["Spring Boot", "FastAPI", "JDBC", "REST APIs", "Maven"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-emerald-400 to-teal-500",
    skills: ["PostgreSQL", "MS SQL Server", "SQLite", "MongoDB concepts"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    color: "from-pink-400 to-rose-500",
    skills: [
      "PyTorch", "Hugging Face Transformers",
      "NLP", "LLM APIs", "Sentiment Analysis",
    ],
  },
  {
    title: "Frontend",
    icon: Layers,
    color: "from-blue-400 to-indigo-500",
    skills: ["React", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-slate-400 to-gray-500",
    skills: ["Git", "GitHub", "Firebase", "Google Analytics", "Docker basics", "AWS concepts"],
  },
];

const Skills = () => {
  const sliderRef  = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [cardWidth, setCardWidth] = useState(280);

  /* Dynamic card width */
  useEffect(() => {
    const update = () => {
      if (sectionRef.current) {
        const w = Math.min(280, sectionRef.current.clientWidth - 32);
        setCardWidth(w);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const GAP = 16;

  const scroll = (dir: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const next =
      dir === "right"
        ? Math.min(activeIdx + 1, skillGroups.length - 1)
        : Math.max(activeIdx - 1, 0);
    setActiveIdx(next);
    el.scrollTo({ left: next * (cardWidth + GAP), behavior: "smooth" });
  };

  const goTo = (i: number) => {
    setActiveIdx(i);
    sliderRef.current?.scrollTo({
      left: i * (cardWidth + GAP),
      behavior: "smooth",
    });
  };

  return (
    <section id="skills" className="py-24 glass-section glass-lime relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_bottom,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none" />
      <div ref={sectionRef} className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <div className="text-center mb-10">
            <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">
              Technical Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Skills &{" "}
              <span className="text-primary">
                Technologies
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Proficient across the full data analytics, backend, and full-stack development stack
            </p>
            <div className="mt-6 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>

          {/* ── Skill Card Slider ── */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-3
                       [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                       snap-x snap-mandatory"
          >
            {skillGroups.map((group, idx) => (
              <div
                key={group.title}
                className="snap-start flex-shrink-0 rounded-2xl p-5
                           bg-card border border-border
                           shadow-sm hover:shadow-md
                           hover:-translate-y-1 transition-all duration-300 group"
                style={{ width: cardWidth }}
              >
                <div
                  className={`inline-flex p-2.5 rounded-xl bg-primary/10 mb-3`}
                >
                  <group.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold mb-3 text-foreground">{group.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-secondary border border-border
                                 text-secondary-foreground hover:text-primary hover:border-primary/40
                                 hover:bg-primary/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Navigation row ── */}
          <div className="flex items-center justify-center gap-4 mt-5">
            {/* Left arrow */}
            <button
              onClick={() => scroll("left")}
              disabled={activeIdx === 0}
              aria-label="Previous"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-card border border-border text-foreground
                         hover:bg-muted hover:border-primary/50 hover:text-primary
                         disabled:opacity-25 disabled:cursor-not-allowed
                         transition-all duration-200 flex-shrink-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {skillGroups.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Skill group ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIdx
                      ? "w-5 h-2 bg-cyan-400"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scroll("right")}
              disabled={activeIdx === skillGroups.length - 1}
              aria-label="Next"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-card border border-border text-foreground
                         hover:bg-muted hover:border-primary/50 hover:text-primary
                         disabled:opacity-25 disabled:cursor-not-allowed
                         transition-all duration-200 flex-shrink-0"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;