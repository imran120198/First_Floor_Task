import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import TopHero from "./Components/TopHero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopHero />
      <Card />
    </div>
  );
}

export default App;
