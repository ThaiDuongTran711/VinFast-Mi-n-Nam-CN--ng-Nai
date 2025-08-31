import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

import nav from '../data/nav'
import './Header.css'

function NavItem({ item, close }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="nav-item">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen(o => !o)}
        className="nav-link"
      >
        {item.label}
        {item.children?.length ? <ChevronDown size={16} /> : null}
      </button>
      {item.children?.length && open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="dropdown"
        >
          {item.children.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              onClick={close}
              className="dropdown-item"
            >
              <div className="dropdown-label">{c.label}</div>
              <div className="dropdown-desc">{c.desc}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon"></span>
          VinFast
        </Link>

        <nav className="nav">
          {nav.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </nav>

        <div className="mobile-menu-btn">
          <button aria-label="Menu" onClick={() => setOpen(o => !o)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          <div className="mobile-container">
            {nav.map((item) => (
              <div key={item.label} className="mobile-section">
                <div className="mobile-title">{item.label}</div>
                {item.children?.map(c => (
                  <NavLink
                    key={c.to}
                    to={c.to}
                    onClick={() => setOpen(false)}
                    className="mobile-link"
                  >
                    {c.label}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
