import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render(){
    return(
      <section>
        <h2 className="blog-Title"> Blog Posts </h2>
          <a className="blog-Posts" href="https://medium.com/@lucius956/learning-code-or-learning-how-to-fail-695fe004492d#.r3inyhasq" target="_blank"> Learning Code? Or Learning How to Fail </a>
          <a className="blog-Posts" href="https://medium.com/@lucius956/group-project-the-iron-yard-client-week-4420dd8b2f6f#.gqb5ffr6l" target="_blank"> Group Project: The Iron Yard — Client Week </a>
          <p className="blog-Medium">Checkout more post on <a className="blog-Posts" href="https://medium.com/@lucius956/" target="_blank"> Medium </a></p>
      </section>
    )
  }
})
