import { FaBitcoin, FaEthereum } from 'react-icons/fa'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

function Category() {
    return (
        <List>
            <NavLink to={'categories/bitcoin'}>
            <FaBitcoin />
            <h4>Bitcoin</h4>
            </NavLink>
            <NavLink to={'categories/ethereum'}>
            <FaEthereum />
            <h4>Ethereum</h4>
            </NavLink>
        </List>
    )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`


export default Category
