import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'






function Routes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routes

