import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { openCart } from '../../actions/actions'

import { GiReturnArrow } from 'react-icons/gi'

import './Cart.css'

const Cart = () => {
    const { cartStatus } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openCart(!cartStatus))
    }

    return (
        <div className={`cart ${cartStatus ? 'cart--is-visible' : ''}`}>
            <Link to='' onClick={handleClick}>
                <GiReturnArrow />
            </Link>
            sacola, items, subtotal
        </div>
    ) 
};

export default Cart;