import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
        <div className='col-12'>
          <div className='card-bkg br-25 secondary p-4'>
            <h2 className='mb-3'>Experience</h2>
            <div className='mb-5'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='heading'>Mediafly</div>
                    <div className='date'>Jan. 2022 - Apr. 2023</div>
                </div>
                <p className='tool-desc'>During my time at Mediafly, I worked as a front-end engineer, collaborating with the design team, product delivery managers, and backend engineers to develop and maintain Mediafly web application. My responsibilities included contributing to the continuous improvement of code quality and development processes of the proprietary platform Mediafly used to create their web tools. Additionally, I leveraged APIs to connect the Mediafly platform to various tools, including customer CRMs, resulting in improved data accuracy and increased user satisfaction.</p>
            </div>
            <div className='mb-5'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='heading'>Evolve Systems</div>
                    <div className='date'>Mar. 2016 - Jan. 2022</div>
                </div>
                <p className='tool-desc'>During my time at Evolve Systems, a Minnesota-based web agency that specializes in marketing and WordPress websites, I served as a front-end web developer, working closely with our design team to bring their vision to life and deliver exceptional web experiences to our clients and their customers. With over 50 WordPress sites built, I provided ongoing support post-launch, including creating and managing the web maintenance program to ensure clients' websites remained up to date, generating recurring revenue for the company. As part of my responsibilities, I also oversaw the help desk and communicated directly with clients to help resolve website issues and provide expert guidance on best practices.</p>
            </div>
            <div className='mb-5'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='heading'>FWNED Smartphone News</div>
                    <div className='date'>Jul. 2014 - Jan. 2018</div>
                </div>
                <p className='tool-desc'>As the owner and operator of the website, my responsibilities included creating unique and engaging content about smartphone news, rumors, and reviews. I also communicated with smartphone and tech manufacturers to arrange for review units and promoted the content through various social media channels, such as Facebook, Twitter, and Reddit.</p>
            </div>
          </div>
        </div>
    )
  }
}