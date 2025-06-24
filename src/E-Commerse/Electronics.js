import React,{ useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Mainmenu from './Mainmenu';
import { useNavigate } from 'react-router-dom';


function Electronics() {
    const[products, setProducts] =useState([]);
 const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/electronics")
        .then((response) => response.json())
        .then((data) => setProducts(data))

    }, []);

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
                        <div className='card h-100 shadow-sm'>
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
                                    <buttton className="btn btn-primary">Add to Card</buttton>
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