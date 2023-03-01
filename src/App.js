import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import CardList from './components/CardList';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
        <Clock/>
        <CardList />
        <Counter/>
    </div>
  );
}

export default App;
