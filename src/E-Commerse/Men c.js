import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Mainmenu from "./Mainmenu";
import { useNavigate } from "react-router-dom";


function MenC() {
    const[collections, setCollections] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((response) => response.json())
        .then((data) => { setCollections(data)});
    },[]);

    const getIdData = (a) => {
      navigate(`/proDetails/${a}`)
    }

    return(
        <>
        <Mainmenu/>
          <div>
            <h1 style={{textAlign:"center"}}>Mens Collections</h1>
          </div>
          <br/>
          <div className="container">
            <div className="row">
                {collections.map((item, index) => (
                  <div key={index} className="col-md-4 mb-4" onClick={() => getIdData(item.id)}>
                    <div className="card h-100">
                        <img 
                            src={item.image}
                            alt={item.title}
                            className="card-image-top"
                            style={{width:"100%", height:"250px", objectFit:"contain"  }}
                        />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description.substring(0,100)}....</p>         
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <span className="text-success fw-bold">Rs {item.price}</span>
                        <button className="btn btn-warning">Add To Card</button>
                    </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
      
        </>
    );
}
export default MenC;