
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function EmpList() {
  const [emps, setEmps] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`https://dummy.restapiexample.com/api/v1/employees`);
    setEmps(data.data);
  };
  var result = emps.map( (item,index)=>
    <p>{item.employee_name}</p>
  );
  return <><div>{result}</div>
  <button onClick={getData}>Get Data</button></>;
}
