import logo from './logo.svg';
import './App.css';
import Course from './Course';
import Teacher from './Teacher';
import Customer from './Customer';
import Input from './Input';

function App() {
  return (
    <div className="App">
      {/* <Course/> */}
      {/* <Course title="ReactJs" price="345" description="Test"/> */}
      {/* <Course title="Java" price="123456" description="some desc"/> */}
      {/* <Course></Course> */}
      {/* <Teacher/> */}
      {/* <Teacher teacherName="Parisa" family="Ghasemian"/> */}
      {/* <Customer/> */}

      <Input type="text" placeHolder="input here" label="userName:"/>
      <Input type="password" placeHolder="input your password here" label="password:" />


    </div>
  );
}

export default App;
