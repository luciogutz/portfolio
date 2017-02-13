import React from 'react'
import { Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import SideNav from './SideNav'

export default React.createClass({
  render() {
    return (
      <section>
        <Header />
        <SideNav />
        { this.props.children }
      </section>
    )
  }
})
