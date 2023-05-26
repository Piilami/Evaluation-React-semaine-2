
import {useDispatch, useSelector} from "react-redux";
import {addTask, deleteTask} from "../store/actions/taskActions.js"
import { TaskSelector } from "../store/selectors/taskSelector.js";
import AddTask from "../component/AddTask/index"


function TaskFormPage() {
  const {task, error} = useSelector(TaskSelector)
  const dispatch = useDispatch();
  const onAddTask = (name) => dispatch(addTask(name))

  return (
    <div>
      {error && <span>{error}</span>}
      <AddTask onSubmit={onAddTask}/>
    </div>
  )
}

export default TaskFormPage