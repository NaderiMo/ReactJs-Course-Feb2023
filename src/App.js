import "./App.css";
import CardList from "./components/CardList";
import Clock from "./components/Clock";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <CardList></CardList>
      <Clock />
      <Counter />
    </div>
  );
}

export default App;
