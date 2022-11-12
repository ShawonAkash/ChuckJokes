import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import goBack from '../assets/assets_Homework_Front-End_02/arrow-left.png'
import goForward from '../assets/assets_Homework_Front-End_02/arrow-left-copy.png'
import like from '../assets/assets_Homework_Front-End_02/hand.png'
import disLike from '../assets/assets_Homework_Front-End_02/hand-copy.png'
import shape from '../assets/assets_Homework_Front-End_01/blob.svg'

const Joke = ({match}) => {
  // useEffect(() => {
  //   console.log(match.params.id);
  // }, [])
  
  return (
    <>
      <div className="bg-white grid grid-flow-col relative">
        <div>
          <div className=''>
            <Link className='cursor-pointer' to={'/'}>
              <img src={shape} className="w-52 absolute ml-12 top-[-25px]" />
              <img src={goBack} className="absolute ml-12 top-[60px] left-[100px]" />
            </Link>
          </div>
          <div className=" mt-44 mb-20 ml-28 mr-5">
            <div className='bg-white2'>
              <ul className='flex justify-between list-disc px-5 pt-3'>
                <li className='bg-green-400 rounded-full px-3 text-white list-disc'>Social Jokes</li>
                <li className='text-brown font-custom15'>Trending</li>
              </ul>
              <div className='shadow-sm mt-10 relative mr-5 hover:shadow-lg'>
                  <h1 className='font-custom15 text-3xl text-brown pl-5'>Filming on location for Walker</h1>
                <p className='font-custom14Regular p-5'>Filming on location for Walker: Texas Ranger, Chuck Norris brought a stillborn baby lamb back to life by giving it a prolonged beard rub. Shortly after the farm animal sprang back to life and a crowd had gathered, Chuck Norris roundhouse kicked the animal, breaking its neck, to remind the crew once more that Chuck giveth, and the good Chuck, he taketh away.</p>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='flex'>
                <div className='mx-6 my-4 flex flex-col justify-center items-center'>
                  <div className='bg-green-500 rounded-full flex justify-center items-center p-3 cursor-pointer'><img src={like} alt="" className='' />
                  </div>
                  <p className='text-green-500'>12</p>
                </div>
                <div className='mx-1 my-4 flex flex-col justify-center items-center'>
                  <div className='bg-red-500  rounded-full flex justify-center items-center p-3 cursor-pointer'><img src={disLike} alt="" className='' /></div>
                  <p className='text-red-500'>23</p>
                </div>
              </div>
              <div className='flex text-brown'>
                <div className='flex'>
                  <Link className='flex justify-center items-center px-5  border my-8 border-slate-200'><img src={goBack} alt="" className='mr-2 w-3 h-3' />PREV. JOKE</Link>
                  <Link className='flex justify-center items-center px-5  border  m-8 border-slate-200'><img src={goForward} alt="" className='mr-2 w-3 h-3' />NEXT JOKE</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' xs:hidden sm:hidden lg:block mt-44'>
          <div className='border border-slate-200 p-8'>
            <h1 className='font-custom3Bold'>THE TOP 10 JOKES THIS WEEK</h1>
            <p className='underline text-dark'>Smoking Jokes</p>
            <p className='underline text-dark'>My Boss Joke</p>
            <p className='underline text-dark'>Dirty Millionaire Joke</p>
            <p className='underline text-dark'>The Annoying Neighbour</p>
            <p className='underline text-dark'>Knock Knock</p>
            <p className='underline text-dark'>Why Tyson lisps</p>
            <p className='underline text-dark'>The Drunk Police officer</p>
            <p className='underline text-dark'>My hip dad</p>
            <p className='underline text-dark'>Why not to say in an elevator</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Joke