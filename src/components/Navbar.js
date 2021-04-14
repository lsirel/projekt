import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    //joumees
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    BachataStudioTallinn
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/team' className='nav-links' onClick={closeMobileMenu}>
                            Team
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
                            Courses
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/packages' className='nav-links' onClick={closeMobileMenu}>
                            Packages
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/schedule' className='nav-links' onClick={closeMobileMenu}>
                            Schedule
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                            FAQ
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                </ul>
                <Button/>
            </nav>
        </>
    );
}

export default Navbar;