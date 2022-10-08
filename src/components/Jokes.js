import React, { useEffect, useState } from 'react'
import JokeCard from './JokeCard'


const Jokes = () => {
  const [jokes, setJokes] = useState([])
  const [jokesCategory, setJokesCategory] = useState([])
  const [category, setCategory] = useState([])

  const fetchAndSetJokes = () => {
    fetch(' https://api.chucknorris.io/jokes/search?query=animal')
      .then((res) => res.json())
      .then((res) => {
        setJokes(res.result)
      })
      .catch((err) => console.log(err))
  }

  const fetchAndSetCategory = () => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((res) => res.json())
      .then((res) => {
        setJokesCategory(res)

      })
      .catch((err) => console.log(err))
  }



  useEffect(() => {
    fetchAndSetJokes()
    fetchAndSetCategory()
  }, [])

  const fetchSelectedCategory = (joke) => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${joke}`)
      .then((res) => res.json())
      .then((res) => {
        setJokes(res.result)
        console.log('se', jokes)
      })
      .catch((err) => console.log(err))
  }


  return (
    <>
      <div className='p-20 relative'>
        <div className='grid grid-cols-5 text-2xl capitalize font-custom14Regular'>
          {jokesCategory.map((joke) => (
            <div className=" bg-slate-500 shadow-md p-2 flex justify-center items-center m-2 rounded-sm" key={joke.id} >
              <a className='cursor-pointer'>{joke}</a>
            </div>
          ))}
        </div>
        <div className=" bg-slate-500 shadow-md p-1 flex justify-center items-center rounded w-32 absolute top-[375px] " >
          <a className='cursor-pointer'>animal</a>
        </div>
        <div className='grid grid-cols-3 border-t-2 border-slate-200 mt-10'>
          {jokes.map((joke) => (
            <JokeCard joke={joke}/>))}
        </div>
      </div>
    </>
  )
}

export default Jokes