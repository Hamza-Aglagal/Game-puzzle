import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.png'
import Profile_Admin from '../../images/Admin.png'
import Profile_User from '../../images/user.png'
import '../../assest/css/NavBar.css'
import { NavDropdown } from 'react-bootstrap'



const NavBar = () => {

    const [ColorNavBar, setColorNavBar] = useState('initial')


    // get color NavBar
    useEffect(() => {
        if (localStorage.getItem('Admin')) {
            setColorNavBar('#E0B4FF')
        }
    }, [])


    // Logout User
    const LogoutUser = () => {
        localStorage.removeItem('User');
        window.location.replace('/');
    }
    // Logout Admin
    const LogoutAdmin = () => {
        localStorage.removeItem('Admin');
        window.location.replace('/');
    }


    return (
        <nav className="navbar" style={{ backgroundColor: ColorNavBar }}>
            <div className="container-fluid" >
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="" width="200" height="75" />
                </a>

                <div className="d-flex btns-nav">

                    {
                        !localStorage.length &&
                        <div>
                            <a href='#' className="btn  mx-5" >about</a>
                            <a href='/login' className="btn  mx-5" >Login</a>
                            <a href='/register' className="btn  mx-5" >Sign Up</a>
                        </div>
                    }


                    {
                        localStorage.getItem('Admin') &&
                        (
                            <div>
                                <a href='#' className="btn  mx-5" >admin</a>
                                <a href='#' className="btn  mx-5" >
                                    <img className='icon-navbar' src={Profile_Admin} />
                                    <NavDropdown className='NavDropDown-Admin' >
                                        <NavDropdown.Item href='#' className="DropDown-Admin">  Gamers  </NavDropdown.Item>
                                        <NavDropdown.Item href='#' className="DropDown-Admin pb-5">  Levels </NavDropdown.Item>
                                        <NavDropdown.Item onClick={LogoutAdmin} className="DropDown-Admin border-top pt-1">  Logout  </NavDropdown.Item>
                                    </NavDropdown>
                                </a>
                            </div>
                        )
                    }

                    {
                        localStorage.getItem('User') &&
                        <div>
                            <a href='#' className="btn  mx-5" > Your score : {2767} </a>
                            <a href='#' className="btn  mx-5" >
                                <img className='icon-navbar' src={Profile_User} />
                                <NavDropdown className='NavDropDown-User' >
                                    <NavDropdown.Item href='user-profile' className="DropDown-User">  Profile & Ranking  </NavDropdown.Item>
                                    <NavDropdown.Item href='#' className="DropDown-User">  About Violory </NavDropdown.Item>
                                    <NavDropdown.Item href='/start-game' className="DropDown-User pb-5">  Start Game  </NavDropdown.Item>
                                    <NavDropdown.Item onClick={LogoutUser} className="DropDown-User border-top pt-1">  Logout  </NavDropdown.Item>
                                </NavDropdown>
                            </a>
                        </div>
                    }

                </div>

            </div>
        </nav>
    )
}

export default NavBar