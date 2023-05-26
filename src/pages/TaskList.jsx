import { TaskSelector } from "../store/selectors/taskSelector";
import { deleteTask } from "../store/actions/taskActions";

import { useDispatch, useSelector } from "react-redux";

function TaskList() {
  const tasks = useSelector(TaskSelector);
  const dispatch = useDispatch();
  const onDelete = (task) => dispatch(deleteTask(task));

  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {t.task}
          {""}
          <button onClick={() => onDelete(t)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
