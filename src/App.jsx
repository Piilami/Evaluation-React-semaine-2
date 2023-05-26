// import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./component/Nav";
import TaskFormPage from "./pages/TaskFormPage";



function App() {

  const dispatch = useDispatch();

  return (
    <div>
      <Nav />
      <Routes>
        <Route path={'/addForm'} element={<TaskFormPage/>}/>
      </Routes>
    </div>

  )
}

export default App;
