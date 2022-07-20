import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { motion } from 'framer-motion'

function Searched() {

  const [searchItem, setsearchItem] = useState([]);
  let params = useParams();
  useEffect(() => {
    const getSearchedItem = async (name) => {
      const res = await axios.get(`http://localhost:8000/${name}`);
      setsearchItem(res.data.result);

    }
    getSearchedItem(params.search);

  }, [params.search]);


  return <Gird>
    {searchItem ? <>{searchItem.map((search) => {
      return (
        <Card key={search._id}>
          <p>{search.title}</p>
          <small>{search.description.substring(0, 100) + "..."}</small>
          <img src={"http://localhost:8000/uploads/image/" + search.image} alt={search.title} />
          <Gradient />
        </Card>
      );
    })}</> : <h4>Data Not Found</h4>}
  </Gird>
}

const Gird = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    grid-gap: 1rem;

    h4{
      text-align: center;
      margin-top: 12rem;
    }
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


export default Searched