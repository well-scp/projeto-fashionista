import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { openCart } from '../../actions/actions'
import { CatalogItem } from '../../components/'

import { GiReturnArrow } from 'react-icons/gi'

import './Cart.css'

const Cart = () => {
    const { cartStatus, bag } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openCart(!cartStatus))
    }

    return (
        <div className={`cart ${cartStatus ? 'cart--is-visible' : ''}`}>
            <header className='cart__header'> 
                <Link onClick={handleClick}>
                    <GiReturnArrow />
                </Link>
                <p>Sacola</p>
            </header>
                
            <div className="cart__content">
                {bag.length && bag.map((product) => (
                    <CartItem
                        image={product.image}
                        name={product.name}
                        price={product.actual_price}
                        times={product.installments}
                        size={product.size}
                        id={product.id}
                        key={product.id}
                    />
                ))}
            </div>
                
            <footer className="cart__footer">
                <p>Subtotal</p>
            </footer>
        </div>
    ) 
};

export default Cart;