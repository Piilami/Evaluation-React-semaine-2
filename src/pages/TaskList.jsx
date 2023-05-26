import { TaskSelector } from "../store/selectors/taskSelector";
import { deleteTask } from "../store/actions/taskActions";

import { useDispatch, useSelector } from "react-redux";

function TaskList() {
  const tasks = useSelector(TaskSelector).tasks;
  console.log(tasks);
  const dispatch = useDispatch();
  const onDelete = (task) => dispatch(deleteTask(task));

  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {console.log(tasks)}
          {t.task}
          {""}
          <button onClick={() => onDelete(t.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
