import React from 'react'
import video from '../../images/video.mp4'

const HowToPlay = () => {
    return (
        <div className='HowToPlay'>

            <div className='video-HowToPlay'>
                <video src={video} controls> scsc </video>
            </div>

            <div className='text'>
                <p> How to play </p>
            </div>

        </div>
    )
}

export default HowToPlay