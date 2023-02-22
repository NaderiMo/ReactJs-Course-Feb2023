
import './App.css';
import Course from "./Course"
import Teacher from './Teacher';
function App() {
  return (
    <div className="App">
      <Course title="React js" price="1000$" description="desc2"/>
      {/* <Course></Course> */}
      <Teacher name="Behnam"/>
    </div>
  );
}

export default App;
