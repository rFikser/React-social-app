import React from 'react';
import s from './Navbar.module.css';


const Navbar = () => {
    return (
        <div className='nav-menu-wrapper'>
            <ul className={s.menu}>
                <li className={s.menu__item}><a href='#'>Login</a></li>
                <li className={s.menu__item}><a href='#'>Settings</a></li>

            </ul>
        </div>
    );
}

export default Navbar;