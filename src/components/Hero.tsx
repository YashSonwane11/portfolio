"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const name = "YASHKUMAR SONWANE";

  const { scrollY } = useScroll();
  const profileOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const profileScale = useTransform(scrollY, [0, 150], [1, 0.8]);
  const profileY = useTransform(scrollY, [0, 150], [0, -50]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(173_80%_50%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(262_83%_58%/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            style={{ opacity: profileOpacity, scale: profileScale, y: profileY }}
            className="relative mb-10"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-background">
              <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="typing text-gradient">{name}</span>
            <span className="blink text-foreground">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
            Data Analyst <span className="text-primary">|</span> Business Intelligence Specialist
          </p>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span>Pune, Maharashtra, India</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button variant="default" size="lg" className="group" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>

            {/* <-- USE ABSOLUTE PATH: leading slash prevents relative path bugs --> */}
            <Button variant="outline" size="lg" asChild>
              <a href="resume.pdf" download >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <Mail className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer" />
            <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer" />
            <Github className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer" />
          </div>
        </div>
      </div>

      <style>{`
        .typing {
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          animation: typing 2.8s steps(28), blink 0.7s step-end infinite;
        }
        @keyframes typing { from { width: 0; } to { width: 100%; } }
        .blink { animation: blink 0.7s step-end infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
