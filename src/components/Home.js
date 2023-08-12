import React from 'react'
import { Link } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Register from './Register'
// import Login from './Login'

const Home = () => {
  return (
    <div><h1>Welcome to Expense Visualizer Website</h1>
    <Link to="/Register">
      <button>Register</button>
    </Link>

    <Link to="/Login">
      <button>Login</button>
    </Link>
    <br />
    </div>
  )
}

export default Home