import React from 'react'
import headerBg from '../assets/assets_Homework_Front-End_01/bitmap.png'

const Hero = () => {
  return (
    <>
    <div className="relative overflow-hidden " style={{ backgroundImage: `url(${headerBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="w-full h-full overflow-hidden bg-fixed p-20"
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-6xl font-custom14Regular mt-0 mb-6">The Joke Bible</h1>
              <h3 className="text-3xl font-custom17 mb-8">Daily Laughs for you and yours</h3>
              <button type="button"
                className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true" data-mdb-ripple-color="light">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero