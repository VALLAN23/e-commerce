import {useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import Mainmenu from './Mainmenu';

function Details() {
    const[category, setCategory] = useState({});
    const{id} = useParams();

    useEffect(() => {
        fetch( `https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setCategory(data))
    }, []);

    return(
        <>
        <Mainmenu/>
        <div className='d-flex justify-content-center align-items-center section' style={{minHeight:"80vh"}} >
            <div className='row m-5 w-100'>
                <div className='col-md-3 mb-5'>
                    <div className='card h-100 text-center p-3 cstegory-card' >

                        <img src={category.image}
                             alt={category.title}
                             className='img-fulid mx-auto'
                             style={{ maxHeight:"300px", maxWidth:"200px", objectFit:"contain"}}      
                        />
                        <div><strong>Categories</strong>{category.category}</div>
                        <div><strong>Description</strong>{category.description}</div>
                    </div><br/>
                     <h3 className='col-md-4 mb-5' style={{justifyContent:"center" }}>All Collections</h3>
                </div>
            </div>
        </div>
       
        </>
    );
}
export default Details;