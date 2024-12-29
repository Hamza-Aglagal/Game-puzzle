import React from 'react'
import TopScoreItem from './TopScoreItem'

const TopScores = () => {

    const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <div className='TopScore'>
            <div className='content-score'>

                <div className='text'>
                    <p> Top Scores </p>
                </div>

                <div className='list-TopScores'>
                    {
                        array.map(item =>
                            <TopScoreItem />
                        )
                    }

                    {
                        !localStorage.length &&
                        <div className='TopScore-beforeLogin'>
                            <a className='btn' href='#'> Login to descover  more </a>
                        </div>
                    }

                </div>

            </div>
        </div>
    )
}

export default TopScores