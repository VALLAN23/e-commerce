import {useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import Mainmenu from './Mainmenu';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
        <div className=' container'  >
            <div className='row'>
                <div className='col'>
                    <div style={{width:"30rem"}} >

                        <img src={category.image}
                             alt={category.title}
                             className='card-img-left'
                             style={{ height:"500px", width:"500px", objectFit:"contain",display:"flex"}}      
                        />
                    </div>
                </div>
                <div className='col' style={{marginTop:"50px", fontSize:"x-large"}}>
                    {category.title}
                    <div style={{fontFamily:"monospace", color:"blue", marginTop:"20px"}}> <h1>Price:{category.price}</h1></div>
                    <div><h2>About this item</h2></div>
                    <div>{category.description}</div>
                    <div style={{ marginTop:"30px"}}><button style={{borderRadius:"20px"}} className='btn btn-warning'>Add to Cart</button></div>
                    </div> 

                   
                            
            </div>
        </div>
        
        
       
        </>
    );
}
export default Details;