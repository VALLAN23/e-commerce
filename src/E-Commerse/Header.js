import React from 'react';
import Signin from './Sign in';
import Signup from './Sign up';

function Header() {
    return(
        <header>
            E-Commerse Shop

            <Signin/>
            <Signup/>
        </header>
    )
}
export default Header;