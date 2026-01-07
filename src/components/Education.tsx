import { GraduationCap, Award, ExternalLink, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (Computer Engineering)",
    institution: "G. H. Raisoni College of Engineering",
    location: "Pune, India",
    duration: "2024 - 2027",
    icon: GraduationCap,
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic, Gondia",
    location: "Gondia, India",
    duration: "2021 - 2024",
    percentage: "80.40%",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    title: "HackerRank SQL Basic Certification",
    description: "Mastered SQL query development by solving numerous real-world problems. Achieved 4-star rating.",
    badge: "4 ⭐",
    link: "https://drive.google.com/file/d/1bVNCGjQgOr7tpk5vDgVp-Ra4SE4OPPyh/view?usp=drive_link",
  },
  {
    title: "Effective Writing (Communication Skills) - NPTEL",
    description: "Developed effective writing skills and professional communication techniques.",
    link: "https://drive.google.com/file/d/1m39F_Uvhc6xm9ytLg1Q1WQIrSIF8qn3U/view?usp=drive_link",
  },
  {
    title: "TCS iON Certification",
    description: "Professional development and industry-standard training certification.",
    link: "https://drive.google.com/file/d/1jryGNgWAqJOSgIjnYNgf7n2io4URlnB4/view?usp=drive_link",
  },
  
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(173_80%_50%/0.05),transparent_60%)]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// ACADEMIC BACKGROUND</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Continuous learning and professional development journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={edu.degree}
                    className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
                    
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground mb-3">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                    
                    {edu.percentage && (
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        Score: {edu.percentage}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <a
                    key={cert.title}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 block group cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold group-hover:text-primary transition-colors">
                            {cert.title}
                          </h4>
                          {cert.badge && (
                            <span className="px-2 py-0.5 text-xs bg-chart-3/20 text-chart-3 rounded-full font-medium">
                              {cert.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
