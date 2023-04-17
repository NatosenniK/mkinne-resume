import React, { Component } from 'react'
import profilePicture from '../img/profile-picture.jpg';

export default class Profile extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-12 col-md-4'>
          <div className='card-bkg br-25'>
            <img src={profilePicture} alt='Picture of Matt Kinne' width='100%' height='auto' />
          </div>
        </div>
        <div className='col-12 col-md-8'>
          <div className='card-bkg primary br-25 p-4 d-flex flex-column justify-content-between'>
            <div>
              <h2><span className='small'>FRONT-END</span> <span className='large'>ENGINEER</span></h2>
            </div>
            <div>
              <p className='font-weight-bold mb-1 text-uppercase'>UX Focused, Resourceful, Logical</p>
              <p className='mb-0'>Bringing user friendly experiences to life on the web</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}