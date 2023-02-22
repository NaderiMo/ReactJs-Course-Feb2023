import logo from './logo.svg';
import './App.css';
import Course from './Course';
import Teacher from './Teacher';

function App() {
  return (
    
    <div className="App">
      <Course title="ReactJs" price="9999" description="React is a useful course."></Course>
      <Teacher firstName="Mohsen" lastName="Naderi"></Teacher>
      <Course title="JavaScript" price="8888" description="React is another useful course."></Course>
      <Teacher firstName="Ali" lastName="Khodashenas"></Teacher>
    </div>
  );
}

export default App;
