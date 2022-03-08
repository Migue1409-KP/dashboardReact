import React from "react";
import { useState, useEffect } from "react";

function GenresInDb(props) {
  const [category, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://trueque-online.herokuapp.com/products/categories/api")
    .then((result) => result.json())  
    .then((data) => {
      setCategories(data.categories);
    })
    .catch((err) => console.log(err));
  },[])

  return (
    <div className={"col-lg-"+props.lg+" mb-4"} style={{margin:"1% 0"}}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias de Productos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Hogar <strong>{category.hogar}</strong></div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Vehiculos <strong>{category.vehiculos}</strong></div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Electrodomésticos <strong>{category.electrodomesticos}</strong></div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Inmobiliaria <strong>{category.inmobiliaria}</strong></div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Electrónica <strong>{category.electronica}</strong></div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body"> Ropa y accesorios <strong>{category.ropa}</strong></div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Deportes <strong>{category.deportes}</strong></div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Libros, revistas y comics <strong>{category.libros}</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
