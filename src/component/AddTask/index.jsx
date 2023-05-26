import { useState } from "react";
// import { addTask } from "../../store/actions/taskActions";



function AddTask({ onSubmit }) {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          placeholder={"Nom de votre tache"}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button role={'submit'}>Ajouter</button>
      </form>
    </div>
  );
}

export default AddTask;
