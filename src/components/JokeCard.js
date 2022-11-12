import React from 'react'
import { Link } from 'react-router-dom'
import lightning from '../assets/assets_Homework_Front-End_01/green-light-copy.png'
import arrowRight from '../assets/assets_Homework_Front-End_01/path@2x.png'


const JokeCard = ({ joke }) => {
  return (
    <>
      <Link to={`/joke/${joke.id}`} >
        <div className='shadow-sm mt-10 relative mr-5 hover:shadow-lg'>
          <div className='flex p-3'>
            <img src={lightning} alt="" className='mx-3 h-5 mt-1' />
            <h1 className='font-custom5 text-2xl'>Title</h1>
          </div>
          <p className='font-custom14Regular p-5'>{joke.value}</p>
          <div className='flex justify-end items-end pt-10'>
            <div className='text-1xl text-brown font-custom15 flex absolute bottom-0 pb-2 pr-2'>SEE STATE <img src={arrowRight} className="ml-5 w-8 h-5" /></div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default JokeCard