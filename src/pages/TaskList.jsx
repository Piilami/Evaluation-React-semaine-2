import { TaskSelector } from "../store/selectors/taskSelector";
import { deleteTask, updateTask } from "../store/actions/taskActions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TaskList() {
  const tasks = useSelector(TaskSelector).tasks;
  const dispatch = useDispatch();
  const onDelete = (task) => dispatch(deleteTask(task));
  const [isClicked, setIsClicked] = useState(false);
  const [editedTask, setEditedTask] = useState({
    id: null,
    task: "",
    done: false,
  });


  const edit = (taskId) => {
    setIsClicked(!isClicked);
    const task = tasks.find((t) => t.id === taskId)
    setEditedTask(task);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const inputValue = type === "checkbox" ? checked : value;



    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask(editedTask));
    setIsClicked(false);
  };

  return (
    <>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.task}
            {""}
            <button onClick={() => edit(t.id)}>edit</button>
            <button onClick={() => onDelete(t)}>X</button>
          </li>
        ))}
      </ul>
      {isClicked && (
        <form onSubmit={handleSubmit}>
          <label>Nom de la tache: </label>
          <input type="text" name="task"
            value={editedTask.task}
            onChange={handleInputChange} />
          <label>Tache terminée: </label>
          <input type="checkbox" name="done"
            checked={editedTask.done}
            onChange={handleInputChange} />

          <button role={"submit"}>Save</button>
        </form>
      )}
    </>
  );
}

export default TaskList;
