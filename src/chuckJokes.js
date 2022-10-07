import axios from "axios"

export let jokes = []

const config = {
  headers: {
    'Accept': 'application/json'
  }
}

export const getJokes = async () => {
  try {
    const { data } = await axios.get(' https://api.chucknorris.io/jokes/search?query=all', config)
    return jokes = data.result
    console.log("Jokes Fetched Successfully")
  } catch (error) {
    console.log(error)
  } finally {

  }

}