import Navbar from "@/components/Navbar";
import GitHubSection from "@/components/GitHubSection";
import Footer from "@/components/Footer";
import CardWrapper from "@/components/CardWrapper";

const CodePortfolio = () => {
  return (
    <div className="dark min-h-screen bg-[#0B1220] text-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1 relative">
        <CardWrapper zIndex={10}>
          <GitHubSection />
        </CardWrapper>
      </main>
      <CardWrapper zIndex={20}>
        <Footer />
      </CardWrapper>
    </div>
  );
};

export default CodePortfolio;
