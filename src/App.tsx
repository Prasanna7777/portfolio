import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Education from "./components/Education";
import Recognition from "./components/Recognition";
import { profile } from "./data";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Research />
        <Education />
        <Recognition />
      </main>
      <footer className="wrap foot">
        <p className="muted small">{profile.name}</p>
      </footer>
    </>
  );
}