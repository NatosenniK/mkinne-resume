import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
        <div className='col-12'>
          <div className='card-bkg br-25 secondary p-4'>
            <h2 className='mb-3'>Education</h2>
            <div className='mb-5'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='heading'>Dunwoody College of Technology</div>
                    <div className='date'>May 2016</div>
                </div>
                <p className='tool-desc italic'>Associated of Applied Science in Web Programming & Database Development</p>
                <ul>
                    <li>Dean’s List spring semester of 2016</li>
                    <li>Created responsive website with login, data entry, and Elo rating to log scores and records of ping pong games</li>
                </ul>
            </div>
            <div className='mb-5'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='heading'>Century College</div>
                    <div className='date'>May 2014</div>
                </div>
                <p className='tool-desc italic'>Associate of Arts Degree</p>
            </div>
          </div>
        </div>
    )
  }
}