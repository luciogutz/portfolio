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
       },
       {
         title: "Credit Card Validator",
         text: "One of our assignments for week 7 was to create a program that validated a credit card as being valid. Sorry for the redundancy. Ok so what I had to do was pretty straight forward. I used the validator library and its functions to 'check' whether or not an number typed into an input was a valid credit card number. My design was simple, inputs would remain red until a valid credit card number was typed in. If it was not a valid number a pop up would open informing the user of the error. If the number was correct, inputs turn green and a message appears confirming the card number. Like I said pretty straight forward. Check out the code and other photos on github.",
         gitHub: "https://github.com/luciogutz/assignments/tree/master/7.3-CC-Validation",
         imgText: "Valid Card Rendering",
         imageUrl: "https://files.slack.com/files-tmb/T37E93AFL-F435BMU2K-f8c0e6c0c2/screen_shot_2017-02-07_at_11.13.23_pm_720.png"
       }
     ]
    }
  },
  render(){
    return(
      <section className="project__Section">
        <h2 className="projects__page--Title"> Projects </h2>
        <div className="project__Container">
          {
            this.props.projects.map((project, i)=>
            {
              return (
              <div key={i}>
                <article ref="projectOne" className="article">
                  <a className="project-Link project-Title" href={ project.gitHub } > { project.title } </a>
                  <p className="projects-Description"> { project.text } </p>
                  <p className="preview-Clicked-Text"> { project.imgText } </p>
                  <div className="text-center">
                    <img className="preview-Image" src={ project.imageUrl } />
                  </div>
                </article>
              </div>
              )
            })
          }
        </div>
      </section>

    )
  }
})
