import React from 'react';
import {useState, useEffect} from 'react'

function LastMovieInDb(){
    const [lastProduct, setLastProduct] = useState([])
    useEffect(() => {
        fetch("https://trueque-online.herokuapp.com/products/api")
            .then(result => result.json())
            .then(data => {
                data.products[(data.products.length-1)].images = data.products[(data.products.length-1)].images[0].path
                setLastProduct(data.products[(data.products.length-1)])
            })
            .catch(err => console.log(err))
    }, [])



    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{maxHeight: 50 +'vh'}} src={"https://trueque-online.herokuapp.com/img/imgProducts/" + lastProduct.images} alt={"https://trueque-online.herokuapp.com/img/imgProducts/" + lastProduct.productName}/>
                    </div>
                    <h2>{lastProduct.productName}</h2>
                    <p>{lastProduct.productDescriptionUpload}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={"https://trueque-online.herokuapp.com/products/"+lastProduct.id}>Ver detalle</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
