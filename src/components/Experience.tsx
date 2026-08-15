import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "Java Developer Intern",
    company: "Info Origin Inc",
    location: "Gondia, India",
    duration: "June 2023 – July 2023",
    type: "Internship",
    color: "from-orange-400 to-amber-500",
    responsibilities: [
      "Developed Java-based applications using Core Java concepts, writing clean, maintainable code while adopting real-world software engineering best practices.",
      "Solved logical and technical problems by debugging complex application issues and improving system functionality through analytical troubleshooting.",
      "Collaborated with the development team to understand software workflows and successfully resolve technical challenges.",
      "Engaged in problem-solving to tackle complex programming tasks and gained hands-on experience in software development practices.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 glass-section glass-blue">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,hsl(262_83%_58%/0.05),transparent_50%)]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">PROFESSIONAL JOURNEY</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Building practical skills through real-world projects and industry collaboration
            </p>
          </div>
          
          {/* Experience Cards */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
            
            {experiences.map((exp, idx) => (
              <div
                key={exp.title}
                className="relative pl-0 md:pl-20 mb-8 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary glow-border hidden md:block" />
                
                <div className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20`}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  {/* Responsibilities */}
                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <div key={respIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{resp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Continuous Learning note */}
            <div className="relative pl-0 md:pl-20">
              <div className="absolute left-6 top-6 w-4 h-4 rounded-full border-2 border-primary/50 bg-background hidden md:block" />
              <div className="glass-card rounded-2xl p-6 border-dashed hover:border-primary/20 transition-all">
                <p className="text-sm text-muted-foreground italic">
                  🚀 <strong className="text-foreground">Continuous Learning</strong> — Passionate about backend development, data analysis, and continuous growth in software engineering and AI technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
