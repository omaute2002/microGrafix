import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/AboutUs";
import Services from "./Components/Services";
import Service from "./Components/Service";
import TeamMember from "./Components/TeamMember";
import Team from "./Components/Team";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <About />
      <Services />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
