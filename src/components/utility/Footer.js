import React from 'react'
import { BsTwitter, BsGithub} from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn} from 'react-icons/fa';



const Footer = () => {
  return (
    <div className='Footer'>
        <div className='circle-footer'> <FaLinkedinIn className='icons-footer'/> </div>
        <div className='circle-footer'> <BsTwitter className='icons-footer'/> </div>
        <div className='circle-footer'> <FaFacebookF className='icons-footer'/> </div>
        <div className='circle-footer'> <BsGithub className='icons-footer'/> </div>
    </div>
  )
}

export default Footer