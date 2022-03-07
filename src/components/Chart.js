import React from "react";
import ChartRow from "./ChartRow";
import { useState, useEffect } from "react";

function Chart(props) {
  const [data, setData] = useState([]);
  let campo1 = props.name == "user" ? "Email" : "Categoria";
  let campo2 = props.name == "user" ? "" : "<th>Precio</th>";
  useEffect(() => {
    if (props.name == "user") {
      fetch("https://trueque-online.herokuapp.com/users/api")
        .then((result) => result.json())
        .then((data) => {
          setData(data.users);
        })
        .catch((err) => console.log(err));
    }else{
      fetch("https://trueque-online.herokuapp.com/products/api")
      .then((result) => result.json())
      .then((data) => {
        setData(data.products);
      })
      .catch((err) => console.log(err));
    }
  }, []);
  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>{campo1}</th>
                <th>Link</th>
                {campo2}
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Nombre</th>
                <th>{campo1}</th>
                <th>Link</th>
                {campo2}
              </tr>
            </tfoot>
            <tbody>
              {data.map(row => {
                return <ChartRow {...row} type={props.name} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
