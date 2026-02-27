import { Database, BarChart3, Code2, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Data & BI Tools",
    icon: BarChart3,
    color: "from-cyan-400 to-blue-500",
    skills: ["Microsoft Power BI", "SQL", "Python", "DAX", "EDA", "MS Excel"],
  },
  {
    title: "Data Visualization",
    icon: Database,
    color: "from-violet-400 to-purple-500",
    skills: ["Dashboard Design", "Data Storytelling", "KPI Tracking", "Interactive Reports"],
  },
  {
    title: "Development",
    icon: Code2,
    color: "from-blue-400 to-indigo-500",
    skills: ["C++", "Java", "GitHub", "Data Structures"],
  },
];

const allSkills = [
  { name: "SQL", level: 90 },
  { name: "Power BI", level: 85 },
  { name: "Python", level: 75 },
  { name: "DAX", level: 80 },
  { name: "Excel", level: 88 },
  { name: "Data Visualization", level: 85 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_bottom,rgba(139,92,246,0.08),transparent_50%),#0f1117]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-cyan-400 font-mono text-sm mb-3 tracking-widest uppercase">
              Technical Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Skills &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              Proficient in the complete data analytics stack, from extraction to visualization
            </p>
            <div className="mt-10 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {skillCategories.map((category, idx) => (
              <div
                key={category.title}
                className="relative rounded-2xl p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_60px_-20px_rgba(56,189,248,0.35)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 mb-6 shadow-lg`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-6 text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-white/[0.04] border border-white/10 text-muted-foreground hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl p-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />
            <h3 className="text-lg font-semibold mb-10 flex items-center gap-3 text-white">
              <span className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 shadow-md">
                <Brain className="w-5 h-5 text-white" />
              </span>
              Proficiency Levels
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {allSkills.map((skill, idx) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-white">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_15px_rgba(56,189,248,0.6)] transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${idx * 120}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;