import React from 'react';
import { Link } from 'react-router-dom';

function Mainmenu() {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="homepage">Category</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" style={{justifyContent: "flex-end"}}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/electronics" class="nav-link">Electronics</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/jewelery">Jewellery</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/men's clothing">Men's Clothing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/women's clothing">Women's Clothing</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
    )
}
export default Mainmenu;