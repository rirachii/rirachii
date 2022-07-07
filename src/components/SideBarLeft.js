import React from 'react'

function SideBarLeft() {
  return (
    <div className='sideBarLeft'>
      <a href="https://github.com/rirachii" aria-label="GitHub" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" 
          role="img" 
          viewBox="0 0 32 32" fill="none" stroke="currentColor" 
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
          class="svg_bar">
          <title>GitHub</title>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
      
      <a href="https://www.linkedin.com/" aria-label="Linkedin" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
          class="svg_bar">
          <title>LinkedIn</title>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
      
      <a href="mailto:mweng@buffalo.edu" aria-label="Email" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg_bar" viewBox="0 0 32 32" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
        <polyline points="3 7 12 13 21 7"></polyline>
        </svg>
      </a>

      {/* <a href="/resume.pdf" aria-label="Resume" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 20 20" >
          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
        </svg>
      </a> */}


    </div>
  )
}

export default SideBarLeft