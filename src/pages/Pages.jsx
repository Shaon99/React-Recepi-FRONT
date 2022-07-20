import React from 'react'
import Home from './Home'
import Categories from './Categories'
import { Route, Routes } from 'react-router-dom'
import Searched from './Searched'

function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:type' element={<Categories />} />
            <Route path='/search/:search' element={<Searched />} />

        </Routes>

    )
}

export default Pages