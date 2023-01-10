import "./App.css";
import Background from "./Components/Background";
import Header from "./Components/Header";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
      <Background />
    </>
  );
}

export default App;
