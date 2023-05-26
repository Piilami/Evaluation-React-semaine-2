import { deleteTask } from "../../store/actions/taskActions";

import { useDispatch, useSelector } from "react-redux";

function TaskComponent(props) {
  return (
    <li>
      <p>{props.value}</p>
      <button>X</button>
    </li>
  );
}

export default TaskComponent;
