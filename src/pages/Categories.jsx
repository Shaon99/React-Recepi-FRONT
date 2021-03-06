import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import useSWR from 'swr';


function Categories() {
    // const [category, setCategory] = useState([]);
    // let params = useParams();

    // useEffect(() => {
    //     const getCategory = async (name) => {
    //         const res = await axios.get(`http://localhost:8000/${name}`);
    //         setCategory(res.data.result);
    //     }
        
    //     getCategory(params.type);

    // }, [params.type]);


    const fetcher = async (...args) => {

        const res = await fetch(...args);
        const data = await res.json();

        return data.result;
    }

    let params = useParams();


    const { data } = useSWR(`http://localhost:8000/${params.type}`, fetcher,{
        suspense:true,
    })


    return <Gird>
        {data.map((category) => {
            return (
                <Card key={category._id}>
                    <p>{category.title}</p>
                    <small>{category.description.substring(0, 100) + "..."}</small>
                    <img src={"http://localhost:8000/uploads/image/" + category.image} alt={category.title} />
                    <Gradient />
                </Card>
            );
        })}
    </Gird>;
}

const Gird = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    grid-gap: 1rem;
`

const Card = styled.div`
min-height:15rem;
border-radius: 2px;
overflow:hidden;
position:relative;
max-width:25rem;
margin-bottom: 2rem;

img{
    object-fit:cover;
    width:100%;
    height:100%;
    border-radius: 2px;
    position:absolute;
    left:0;
}

p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0;
    transform:translate(-50%,0%);
    color:#fff;
    width:100%;
    text-align:center;
    font-weight:700;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
}
small{
    position:absolute;
    z-index:10;
    left:50%;    
    bottom:0;
    transform:translate(-50%,0%);
    color:#fff;
    width:100%;
    text-align:center;
    font-weight:500;
    height:18%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 2px;
}
`
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),#0000007b);
`



export default Categories