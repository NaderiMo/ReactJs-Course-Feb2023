import logo from "./logo.svg";
import "./App.css";
import Course from "./Course.js";
import Teacher from "./Teacher";

function App() {
  return (
    <div className="App">
      <Course tittle="ReactJs" price="99999" description="PERFECT"></Course>
      <Course tittle="Javascript" price="99999" description="PERFECT"></Course>
      {/* <Course></Course> */}
      {/* <Teacher></Teacher> */}
      {/* <Teacher teacherName="yasamin" /> */}
      <Teacher teacherName="yasamin" />
    </div>
  );
}

export default App;
