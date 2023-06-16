import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navBar.js';
import  HomePage  from './components/homePage.js';
import  Projects  from "./components/projects.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Projects />
    </div>
  );
}

export default App;
