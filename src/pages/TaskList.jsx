import { TaskSelector } from "../store/selectors/taskSelector";
import { deleteTask } from "../store/actions/taskActions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TaskList() {
  const tasks = useSelector(TaskSelector).tasks;
  const dispatch = useDispatch();
  const onDelete = (task) => dispatch(deleteTask(task));
  const [isClicked, setIsClicked] = useState(false);
  const edit = () => {
    setIsClicked(!isClicked);
    // const test = {
    //   nom: nom,
    //   isDone: isDone,
    // };
    // console.log(test);
  };
  return (
    <>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.task}
            {""}
            <button onClick={edit}>edit</button>
            <button onClick={() => onDelete(t)}>X</button>
          </li>
        ))}
      </ul>
      {isClicked && (
        <form>
          <label>Nom de la tache: </label>
          <input type="text" />
          <label>Tache terminée: </label>
          <input type="radio" />
        </form>
      )}
    </>
  );
}

export default TaskList;
