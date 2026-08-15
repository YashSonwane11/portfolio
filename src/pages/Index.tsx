import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CardWrapper from "@/components/CardWrapper";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="dark min-h-screen bg-[#0B1220] text-slate-50">
      <Navbar />
      <main className="relative">
        <CardWrapper zIndex={0}><Hero /></CardWrapper>
        <CardWrapper zIndex={10}><About /></CardWrapper>
        <CardWrapper zIndex={20}><Skills /></CardWrapper>
        <CardWrapper zIndex={30}><Projects /></CardWrapper>
        <CardWrapper zIndex={40}><Experience /></CardWrapper>
        <CardWrapper zIndex={50}><Education /></CardWrapper>
        <CardWrapper zIndex={60}><Contact /></CardWrapper>
      </main>
      <CardWrapper zIndex={70}><Footer /></CardWrapper>
    </div>
  );
};

export default Index;