
import './App.css';
import { NavBar } from './components/navBar.js';
import  HomePage  from './components/homePage.js';
import  Skills from "./components/skills.js";
import  Projects  from "./components/projects.js";
import  Contact from "./components/contact.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
