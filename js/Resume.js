import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section className="wrapper">
        <section className="leftFloat">
          <article className="sideSectionProfile">
            <img
              className="profileImage"
             src="https://avatars3.githubusercontent.com/u/23609224?v=3&s=460"/>
           <h2 className="myName"> Lucio </h2>
           <h2 className="myName"> Gutierrez </h2>
           <h3 className="jobTitle"> Front-End Developer </h3>
          </article>
          <article className="sideSectionProfileSkills">
            <h3 className="subTitles"><i className="fa fa-code" aria-hidden="true"></i> Languages <i className="fa fa-code" aria-hidden="true"></i></h3>
            <p className="html"> HTML </p>
            <p className="css">  CSS </p>
            <p className="javascript"> JAVASCRIPT </p>
            <p className="jQuery"> ..jQuery</p>
            <p className="React"> ..React</p>
            <p className="jest"> JEST (TDD) </p>
          </article>
          <article className="sideSectionProfileSkills">
            <h3 className="subTitles"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> Other Skills <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> </h3>
            <p className="otherSkills"> Github </p>
            <p className="otherSkills">  Bash </p>
            <p className="otherSkills"> Travis CI </p>
            <p className="otherSkills"> Photoshop </p>
            <p className="otherSkills"> Photography </p>
          </article>
          <article className="sideSectionProfileSkills">
            <h3 className="subTitles"><i className="fa fa-info-circle" aria-hidden="true"></i> Contact Info <i className="fa fa-info-circle" aria-hidden="true"></i></h3>
            <div className="contactInfo">
              <p className="contactInfoDetails"> <span>Phone: </span></p>
              <p className="contactInfoDetails"> 956-648-5695 </p>
              <p className="contactInfoDetails"> <span>Email: </span></p>
              <p className="contactInfoDetails"> Lucio.gutierrez30@yahoo.com </p>
              <p className="contactInfoDetails"> <span>Address: </span> </p>
              <p className="contactInfoDetails"> 6418 Eckhert Rd. Apt #3103 </p>
              <p className="contactInfoDetails">San Antonio, tx 78240</p>
            </div>
          </article>
        </section>
        <section className="mainSection">
          <h2 className="mainSubTitles"> Objective </h2>
          <p className="objective"> My objective is to be on the forefront of the tech industry when it comes the user interface design and experience. My goal is to use the most effective technologies available in coding languages to better advance my personal career, as well as enhance those I collaborate with in the industry. My purpose is to never stop growing and learning, and ultimately be a part of  something new, challenging and different. </p>
          <h2 className="mainSubTitles"> Experience </h2>
          <ul className="listContainer">
            <li className="experience__SubTitle"> The Iron Yard - Nov 28, 2016 - Feb 24, 2017 </li>
              <p className="description"> From November 28 to the present I studied front-end software engineering at the Iron Yard Code School. With an immersive full-time curriculum, I was instructed in techniques and logic pertaining to front-end languages and workflows that are necessary in today's marketplace. This opportunity allowed me to create applications, websites, and functional programs, which in turn gave me a firm foundation, and the skills to expand in other languages and disciplines.      </p>
            <li className="experience__SubTitle"> Lobo Communications - Oct 2015 - present </li>
              <p className="description"> Currently employed as a private contractor for Time Warner/Spectrum Communications. I was responsible for  working with time warner customers with both initial setup and or repair of  cable  connections.  Kept a detailed account of all work and submitted reports in a timely manner. This job allowed me to exercise my problem solving skills due to the variety of situations that the job entailed.  </p>
            <li className="experience__SubTitle"> Music Director/Educator - Fall 2008 - Spring 2015 </li>
              <p className="description"> Spent 7 years as a band director with two school districts, PSJA ISD, and Sharyland ISD. I assisted in my first 3 years, then ran my own department during my last 4. While head director, I Managed daily curriculum and staff, as well as ensured the success of the program and its members through continuous professional development. My students performed at a high level. I expected nothing less then what I was not willing to do myself. </p>
          </ul>
          <h2 className="mainSubTitles"> Education </h2>
            <ul className="listContainer_education">
            <div className="education_containers">
              <li className="experience__SubTitle"> The Iron Yard </li>
              <p className="description education"> Front End Software Engeneering </p>
              <p className="description education"> Graduated Feb 24, 2017</p>
          </div>
          <div className="education_containers">
              <li className="experience__SubTitle"> Texas A&M university - Kingsville </li>
              <p className="description education"> bachelors of arts & science - Music Education </p>
              <p className="description education"> Graduated May 11, 2008 </p>
          </div>
          </ul>
          <h2 className="mainSubTitles"> References </h2>
          <article>
            <div className="reference_one">
              <p className="experience__SubTitle"> James Reyes </p>
              <p className="reference_details"> Field Operations Supervisor </p>
              <p className="reference_details">  Lobo Communications </p>
              <p className="reference_details"> phone: 555-555-5555 </p>
              <p className="reference_details">  Email: yadayada@lobotelecom.net</p>
            </div>
            <div className="reference_two">
              <p className="experience__SubTitle"> Jason Vanderslice </p>
              <p className="reference_details"> I dont know his current title </p>
              <p className="reference_details">  I dont know the company yet </p>
              <p className="reference_details"> phone: 555-555-5555 </p>
              <p className="reference_details">  Email: codingstuff@somthing.com</p>
            </div>
            <div className="reference_two">
              <p className="experience__SubTitle"> Another Person </p>
              <p className="reference_details"> I dont know his current title </p>
              <p className="reference_details">  I dont know the company yet </p>
              <p className="reference_details"> phone: 555-555-5555 </p>
              <p className="reference_details">  Email: codingstuff@something.com</p>
            </div>
            <p className="portfolio">  PORTFOLIO: https:lucio-portfolio.herokuapp.com </p>
          </article>
        </section>
      </section>
    )
  }
})
