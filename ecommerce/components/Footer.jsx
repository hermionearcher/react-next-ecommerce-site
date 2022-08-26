import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiOutlineCopyright } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p className=''>
      <AiOutlineCopyright />
        2022 Acesnkrs All rights reserved
      </p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer