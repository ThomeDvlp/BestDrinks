import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Header = ()=> {
    
    return(
        <>
            <header className="navmenu">
                <nav className='nav'>
                    
                    <Link to= 'drinks' className='logo' >
                        Drinks
                    </Link>
                    <Link to= 'about 'className="menuItem">
                        About Us
                    </Link>
                    <Link to= '/' className="logo">
                        Best Drinks
                    </Link>
                    <Link to= 'squad' className="menuItem">
                        Our Squad
                    </Link>
                    <Link to= 'contact' className="menuItem">
                        Contact
                    </Link>
                    
                </nav>
            </header>
        </>
    ); 
};

export default Header
