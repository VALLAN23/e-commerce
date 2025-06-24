import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";

function Categories({ setShowMainMenu }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

  

    return (
        <>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Categories</h1>
            </div>
            <div className="d-flex flex-wrap justify-content-center container">
                {loading ? (
                    <p>Loading categories...</p>
                ) : (
                    products.map((item, index) => (
                        <div key={`${item}-${index}`} className="card m-2" style={{ width: "15rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div className="card-body">
                                <h5 className="card-title">{item}</h5>
                                <p className="card-text">Explore products in the {item} category.</p>
                                <Link to={`/${item}`} className="btn btn-primary">
                                    View Product
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default Categories;
