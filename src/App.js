// import logo from './logo.svg';
import './App.css';
import Course from './Course';
import Teacher from './Teacher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Course title = "Mathematic" price= "9999" description = "Course1 Description" />
        <Teacher name="test"/>
      </header>
    </div>
  );
}

export default App;
