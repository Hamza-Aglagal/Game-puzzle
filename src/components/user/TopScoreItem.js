import React from 'react'
import { GiRank3 } from 'react-icons/gi';



const TopScoreItem = () => {
  return (
    <div className='TopScoreItem'>
      <div>
        <GiRank3  style={{fontSize:'30px',color:'yellow'}} />
        <p> hamza Aglagal </p>
      </div>
      <p> 34 453 </p>
    </div>
  )
}

export default TopScoreItem