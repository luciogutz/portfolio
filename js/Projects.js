import React from 'react'
import { Link } from 'react-router'
import Preview from './Preview'

export default React.createClass({
  render(){
    return(
      <section>
        <h2 className="projects-Title"> Projects </h2>
        <a className="project-Link" href="https://github.com/luciogutz/client-week-project" target="_blank"> Client Week Project - Spurs Blog </a>
        <p className="projects-Description"> Ok so this past week we were broken up into 2 groups of 4 people. Our assignment was to create a blog site called "All about the Spurs". Basically it was a site that allowed users to create a blog post about anything having to do with our local NBA team the Spurs. It went well. If your interested in the code used to create what we did click the title link above. I would love to here feed back about anything that we could have done better so feel free to send me an email.</p>
        <Preview />
      </section>
    )
  }
})
