import "./App.css";
import Background from "./Components/Background";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import SocialLinks from "./Components/SocialLinks";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Contact />
        <Footer />
      </main>
      <Background />
      <SocialLinks />
    </>
  );
}

export default App;
