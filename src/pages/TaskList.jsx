import TaskComponent from "../component/TaskComponent";

const task = ["aaa", "bbb", "ccc"];
function TaskList() {
  //temporaire pour test

  return (
    <ul>
      {task.map((e, i) => (
        <TaskComponent key={i} props={e} />
      ))}
    </ul>
  );
}

export default TaskList;
