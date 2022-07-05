import styled from 'styled-components';
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

function Categories() {


const getCategories= async (name)=>{
 const data= await fetch(`http://localhost:8000/${name}`)
}

    return (
        <div>Categories</div>
    )
}

export default Categories