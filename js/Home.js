import React from 'react'
import { Link } from 'react-router'
import { ajax } from 'jquery'
import axios from 'axios'
import Header from './Header'
import Projects from './Projects'
import SmoothScroll from 'smooth-scroll'

export default React.createClass({
  // getInitialState() {
  //   return {
  //     articles: {
  //         id: "",
  //         name: "",
  //         description: "",
  //         url: "",
  //         category: ""
  //     }
  //   }
  // },
  // componentDidMount: function() {
  //   axios.get("https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=1a07ab283b5e43b898acbf04efbb3136").then(function(results){
  //     console.log(results);
  //   })
  // },
  toTop(){
    SmoothScroll.animateScroll( document.querySelector('#top'), 0, { speed: 2200, easing: 'easeInOutCubic' })
  },
  render() {
      return (
        <section>
          <Header />
          <Projects />
          <section className="developing__Banner">
            <article id="developing" data-scroll
              className="developing">
              <h1 className="developing__page--Title"> Developing </h1>
              <p className="developing__Text"> Just finished up a project for Heavenly Splendor Family Church. It was a complete rebuild of their Wordpress site. It was an awesome process for me and my learning curve has definitely improved. For my next project I will be creating a site that will serve as a marketing tool for myself. Being a freelancer at the moment I want to have something that potential clients can go to and understand what I can do for them. </p>
              <p className="developing__Text"> I will be utilizing React for this project and start to expand on some of the user interactive aspects of design that I have been seeing on other sites. </p>
            </article>
            <h2 className="developing__page--Contact"> Contact </h2>
            <a href="mailto:lucio.gutierrez30@yahoo.com" className="email">lucio.gutierrez30@yahoo.com</a>
            <a className="toTop hvr-grow" onClick={this.toTop}> Menu </a>
          </section>
       </section>
    )
  }
})
