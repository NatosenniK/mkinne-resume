import React, { Component } from 'react'

export default class Bio extends Component {
  render() {
    return (
        <div className='col-12'>
          <div className='card-bkg br-25 secondary p-4 d-flex flex-column justify-content-between'>
            <h1 className='mb-1'>Matt Kinne</h1>
            <p>I am a web developer with 8 years of experience across various platforms, including custom frameworks and CMSs. My journey in this field has been marked by a passion for honing skills in web development, user experience, and tackling complex challenges. This drive has not only bolstered my persistent nature, but also enabled me to play a pivotal role in launching a full web application from the ground up, encompassing both backend development with Java Spring Boot and front-end creation with ReactJS. My eagerness to embrace new challenges continually fuels my success in diverse areas of web development.</p>
          </div>
        </div>
    )
  }
}