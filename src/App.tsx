import "./lib/animate/animate.min.css";
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import "./components/css/bootstrap.min.css"; //global css imports
import "./components/css/style.css";

//all imports must start with capital letter
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/about";
import Events from "./components/events";
import Footer from "./components/footer";
import HomeBody from "./components/homeBody";
import HomeJsLibs from "./components/homeJsLibs";
import Magazine from "./components/magazineBody";
import Navbar from "./components/navBar";
function Home() {
  return (
    <>
      <HomeBody />
      <HomeJsLibs />
    </>
  );
}

function EventsFn() {
  return (
    <>
      <Events />
    </>
  );
}
function MagazineFn() {
  return (
    <>
      <Magazine />
    </>
  );
}
function AboutFn() {
  return (
    <>
      <About />
    </>
  );
}
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsFn />} />
        <Route path="/magazine" element={<MagazineFn />} />
        <Route path="/about" element={<AboutFn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
