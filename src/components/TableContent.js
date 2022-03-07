import React from 'react';
import ChartRow from "./ChartRow";


function TableContent(props){
    console.log(props.users != [])
    if(props.name == "users"){
        return (
            <tbody>
                {props.users.map((row) => {
                return <ChartRow {...row} type={props.name} />;
                })}
            </tbody>
        )
      }else{
        return (
            <tbody>
                {props.products.map((row) => {
                return <ChartRow {...row} type={props.name} />;
                })}
            </tbody>
        )
      }
}

export default TableContent;