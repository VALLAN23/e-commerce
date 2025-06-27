import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Mainmenu from "./Mainmenu";
import { useNavigate } from "react-router-dom";
import useFetch from "./Fetch";

function Jewelry() {
  // const [jewelry, setJewelry] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [jewelry] = useFetch("https://fakestoreapi.com/products/category/jewelery");

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/category/jewelery")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setJewelry(data);
  //     })

  // }, []);


  const getIdData = (a) =>{
    navigate(`/proDetails/${a}`);
  }


  return (
    <>
    <Mainmenu />
    <div className="container">
      <div>
        <h1 className="text-center my-4">JEWELRY</h1>
      </div>
     
        <div className="row">
          {jewelry.map((item) => (
            <div key={item.id} className="col-md-4 mb-4" onClick={() => getIdData(item.id)}>
              <div className="card h-100" style={{boxShadow: "0 8px 8px rgba(1, 1, 1, 1)"}}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "250px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text" title={item.description}>
                    Description: {item.description.length > 100 ? item.description.slice(0, 100) + "..." : item.description}
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span className="text-success fw-bold">Rs {item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
    </>
  );
}

export default Jewelry;
