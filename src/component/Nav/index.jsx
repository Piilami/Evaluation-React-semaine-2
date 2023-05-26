import { NavLink } from "react-router-dom";

const navButton = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px ",
};

function Nav() {
  const style = ({ isActive }) => {
    return {
      color: isActive ? "red" : "#B5B5B5",
    };
  };

  return (
    <nav>
      <div>
        <h1>Nav Reduc app</h1>
      </div>
      <div style={navButton}>
        <button style={navButton}>
          <NavLink to={"/"} end style={style}>
            TaskList
          </NavLink>
        </button>
        <button>
          <NavLink to={"/addForm"} end style={style}>
            Add form
          </NavLink>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
