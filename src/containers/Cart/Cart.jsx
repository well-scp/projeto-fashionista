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
            <header className='cart__header'> 
                <Link to='' onClick={handleClick}>
                    <GiReturnArrow />
                </Link>
                <p>Sacola</p>
            </header>

            <p>items</p>
            
            <footer className="cart__footer">
                <p>Subtotal</p>
            </footer>
        </div>
    ) 
};

export default Cart;