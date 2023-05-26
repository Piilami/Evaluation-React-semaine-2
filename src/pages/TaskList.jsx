<<<<<<< HEAD
import TaskComponent from "../component/TaskComponent";

const task = ["aaa", "bbb", "ccc"];
=======
import { TaskSelector } from "../store/selectors/taskSelector";

import {useDispatch, useSelector} from "react-redux";


>>>>>>> fa1bfdefcadd3724c8b31e9ebcaf92c8d52e0356
function TaskList() {
  
  const tasks = useSelector(TaskSelector);


  return (
    <ul>
<<<<<<< HEAD
      {task.map((e, i) => (
        <TaskComponent key={i} props={e} />
=======
      {tasks.map((t, i) => (
        <li key={i}>
          {t.task} <button>X</button>
        </li>
>>>>>>> fa1bfdefcadd3724c8b31e9ebcaf92c8d52e0356
      ))}
    </ul>
  );
}

export default TaskList;
