import React from 'react'
import Home from '../Pages/Home'
import { Route,Routes } from 'react-router-dom'
import Signin from '../Pages/Signin'
import Signup from '../Pages/Signup'
import Recipe from '../Pages/Recipe'
import Favtlist from '../Pages/Favtlist'
import { PrivateRoute } from './PraviteRoutes'


const AllRoutes = () => {
  return (

    <div>

       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        
        <Route path='/recipe' element={<PrivateRoute><Recipe/></PrivateRoute>}></Route>
        <Route path='/favtlist' element={<PrivateRoute><Favtlist/></PrivateRoute>}></Route>
       </Routes>
    </div>
  )
}

export default AllRoutes