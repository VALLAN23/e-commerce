import React, { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Jwellery from "./jewellery";
import Signup from "./Sign up";
import Categories from "./Catagories";
import LoginPage from "./Sign in";
import Electronics from "./Electronics";
import MenC from "./Men c";
import WomenC from "./WomensC";
import Details from "./collection";

 
function Routerpath() {
   

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>

                <Route index element={<Categories />}/>
                <Route path="homepage" element = {<Categories/>}/>
                <Route path = "signup" element ={<Signup/>}/>
                <Route path="signin" element = {<LoginPage/>}/>
                <Route path="jewelery" element={<Jwellery/>}/>
                <Route path="electronics" element ={<Electronics/>}/>
                <Route path="men's clothing" element = {<MenC/>}/>
                <Route path="women's clothing" element = {<WomenC/>}/>
                <Route path="proDetails/:id" element = {<Details/>}/>
                
                </Route>

            </Routes>
        </BrowserRouter>
    );
}
export default Routerpath;