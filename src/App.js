import logo from './logo.svg';
import './App.css';
import Course from './Course';
import Teacher from './Teacher';
import Login from './login';

function App() {
  return (
    <div className="App">
      <Login username="" password=""></Login>
      {/* <Course title="JS" price="5000" description="test"></Course> */}
      {/* <Teacher firstName="Mohsen" lastName="Naderi"></Teacher> */}
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
    </div>

  );
}

export default App;
