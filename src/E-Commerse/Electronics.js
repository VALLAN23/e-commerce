import React,{ useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Mainmenu from './Mainmenu';
import { useNavigate } from 'react-router-dom';
import useFetch from './Fetch';


function Electronics() {
    // const [products, setProducts] =useState([]);
    const navigate = useNavigate();
    const [products] = useFetch("https://fakestoreapi.com/products/category/electronics");


    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products/category/electronics")
    //     .then((response) => response.json())
    //     .then((data) => setProducts(data))

    // }, []);

    const getIdData = (a) => {
        navigate(`/proDetails/${a}`);
    } 

    return(
        <>
        <Mainmenu />
        <div className='container'>
            <h2 className='text-center my-4'>Electronics Collection</h2>
            <div className='row'>
                {products.map((product) => (
                    <div className='col-md-4 mb-4'key={product.id}  onClick={() => getIdData(product.id)}>
                        <div className='card h-100' style={{boxShadow: "0 8px 8px rgba(1, 1, 1, 1)"}}>
                            <img 
                                src={product.image}
                                className='card-img-top p-3'
                                alt={product.title}
                                style={{ height:"200px", objectFit:"contain" }}
                                />
                                <div className='card-body text-center'>
                                    <h5 className='card-title' style={{ fontSize:"1rem", minHeight:"60px"}}>
                                        {product.title}
                                    </h5>
                                    <p className='card-text text-success fw-bold'> ₹ {product.price}</p>
                                </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
        
        </>
    );
}
export default Electronics;