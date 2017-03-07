import React from 'react'
import { Link } from 'react-router'
import SmoothScroll from 'smooth-scroll'

export default React.createClass ({
  onProjectsClick(){
    window.scrollBy({ top: 300, left: 0, behavior: 'smooth' });
  },
  render () {
    return (
      <header className="header">
        <section className="parallax">
          <h1 className="header-Title"> Lucio Gutierrez </h1>

        <p className="welcome"> Hi, my name is Lucio Gutierrez and I am a Front end Developer from San Antonio, TX. Just graduated from The Iron Yard and am excited to see where this new found passion will take me.  </p>
        <section className="menu">
          <Link to="/" className="homeButton hvr-grow">Home</Link>
          <a onClick={this.onProjectsClick} href="#" className="projectsButton hvr-grow">Projects</a>
          <Link to="/Blog" className="blogButton hvr-grow">Blog</Link>
          <Link to="/Resume" className="resumeButton hvr-grow">Resume</Link>
          <a href="https://github.com/luciogutz?tab=repositories" target="_blank" className="gitHubButton hvr-grow">GitHub</a>
        </section>
        </section>
      </header>
    )
  }
})
