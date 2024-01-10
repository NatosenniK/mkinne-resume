import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div className='d-flex align-items-start'>
        <div className='col-12'>
            <div className='card-bkg br-25 secondary p-4'>
                <h2 className='mb-3'>Skills</h2>
                <div className='skills-wrapper d-flex flex-wrap'>
                    <div className='skill'>ReactJS</div>
                    <div className='skill'>TypeScript</div>
                    <div className='skill'>JavaScript</div>
                    <div className='skill'>API Integrations</div>
                    <div className='skill'>HTML</div>
                    <div className='skill'>CSS</div>
                    <div className='skill'>UX</div>
                    <div className='skill'>Material UI</div>
                    <div className='skill'>Java Spring Boot</div>
                    <div className='skill'>PostgreSQL</div>
                    <div className='skill'>Highcharts</div>
                    <div className='skill'>PHP</div>
                    <div className='skill'>MySQL</div>
                    <div className='skill'>Version Control</div>
                    <div className='skill'>WordPress</div>
                    <div className='skill'>Server Management</div>
                </div>
            </div>

        </div>
      </div>
    )
  }
}