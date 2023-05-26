import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./component/Nav";
import TaskFormPage from "./pages/TaskFormPage";
import TaskList from "./pages/TaskList";

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path={"/addForm"} element={<TaskFormPage />} />
      </Routes>
    </div>
  );
}

export default App;
