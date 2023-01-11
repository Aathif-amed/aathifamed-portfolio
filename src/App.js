import "./App.css";
import Background from "./Components/Background";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills"
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills/>
      </main>
      <Background />
    </>
  );
}

export default App;
