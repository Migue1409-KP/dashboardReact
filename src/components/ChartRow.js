import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Title}</td>
                    <td>{props.Length}</td>
                    <td>{props.Rating}</td>
                    <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                </tr>
            )
    }
    
        

export default ChartRow;