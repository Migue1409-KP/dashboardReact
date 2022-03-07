import React from 'react';
import Chart from './Chart';

function Totals(props){
    if(props.name === "users" || props.name === "products"){
        return(
            <div className='row' style={{margin:"1% 2%"}}>
                <h2 className="h3 mb-0 text-gray-800" style={{margin: "1%", width:"100%"}}>Listado de {props.name}</h2>
                <Chart name = {props.name}/>
            </div>
        ) 
    }else{
        return(
            <div className='row' style={{margin:"1% 2%"}}>
                <h2 className="h3 mb-0 text-gray-800" style={{margin: "1%", width:"100%"}}>Listado de Usuarios</h2>
                <Chart name = "users"/>
                <h2 className="h3 mb-0 text-gray-800" style={{margin: "1%", width:"100%"}}>Listado de Productos</h2>
                <Chart name = "products"/>
            </div>
        )
    }
}

Totals.defaultProps = {
    name: 'all'
}

export default Totals;