
import {useDispatch, useSelector} from "react-redux";
import {addTask, deleteTask} from "../store/actions/taskActions.js"
import { TaskSelector } from "../store/selectors/taskSelector.js";
import AddTask from "../component/AddTask/index"


function TaskFormPage() {
  const {tasks} = useSelector(TaskSelector)
  const dispatch = useDispatch();
  const onAddTask = (name) => dispatch(addTask(name))

  return (
    <div>
      <AddTask onSubmit={onAddTask}/>
    </div>
  )
}

export default TaskFormPage