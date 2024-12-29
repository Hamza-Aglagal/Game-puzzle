import React from 'react'
import img from '../../images/bg_home.jpg'

const GameScreens = () => {
    return (
        <div className='GameScreens'>

            <div className='text'>
                <p> Game Screens </p>
            </div>

            <div className='screens-Img '>

                <div className='SectionScreen'>
                    <div className='img'> <img src={img} alt='img' /> </div>
                    <div className='img'> <img src={img} alt='img' /> </div>
                </div>

                <div className='SectionScreen'>
                    <div className='img'> <img src={img} alt='img' /> </div>
                    <div className='img'> <img src={img} alt='img' /> </div>
                </div>

            </div>

        </div>
    )
}

export default GameScreens