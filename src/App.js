import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Jokes from "./components/Jokes"
import Joke from "./components/Joke"


function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Jokes />} exact />
        <Route path="/joke/:id" element={<Joke />}/>
      </Routes>
      <Footer />

    </Router>
  )
}

export default App
