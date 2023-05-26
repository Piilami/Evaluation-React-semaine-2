import { TaskSelector } from "../store/selectors/taskSelector";

import {useDispatch, useSelector} from "react-redux";


function TaskList() {
  
  const tasks = useSelector(TaskSelector).tasks;
  console.log(tasks)

  return (
    <ul>
      {tasks.map((t, i) => (
        <li key={i}>
          {t.task} <button>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
