import logo from './logo.svg';
import './App.css';
import Course from './Course';
import Teacher from './Teacher';

function App() {
  return (
    <div className="App">
      <Course title="Java" price="535463" description="Desc"></Course>
      {/* <Course title="React" price="5555" description="Desc"></Course> */}
      <Teacher firstName="Nahid" lastName="Nasiri">
      </Teacher>
    </div>
  );
}

export default App;
