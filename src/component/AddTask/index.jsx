import { useState } from "react";

function AddTask() {

  const [task, setTask] = useState('')

  return (
    <div>
      <form>
        <input
          type={'text'}
          placeholder={'Nom de votre tache'}
        />
      </form>
    </div>
  )
}

export default AddTask