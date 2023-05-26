import { NavLink } from "react-router-dom";

function Nav() {
  const style = ({ isActive }) => {
    return {
      color: isActive ? "red" : "#B5B5B5",
    };
  };

  const navStyle = {
    width: "90%",
    margin: "1rem auto",
    textAlign: "center",
  };

  const buttonWrapperStyle = {
    display: "flex",
    margin: "30px",
    justifyContent: "space-around",
  };

  return (
    <nav style={navStyle}>
      <div>
        <h2>Navigation</h2>
      </div>
      <div style={buttonWrapperStyle}>
        <button>
          <NavLink to={"/"} end style={style}>
            TaskList
          </NavLink>
        </button>
        <button>
          <NavLink to={"/addForm"} end style={style}>
            Ajouter une tache
          </NavLink>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
