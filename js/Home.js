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
          <section>
            <article className="developing">
              <h1> Developing </h1>
              <p>  </p>
            </article>
          </section>
       </section>
    )
  }
})
