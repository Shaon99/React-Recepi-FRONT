import { useEffect, useState } from 'react';
import styled from 'styled-components';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Veggitarian() {
  const [bitcoin, setBitcoin] = useState([]);

  useEffect(() => {
    getBitcoin();
  }, []);

  const getBitcoin = async () => {
    const res = await fetch('http://localhost:8000/bitcoin')
    const data = await res.json();
    setBitcoin(data.result);
  }

  return (
    <div>
      <Container>
        <h3>Bitcoin Picks</h3>
        <Splide options={{
          perPage: 4,
          pagination: false,
          drag: 'free',
          gap: '2rem'

        }}>
          {bitcoin.map((bitcoin) => {
            return (
              <SplideSlide key={bitcoin._id}>
                <Card>
                  <p>{bitcoin.title}</p>
                  <small>{bitcoin.description.substring(0, 100) + "..."}</small>
                  <img src={"http://localhost:8000/uploads/image/" + bitcoin.image} alt={bitcoin.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Container>

    </div>
  );
}

const Container = styled.div`
margin:4rem 2rem 2rem 2rem;
`

const Card = styled.div`
min-height:25rem;
border-radius: 2px;
overflow:hidden;
position:relative;
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

export default Veggitarian