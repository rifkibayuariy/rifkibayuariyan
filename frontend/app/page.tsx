import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <div>
          <Education />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Contact />
        </div>
      </main>
    </div>
  );
}
