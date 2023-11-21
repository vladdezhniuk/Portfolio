import React, { useState } from 'react';
import { NavLinkWithDelay } from '../DelayedLink';

import { RoutesConfig } from '@/app/routes';

import './index.scss';

class NavigationLink {
    constructor(
        public label: string,
        public url: string
    ) { }
}

export const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const navLinks = [
        new NavigationLink('About', RoutesConfig.About.path),
        new NavigationLink('Projects', RoutesConfig.Projects.path),
        new NavigationLink('Contact me', RoutesConfig.Contact.path),
    ];

    const changeNavbarVisibility = () => {
        setIsNavbarVisible(prev => !prev);
    };

    return (
        <nav className="nav">
            <div className='nav__wrapper'>
                <NavLinkWithDelay
                    className="nav__link nav__logo"
                    to={RoutesConfig.Home.path}
                    datatype="vladdezhniuk"
                    setIsNavbarVisible={setIsNavbarVisible}
                >
                    vladdezhniuk
                </NavLinkWithDelay>
                <ul className={`nav__list${isNavbarVisible ? '-active' : ''}`}>
                    {navLinks.map((link: NavigationLink) =>
                        <li className="nav__item" key={link.label} >
                            <NavLinkWithDelay
                                to={link.url}
                                className="nav__link"
                                datatype={link.label}
                                setIsNavbarVisible={setIsNavbarVisible}
                            >
                                {link.label}
                            </NavLinkWithDelay>
                        </li>
                    )}
                </ul>
                <div className="nav__control" onClick={changeNavbarVisibility}>
                    {new Array(3).fill('').map((_, index) =>
                        <div className={`nav__control__line ${isNavbarVisible && 'nav__control__line-active'}`} key={index}></div>
                    )}
                </div>
            </div>
        </nav>
    );
};
