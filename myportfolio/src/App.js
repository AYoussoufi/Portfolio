import "./App.css";
import Head from "./components/1_Head/Head";
import About from "./components/2_About/About";
import Skills from "./components/3_Skills/Skills";
import Projects from "./components/4_Projects/Projects";
import Experience from "./components/5_Experience/Experience";
import Study from "./components/7_Study/Experience";
import Contact from "./components/6_Contact/Contact";

function App() {
  return (
    <div className="App">
      <Head></Head>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Study></Study>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}

export default App;
