import React from 'react'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home1'
import Bmi from './Bmi1'
import Otp from './Otp1'


function Main1() {
  return (
    <div className='box'>
        <BrowserRouter>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/Bmi'>Bmi</Link>
            </li>
            <li>
                <Link to='/Otp'>Otp</Link>
            </li>
        </ul>
        <Routes>
            <Route path='/' element={Home} />
            <Route path='/Bmi' element={Bmi} />
            <Route path='/Otp' element={Otp} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Main1