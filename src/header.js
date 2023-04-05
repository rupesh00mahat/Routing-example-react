import { NavLink, Navlink } from "react-router-dom";
function Header() {
  const navlinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "white" : "red",
      fontSize: isActive ? "40px" : "20px",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <div id="Navbar">
      <NavLink style={navlinkStyle} to={"/home"}>
        <div>Home</div>
      </NavLink>

      <NavLink style={navlinkStyle} to={"/employees"}>
        <div>About</div>
      </NavLink>

      <NavLink style={navlinkStyle} to={"/services"}>
        <div>Services</div>
      </NavLink>
    </div>
  );
}

export default Header;
