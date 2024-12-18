import NavbarUi from "@/components/NavbarUi";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <>
      <Spotlight />
      <NavbarUi />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
