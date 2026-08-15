"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Download,
  ArrowDown,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ===== FLOATING ICON BACKGROUND ===== */
const ICONS = [
  "/icons/react.png",
  "/icons/js.png",
  "/icons/node.png",
  "/icons/python.png",
  "/icons/sql.png",
  "/icons/powerbi.png",
  "/icons/business-intelligence.png",
  "/icons/excel.png",
  "/icons/analysis.png",
  "/icons/data visualization.png",
];

function HeroIconBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {ICONS.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt=""
          className="absolute w-12 h-12 md:w-16 md:h-16 opacity-60"
          style={{
            left: `${8 + (i % 5) * 18}%`,
            top: i < 5 ? "18%" : "68%",
          }}
          animate={{
            y: [0, -22, 0],
            rotate: [0, 6, 0],
          }}
          transition={{
            duration: 6 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}



/* ===== HERO ===== */
const Hero = () => {
  const name = "YASHKUMAR SONWANE";

  const { scrollY } = useScroll();
  const profileOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const profileScale = useTransform(scrollY, [0, 150], [1, 0.85]);
  const profileY = useTransform(scrollY, [0, 150], [0, -40]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Floating icons */}
      <HeroIconBackground />

      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(173_80%_50%/0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(262_83%_58%/0.1),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.35)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />

      {/* Content */}
      <div className="container relative z-10 px-6 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Profile image */}
          <motion.div
            style={{ opacity: profileOpacity, scale: profileScale, y: profileY }}
            className="relative mb-10"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-background">
              <img
                src="/profile.png"
                alt="Yashkumar Sonwane"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Availability */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 mt-4 text-gradient leading-tight">
            {name}
          </h1>

          {/* Multi-domain role */}
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground font-medium mb-3 leading-relaxed">
            Data Analyst{" "}
            <span className="text-cyan-400">|</span>{" "}
            Business Intelligence{" "}
            <span className="text-violet-400">|</span>{" "}
            Java Backend{" "}
            <span className="text-emerald-400">|</span>{" "}
            Full-Stack &amp; AI
          </p>

          {/* Tagline */}
          <p className="text-sm md:text-base text-muted-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            Turning data into insights, building scalable backend systems, and developing intelligent full-stack applications.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span>Pune, Maharashtra, India</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button variant="default" size="lg" className="group" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-5">
            {[
              { icon: Mail, href: "mailto:yashsonwane438@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+918767735611", label: "Phone" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/yash-sonwane-88a92923a", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/YashSonwane11", label: "GitHub" },
            ].map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                whileHover={{ y: -4, scale: 1.1 }}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary transition"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
