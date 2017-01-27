import React from 'react'
import { Link } from 'react-router'
import Preview from './Preview'

export default React.createClass({
  getDefaultProps() {
    return {
      projects: [
        {
         title: "Responsive Web-Design",
         text: "So during The Iron Yard Cohort we were given numorous assignments. Each assignments had some kind of design element to it and I can say that im proud of what I was able to design. However, there was something that always bothered me about my designs. When viewed in different size browsers, my elements would start to jumble up and move everwhere I didnt want them to move. Well this project/assignment was learning how to use media queries to create a responsive web page. I go into much more detail in my blog so check that out.",
         gitHub: "https://github.com/luciogutz/assignments/tree/master/8.3-responsive/comps",
         imgText: "Just and example of what responsive web-design looks like on different devices.",
         imageUrl: "https://www.thinsquare.com/blog/wp-content/uploads/2016/02/Responsive-Web-Design.png"
       },
       {
         title: "Chat App",
         text: "Taking Slack as a point of reference, our assignment was to build a chat app. Its a simple design with the input at the bottom and each message showing up in the section above.",
         gitHub: "https://github.com/luciogutz/assignments/tree/master/7.4-chat-app",
         imgText: "Modeled after Slack",
         imageUrl: "https://premium.wpmudev.org/blog/wp-content/uploads/2015/08/slack.png"
       },
       {
         title: "Client Week Project - Spurs Blog",
         text: "Ok so this past week we were broken up into 2 groups of 4 people. Our assignment was to create a blog site called All about the Spurs. Basically it was a site that allowed users to create a blog post about anything having to do with our local NBA team the Spurs. It went well. If your interested in the code used to create what we did click the title link above. I would love to here feed back about anything that we could have done better so feel free to send me an email.",
         gitHub: "https://github.com/luciogutz/client-week-project",
         imgText: "We went with the vintage logo.",
         imageUrl: "https://s-media-cache-ak0.pinimg.com/originals/f4/fd/be/f4fdbeed1a5a706fe225a5c4a02042ce.jpg"
       }
     ]
    }
  },
  render(){
    return(
      <section>
        <h2 className="projects__page--Title"> Projects </h2>
          {
            this.props.projects.map((project, i)=>
            {
              return (
              <div key={i}>
                <article ref="projectOne" className="article">
                  <a className="project-Link project-Title" href={ project.gitHub } > { project.title } </a>
                  <p className="projects-Description"> { project.text } </p>
                  <p className="preview-Clicked-Text"> { project.imgText } </p>
                  <img className="preview-Image" src={ project.imageUrl } />
                </article>
              </div>
              )
            })
          }
      </section>

    )
  }
})
