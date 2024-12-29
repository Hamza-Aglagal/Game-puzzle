import React from 'react'
import { Link } from 'react-router-dom'

const LevelCard = ({level}) => {
  return (
    <Link to={`/playing/${level.id}`} className='Card-Level'>
        <p> level {level.id} </p>
    </Link>
  )
}

export default LevelCard