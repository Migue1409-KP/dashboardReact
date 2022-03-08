import React from 'react';
import {useState, useEffect} from 'react'

function LastUser(){
    const [lastUser, setLastUser] = useState([])
    useEffect(() => {
        fetch("https://trueque-online.herokuapp.com/users/api")
            .then(result => result.json())
            .then(data => {
                setLastUser(data.users[data.count-1])
            })
            .catch(err => console.log(err))
    }, [])



    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo usuario agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{maxHeight: 50 +'vh'}} src={lastUser.avatar} alt={lastUser.name}/>
                    </div>
                    <h2>{lastUser.name + " " + lastUser.lastName}</h2>
                    <p>{lastUser.email}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={lastUser.detail}>Ver detalle</a>
                </div>
            </div>
        </div>
    )
}

export default LastUser;