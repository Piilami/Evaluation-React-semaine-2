const task = ["aaa", "bbb", "ccc"];
function TaskList() {
  //temporaire pour test

  return (
    <ul>
      {task.map((e, i) => (
        <li key={i}>
          {e} <button>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
