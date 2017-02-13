import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section className="sideNav">
        <nav className="nav__div--Buttons">
          <Link className="homeButton hvr-grow" to="/"> Home </Link>
          <Link className="blogButton hvr-grow" to="/Blog"> Blog </Link>
          <Link className="projectsButton hvr-grow" to="/Projects"> Projects </Link>
          <Link to="/Resume" className="resumeButton hvr-grow"> Resume </Link>
          <a href="https://medium.com/@lucius956" target="_blank"><img alt="blog on Medium" className="mediumButton hvr-grow" src="https://www.shareicon.net/download/2015/10/02/110820_blog.ico" alt="text" /></a>
          <a href="https://github.com/luciogutz?tab=repositories" target="_blank"><img alt="text" className="gitHubButton hvr-grow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2000px-Octicons-mark-github.svg.png" /></a>
        </nav>
      </section>
    )
  }
})
