import { useNavigate, Link, Outlet } from "react-router-dom";
import Employees from "./Employees";
import { useEffect, useState } from "react";

function About() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    async function getEmployees() {
      fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1") //api for the get request
        .then((response) => response.json())
        .then((data) => {
          setEmployees(data);
        });
    }
    getEmployees();
  }, []);

  return (
    <>
      <div className="employees">
        <h1>Our Employees</h1>
        <div className="employee-list">
          {employees.map((emp) => {
            return (
              <Link to={`/employees/${emp.id}`}>
                <Employees
                  key={emp.id}
                  id={emp.id}
                  name={emp.firstName}
                  lastName={emp.lastName}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default About;
