import { Database, BarChart3, Code2, GitBranch, FileSpreadsheet, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Data & BI Tools",
    icon: BarChart3,
    color: "text-chart-1",
    skills: ["Microsoft Power BI", "SQL", "Python", "DAX", "EDA", "MS Excel"],
  },
  {
    title: "Data Visualization",
    icon: Database,
    color: "text-chart-5",
    skills: ["Dashboard Design", "Data Storytelling", "KPI Tracking", "Interactive Reports"],
  },
  {
    title: "Development",
    icon: Code2,
    color: "text-chart-2",
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
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(173_80%_50%/0.05),transparent_60%)]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// TECHNICAL EXPERTISE</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Proficient in the complete data analytics stack, from extraction to visualization
            </p>
          </div>
          
          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, idx) => (
              <div
                key={category.title}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-secondary/50 mb-4 ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary/50 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Skill Bars */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Proficiency Levels
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {allSkills.map((skill, idx) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-chart-5 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${idx * 100}ms`,
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
