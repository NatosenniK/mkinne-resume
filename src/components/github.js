import React from 'react'

export default function Github() {

    return (
      <div className='d-flex align-items-start mt-4'>
        <div className='col-12'>
            <div className='card-bkg br-25 secondary p-4'>
                <h2 className='mb-3'>Github</h2>
                <div className='skills-wrapper d-flex flex-wrap'>
                    <div>
                        <div className='heading'>Fantasy Hockey Cheatsheet</div>
                        <p className='tool-desc mb-3'>This app utilizes the NHL API to gather player statistics and aggreagates them to estimate their projected point total for the upcoming week for Fantasy Hockey. Using Gemini AI, it offers the user a fantasy outlook tailored to that player. The app was built using Next.js and Tailwind.</p>
                        <a href="https://github.com/NatosenniK/fantasy-hockey-cheatsheet" target="_blank" rel="noreferrer">
                            <div className='skill'>View Repository</div>
                        </a>
                    </div>
                    
                    <div>
                        <div className='heading'>Ping Pong Rankings</div>
                        <p className='tool-desc mb-3'>This app was built from the ground up and allows for ping pong players to register, login, and log their match scores against their friends. The also keeps track of games played and shows the current standings, player ranking, and all matches are searchable. Players are also able to upload a custom profile picture, which utilizes an Amazon S3 bucket or storage.</p>
                        <a href="https://github.com/NatosenniK/Ping-Pong-Next-JS" target="_blank" rel="noreferrer">
                            <div className='skill'>View Repository</div>
                        </a>
                    </div>

                    <a href="https://github.com/NatosenniK" target="_blank" rel="noreferrer" className='mt-4'>
                        <div className='skill'>View Github</div>
                    </a>
                </div>
            </div>

        </div>
      </div>
    )
  }
