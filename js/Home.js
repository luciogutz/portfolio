import React from 'react'
import { Link } from 'react-router'
import { ajax } from 'jquery'
import axios from 'axios'
import Header from './Header'
import Projects from './Projects'

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
  render() {
      return (
        <section>
          <Header />
          <Projects />
          <section className="developing__Banner">
            <article className="developing">
              <h1 className="developing__page--Title"> Developing </h1>
              <p className="developing__Text"> My skill set is based on front end development, and I'm continuing to work on those aspects of my abilities. Currently however I have begun to learn PHP and that has been a steady process. </p>
              <p className="developing__Text"> Future goals are to get into mobile applications. Perhaps React Native is a route I will consider taking, or straight IOS or Android development. Either way it ought to be very interesting. </p>
            </article>
            <h2 className="developing__page--Contact"> Contact </h2>
            <a href="mailto:lucio.gutierrez30@yahoo.com" className="email">lucio.gutierrez30@yahoo.com</a>
          </section>
       </section>
    )
  }
})
