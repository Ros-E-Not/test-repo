import React from 'react';
import {Link} from 'react-router-dom';
// import logoImg from '../img/logo.svg'

const Header = () => {

    return (
        <div id="page-header">
            <div id="logo">
                <Link
                    to="/"
                    onClick={
                        () => console.log('clicked')
                    }
                >
                    <img
                        // src={logoImg}
                        alt="Logo"
                    />
                </Link>
            </div>


        </div>
    )
}

export default Header;
