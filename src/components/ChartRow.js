import React from "react";

function ChartRow(props) {
  if (props.type === "users") {
    return (
      <tr>
        <td>{props.name + " " + props.lastName}</td>
        <td>{props.email}</td>
        <td>
          <a href={props.detail} target="_blank">
            {props.detail}
          </a>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{props.productName}</td>
        <td>{props.listCategoriesProduct}</td>
        <td>
          <a href={props.detail} target="_blank">
            {props.detail}
          </a>
        </td>
        <td>{props.productPrice}</td>
      </tr>
    );
  }
}

export default ChartRow;
