import "./App.css";
import Background from "./Components/Background";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import SocialLinks from "./Components/SocialLinks";
import Footer from "./Components/Footer";
import Scrollup from "./Components/Scrollup";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
      <Background />
      <SocialLinks />
    </>
  );
}

export default App;
