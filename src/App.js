import logo from './logo.svg';
import './App.css';
import Course from './Course';
import Teacher from './Teacher';
import Customer from './Customer';

function App() {
  return (
    <div className="App">
      {/* <Course/> */}
      <Course title="ReactJs" price="345" description="Test"/>
      <Course title="Java" price="123456" description="some desc"/>
      {/* <Course></Course> */}
      {/* <Teacher/> */}
      <Teacher teacherName="Parisa" family="Ghasemian"/>
      <Customer/>

    </div>
  );
}

export default App;
