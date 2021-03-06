import React from 'react';
import Navbar from "../NavBar/Navbar";
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__content}>
                <div className={s.header_left_side}>

                    <div className={s.header_search}>
                        <input className={s.search} type='search' placeholder='Search...' />
                    </div>
                </div>
                <div className='header-right-side'>
                    <Navbar />
                </div>
            </div>
        </header>
    );
}

export default Header;