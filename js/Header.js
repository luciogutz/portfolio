import React from 'react'
import { Link } from 'react-router'
import SmoothScroll from 'smooth-scroll'

export default React.createClass ({
  onProjectsClick(){
    //SmoothScroll.animateScroll( 820 )
    SmoothScroll.animateScroll(document.querySelector('#projects'), 0, { speed: 1000, easing: 'easeInOutCubic' })
  },
  onDeveloping(){
    SmoothScroll.animateScroll( document.querySelector('#developing'), 0, { speed: 2000, easing: 'easeInOutCubic' })
  },
  render () {
    return (
      <header className="header">
        <a id="top"></a>
        <section className="parallax">
          <h1 className="header-Title"> Lucio Gutierrez </h1>

        <p className="welcome"> Hi, my name is Lucio Gutierrez and I am a Front end Developer from San Antonio, TX. Just graduated from The Iron Yard and am excited to see where this new found passion will take me.  </p>
        <section className="menu">
          <Link to="/" className="homeButton hvr-grow">Home</Link>
          <a ref="proj" className="projectsButton hvr-grow"  onClick={this.onProjectsClick} data-scroll data-options='{"easing": "easeInOutCubic"}'> Projects </a>
          <Link href="https://medium.com/@lucius956" target="_blank" className="blogButton hvr-grow">Blog</Link>
          <Link to="/Resume" className="resumeButton hvr-grow">Resume</Link>
          <a onClick={this.onDeveloping} className="developingButton hvr-grow"> Developing </a>
          <a href="https://github.com/luciogutz?tab=repositories" target="_blank" className="gitHubButton hvr-grow">GitHub</a>
        </section>
        </section>
      </header>
    )
  }
})
