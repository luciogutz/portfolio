import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps() {
    return {
      blogs: [
        {
          blogTitle: "Responsive Web-Design, my first crack at it.",
          blogLink: "https://medium.com/@lucius956/responsive-web-design-my-first-crack-at-it-b2b4d79b71bc#.podexi26m"
        },
        {
          blogTitle: "",
          blogLink: ""
        },
        {
          blogTitle: "",
          blogLink: ""
        },
        {
          blogTitle: "",
          blogLink: ""
        },
        {
          blogTitle: "",
          blogLink: ""
        }
      ]
    }
  },
  render(){
    return(
      <section>
        <h2 className="blog-Title"> Blog Posts </h2>
         {
            this.props.blogs.map((blog, i)=>
            {
          return (
            <div key={i}>
              <article>
              <a className="blog-Posts" href={ blog.blogLink } target="_blank"> { blog.blogTitle } </a>
              </article>
            </div>
          )
        })
       }
      </section>
    )
   }
 })
