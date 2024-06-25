import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import TopHero from "./Components/TopHero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopHero />
      <Search />
      <Card />
    </div>
  );
}

export default App;
