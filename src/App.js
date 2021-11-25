import './App.css';
import EditTodo from './components/todo/EditTodo';
import DynamicInput from './components/todo/DynamicInput';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path='/'
            element={<DynamicInput />}
          />
        <Route
          path='/edit'
          element={<EditTodo  />}
          />
      </Routes>
    </Router>
    </div >
  );
}

export default App;
