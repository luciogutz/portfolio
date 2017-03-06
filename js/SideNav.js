import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section className="">
        <nav className="">
          <Link className="hvr-grow" to="/"> Home </Link>
          <Link className="hvr-grow" to="/Blog"> Blog </Link>
          <Link className="hvr-grow" to="/Projects"> Projects </Link>
          <Link to="/Resume" className="hvr-grow"> Resume </Link>
          <a href="https://medium.com/@lucius956" target="_blank"> Blog </a>
          <a href="https://github.com/luciogutz?tab=repositories" target="_blank">gitHub</a>
        </nav>
      </section>
    )
  }
})
