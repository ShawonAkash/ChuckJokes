import React from 'react'
import lightning from '../assets/assets_Homework_Front-End_01/green-light-copy.png'
import arrowRight from '../assets/assets_Homework_Front-End_01/path@2x.png'


const JokeCard = ({joke}) => {
  return (
    <>
      <div className='shadow-lg mt-10 relative'>
        <div className='flex p-3'>
          <img src={lightning} alt="" className='mx-3 h-5 mt-1'/>
          <h1 className='font-custom5 text-2xl'>Title</h1>
        </div>
        <p className='font-custom14Regular p-5'>{joke.value}</p>
        <div className='flex justify-end items-end pt-10'>
          <a className='text-1xl text-brown font-custom15 flex absolute bottom-0 pb-2 pr-2'>SEE STATE <img src={arrowRight} className="ml-5 w-8 h-5"/></a>
        </div>
      </div>
    </>
  )
}

export default JokeCard