import React from 'react'
// import logo from './logo.png'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image"

function SideBarRight() {
  return (
    <div className='sideBarRight'>
      <AnchorLink to="#intro">
      <StaticImage 
        className='side__logo'
        src="../images/logo.png" 
        alt="logo" 
        layout="fixed"
        width={32}
      />
      </AnchorLink>
      <AnchorLink className='side__link san' to="#experience" title="Experiences"><b>01</b></AnchorLink>
      <AnchorLink className='side__link san' to="#project" title="Projects"><b>02</b></AnchorLink>
      <AnchorLink className='side__link san' to="#education" title="Education"><b>03</b></AnchorLink>
      <AnchorLink className='side__linkLast san' to="#contact" title="Contacts"><b>04</b></AnchorLink>
    </div>
  )
}

export default SideBarRight