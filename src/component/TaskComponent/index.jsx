import { deleteTask } from "../../store/actions/taskActions";
import { TaskSelector } from "../../store/selector/TaskSelectors";
import { useDispatch, useSelector } from "react-redux";


function TaskList() 





function TaskComponent(props) {
  return (
    <li>
      <p>{props.value}</p>
      <button>X</button>
    </li>
  );
}

export default TaskComponent;
