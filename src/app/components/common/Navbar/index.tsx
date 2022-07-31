import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'

class NavigationLink {
  constructor(
    public label: string,
    public url: string
  ) { }
}

export const Navbar = () => {

  const navLinks = [
    new NavigationLink('About', '/about'),
    new NavigationLink('Projects', '/projects'),
    new NavigationLink('Contact me', '/contact'),
  ]

  return (
    <nav className="nav">
      <Link className='nav__link nav__logo' to="/" datatype="vladdezhniuk">vladdezhniuk</Link>
      <ul className='nav__list'>
        {navLinks.map((link: NavigationLink) =>
          <li className='nav__item' key={link.label} >
            <NavLink to={link.url} className='nav__link' datatype={link.label} >
              {link.label}
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}
