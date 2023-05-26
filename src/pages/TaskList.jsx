import { TaskSelector } from "../store/selectors/taskSelector";
import { deleteTask } from "../store/actions/taskActions";
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
        <form>
          <label>Nom de la tache: </label>
          <input type="text" name="task"
            checked={editedTask.task}/>
          <label>Tache terminée: </label>
          <input type="radio" name="done"
            checked={editedTask.done}/>
        </form>
      )}
    </>
  );
}

export default TaskList;
