import React, { Component } from 'react'

export default class Bio extends Component {
  render() {
    return (
        <div className='col-12'>
          <div className='card-bkg br-25 secondary p-4 d-flex flex-column justify-content-between'>
            <h1 className='mb-1'>Matt Kinne</h1>
            <p>I am a web developer with 7 years of experience in multiple platforms, from CMSs to completely custom frameworks. I'm passionate about honing my skills in web development, user experience, and solving complex problems. My persistent nature and eagerness to take on new challenges have led me to succeed in many areas of web development.</p>
          </div>
        </div>
    )
  }
}