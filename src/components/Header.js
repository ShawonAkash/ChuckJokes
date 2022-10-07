import React, { useState } from 'react'
import Avatar from '../assets/assets_Homework_Front-End_01/shape.png'
import Down from '../assets/assets_Homework_Front-End_01/path_2.png'
import Hero from './Hero'


const Header = () => {
  const [dropDown, setDropDown] = useState(false)

  const handleDropDown =  () => {
    setDropDown(!dropDown)

  }
  return (
    <header>

      <nav className="navbar navbar-expand-lg shadow-md bg-dark relative flex items-center w-full justify-between text-[18px]   text-white font-custom15">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
            <ul className="navbar-nav mr-auto lg:flex lg:flex-row justify-end pr-20">
              <li className="nav-item tracking-widest leading-10">
                <a className="nav-link block lg:px-2 py-5 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">SO FUNKTIONIERT'S</a>
              </li>
              <li className="nav-item tracking-widest leading-10">
                <a className="nav-link block lg:px-16 py-5  hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">SONDERANGEBOTE</a>
              </li>
              <li className="nav-item  relative hover:bg-brown" onClick={handleDropDown}>
                <div className='flex justify-center items-center tracking-widest leading-10 w-[270px]'>
                  <img src={Avatar} alt="" className='pr-2' />
                  <a className="nav-link block pr-3 lg:px-2 py-5  hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">MEIN BEREICH</a>
                  <img src={Down} alt="" className='pl-5' />
                </div>
                {dropDown && <div className='absolute z-10 font-custom12 text-dark  bg-white p-6 mt-4 rounded-md w-[270px]'>
                  <img src={Down} alt="" className='relative left-[212px] bottom-[30px] rotate-180' />
                  <ul>
                    <li className='p-2 hover:text-brown hover:font-custom3Bold'>My published jokes</li>
                    <li className='border-y-2 p-2 hover:text-brown hover:font-custom3Bold'>My saved jokes</li>
                    <li className='border-b-2 p-2 hover:text-brown hover:font-custom3Bold'>Account Information</li>
                    <li className=' p-2 hover:text-brown hover:font-custom3Bold'>Publish new joke</li>
                  </ul>
                </div>}
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <Hero />
    </header>
  )
}

export default Header