import React from 'react'
import { Link } from 'react-router'
import Preview from './Preview'

export default React.createClass({
  getDefaultProps() {
    return {
      projects: [
        {
         title: "",
         noLinkTitle: "The Iron Yard Final Project-cAPPsul",
         text: "The Iron Yard Final Project. I am currently partnered with a local entrepreneur who very recently launched his own startup called RecChanges. Long story short, told him I was studying at the Iron Yard and he gave me the opportunity to bring to life one of his ideas for an app. The goal is to carry this app beyond my time at the Iron Yard, as such I can't talk much about it. Currently the project is being developed as a web app in preparation for demo day Feb. 24th. However, very soon after will be transitioned to a mobile platform. I'm eager to get started with that phase of development. In the meantime Checkout RecChanges",
         gitHub: "",
         specialLinktitle: "www.recchanges.com",
         specialLink: "http://www.recchanges.com/",
         imgText: "Screen shot of final project SignIn page",
         imageUrl: "https://github.com/luciogutz/capsule/blob/master/photos/Screen%20Shot%202017-02-19%20at%203.52.47%20PM.png?raw=true"
       },
        {
         title: "Responsive Web-Design",
         text: "So during The Iron Yard Cohort we were given numorous assignments. Each assignments had some kind of design element to it and I can say that im proud of what I was able to design. However, there was something that always bothered me about my designs. When viewed in different size browsers, my elements would start to jumble up and move everwhere I didnt want them to move. Well this project/assignment was learning how to use media queries to create a responsive web page. I go into much more detail in my blog so check that out.",
         gitHub: "https://github.com/luciogutz/assignments/tree/master/8.3-responsive/comps",
         imgText: "Just and example of what responsive web-design looks like on different devices.",
         imageUrl: "https://accesseducationchina.com/wp-content/uploads/2015/07/boise-responsive-design.png"
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
         gitHub: "https://spurs-nation.herokuapp.com/",
         imgText: "Click the link to see it on heroku",
         imageUrl: "https://s-media-cache-ak0.pinimg.com/originals/f4/fd/be/f4fdbeed1a5a706fe225a5c4a02042ce.jpg"
       },
       {
         title: "Credit Card Validator",
         text: "One of our assignments for week 7 was to create a program that validated a credit card as being valid. Sorry for the redundancy. Ok so what I had to do was pretty straight forward. I used the validator library and its functions to 'check' whether or not an number typed into an input was a valid credit card number. My design was simple, inputs would remain red until a valid credit card number was typed in. If it was not a valid number a pop up would open informing the user of the error. If the number was correct, inputs turn green and a message appears confirming the card number. Like I said pretty straight forward. Check out the code and other photos on github.",
         gitHub: "https://github.com/luciogutz/assignments/tree/master/7.3-CC-Validation",
         imgText: "Valid Card Rendering",
         imageUrl: "https://github.com/luciogutz/assignments/blob/master/7.3-CC-Validation/Photos/Screen%20Shot%202017-02-19%20at%204.15.16%20PM.png?raw=true",
         imageUrl2: "https://github.com/luciogutz/assignments/blob/master/7.3-CC-Validation/Photos/Screen%20Shot%202017-02-19%20at%204.13.42%20PM.png?raw=true"
       },
       {
         title: "Contact List",
         text: "Week 7 was params week. Using react-router, we set up our routes and utilized parameters to set up the different properties needed for our contact list. Here is my component called User with the set params.  <Route path=/User/:name/:email/:phone/:location component={ User }/>. With stubbed in data, I was able to utilize the .map() function to loop through the object array and in the render call each of the params in a <Link /> from 'react-router' to create the opened detailed contact view.",
         gitHub: "https://github.com/luciogutz/assignments/tree/master/7.2-contact",
         imgText: "Each contact opens to show more details",
         imageUrl: "https://github.com/luciogutz/portfolio/blob/master/Photos/7.2-Contact-image.png?raw=true",
         imageUrl2: "https://github.com/luciogutz/portfolio/blob/master/Photos/7.2-contact-image2.png?raw=true"
       },
       {
         title: "FaceBook-NewsFeed",
         text: "Simple assignment, take the newsfeed from Facebook and get as close to the real thing using CSS. Another part of this assignment was to incorporate jest as a test for our assignment. The idea was not to have the test pass, but to have a test written up to see how it worked with our code.  I was introduced to jasmine first, but in my opinion, jest makes more sense. It reads like a story and you have a lot of freedom in the way you want to approach it.",
         gitHub: "https://github.com/luciogutz/assignments/tree/master/5.4-facebook",
         imgText: "",
         imageUrl: "https://github.com/luciogutz/assignments/blob/master/5.4-facebook/Photos/Screen%20Shot%202017-02-18%20at%209.13.02%20PM.png?raw=true",
         imageUrl2: ""
       },
       {
         title: "Photo-Album-jQuery",
         text: "Created a photo album with a theme of our choosing using jQuery.  Originally this assignment was given to us a couple of weeks before and was given to us again and were asked to refactor our code.  At the time I didn't finish it, but after continuing with the course, I went back and took another look at it. I found exactly what was wrong with it and corrected it. Turns out I hadn't added a very important data-js property to my images. It was reassuring to me to go back and remember the frustration of that assignment and seeing how now I was able just to pick out what was wrong with it.",
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
      <section className="project__Section">
        <h2 className="projects__page--Title"> Projects </h2>
        <div className="project__Container">
          {
            this.props.projects.map((project, i)=>
            {
              return (
              <div key={i}>
                <article ref="projectOne" className="article">
                  <h2 className="project-Title">{project.noLinkTitle}  </h2>
                  <a className="project-Title hvr-underline-from-center" target="_blank" href={ project.gitHub } > { project.title } </a>
                  <p className="projects-Description"> { project.text } </p>
                  <a className="specialProject-Title orange-hvr-underline-from-center" target="_blank" href={ project.specialLink } > { project.specialLinktitle } </a>
                  <p className="preview-Clicked-Text"> { project.imgText } </p>
                  <div className="text-center">
                    <img className="preview-Image" src={ project.imageUrl } />
                    <img className="preview-Image" src={project.imageUrl2 } />
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
