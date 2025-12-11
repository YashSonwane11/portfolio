import { Mail, Linkedin, Github, MapPin, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(173_80%_50%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(262_83%_58%/0.08),transparent_50%)]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-chart-2 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-chart-5 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 opacity-0 animate-fade-up animate-delay-100">
            <span className="text-gradient">Yashkumar</span>{" "}
            <span className="text-foreground">Sonwane</span>
          </h1>
          
          {/* Role */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 opacity-0 animate-fade-up animate-delay-200">
            Data Analyst <span className="text-primary">|</span> Business Intelligence Specialist
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 opacity-0 animate-fade-up animate-delay-300">
            <MapPin className="w-4 h-4" />
            <span>Pune, Maharashtra, India</span>
          </div>
          
          {/* Summary */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up animate-delay-400">
            Data-Driven Problem Solver committed to transforming complex data into clear, 
            actionable insights. Expert in the full analytics lifecycle, from data cleaning 
            and extraction using <span className="text-primary font-medium">SQL</span> and{" "}
            <span className="text-primary font-medium">Python</span> to final visualization 
            with <span className="text-primary font-medium">Power BI</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up animate-delay-500">
            <Button variant="default" size="lg" className="group" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://drive.google.com/file/d/1bVNCGjQgOr7tpk5vDgVp-Ra4SE4OPPyh/view" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-up animate-delay-600">
            <a
              href="mailto:yashsonwane438@gmail.com"
              className="p-3 rounded-xl glass-card hover:border-primary/50 hover:glow-border transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-sonwane-88a92923a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card hover:border-primary/50 hover:glow-border transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/YashSonwane11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card hover:border-primary/50 hover:glow-border transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-600">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
