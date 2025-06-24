import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button className='btn btn-primary'> <Link class="navbar-brand" to="homepage">Home</Link></button>
   
    <div class="collapse navbar-collapse" id="navbarNav" style={{justifyContent: "flex-end"}}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <button className='btn btn-secondary' style={{marginRight: "10px" }}> 
            <Link class="nav-link active"  to="signin">Signin</Link></button>
        </li>
        <li class="nav-item">
          <button className='btn btn-secondary' 
          > 
            <Link class="nav-link" to="signup">Signup</Link></button>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true"></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar;
