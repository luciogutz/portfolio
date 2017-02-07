import React from 'react'
import { Link } from 'react-router'

export default React.createClass ({
  render () {
    return (
      <header className="header">
        <section className="header-Title">
          <h1 className="header-Title"> Lucio's Portfolio </h1>
        </section>
        <nav className="nav__div--Buttons">
          <Link className="nav-Buttons nav-Home" to="/"> Home </Link>
          <Link className="nav-Buttons" to="/Blog"> Blog </Link>
          <Link className="nav-Buttons" to="/Projects"> Projects </Link>
          <Link to="/Resume" className="nav-Buttons"> Resume </Link>
        </nav>
      </header>
    )
  }
})
