import "./style/main.css"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";

import ScrollToTop from "./Utils/scrollToTop";

function App() {
  return (
      <div className="App">
          <Router>
              <ScrollToTop/>
              <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/projects" element={<Projects/>}/>
                    <Route exact path="/project" element={<Project/>}/>
                    <Route exact path="/contacts" element={<Contacts/>}/>
                </Routes>
              <Footer/>
          </Router>
      </div>
  );
}

export default App;
