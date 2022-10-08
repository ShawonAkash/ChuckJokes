import React from 'react'
import headerBg from '../assets/assets_Homework_Front-End_01/bitmap.png'
import search from '../assets/assets_Homework_Front-End_01/search-copy.png'

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


              <form>
                <div className="relative">
                  <input type="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How can we make you laugh today?" required=""/>
                  <img src={search} className="absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1" />
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero