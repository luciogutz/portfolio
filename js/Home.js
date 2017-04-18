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
              <p className="developing__Text"> My skill set is an ongoing process for me and I'm continuing to work on the Front End aspects of my abilities. Currently I have begun to learn PHP and that has been a steady process. Because of this, I have taken on a project to redue a website for a church in the Rio Grande Valley so I can use what I have learned and gain proficiency with PHP and Wordpress. </p>
              <p className="developing__Text"> Future goals are to get into mobile applications. Perhaps React Native is a route I will consider taking, or straight IOS or Android development. Either way it ought to be very interesting. </p>
            </article>
            <h2 className="developing__page--Contact"> Contact </h2>
            <a href="mailto:lucio.gutierrez30@yahoo.com" className="email">lucio.gutierrez30@yahoo.com</a>
            <a className="toTop hvr-grow" onClick={this.toTop}> Menu </a>
          </section>
       </section>
    )
  }
})
