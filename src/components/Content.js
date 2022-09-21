import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from 'gatsby';
import Footer from './Footer';
import { StaticImage } from "gatsby-plugin-image"


function Content() {
  return (
    <div className='content'>
        <section id='intro'> 
            <p className='intro__title_tiny san'>Hello, my name is </p>
            <AnchorLink to="#contact" title="Contacts" className='intro__title san'>Michelle Weng</AnchorLink>
            <h1 className='intro__statement'>I enjoy making web apps.</h1>
            {/* <h1 className='intro__statement'>and photography.</h1>  */}
            {/* <h1>baking banana bread, traveling, movie nights, reading manga</h1> */}
            <p className='intro__mini'>I’m a student studying computer science with a passion for Data.</p>
            <p className='intro__mini'>Currently looking for co-op and internship oppertunities as an software engineer.</p>
        </section>    

        <section id='experience'>
        <h1 className='yellow san'>01. Experiences </h1>
        <hr/>
        <h2>
            The Embedded Sensing and Computing Lab
            <br/>
            May 2022 to Present:  
            <Link className='blue' to='https://www.buffalo.edu/ubnow/campus.host.html/content/shared/university/news/ub-reporter-articles/stories/2022/05/cyber-manufacturing-grant.detail.html'> REU Cyber-Manufacturing Systems</Link>
            <br/>
            Spring 22:
            Student Research
            <br />
             - Collaborated with fellow student to create the Magic Painting Board. In charge of data collection
            <br />
            Fall 21:
            Assistant Researcher
            <br />
            - Assistated Ph.D student with research activities including proof reading paper for submission.
            
        </h2>
        </section> 

        <section id='project'>
            <h1 className='yellow san'>02. Projects and Technologies</h1>
            <br />
              
            <h2 className='center san'>Tools I Use:</h2>
            <div className='tools'>
                <StaticImage 
                    src= "../images/python.png"
                    alt="js logo" layout="fixed" width={70}
                />
                <StaticImage 
                    src= "../images/js.png"
                    alt="js logo" layout="fixed" width={70}
                />
                <StaticImage 
                    src= "../images/react.png"
                    alt="js logo" layout="fixed" width={85}
                />
                <StaticImage 
                    src= "../images/mongo.png"
                    alt="js logo" layout="fixed" width={85}
                />
                <StaticImage 
                    src= "../images/docker.png"
                    alt="js logo" layout="fixed" width={80}
                />
                <StaticImage 
                    src= "../images/aws.png"
                    alt="js logo" layout="fixed" width={120}
                />
            </div>
              
            <h2 className='center san'>Curated Projects:</h2>
              
            <div className='projecto'>
                  {/* Project 1  */}
                <a href="http://44.206.189.200:3000/" aria-label="GitHub" target="_blank" rel="noreferrer">
                    <h2 className='center san project__tit'>Current Project for REU</h2>
                </a>
                <StaticImage 
                    src= "../images/stream.JPG"
                    alt="encoder project logo" 
                /> 
                <div className='project__des'>
                    {/* <h2 className='center san'>Sharable Grocery List</h2> */}
                    <ul>
                        <li>Web app to monitor 3D printers in real time. </li>
                        {/* <li>Create a lists, then add your family or friends to update or add items in real time.</li> */}
                    </ul>
                    <p className='center san'>Python(Flask), ReactJS, AWS(DynamoDB, Cognito, Lambda Functions)</p>
                    <br />
                      
                    <div className='center' id='project__links'>      
                        {/* <a href="https://github.com/5arthak/CSE-312-Encoders" aria-label="GitHub" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            role="img" 
                            viewBox="0 0 32 32" fill="none" stroke="currentColor" 
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                            class="center">
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a> */}
                        <a href="http://44.206.189.200:3000/" aria-label="WebSite" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 32 32" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="center">
                            <title>External Link</title>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className='projecto'>
                <a href="https://github.com/5arthak/CSE-312-Encoders" aria-label="GitHub" target="_blank" rel="noreferrer">
                      <h2 className='center san project__tit'>Sharable Grocery List</h2>
                </a>
              <StaticImage 
                    src= "../images/encoder1.jpg"
                    alt="encoder project logo" 
                  /> 
                <div className='project__des'>
                {/* <h2 className='center san'>Sharable Grocery List</h2> */}
                      <ul>
                          <li>Web app for sharable grocery list and discounts. </li>
                          <li>Create a lists, then add your family or friends to update or add items in real time.</li>
                      </ul>
                <p className='center san'>Python, Websocket, JS, MongoDB, Docker, AWS</p>
                <br />
                <div className='center'>      
                    <a href="https://github.com/5arthak/CSE-312-Encoders" aria-label="GitHub" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        viewBox="0 0 32 32" fill="none" stroke="currentColor" 
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                        class="center">
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="http://encoderlist.click" aria-label="WebSite" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 32 32" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="center">
                        <title>External Link</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
                </div>
            </div>
              
            <div className='projecto'>
            {/* <a href="http://" aria-label="GitHub" target="_blank" rel="noreferrer"> */}
                <h2 className='center san project__tit'>Magic Painting Board</h2>
            {/* </a> */}
              <StaticImage 
                    src= "../images/mpb1.JPG"
                    alt="encoder project logo" 
                  /> 
                <div className='project__des'>
                {/* <h2 className='center san'>Sharable Grocery List</h2> */}
                      <ul>
                          <li>Implementing the Pix2Pix Gan AI model for transforming edges (or sketches) to realistic images for multiple objects as a proof of concept to explore the limitations of the model. </li>
                          <li>Collected, filtered, and modified images from Bing with Python used to train the model.</li>
                      </ul>
                <p className='center san'>Python (Flask, OpenCV), JavaScript (ReactJS)</p>
                <br />
                <div className='center'>      
                {/* <a href="https://github.com/5arthak/CSE-312-Encoders" aria-label="GitHub" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    role="img" 
                    viewBox="0 0 32 32" fill="none" stroke="currentColor" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                    class="center">
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
                <a href="http://encoderlist.click" aria-label="WebSite" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 32 32" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="center">
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a> */}
                </div>
            </div>
            

              </div>
              

              <div className='projecto'>
                  {/* Project 1  */}
                <a href="https://nsfgrants.netlify.app" aria-label="Website" target="_blank" rel="noreferrer">
                    <h2 className='center san project__tit'>NSF Research Grant Rankings</h2>
                </a>
                <StaticImage 
                    src= "../images/nsf.JPG"
                    alt="encoder project logo" 
                /> 
                <div className='project__des'>
                    {/* <h2 className='center san'>Sharable Grocery List</h2> */}
                    <ul>
                        <li>Developed a full-stack application, to display the ranking of research institutions based on grants awarded by the National Science Foundation.
                            This allows a clear view of what each institution is known for to help students and graduates decide which institution has strong research funding in their desired field.
                        </li>
                    </ul>
                    <p className='center san'>JavaScript (ReactJS, Express with NodeJS), Python, SQLite. Deployed on Netlify and Heroku.</p>
                    <br />
                      
                    <div className='center' id='project__links'>      
                        <a href="https://github.com/rirachii/nsfgrant_rankings" aria-label="GitHub" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            role="img" 
                            viewBox="0 0 32 32" fill="none" stroke="currentColor" 
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                            class="center">
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a href="http://nsfgrants.netlify.app" aria-label="WebSite" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 32 32" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="center">
                            <title>External Link</title>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {/* {projects.map((project) => (
            //   <Link to = {`/dashboard/${machine.machineID}`}>
                <div className="home__card" key={project.titleD}>
                  <h2> {project.title} </h2>
                </div>

            //   </Link>
          ))} */}

        </section>

        <section className='education' id='education'>
            <div className='education'>
                <div className='seperator'>
                    <div class="line"></div>
                    <h1 className='edu'><span className='yellow san'>03. Education</span></h1>
                    <div class="line"></div>
                </div>
            <h2 className='center'>University at Buffalo</h2>
            <h2 className='center'>Computer Science B.S, Math Minor </h2>
                
            <h2 className='center'>GPA: 3.92/4.0, Expected: May 2024 </h2>
            <br />
            <h2>Courses:</h2>
            <ul>
                <h3>Fall 2022 Courses</h3>
                <li><Link className='edu__link'to="https://catalog.buffalo.edu/courses/?abbr=EAS&num=345">Intro to Data Science</Link></li>
                <li><Link className='edu__link' to="https://catalog.buffalo.edu/courses/?abbr=CSE&num=560">Data Models and Query Languages (SQL)</Link></li>
                <li><Link className='edu__link'to="https://catalog.buffalo.edu/courses/?abbr=CSE&num=487">Data Intensive Computing</Link></li>
                <li><Link className='edu__link'to="https://catalog.buffalo.edu/courses/?abbr=STA&num=301">Probability</Link></li>
                <br />
                <h3>Previous Courses</h3>
                <li><Link className='edu__link' to="https://catalog.buffalo.edu/courses/?abbr=MTH&num=309">Linear Algebra</Link></li>
                <li><Link className='edu__link' to="https://catalog.buffalo.edu/courses/?abbr=CSE&num=331">Algorithms and Complexity (Python)</Link></li>
                <li><Link className='edu__link' to="https://catalog.buffalo.edu/courses/?abbr=CSE&num=312">Web Applications (Python, HTML, CSS)</Link></li>
                <li><Link className='edu__link' to="https://catalog.buffalo.edu/courses/?abbr=CSE&num=341">Computer Organization (MIPS, Verilog)</Link></li>
                <li><Link className='edu__link' to="https://catalog.buffalo.edu/courses/?abbr=CSE&num=220">System Programming (C)</Link></li>
                <li><Link className='edu__link' to="https://catalog.buffalo.edu/courses/?abbr=CSE&num=250">Data Structures (Scala)</Link></li>
                <li><Link className='edu__link' to="https://catalog.buffalo.edu/courses/?abbr=CSE&num=116">Object Oriented Programming, Functional Programming (Scala)</Link></li>
                <li><Link className='edu__link' to="https://catalog.buffalo.edu/courses/?abbr=CSE&num=115">Intro to Programming I (Python and Javascript)</Link></li>
                <li><Link className='edu__link' to="https://catalog.buffalo.edu/courses/?abbr=DMS&num=110">Programming for Digital Art (Javascript)</Link></li>
            </ul>
            </div>

        </section>

        <section id='contact'>
            <h1 className='san yellow'>04. Hello there,</h1>
              <p>I am currently a rising third year Computer Science major at University at Buffalo.</p>
              <p>In my free time, I enjoy watching cooking videos and learning about some new technology. </p>
              <p>If you're looking to talk about experiences, education, connect about an opportunity, feel free to send me an email!</p>
        </section>

        <div id='social' className='footer__icons' >
            <a href="mailto:mweng@buffalo.edu" aria-label="Email" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="footer__social"
                viewBox="0 0 32 32" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <polyline points="3 7 12 13 21 7"></polyline>
                </svg>
            </a>
            <a href="https://github.com/rirachii" aria-label="GitHub" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" 
                role="img" 
                viewBox="0 0 32 32" fill="none" stroke="currentColor" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                class="footer__social">
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            </a>
            
            <a href="https://www.linkedin.com/" aria-label="Linkedin" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                class="footer__social">
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                </svg>
            </a>
            
        </div>

        <Footer />
    </div>
  )
}

export default Content

const projects = [{
        "title": "Sharable Grocery List",
        "mini_desc": "Web app built to keep track of grocery lists and discounts. Share list with family and friends to add items in real time.",
        'detailed': 'For more details visit the github page',
        "technology": ['Python', "MongoDB", "Docker", "WebSocket", "AWS EC2"],
        "github": "https://github.com/5arthak/CSE-312-Encoders",
        "demo": "http://encoderlist.click"
    },
    {
        "title": "Magic Painting Board",
        "mini_desc": "Web app built to keep track of grocery lists and discounts. Share list with family and friends to add items in real time.",
        'detailed': 'Blha blah',
        "technology": ['Python', "React", ""],
        // "github": "https://github.com/5arthak/CSE-312-Encoders",
        // "demo": "http://encoderlist.click"
    },
    {
        "title": "Research Grants Rankings",
        "mini_desc": "Web app built to keep track of grocery lists and discounts. Share list with family and friends to add items in real time.",
        'detailed': 'Blha blah',
        "technology": ["React", "Python", "SQLite3"],
        "github": "https://github.com/rirachii/nsfgrant_rankings",
        "demo": "https://nsfgrants.netlify.app/"
    },

]