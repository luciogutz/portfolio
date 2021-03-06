import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  getDefaultProps() {
    return {
      blogs: [
        {
          blogTitle: "Life after The Iron Yard — PHP",
          blogLink: "https://medium.com/@lucius956/life-after-the-iron-yard-php-c1d08376cc83#.ldlxptx74",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/PHP.gif?raw=true"
        },
        {
          blogTitle: "The Finish Line — The Iron Yard",
          blogLink: "https://medium.com/@lucius956/the-finish-line-the-iron-yard-cf277b178201#.3u5b5farr",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/The-finish-line.jpeg?raw=true"
        },
        {
          blogTitle: "Week 3 — The Iron Yard — Final Project",
          blogLink: "https://medium.com/@lucius956/week-3-the-iron-yard-final-project-ac96196c876b#.aq21ea9cb",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/workflow-blog-feature.png?raw=true"
        },
        {
          blogTitle: "Week 2, Final Project— The Iron Yard",
          blogLink: "https://medium.com/@lucius956/final-project-the-iron-yard-2e749886beb9#.4hr2odlmn",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/firebase.png?raw=true"
        },
        {
          blogTitle: "Final Project — The Iron Yard",
          blogLink: "https://medium.com/@lucius956/final-project-the-iron-yard-47784bd60b83#.od27qiydw",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/Computing,_programming_and_coding_in_schools.jpg?raw=true"
        },
        {
          blogTitle: "Responsive Web-Design, my first crack at it.",
          blogLink: "https://medium.com/@lucius956/responsive-web-design-my-first-crack-at-it-b2b4d79b71bc#.podexi26m",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/responsive-web-design.jpeg?raw=true"
        },
        {
          blogTitle: "IBM Design Thinking — The Iron Yard — Austin Campus",
          blogLink: "https://medium.com/@lucius956/ibm-design-thinking-the-iron-yard-austin-campus-93165c6b62ae#.c5ymchmgx",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/IBM.png?raw=true"
        },
        {
          blogTitle: "Client Week day 4, 5 and 6 — The Iron Yard",
          blogLink: "https://medium.com/@lucius956/client-week-day-4-5-and-6-the-iron-yard-f206f7a01412#.4f9d35an8",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/All-things-spurs.png?raw=true"
        },
        {
          blogTitle: "Client Week day 3 -onClick using React",
          blogLink: "https://medium.com/@lucius956/client-week-day-3-onclick-using-react-982daff7a826#.x8h4d5b55",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/react.png?raw=true"
        },
        {
          blogTitle: "Client Week at The Iron Yard Day 2",
          blogLink: "https://medium.com/@lucius956/client-week-at-the-iron-yard-day-2-6d2bbb476097#.em116apof",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/Teamwork.jpg?raw=true"
        },
        {
          blogTitle: "Group Project: The Iron Yard — Client Week",
          blogLink: "https://medium.com/@lucius956/group-project-the-iron-yard-client-week-4420dd8b2f6f#.7m2g7qwab",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/meeting_client.jpg?raw=true"
        },
        {
          blogTitle: "Learning Code? Or learning how to fail?",
          blogLink: "https://medium.com/@lucius956/learning-code-or-learning-how-to-fail-695fe004492d#.5twzuuj54",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/learning-how-to-fail.jpeg?raw=true"
        },
        {
          blogTitle: "Week 4 of The Iron Yard…",
          blogLink: "https://medium.com/@lucius956/week-4-of-the-iron-yard-7d07ae93b655#.rcm6xoki9",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/jQuery%20Interview%20Questions%20and%20Answers.png?raw=true"
        },
        {
          blogTitle: "Beginner coder….the struggle is real.",
          blogLink: "https://medium.com/@lucius956/beginner-coder-the-struggle-is-real-83fd1dae831b#.1qmos583d",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/struggle-is-real.png?raw=true"
        },
        {
          blogTitle: "The Iron Yard…Week 2 Project.",
          blogLink: "https://medium.com/@lucius956/the-iron-yard-week-2-project-4f6682843bba#.fgfvoz8z4",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/week-2-project.png?raw=true"
        },
        {
          blogTitle: "The Iron Yard…Week 2…learning javascript…",
          blogLink: "https://medium.com/@lucius956/the-iron-yard-week-2-learning-javascript-eae2ba34163e#.gitij3x8d",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/Javascript-shopping-cart.png?raw=true"
        },
        {
          blogTitle: "From Composer to Coder…why knowing music helps with programing.",
          blogLink: "https://medium.com/@lucius956/from-composer-to-coder-why-knowing-music-helps-with-programing-4a16adb5b33#.kv75ha5za",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/composer-to-coder.jpeg?raw=true"
        },
        {
          blogTitle: "First week of The Iron Yard….done! Front-End Engineering.",
          blogLink: "https://medium.com/@lucius956/first-week-of-the-iron-yard-done-front-end-engineering-749cb1e4e98e#.z419tzsog",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/first-week-done.png?raw=true"
        },
        {
          blogTitle: "Git er Dun!",
          blogLink: "https://medium.com/@lucius956/git-er-dun-64e1e8edc690#.aaun7wkbr",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/Git-Logo.png?raw=true"
        },
        {
          blogTitle: "Terminal, Terminal, Terminal",
          blogLink: "https://medium.com/@lucius956/terminal-terminal-terminal-60ec035a837#.ywiatchl4",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/terminal.png?raw=true"
        },
        {
          blogTitle: "My first day at The Iron Yard…",
          blogLink: "https://medium.com/@lucius956/my-first-day-at-the-iron-yard-67340fbf7676#.u2v3cckv3",
          imgURL: "https://github.com/luciogutz/portfolio/blob/master/Photos/First-Day-of-School.jpg?raw=true"
        }
      ]
    }
  },
  render(){
    return(
    <div>
      <section className="blogWrapper">
        <article className="blog__inside--wrapper">
        <h2 className="blog-Title"> Blog Posts </h2>

         {
            this.props.blogs.map((blog, i)=>
            {
          return (
            <div key={i}>
              <article>
              <a className="blog-Posts hvr-glow" href={ blog.blogLink } target="_blank"> { blog.blogTitle } </a>
              <img src={blog.imgURL} className="blog__Image"/>
              </article>
            </div>
          )
        })
       }
     </article>
      </section>
    </div>
    )
   }
 })
