import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Signup() {
    return(
        <>
        <div className='container' style={{textAlign:"center", marginTop:"50px"}}>
            <div className='header'>
                <div className='text'><h2>Sign Up</h2></div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input' style={{marginTop:"20px"}}>
                    <input type='text' placeholder='Name'/>
                </div>
                <div className='input' style={{marginTop:"10px"}}>
                    <input type='email' placeholder='Email'/>
                </div>
                <div className='input' style={{marginTop:"10px"}}>
                    <input type='password' placeholder='Password'/>
                </div>
            </div>
            <div className='forgot-password' style={{marginTop:"15px"}}><h5>Lost Password? <span>Click Here!</span></h5> </div>
            <div className='submit-container'style={{marginTop:"20px"}} >
                <div className='submit btn btn-primary'>Sign Up</div>
                <div className='submit btn btn-primary'style={{marginLeft:"10px"}} >Login</div>
            </div>
        </div>
        </>
    )
}
export default Signup;
