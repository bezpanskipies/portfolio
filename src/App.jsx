import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <footer>
        <p>© 2025 Grzegorz Wylegała</p>
      </footer>
    </div>
  );
}

export default App;
