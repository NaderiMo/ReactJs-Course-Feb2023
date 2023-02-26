import './App.css';
import MyForm from './component/MyForm';


function App() {
  return (
   
<div>
<MyForm label="user name " placeholder="input here" type="text"></MyForm>
  <MyForm label="password " placeholder="input here" type="password"></MyForm>
</div>
 
  );
}

export default App;
