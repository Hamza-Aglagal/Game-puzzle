import React from 'react'
import NavBar from './../../components/utility/NavBar';
import mind from '../../images/logo_home1.png'
import TopScores from '../../components/user/TopScores';
import '../../assest/css/pageHome.css'
import HowToPlay from '../../components/user/HowToPlay';
import GameScreens from '../../components/user/GameScreens';
import Footer from '../../components/utility/Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {


    return (
        <div className='HomePage' style={{ minHeight: '400vh' }}>
            <div className='firstSection-pageHome'>

                <NavBar />
                
                <div className='content-firstSection'>
                    <div className='playbtn_pagehome'>
                        <p> light up your brain and fresh up your memory with <span> Violory </span>  </p>
                        <a className='btn' >
                            <p> <Link to='/start-game' style={{textDecoration:'none'}}>  Play now ! </Link> </p>
                        </a>
                    </div>

                    <div className='mind'>
                        <img src={mind} />
                    </div>
                </div>
            </div>

            <TopScores />

            <HowToPlay/>

            <GameScreens/>

            <Footer/>

        </div>
    )
}

export default HomePage