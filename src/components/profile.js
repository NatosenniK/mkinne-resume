import React from 'react'
import Github from './github';

export default function Profile() {

    return (
      <div className='row'>
        <div className='col-12 col-md-12 col-xl-4 mb-30-md-down'>
          <div className='card-bkg br-25 profile-picture'>
            
          </div>
        </div>
        <div className='col-12 col-md-12 col-xl-8'>
          <div className='card-bkg primary br-25 p-4 d-flex flex-column justify-content-between'>
            <div>
              <h2 className='d-flex flex-column'><span className='small'>FRONT-END</span> <span className='large'>ENGINEER</span></h2>
            </div>
            <div>
              <p className='font-weight-bold mb-1 text-uppercase'>UX Focused, Resourceful, Logical</p>
              <p className='mb-0'>Bringing user friendly experiences to life on the web</p>
            </div>
          </div>
        </div>
        <Github />
      </div>

    )
  }