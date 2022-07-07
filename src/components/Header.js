import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image"


function Header() {
  return (
    <div className='header' id='intro'>
      <AnchorLink to="#intro">
        <StaticImage 
          src="../images/logo1.png" 
          alt="logo" 
          layout="fixed"
          width={40}
        />
      </AnchorLink>
        {/* <img className='header__logo' src={logo} alt="logo"/> */}
      <div className='header__nav'>
        <AnchorLink className='header__link san' to="#experience" title="Experiences"><b>01</b> Experience</AnchorLink>
        <AnchorLink className='header__link san' to="#project" title="Projects"><b>02</b> Project</AnchorLink>
        <AnchorLink className='header__link san' to="#education" title="Education"><b>03</b> Education</AnchorLink>
        <AnchorLink className='header__link san' to="#contact" title="Contacts"><b>04</b> About</AnchorLink>
        {/* <button className='header__btn'>Resume</button> */}
      </div>

      {/* Hamburger Nav for Mobile */}
      <input id="toggle" type="checkbox"></input>
      <label for="toggle" class="hamburger">
        <div class="top-bun"></div>
        <div class="meat"></div>
        <div class="bottom-bun"></div>
      </label>

      <div class="nav">
        <div class="nav-wrapper">
          <nav>
          <AnchorLink to="#experience" title="Experiences"><b>01.</b> Experience</AnchorLink><br />
          <AnchorLink to="#project" title="Projects"><b>02.</b> Project</AnchorLink><br />
          <AnchorLink to="#education" title="Education"><b>03.</b> Education</AnchorLink><br />
          <AnchorLink to="#contact" title="Contacts"><b>04.</b> Contact</AnchorLink>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header