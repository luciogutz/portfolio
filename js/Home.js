import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
      return (
        <section>
          <article className="home-Bio-Wrapper">
            <h2> Bio Snippet </h2>
            <p className="home-bio"> Hi everyone, welcome to my portfolio. Just wanted to say a little bit about myself. My family and I moved to San Antonio June of 2015 and its been a crazy whirlwind of the unexpected. Lets just say Murphy paid a visit from time to time. ;)
              (If you didn't get that joke then click <a href="https://en.wikipedia.org/wiki/Murphy's_law" target="_blank"> here.</a>)
            </p>
            <p className="home-bio"> Anyways, I have a formal degree from the Texas A&M University-Kingsville in music education, Since moving to San Antonio I decided to change careers and pursue software development. Learning how to code has been a great experience for me. I have been able to meet some great people and have developed a passion for my new found skill. My goal is to keep on learning and growing. Im ready to take on new challenges and be successful. This site is my account of my journey and experience. Hope you enjoy.</p>
          </article>
       </section>
    )
  }
})
