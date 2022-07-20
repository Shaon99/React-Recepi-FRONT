import styled from 'styled-components';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import useSWR from 'swr';


function Popular() {

    // useEffect(() => {
    //     getPopular();
    // }, []);

    // const getPopular = async () => {
    //     const res = await fetch('http://localhost:8000')
    //     const data = await res.json();
    //     setPopular(data.result);
    // }

    const fetcher = async (...args) => {

        const res = await fetch(...args);
        const data = await res.json();

        return data.result;
    }



    const { data } = useSWR('http://localhost:8000', fetcher,{
        suspense:true,
    })


    return (
        <div>
            <Container>

                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    pagination: false,
                    drag: 'free',
                    gap: '2rem'

                }}>
                    {data.map((recipe) => {
                        return (
                            <SplideSlide key={recipe._id}>
                                <Card>
                                    <p>{recipe.title}</p>
                                    <small>{recipe.description.substring(0, 100) + "..."}</small>
                                    <img src={"http://localhost:8000/uploads/image/" + recipe.image} alt={recipe.title} />
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
min-height:15rem;
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

export default Popular