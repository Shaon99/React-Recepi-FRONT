import React from 'react'
import Home from './Home'
import Categories from './Categories'
import { Route, Routes } from 'react-router-dom'

function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories/:type' element={<Categories />} />
        </Routes>

    )
}

export default Pages