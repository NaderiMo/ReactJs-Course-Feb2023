import logo from './logo.svg';
import './App.css';
import Course from './Course';
import Teacher from './Teacher';

function App() {
  return (
    <div className="App">
      <Course title="Reactjs" Price="9999" description="some text"/>
       <Teacher teacherName="Mona" firstName="shahi"/>
    </div>
  );
}

export default App;
