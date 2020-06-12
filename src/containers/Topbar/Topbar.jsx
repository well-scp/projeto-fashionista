import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { openCart } from '../../actions/actions'

import { SearchInput, Counter } from '../../components'

import { FaShoppingBag } from 'react-icons/fa'

const Topbar = () => {
    const { cartStatus } = useSelector(state => state)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openCart(!cartStatus));
    }

    return (
        <header className="topbar">
            <div className="container">
                <Link to='/'>Fashionista</Link>

                <SearchInput />
                <Link to='' onClick={handleClick}>
                    <FaShoppingBag className="topbar__icon"/> 
                    <Counter />
                </Link>
                
            </div>
        </header>
    );
    
};

export default Topbar;