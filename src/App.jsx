import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./component/Nav";
import TaskFormPage from "./pages/TaskFormPage";
import TaskList from "./pages/TaskList";

function App() {
  const dispatch = useDispatch();

  const appStyle = {
    backgroundColor: 'beige',
  }

  const titleStyle = {
    textAlign: 'center',
    color: 'blue'
  }

  return (
    <div style={appStyle}>
      <h1 style={titleStyle}>Application de gestionnaire de taches</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path={"/addForm"} element={<TaskFormPage />} />
      </Routes>
    </div>
  );
}

export default App;
