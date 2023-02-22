import logo from './logo.svg';
import Course from './Course';
import Teacher from  './Teacher' ;
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header> */}
      <Course title="ReactJs" price= "9999" />
     <Teacher teacherName="shohreh"/>
    </div>
  );
}

export default App;
