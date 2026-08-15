import { motion } from "framer-motion";
import { BarChart3, Server, Brain, Code2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const domains = [
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    color: "from-cyan-400 to-blue-500",
    description:
      "Transforming raw datasets into actionable business insights through Power BI dashboards, SQL analysis, DAX, and Tableau visualizations.",
  },
  {
    icon: Code2,
    title: "Java & Backend",
    color: "from-orange-400 to-amber-500",
    description:
      "Building scalable backend systems using Spring Boot, Core Java, JDBC, PostgreSQL, and REST API design.",
  },
  {
    icon: Brain,
    title: "Full-Stack & AI",
    color: "from-violet-400 to-purple-500",
    description:
      "Developing intelligent full-stack applications with React frontends, FastAPI backends, PyTorch models, and Hugging Face LLMs.",
  },
  {
    icon: Server,
    title: "Database Engineering",
    color: "from-emerald-400 to-teal-500",
    description:
      "Designing and optimizing database schemas, ETL pipelines, and analytical reporting views across PostgreSQL, SQL Server, and SQLite.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 glass-section glass-purple">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(280_85%_65%/0.06),transparent_60%)]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">WHO I AM</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A multi-domain technical professional passionate about data, systems, and intelligent applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio */}
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm <strong className="text-foreground">Yashkumar Sonwane</strong>, a Computer Engineering student at G.H. Raisoni College of Engineering, Pune (B.Tech, CGPA: 8.6), with a strong foundation in data analytics, backend engineering, and AI-powered application development.
              </p>
              <p>
                My journey began with a Diploma in Computer Engineering at Government Polytechnic, Gondia (80.40%), where I developed a deep interest in turning complex datasets into clear business narratives. Since then, I've expanded my expertise across three technical domains:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span><strong className="text-foreground">Data Analytics & BI</strong> — SQL, Power BI, DAX, Tableau, and ETL pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span><strong className="text-foreground">Java & Backend</strong> — Spring Boot, JDBC, PostgreSQL, REST APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 mt-1">▸</span>
                  <span><strong className="text-foreground">Full-Stack & AI</strong> — React, FastAPI, PyTorch, Hugging Face LLMs</span>
                </li>
              </ul>
              <p>
                I'm currently seeking <strong className="text-foreground">internship and entry-level opportunities</strong> where I can contribute real value through data-driven engineering and intelligent systems.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "6+", label: "Projects Built", color: "text-primary" },
                { value: "8.6", label: "B.Tech CGPA", color: "text-primary" },
                { value: "3", label: "Technical Domains", color: "text-primary" },
                { value: "5+", label: "Certifications", color: "text-primary" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300"
                >
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Domain Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, idx) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-primary/10 mb-4`}
                >
                  <domain.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-2 text-foreground">{domain.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{domain.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Code Portfolio CTA */}
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group gap-2 border-border text-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              <Link to="/code-portfolio">
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                View Code Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
