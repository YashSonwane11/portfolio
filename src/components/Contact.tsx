import { Mail, Linkedin, Github, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(173_80%_50%/0.08),transparent_60%)]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// LET'S CONNECT</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Open to opportunities in Data Analytics and Business Intelligence. 
              Let's discuss how I can help transform your data into insights.
            </p>
          </div>
          
         {/* Contact Card */}
        <div className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Left - Contact Info */}
            <div className="flex flex-col space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 gap-4">
                  
                  <a
                    href="mailto:yashsonwane438@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
                  >
                    <div className="shrink-0 p-3 rounded-lg bg-primary/20">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0"> {/* min-w-0 prevents text overflow */}
                      <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-semibold">Email</p>
                      <p className="font-medium group-hover:text-primary transition-colors truncate">
                        yashsonwane438@gmail.com
                      </p>
                    </div>
                  </a>
                  
                  <a
                    href="tel:+918767735611"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
                  >
                    <div className="shrink-0 p-3 rounded-lg bg-primary/20">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-semibold">Phone</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        +91 8767735611
                      </p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-transparent">
                    <div className="shrink-0 p-3 rounded-lg bg-primary/20">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-semibold">Location</p>
                      <p className="font-medium">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Social Links */}
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6">Connect Online</h3>
                <div className="grid grid-cols-1 gap-4">
                  
                  <a
                    href="https://www.linkedin.com/in/yash-sonwane-88a92923a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 p-3 rounded-lg bg-[#0077B5]/20">
                        <Linkedin className="w-5 h-5 text-[#0077B5]" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          LinkedIn
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Professional Network
                        </p>
                      </div>
                    </div>
                    <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all hidden sm:block" />
                  </a>
                  
                  <a
                    href="https://github.com/YashSonwane11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 p-3 rounded-lg bg-foreground/10">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          GitHub
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Code Portfolio
                        </p>
                      </div>
                    </div>
                    <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all hidden sm:block" />
                  </a>
                </div>
              </div>
              
              <Button className="w-full mt-10 lg:mt-auto" size="lg" asChild>
                <a href="mailto:yashsonwane438@gmail.com" className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
