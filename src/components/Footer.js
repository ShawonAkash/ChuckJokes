import React from 'react'
import footerBg from '../assets/assets_Homework_Front-End_01/bitmap_2.png'
import arrowRight from '../assets/assets_Homework_Front-End_01/path@2x.png'

const Footer = () => {

  return (
    <footer className=' bottom-0 left-0 w-full h-[250px]' style={{ backgroundImage: `url(${footerBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} >
      <div className='m-20'>
        <h1 className='text-white text-3xl'>GOT JOKES? GET PAID<br /> FOR SUBMITTING!</h1>
        <a className='text-2xl text-brown font-custom15 flex pt-4'>SUBMIT JOKE <img src={arrowRight} className="ml-5"/></a>
      </div>
    </footer>

  )
}


export default Footer