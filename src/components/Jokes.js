import React, { useEffect, useState } from 'react'
import JokeCard from './JokeCard'


const Jokes = () => {
  const [jokes, setJokes] = useState([])
  const [jokesCategory, setJokesCategory] = useState([])

  const fetchAndSetJokes =  () => {
     fetch(' https://api.chucknorris.io/jokes/search?query=all')
      .then((res) => res.json())
      .then((res) => {
        setJokes(res.result)
      })
      .catch((err) => console.log(err))
  }

  const fetchAndSetCategory =  () => {
     fetch('https://api.chucknorris.io/jokes/categories')
      .then((res) => res.json())
      .then((res) => {
        setJokesCategory(res)

      })
      .catch((err) => console.log(err))
  }

  const fetchSelectedCategory =  (joke) => {
     fetch(`https://api.chucknorris.io/jokes/search?query=${joke}`)
      .then((res) => res.json())
      .then((res) => {
        setJokes(res.result)
        console.log('se', jokes)
      })
      .catch((err) => console.log(err))
  }


  useEffect(() => {
    fetchAndSetJokes()
    fetchAndSetCategory()
  }, [])




  return (
    <>
      <div className='p-20'>
        <div className='grid grid-cols-5 text-2xl capitalize font-custom14Regular'>
          {jokesCategory.map((joke) => (
            <div className=" bg-slate-500 shadow-md p-2 flex justify-center items-center m-2 rounded-sm" key={joke.id} >
              <a className='cursor-pointer'>{joke}</a>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-3'>
          {jokes.map((joke) => (
            <JokeCard key={joke.id} joke={joke} />))}
        </div>
      </div>
    </>
  )
}

export default Jokes


// {jokes.map((joke) => (
//   <div className="" key={joke.id}>{joke.value}</div>
// ))}