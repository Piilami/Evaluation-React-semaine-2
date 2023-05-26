import { NavLink } from 'react-router-dom';

function Nav() {
  const style = ({ isActive }) => {
    return {
      color: isActive ? 'red' : '#B5B5B5',
    }
  }

  return (
    <nav>
      <div>
        <h1>Nav Reduc app</h1>
      </div>
      <div>
        <button>
          <NavLink to={'/'} end style={style}>
            TaskList
          </NavLink>
        </button>
        <button>
          <NavLink to={'/addForm'} end style={style}>
            Add form
          </NavLink>
        </button>
      </div>
    </nav>
  )
}

export default Nav