import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
      return (
        <section>
          <div className="home-Info">
            <h3 className="home-Name"> Lucio Gutierrez </h3>
            <p className="home-City"> San Antonio, Tx </p>
            <a href="https://github.com/luciogutz" target="_blank" className="home-Github"> GitHub </a>
          </div>
          <article className="home-Bio-Wrapper">
            <h2> Bio Snippet </h2>
            <p className="home-bio"> Hi everyone, welcome to my newly created portfolio. Just wanted to say a little bit about myself. My family and I moved to San Antonio June of 2015 and its been a crazy whirlwind of the unexpected. Lets just say Murphy paid a visit from time to time. ;)
              (If you didn't get that joke then click <a href="https://en.wikipedia.org/wiki/Murphy's_law" target="_blank"> here.</a>)
            </p>
            <p className="home-bio"> Anyways, I have a formal degree from the Texas A&M University-Kingsville in music education. Since moving to San Antonio however it has been extremly difficult finding a job. So what did I do? I changed careers. Now im a student at <a href="https://www.theironyard.com/" target="_blank"> The Iron Yard </a> studying to be a Front-End Software Developer. This site is my account of my journey and experience learning how to code. I hope you enjoy.</p>
          </article>
       </section>
    )
  }
})
