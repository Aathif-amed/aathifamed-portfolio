import "./App.css";
import Background from "./Components/Background";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import SocialLinks from "./Components/SocialLinks"
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills/>
        <Contact/>
      </main>
      <Background />
      <SocialLinks/>
    </>
  );
}

export default App;
