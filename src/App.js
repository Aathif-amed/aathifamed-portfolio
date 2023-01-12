import "./App.css";
import Background from "./Components/Background";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
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
    </>
  );
}

export default App;
