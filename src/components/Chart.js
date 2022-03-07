import React from "react";
import { useState, useEffect } from "react";
import TableContent from "./TableContent";

function Chart(props) {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const campo1 = props.name == "users" ? "Email" : "Categoria";
  const campo2 = props.name == "users" ? "" : <th>Precio</th>;

  useEffect(() => {
    if (props.name == "users") {
      fetch("https://trueque-online.herokuapp.com/users/api")
        .then((result) => result.json())
        .then((data) => {
          setUsers(data.users);
        })
        .catch((err) => console.log(err));
    } else {
      fetch("https://trueque-online.herokuapp.com/products/api")
        .then((result) => result.json())
        .then((data) => {
          setProducts(data.products);
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
            <TableContent name={props.name} users={users} products={products}/>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
