import React from 'react'
import { Link } from 'react-router'
import SmoothScroll from 'smooth-scroll'

export default React.createClass({
  getDefaultProps() {
    return {
      projects: [
        {
         title: "The Iron Yard Final Project-cAPPsul",
         noLinkTitle: "",
         text: "HTML5, CSS3, React.js, Firebase Database and Storage.",
         video: "https://youtu.be/cpfbtMbh-Tg",
         gitHub: "https://github.com/luciogutz/capsule",
         specialLinktitle: "Watch Video Demo",
         specialLink: "https://youtu.be/cpfbtMbh-Tg",
         imgText: "Screen shot of final project SignIn page",
         imageUrl: "https://github.com/luciogutz/capsule/blob/master/photos/Screen%20Shot%202017-02-19%20at%203.52.47%20PM.png?raw=true"
       },
        {
         title: "Responsive Web-Design",
         text: "HTML5, CSS3, Media Queries.",
         gitHub: "https://github.com/luciogutz/assignments/tree/master/8.3-responsive/comps",
         imgText: "Just and example of what responsive web-design looks like on different devices.",
         imageUrl: "https://accesseducationchina.com/wp-content/uploads/2015/07/boise-responsive-design.png"
       },
       {
         title: "Chat App",
         text: "HTML5, CSS3, React.js, Ajax.",
         gitHub: "https://github.com/luciogutz/assignments/tree/master/7.4-chat-app",
         imgText: "Modeled after Slack",
         imageUrl: "https://premium.wpmudev.org/blog/wp-content/uploads/2015/08/slack.png"
       },
       {
         title: "Client Week Project - Spurs Blog",
         text: "HTML5, CSS3, React.js, Single Page App",
         gitHub: "https://spurs-nation.herokuapp.com/",
         specialLinktitle: "visit site",
         specialLink: "https://spurs-nation.herokuapp.com/",
         imgText: "Click the link to see it on heroku",
         imageUrl: "https://s-media-cache-ak0.pinimg.com/originals/f4/fd/be/f4fdbeed1a5a706fe225a5c4a02042ce.jpg"
       },
       {
         title: "Credit Card Validator",
         text: "HTML5, CSS3, React.js, Validator.",
         gitHub: "https://github.com/luciogutz/assignments/tree/master/7.3-CC-Validation",
         imgText: "Valid Card Rendering",
         imageUrl: "https://github.com/luciogutz/assignments/blob/master/7.3-CC-Validation/Photos/Screen%20Shot%202017-02-19%20at%204.46.05%20PM.png?raw=true",
         imageUrl2: ""
       },
       {
         title: "Contact List",
         text: "HTML5, CSS3, React.js, React-Router with Parameters. ",
         gitHub: "https://github.com/luciogutz/assignments/tree/master/7.2-contact",
         imgText: "Each contact opens to show more details",
         imageUrl: "https://github.com/luciogutz/portfolio/blob/master/Photos/7.2-Contact-image.png?raw=true",
         imageUrl2: "https://github.com/luciogutz/portfolio/blob/master/Photos/7.2-contact-image2.png?raw=true"
       },
       {
         title: "FaceBook-NewsFeed",
         text: "HTML5, CSS3, React.js. Used state and map() to render data.",
         gitHub: "https://github.com/luciogutz/assignments/tree/master/5.4-facebook",
         imgText: "",
         imageUrl: "https://github.com/luciogutz/assignments/blob/master/5.4-facebook/Photos/Screen%20Shot%202017-02-18%20at%209.13.02%20PM.png?raw=true",
         imageUrl2: ""
       },
       {
         title: "Photo-Album-jQuery",
         text: "HTML5, CSS3, jQuery, Modal design",
         gitHub: "https://github.com/luciogutz/assignments/tree/master/4.1-photos-structure",
         imgText: "Each picture opens up to a modal",
         imageUrl: "https://github.com/luciogutz/assignments/blob/master/4.1-photos-structure/photos/Screen%20Shot%202017-02-19%20at%202.45.03%20PM.png?raw=true",
         imageUrl2: "https://github.com/luciogutz/assignments/blob/master/4.1-photos-structure/photos/Screen%20Shot%202017-02-19%20at%202.45.15%20PM.png?raw=true"
       }
     ]
    }
  },
  render(){
    return(
      <section>
      <section name="" className="projects__Banner">
        <div className="projects__Banner--Layer">
        <a name="proj"></a>
         <h2 className="projects__page--Title"> Projects </h2>
         <p className="projects__Banner--description"> The following projects are indicative of my time at The Iron Yard and is a foundational overview of the diverse avenues I have taken and will take as a software developer. </p>
        </div>
      </section>
      <section className="project__Section">

          {
            this.props.projects.map((project, i)=>
            {
              return (
              <div key={i} className="tiles hvr-grow">
                <article ref="projectOne" className="article">
                  <a className="project-Title hvr-underline-from-center" target="_blank" href={ project.gitHub } > { project.title } </a>
                  <div className="text-center">

                    { (project.imageUrl) ? <img className="preview-Image" src={ project.imageUrl } /> : ""
                    }
                    <a href={project.gitHub} target="_blank">
                      <div className="text_Hover">
                         <p className="projects-Description"> { project.text } </p>
                         { (project.specialLink &&    project.specialLinktitle) ? <a className="specialProject-Title orange-hvr-underline-from-center" target="_blank" href={ project.specialLink } > { project.specialLinktitle } </a> : ""
                        }
                      </div>
                    </a>
                  </div>
                </article>
              </div>
              )
            })
          }

      </section>
    </section>

    )
  }
})
