import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Restaurant from './components/Restaurant' 
import Orders from './components/Orders'
import Token from './components/Token'


const App = () => {
  return (
    <>
    <Router>
<Routes>
<Route path='/' element={<Restaurant/>}/>
<Route path='/Orders' element={<Orders/>}/>
<Route path='/Token' element={<Token/>}/>
</Routes>
 
    </Router>
    </>
  )
}

export default App