import "./App.css";
import Counter from "./components/Counter";
import Register from "./components/Register";
import Todos from "./components/Todos";
import ViewTodo from "./components/ViewTodo";
import {Routes, Route} from 'react-router-dom'


function App() {
  
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Todos/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/viewtodo/:id" element={<ViewTodo/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
