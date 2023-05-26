import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addTask } from "../../store/actions/taskActions";
import  {resetMessage} from "../../store/actions/taskActions";
import { TaskSelector } from "../../store/selectors/taskSelector.js";


function AddTask({ onSubmit }) {
  const [task, setTask] = useState('')
  const {tasks, message} = useSelector(TaskSelector)
  const dispatch = useDispatch()

  const taskFormWrapperStyle = {
    margin: '2rem 0'
  }

  const taskFormStyle = {
    display: 'flex',
    justifyContent: 'center',
    columnGap: '2rem',
    margin: '5rem 0'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask('')
  }

  const handleChange = (e) => {
    setTask(e.target.value)
    dispatch(resetMessage(''))
  }

  return (
    <div style={taskFormWrapperStyle}>
      {message && <span>{message}</span>}
      <form onSubmit={handleSubmit} style={taskFormStyle}>
        <input
          type={"text"}
          placeholder={"Nom de votre tache"}
          value={task}
          onChange={handleChange }
        />
        <button role={'submit'}>Ajouter</button>
      </form>
    </div>
  );
}

export default AddTask;
