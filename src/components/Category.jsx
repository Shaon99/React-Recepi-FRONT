import { FaBitcoin, FaEthereum, FaHome } from 'react-icons/fa'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

function Category() {
    return (
        <List>
            <SLink to={'/'}>
                <FaHome />
                <h4>Home</h4>
            </SLink>
            <SLink to={'bitcoin'}>
                <FaBitcoin />
                <h4>Bitcoin</h4>
            </SLink>
            <SLink to={'ethereum'}>
                <FaEthereum />
                <h4>Ethereum</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg,#494949,#313131);
    height: 6rem;
    width: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    
    h4{
        color:white;
        font-size: 0.8rem;
    }

    svg{
        color:white;
        font-size: 1.5rem;
    }&.active{
        background: linear-gradient(to right,#f27121,#e94057);

        svg{
            color:white;
        }
        h4{
            color:white;
        }
    }

`;


export default Category
