import { Button } from "@/components/ui/button";
import Navbar from "../src/pages/navbar";
import HeroSection from "../src/pages/hersec";
import Aboutme from "../src/pages/aboutme";
import Projects from "../src/pages/projects";
import Contact from "../src/pages/contact";
import EducationSection from "../src/pages/education";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Aboutme />
      <EducationSection />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
