import React from 'react'
import Home from '../Pages/Home'
import { Route,Routes } from 'react-router-dom'
import Signin from '../Pages/Signin'
import Signup from '../Pages/Signup'
import Recipe from '../Pages/Recipe'


const AllRoutes = () => {
  return (

    <div>

       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/recipe' element={<Recipe/>}></Route>
       </Routes>
    </div>
  )
}

export default AllRoutes