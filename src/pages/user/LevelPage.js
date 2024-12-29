import React, { useEffect, useState } from 'react'
import '../../assest/css/levelPage.css'
import NavBar from '../../components/utility/NavBar'
import LevelCard from '../../components/user/LevelCard'
import { GrNext, GrPrevious } from 'react-icons/gr';
import img from '../../images/logo.png'
import { useSelector } from 'react-redux';


const LevelPage = () => {

    // const [Levels, setLevels] = useState([])

    // getData Levels
    const levels = useSelector(state => state.Redlevel.levels)




    return (
        <div className='levelPage'>

            <NavBar />

            <div className='Content'>

                <div className='Levels'>
                    {
                        levels.map(item =>
                            <LevelCard
                                key={item.id}
                                level={item}
                            />
                        )
                    }

                </div>

                <div className='Prev-Next'>
                    <a className='btn'> <GrPrevious className='icon' /> Back  </a>
                </div>

            </div>


        </div>
    )
}

export default LevelPage