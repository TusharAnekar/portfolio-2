import "./App.css";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { useThemeContext } from "./contexts/theme-context";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`App bg-bkg text-content theme-${theme}`}>
      <div className=" sticky top-0 bg-orange-500">
        <Header />
      </div>

      <Hero />
      <div className="border-t-2 border-content">
        <Skills />
      </div>

      <div className="border-t-2 border-content">
        <Projects />
      </div>

      <div className="border-t-2 border-content">
        <Experience />
      </div>

      <div className="border-t-2 border-content">
        <Contact />
      </div>

      <div className="border-t-2 border-content">
        <Footer />
      </div>
    </div>
  );
}

export default App;
