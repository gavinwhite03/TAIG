import './Navbar.css'
import { useState } from 'react'
import logo from '../assets/logo.svg'

function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const menuItems = [
    { label: 'HOME', href: '/home' },
    { label: 'ABOUT', href: '/about' },
    { label: 'EPISODES', href: '/episodes' },
    { label: 'BLOG', href: '/blog' },
    { label: 'NEWSLETTER', href: '/newsletter' },
  ]

  const dropdownItems = [
    { label: 'Recommended Reading', href: '#reading' },
    { label: 'Resources', href: '#resources' },
  ]

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
        <li 
          className="more-dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="more-button">
            MORE <span className={`arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
          </button>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
            {dropdownItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar