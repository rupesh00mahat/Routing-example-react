import "./style.css";
import { Link, Outlet } from "react-router-dom";
function Services() {
  return (
    <>
      <div>Services</div>
      <Link to={"web-dev"}>
        {" "}
        <div className="services web-dev">Web development</div>
      </Link>
      <Link to={"app-dev"}>
        <div className="services app-dev">App development</div>
      </Link>{" "}
      <Outlet />
    </>
  );
}

export default Services;
