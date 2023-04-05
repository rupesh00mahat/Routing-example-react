import React, { useState } from "react";
import "./style.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function EmployeeInfo() {
  const [employee, setEmployee] = useState([]);
  const userId = useParams();

  useEffect(() => {
    async function getEmployee() {
      fetch(
        `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId.id}`
      ) //api for the get request
        .then((response) => response.json())
        .then((data) => {
          setEmployee(data);
        });
    }
    getEmployee();
  }, []);
  return (
    <>
      {employee.map((data) => {
        return (
          <div id="employee-info" key={data.id}>
            <div>Employee Id: {data.id}</div>
            <div>FirstName: {data.firstName}</div>
            <div>LastName: {data.lastName}</div>
            <div>Email: {data.email}</div>
            <div>ContactNumber: {data.contactNumber}</div>
            <div>Age: {data.age}</div>
            <div>Dob: {data.dob}</div>
            <div>Salary: {data.salary}</div>
            <div>Address: {data.address}</div>
          </div>
        );
      })}
    </>
  );
}

export default EmployeeInfo;
