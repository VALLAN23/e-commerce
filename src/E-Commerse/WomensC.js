import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Mainmenu from "./Mainmenu";
import { useNavigate } from "react-router-dom";
import useFetch from "./Fetch";

function Womenc() {
    // const [collection, setCollections] = useState([]);
    const navigate = useNavigate();
    const [collection] = useFetch("https://fakestoreapi.com/products/category/women's clothing");

    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products/category/women's clothing")
    //         .then((response) => response.json())
    //         .then((data) => setCollections(data))
    //         .catch((error) => console.error("Error fetching women's collection:", error));
    // }, []);

    const getIdData = (a) => {
        navigate(`/proDetails/${a}`)
    }

    return (
        <>
           <Mainmenu/>
        <div className="container">
            <h1 className="text-center my-4">WOMEN'S COLLECTION</h1>
            <div className="row">
                {collection.map((item) => (
                    <div key={item.id} className="col-md-4 mb-4" onClick={() => getIdData(item.id)}>
                        <div className="card h-100" style={{boxShadow: "0 8px 8px rgba(1, 1, 1, 1)"}}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="card-img-top p-3"
                                style={{ height: "250px", objectFit: "contain" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text " title={item.description}>
                                    {item.description.length > 100 ? item.description.substring(0, 100) + "..." : item.description}
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

export default Womenc;