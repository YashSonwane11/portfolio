import {
  ExternalLink,
  Github,
  BarChart3,
  TrendingUp,
  Clock,
  PieChart,
  Smartphone,
  Map,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Pizza Sales Data Analysis Dashboard",
    image: "/Pizza_Dashbord.webp",
    subtitle: "SQL + Power BI Project",
    description:
      "Analyzed pizza sales data using SQL and visualized insights in a Power BI dashboard to improve business performance and optimize menu strategy.",
    techStack: ["SQL", "Power BI", "Data Visualization", "DAX", "Data Analysis"],
    outcomes: [
      {
        icon: TrendingUp,
        title: "High Performers Identified",
        desc: "Thai Chicken Pizza as top seller",
      },
      {
        icon: Clock,
        title: "Peak Times Discovered",
        desc: "Friday & Saturday evenings",
      },
      {
        icon: BarChart3,
        title: "Seasonal Trends",
        desc: "July & January peak months",
      },
    ],
    kpis: [
      "Total Revenue",
      "Average Order Value",
      "Total Pizzas Sold",
      "Total Orders",
      "Average Pizzas per Order",
    ],
    githubLink: "https://github.com/YashSonwane11/Pizza-Sales-Analysis",
    featured: true,
  },

  /* ================= NEW PROJECT ================= */
  {
    title: "Mobile Sales Dashboard",
    image: "/DashboardImage.webp",
    subtitle: "Power BI | Excel Project",
    description:
      "Built an interactive Power BI dashboard to analyze mobile phone sales across India, uncovering sales trends, customer behavior, payment preferences, and brand performance.",
    techStack: [
      "Power BI",
      "Microsoft Excel",
      "Data Analysis",
      "Data Visualization",
    ],
    outcomes: [
      {
        icon: Smartphone,
        title: "Brand Performance",
        desc: "Apple, Samsung & Xiaomi sales comparison",
      },
      {
        icon: Map,
        title: "City-wise Insights",
        desc: "Identified top-performing cities across India",
      },
      {
        icon: CreditCard,
        title: "Payment Trends",
        desc: "UPI & Card-based transactions dominated",
      },
    ],
    kpis: [
      "Total Sales",
      "Total Quantity Sold",
      "Transactions Count",
      "Average Price",
      "Customer Ratings",
    ],
    githubLink:
      "https://github.com/YashSonwane11/Mobile-Sales-Dashboard.git",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(262_83%_58%/0.05),transparent_60%)]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">FEATURED WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Projects & <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real-world data analysis projects delivering actionable business
              insights
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-card rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500"
              >
                {/* Project Header */}
                <div className="bg-gradient-to-r from-primary/10 to-chart-5/10 p-8 border-b border-border/50">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      {project.featured && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                          <PieChart className="w-4 h-4" />
                          Featured Project
                        </div>
                      )}
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>

                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Image */}
                {project.image && (
                  <div className="w-full p-8 bg-gradient-to-b from-transparent to-black/20 border-b border-border/50 relative overflow-hidden group">
                    {/* Decorative blurred backdrop */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-20 blur-2xl scale-110 transition-transform duration-700 group-hover:scale-125 group-hover:opacity-30"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />

                    {/* Image container with glassmorphism frame */}
                    <div className="relative mx-auto max-w-4xl rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 ring-1 ring-white/5 transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(147,51,234,0.3)] group-hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                )}

                {/* Project Content */}
                <div className="p-8">
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Key Outcomes
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {project.outcomes.map((outcome) => (
                        <div
                          key={outcome.title}
                          className="p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all"
                        >
                          <outcome.icon className="w-8 h-8 text-primary mb-3" />
                          <h5 className="font-semibold mb-1">
                            {outcome.title}
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            {outcome.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* KPIs */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      KPIs Calculated
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.kpis.map((kpi) => (
                        <span
                          key={kpi}
                          className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {kpi}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
