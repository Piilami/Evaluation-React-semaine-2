function TaskList() {
  const task = ["aaa", "bbb", "ccc"];

  return (
    <ul>
      {task.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ul>
  );
}

export default TaskList;
