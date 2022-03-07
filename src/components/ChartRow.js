import React from 'react';


function ChartRow(props){
    console.log(props)
    if(props.type == "user"){
        return (
            <tr>
                <td>{props.name + " " + props.lastName}</td>
                <td>{props.email}</td>
                <td><a href={props.detail} target="_blank">{props.detail}</a></td>
            </tr>
        )
    }
}

export default ChartRow;
